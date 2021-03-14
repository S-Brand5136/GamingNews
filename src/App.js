import { useState, useEffect } from "react";
import "./App.css";
import ArticlesGrid from "./components/ArticlesGrid";
import Heading from "./components/Heading";
import {
  Container,
  CircularProgress,
  Grid,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  loadingCircle: {
    marginTop: "5rem",
  },
  root: {
    paddingRight: "3rem",
    paddingLeft: "3rem",
  },
});

function App() {
  const classes = useStyles();

  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://api.currentsapi.services/v1/search?category=game&apiKey=${process.env.REACT_APP_API_KEY}`;

    if (loading) {
      async function getArticles() {
        await fetch(url)
          .then((response) => {
            response.json().then((data) => {
              setArticles(data);
              setLoading(false);
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }

      getArticles();
    }
  });

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Heading />
      <Grid container direction="row" justify="center">
        <Grid item>
          {loading ? (
            <CircularProgress
              className={classes.loadingCircle}
              color="primary"
              size={100}
            />
          ) : (
            <ArticlesGrid articles={articles.news} />
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
