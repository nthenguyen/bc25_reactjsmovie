import React from "react";
import "./style.css";
import { UseMagicColor } from "./useMagicColor";

export default function Square() {
  const color = UseMagicColor();
  return (
    <div className="square" style={{ backgroundColor: color }}>
      Square
    </div>
  );
}
