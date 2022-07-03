import React from "react";
import Nhanvien from "./nhanvien";
import Sanpham from "./sanpham";
import WithCard from "./with-card";

const WrapperCard = WithCard(Nhanvien);

export default function HocPage() {
  return (
    <div>
      <h1>*HocPage</h1>
      <WrapperCard />
    </div>
  );
}
