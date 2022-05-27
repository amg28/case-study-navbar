import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  linkColor: {
    color: "white",
    margin: theme.spacing(0, 2)
  },
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.4em"
    },
    "*::-webkit-scrollbar-track": {
      "box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)"
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: theme.palette.primary.main,
      outline: "1px solid slategrey"
    }
  }
}));

export default function NavBar() {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link
            to="/weather"
            href="/weather"
            variant="h4"
            className={classes.linkColor}
          >
            Home
          </Link>
          {"|"}
          <Link
            to="/pollution"
            href="/pollution"
            variant="h4"
            className={classes.linkColor}
          >
            Pollution
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
