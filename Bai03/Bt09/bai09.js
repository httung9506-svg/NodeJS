
const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

async function main() {
    try {
        await client.connect();
        console.log('Ket noi MongoDB thanh cong!');

        const db = client.db('qlsinhvien');
        const collection = db.collection('students_test');

        // 1. Them 5 sinh vien
        const students = [
            { masv: 'SV01', hoten: 'Nguyen Van An', tuoi: 20, diem: 8 },
            { masv: 'SV02', hoten: 'Tran Thi Binh', tuoi: 21, diem: 7 },
            { masv: 'SV03', hoten: 'Le Van Cuong', tuoi: 20, diem: 4 },
            { masv: 'SV04', hoten: 'Pham Thi Dung', tuoi: 22, diem: 3 },
            { masv: 'SV05', hoten: 'Hoang Van Em', tuoi: 21, diem: 6 }
        ];

        await collection.insertMany(students);
        console.log('Da them 5 sinh vien!');

        // 2. Xoa mot sinh vien theo ma
        const result1 = await collection.deleteOne({
            masv: 'SV05'
        });

        console.log('So sinh vien xoa bang deleteOne:', result1.deletedCount);

        // 3. Xoa sinh vien co diem duoi 5
        const result2 = await collection.deleteMany({
            diem: { $lt: 5 }
        });

        console.log('So sinh vien xoa bang deleteMany:', result2.deletedCount);

        // 4. Hien thi danh sach con lai
        const remaining = await collection.find().toArray();

        console.log('Danh sach sinh vien con lai:');
        console.log(remaining);

    } catch (error) {
        console.log('Loi:', error);
    } finally {
        await client.close();
        console.log('Da dong ket noi MongoDB!');
    }
}

main();
