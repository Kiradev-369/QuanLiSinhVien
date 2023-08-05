const stateDefault = {
  mangSinhVien: [
    { maSV: 1, hoTen: "Nguyễn Văn A", sdt: "09090909", email: "abc@gmail.com" },
  ],
};
export const QuanLiSinhVienReducer = (state = stateDefault) => {
  return { ...state };
};
