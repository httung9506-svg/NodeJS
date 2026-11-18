
const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function main() {
    try {
        await client.connect();
        console.log('Ket noi MongoDB thanh cong!');

        const db = client.db('qlsinhvien');
        const collection = db.collection('students');

        const students = [
            {
                masv: 'SV001',
                hoten: 'Phạm Hoàng Hải',
                tuoi: 20,
                diem: 8.5
            },
            {
                masv: 'SV002',
                hoten: 'Huỳnh Thanh Tùng',
                tuoi: 20,
                diem: 9
            },
            {
                masv: 'SV003',
                hoten: 'Nguyễn Thành Danh',
                tuoi: 20,
                diem: 7.5
            }
        ];

        const result = await collection.insertMany(students);

        console.log('So sinh vien da them:', result.insertedCount);

        const data = await collection.find().toArray();

        console.log('Danh sach sinh vien:');

data.forEach((sv) => {
    console.log('Ma SV:', sv.masv);
    console.log('Ho ten:', sv.hoten);
    console.log('Tuoi:', sv.tuoi);
    console.log('Diem:', sv.diem);
    console.log('--------------------');
});
    } catch (error) {
        console.log('Loi:', error.message);
    } finally {
        await client.close();
        console.log('Da dong ket noi MongoDB.');
    }
}

main();
