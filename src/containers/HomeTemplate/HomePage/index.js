import React from "react";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

export default function HomePage() {
  return (
    <div>
      <Button variant="contained">Contained</Button>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <h1 className="demo">Hello Cybersoft</h1>
    </div>
  );
}
