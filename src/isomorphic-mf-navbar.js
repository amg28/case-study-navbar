import "./set-public-path";
import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  renderType: "hydrate"
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;

export function serverRender(props) {
  //Prepares stylesheets for server
    const sheets = new ServerStyleSheets();
    const content = sheets.collect(<Root {...props} />);
  
  //Creates HTML stream
    const htmlStream = ReactDOMServer.default.renderToString(content);
  
    // Prepares assets
    const css = sheets.toString();
    const assets = `<style id="jss-server-side">${css}</style>`;
  
  // Returns as a united object to the Application Shell
    return { content: htmlStream, assets };
  }
  
  <template id="single-spa-layout">
  <single-spa-router>
    <application name="@isomorphic-mf/navbar"></application>
    <route path="/weather" exact>
      <application
        name="@isomorphic-mf/weather"
      ></application>
    </route>
    <route path="/pollution" exact>
      <application
        name="@isomorphic-mf/pollution"
      ></application>
    </route>
  </single-spa-router>
</template>
