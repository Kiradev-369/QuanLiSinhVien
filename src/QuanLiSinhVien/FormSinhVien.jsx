import React, { Component } from "react";
import { connect } from "react-redux";

class FormSinhVien extends Component {
  state = {
    values: { maSV: "", hoTen: "", email: "", sdt: "" },
    errors: {
      maSV: "",
      hoTen: "",
      email: "",
      sdt: "",
    },
  };

  handleChange = (e) => {
    let tagInput = e.target;
    let { name, value, type, pattern } = tagInput;
    let errorMesage = "";
    if (value.trim() === "") {
      errorMesage = name + " không được bỏ trống !";
    }

    if (type === "email" || type === "number") {
      const regex = new RegExp(pattern);
      if (!regex.test(value)) {
        errorMesage = name + " không đúng định dạng !";
      }
    }

    let values = { ...this.state.values, [name]: value };
    let errors = { ...this.state.errors, [name]: errorMesage };
    this.setState(
      {
        values: values,
        errors: errors,
      },
      () => {
        console.log(this.state);
      },
    );

    // this.setState(
    //   {
    //     [name]: value,
    //   },
    //   () => {
    //     console.log(this.state);
    //   },
    // );
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.themSinhVien(this.state.values);
  };

  renderButtonSubmit = () => {
    let valid = true;
    for (let key in this.state.errors) {
      if (this.state.errors[key] !== "") {
        valid = false;
      }
    }
    if (valid) {
      return (
        <button type="submit" className="btn btn-success">
          Thêm sinh viên
        </button>
      );
    }
    return (
      <button type="submit" className="btn btn-success" disabled>
        Thêm sinh viên
      </button>
    );
  };

  render() {
    return (
      <div className="container mb-5">
        <div className="card">
          <div className="card-header bg-dark text-white">
            <h3>Thông tin sinh viên</h3>
          </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="form-group col-6">
                  <span>Mã SV</span>
                  <input
                    className="form-control"
                    name="maSV"
                    value={this.state.values.maSV}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.maSV}</p>
                </div>
                <div className="form-group col-6">
                  <span>Họ Tên</span>
                  <input
                    className="form-control"
                    name="hoTen"
                    value={this.state.values.hoTen}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.hoTen}</p>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-6">
                  <span>Số điện thoại</span>
                  <input
                    type="number"
                    className="form-control"
                    name="sdt"
                    pattern="^[0-9\-\+]{9,15}$"
                    value={this.state.values.sdt}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.sdt}</p>
                </div>
                <div className="form-group col-6">
                  <span>Email</span>
                  <input
                    type="email"
                    pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                    className="form-control"
                    name="email"
                    value={this.state.values.email}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.email}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 text-right">
                  {this.renderButtonSubmit()}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    themSinhVien: (sinhVien) => {
      const action = {
        type: "THEM_SINH_VIEN",
        sinhVien,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(FormSinhVien);
