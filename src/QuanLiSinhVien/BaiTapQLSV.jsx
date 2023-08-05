import React, { Component } from "react";
import FormSinhVien from "./FormSinhVien";
import TableSinhVien from "./TableSinhVien";

export default class BaiTapQLSV extends Component {
  render() {
    return <div className="container">
      <h3>BaiTapQLSV</h3>
      <FormSinhVien/>
      <TableSinhVien/>
    </div>;
  }
}
