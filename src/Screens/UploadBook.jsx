import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AppBar from "../Component/AppBar";
import { TextField } from "@mui/material";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <>
      <AppBar />
      <h1>Upload books</h1>
      <Card sx={{ minWidth: 275, margin: "10px", maxWidth: "400px",minWidth:"400px"}}>
        <TextField label="Enter book name" style={{ margin: "5px" }} />
        <br></br>
        <TextField label="Enter author name" style={{ margin: "5px" }} />
        <br></br>
        <TextField label="Enter translator name" style={{ margin: "5px" }} />
        <br></br>
        <TextField
          label="Enter Year of publications"
          style={{ margin: "5px" }}
        />
        <br></br>
        <TextField label="Enter total pages" style={{ margin: "5px" }} />
        <br></br>
        
          <input type="file"  style={{ margin: "5px" }} />
       
      </Card>
    </>
  );
}
