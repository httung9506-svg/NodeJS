
// Tính điểm trung bình 3 môn
function tinhTrungBinh(toan, van, anh) {
    return (toan + van + anh) / 3;
}

// Xếp loại học tập
function xepLoai(diemTB) {
    if (diemTB >= 8) {
        return "Giỏi";
    } else if (diemTB >= 6.5) {
        return "Khá";
    } else if (diemTB >= 5) {
        return "Trung bình";
    } else {
        return "Yếu";
    }
}

// Xuất các hàm
module.exports = {
    tinhTrungBinh,
    xepLoai
};
