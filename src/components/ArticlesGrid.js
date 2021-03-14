import React from "react";
import Article from "./Article";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    marginTop: "1rem",
  },
});

const ArticlesGrid = ({ articles }) => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      spacing={2}
      container
      justify="center"
      alignContent="center"
    >
      {articles.map((article) => {
        return (
          <Grid item key={article.id} xs={10} sm={6} md={4} lg={2} xl={2}>
            <Article article={article} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ArticlesGrid;
