import React from "react";
import { Switch } from "react-router-dom";
import { notification } from "antd";
import { Template } from "components";
import { Providers } from "providers";
import routes from "./routes";
import "./App.less";
import AppUtils from "./AppUtils";

notification.config({
  placement: "bottomLeft"
});

function App() {
  const { renderRoutes } = AppUtils();

  return (
    <Providers>
      <Template routes={routes}>
        <Switch>
          {renderRoutes(routes)}
        </Switch>
      </Template>
    </Providers>
  );
}

export default App;
