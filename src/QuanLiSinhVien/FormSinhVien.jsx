import React, { Component } from "react";

export default class FormSinhVien extends Component {
  state = {
    maSV: "",
    hoTen: "",
    email: "",
    sdt: "",
  };

  handleChange = (e) => {
    let tagInput = e.target;
    let { name, value } = tagInput;
    this.setState(
      {
        [name]: value,
      },
      () => {
        console.log(this.state);
      },
    );
  };

  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-header bg-dark text-white">
            <h3>Thông tin sinh viên</h3>
          </div>
          <div className="card-body">
            <form>
              <div className="row">
                <div className="form-group col-6">
                  <span>Mã SV</span>
                  <input
                    className="form-control"
                    name="maSV"
                    value={this.state.maSV}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group col-6">
                  <span>Họ Tên</span>
                  <input
                    className="form-control"
                    name="hoTen"
                    value={this.state.hoTen}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-6">
                  <span>Số điện thoại</span>
                  <input
                    className="form-control"
                    name="sdt"
                    value={this.state.sdt}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group col-6">
                  <span>Email</span>
                  <input
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 text-right">
                  <button className="btn btn-success">Thêm sinh viên</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
