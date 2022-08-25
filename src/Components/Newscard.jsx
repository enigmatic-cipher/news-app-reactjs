import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Newscard(props) {
  let { title, description, image, web } = props;
  return (
    <Card elevation={3}>
      <CardMedia
        component="img"
        height="250"
        image={
          !image
            ? "https://cdn.pixabay.com/photo/2015/11/06/15/13/news-1028791_960_720.jpg"
            : image
        }
        alt="news"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            window.open(web);
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
