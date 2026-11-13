
// Khai báo class SinhVien
class SinhVien {
    constructor(ma, hoTen, tuoi, diem) {
        this.ma = ma;
        this.hoTen = hoTen;
        this.tuoi = tuoi;
        this.diem = diem;
    }
}

 
// Khai báo danh sách 5 sinh viên
const danhSachSinhVien = [
    new SinhVien("SV01", "Nguyen Van An", 20, 8),
    new SinhVien("SV02", "Tran Thi Binh", 21, 6),
    new SinhVien("SV03", "Le Van Cuong", 19, 4),
    new SinhVien("SV04", "Pham Thi Dung", 20, 9),
    new SinhVien("SV05", "Hoang Van Em", 22, 3)
];

 
// Lọc sinh viên có điểm từ 5 trở lên
const sinhVienDatYeuCau = danhSachSinhVien.filter(
    (sinhVien) => sinhVien.diem >= 5
);

// Hiển thị danh sách sinh viên đạt yêu cầu
console.log("DANH SACH SINH VIEN DAT YEU CAU:");
console.log(sinhVienDatYeuCau);
