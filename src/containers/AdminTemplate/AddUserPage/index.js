import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actAddUser } from "./reducer/actions";

export default function AddUserPage() {
  const props = useSelector((state) => state.addUserReducer);
  const dispatch = useDispatch();
  console.log(props);
  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP01",
    maLoaiNguoiDung: "KhachHang",
    hoTen: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleAddUser = (e) => {
    e.preventDefault();
    dispatch(actAddUser(state));
    console.log(state);
  };
  return (
    <div>
      <h1 className="text-center">*Add User</h1>
      <div className="row">
        <div className="col-md-6 mx-auto">
          <form onSubmit={handleAddUser}>
            {/* Render show error */}
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                name="taiKhoan"
                className="form-control"
                onChange={handleOnChange}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="matKhau"
                className="form-control"
                onChange={handleOnChange}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                name="email"
                className="form-control"
                onChange={handleOnChange}
              />
            </div>
            <div className="form-group">
              <label>So DT</label>
              <input
                type="text"
                name="soDt"
                className="form-control"
                onChange={handleOnChange}
              />
            </div>
            <div className="form-group">
              <label>Ho Ten</label>
              <input
                type="text"
                name="hoTen"
                className="form-control"
                onChange={handleOnChange}
              />
            </div>
            <button className="btn btn-success">Add User</button>
          </form>
        </div>
      </div>
    </div>
  );
}
