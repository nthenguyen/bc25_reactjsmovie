import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actLogin } from "./reducer/actions";
import { useNavigate, Navigate } from "react-router-dom";
import Loader from "components/Loader";

export default function AuthPage() {
  const props = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(props);
  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
  });
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(actLogin(state, navigate));
  };
  if (localStorage.getItem("UserAdmin"))
    return <Navigate replace to="/admin" />;

  const renderNoti = () => {
    const { error } = props;
    return (
      error && (
        <div className="alert alert-danger">{error.response.data.content}</div>
      )
    );
  };

  if (props.loading) return <Loader />;
  return (
    <div>
      <h1 className="text-center">*AuthPage</h1>
      <div className="row">
        <div className="col-md-6 mx-auto">
          <form onSubmit={handleLogin}>
            {/* Render show error */}
            {renderNoti()}
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                name="taiKhoan"
                className="form-control"
                onChange={handleOnchange}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="matKhau"
                className="form-control"
                onChange={handleOnchange}
              />
            </div>
            <button className="btn btn-success">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
