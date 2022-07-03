import React, { useState, useEffect } from "react";

function UseMagicColor() {
  const [state, setState] = useState("red");
  useEffect(() => {
    const interval = setInterval(() => {
      const newColor = Math.floor(Math.random() * 999999);
      setState(`#${newColor}`);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return state;
}

export { UseMagicColor };
