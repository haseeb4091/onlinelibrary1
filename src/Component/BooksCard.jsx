import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import colors from '../Colors/ColorFile'
function BookCard(props) {
  console.log(props);
  const obj = {
    display: "flex",
    margin: "10px",
    backgroundColor: colors.primary,
  };
  return (
    <Card sx={obj}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5"  color={colors.secondary}>
            {props.BookName}
          </Typography>
          <Typography
            variant="subtitle1"
            color= {colors.secondary}
            component="div"
          >
            {props.AuthorName}
          </Typography>
          <Typography
            variant="subtitle1"
            color= {colors.secondary}
            component="div"
          >
            {props.Pages}
          </Typography>

          <Rating name="read-only" value={props.Rating} readOnly />
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        src={props.Image}
        alt="Live from space album cover"
      />
    </Card>
  );
}
export default BookCard;
