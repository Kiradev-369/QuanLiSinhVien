// const stateDefault = {
//   mangSinhVien: [
//     { maSV: 1, hoTen: "Nguyễn Văn A", sdt: "09090909", email: "abc@gmail.com" },
//   ],
// };

// export const QuanLiSinhVienReducer = (state = stateDefault, action) => {
//   switch (action.type) {
//     case "THEM_SINH_VIEN":
//       {
//         const mangSVUpdate = [...state.mangSinhVien, action.sinhVien];
//         state.mangSinhVien = mangSVUpdate;
//         return { ...state };
//       }
//       break;
//     default: {
//       return { ...state };
//     }
//   }
// };

const stateDefault = {
  mangSinhVien: [],
};

export const QuanLiSinhVienReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "THEM_SINH_VIEN": {
      const mangSVUpdate = [...state.mangSinhVien, action.sinhVien];
      return { ...state, mangSinhVien: mangSVUpdate };
    }
    default: {
      return { ...state };
    }
  }
};
