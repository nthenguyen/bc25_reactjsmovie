import React from "react";

export default function Sanpham() {
  return (
    <>
      <h4 className="card-title">
        <div className="form-group">
          <label>Ma SP</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Ten SP</label>
          <input type="text" className="form-control" />
        </div>
      </h4>
      <button className="btn btn-success">Submit</button>
    </>
  );
}
