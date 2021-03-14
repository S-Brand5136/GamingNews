import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  title: {
    borderBottom: "5px solid whitesmoke",
    padding: "1rem",
    fontWeight: 700,
  },
});

const Heading = () => {
  const classes = useStyles();

  return (
    <Box component="div">
      <Typography className={classes.title} variant="h1" component="h1">
        Gaming News Today
      </Typography>
    </Box>
  );
};

export default Heading;
