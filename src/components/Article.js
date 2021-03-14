import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  CardActionArea,
  makeStyles,
  Typography,
} from "@material-ui/core";
import unavailableImage from "../images/index.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Article = ({
  article: { title, description, url, author, image, category, published },
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea href={url} target="_blank">
        <CardMedia
          className={classes.media}
          image={image !== "None" ? image : unavailableImage}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography gutterBottom variant="subtitle2" component="header">
            {published.substring(0, 10)}
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            colors="textSecondary"
            component="p"
          >
            {description === "text/html..."
              ? "- No Available preview"
              : description}
          </Typography>
          <Typography variant="subtitle2" component="h6">
            Author: {author ? author : "Unavailable"}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          href={url}
          target="_blank"
          variant="outlined"
          size="small"
          color="primary"
        >
          Article Link
        </Button>
      </CardActions>
    </Card>
  );
};

export default Article;
