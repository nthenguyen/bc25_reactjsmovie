import React from "react";
import "./style.css";
import { UseMagicColor } from "./useMagicColor";

export default function Circle() {
  const color = UseMagicColor();
  return (
    <div className="square circle" style={{ backgroundColor: color }}>
      Circle
    </div>
  );
}
