
const { tinhTrungBinh, xepLoai } = require('./xulyDiem');

// Danh sách 3 sinh viên
const sinhViens = [
    {
        hoTen: 'Nguyen Van An',
        toan: 8,
        van: 7,
        anh: 9
    },
    {
        hoTen: 'Tran Thi Binh',
        toan: 6,
        van: 7,
        anh: 6
    },
    {
        hoTen: 'Le Van Nam',
        toan: 4,
        van: 5,
        anh: 3
    }
];

// Hiển thị kết quả
console.log('KET QUA HOC TAP SINH VIEN');
console.log('-------------------------');

sinhViens.forEach((sv) => {
    const diemTB = tinhTrungBinh(
        sv.toan,
        sv.van,
        sv.anh
    );

    const loai = xepLoai(diemTB);

    console.log('Ho ten:', sv.hoTen);
    console.log('Diem trung binh:', diemTB.toFixed(2));
    console.log('Xep loai:', loai);
    console.log('-------------------------');
});
