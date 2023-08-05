import React, { Component } from "react";
import FormSinhVien from "./FormSinhVien";
import TableSinhVien from "./TableSinhVien";

export default class BaiTapQLSV extends Component {
  render() {
    return (
      <div className="container w-75">
        <h3 className="text-center text-success ">Bài Tập Quản Lí Sinh Viên</h3>
        <FormSinhVien />
        <TableSinhVien />
      </div>
    );
  }
}
