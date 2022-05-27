import React from "react";
import { BrowserRouter, Redirect, Route, StaticRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import NavBar from "./components/navbar";

const isBrowser = () => typeof window !== "undefined";

export default function Root(props) {
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const RootChildren = () => (
    <>
      <CssBaseline />
      <NavBar title={"Weather dashboard"} />
      <Route exact path="/">
        <Redirect to="/weather" />
      </Route>
    </>
  );

  if (isBrowser()) {
    return (
      <BrowserRouter basename="/">
        <RootChildren />
      </BrowserRouter>
    );
  }
  return (
    <StaticRouter basename="/">
      <RootChildren />
    </StaticRouter>
  );
}
