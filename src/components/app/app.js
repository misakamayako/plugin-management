import React from "react";
import RedBox from "redbox-react";

import {BrowserRouter as Router, Route} from "react-router-dom"
import {render} from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";


import store from "../../redux";

import AppRoot from "./app-root";
import "./app.css";

const appEl = document.querySelector(".app-root");
const rootEl = document.createElement("div");

let renderApp = () => {
  render(
    <Provider store={createStore(store)}>
      <Router>
        <Route
          path="/"
          render={() => (
            <AppRoot>
              <div>{"d"}</div>
            </AppRoot>
          )}
        />
      </Router>
    </Provider>,
    rootEl
  );
};

/* Hot Replacement support, won't be bundled to production */
if (module.hot) {
  const renderAppHot = renderApp;
  const renderError = error => {
    render(
      <RedBox error={error} />,
      rootEl
    );
  };

  renderApp = () => {
    try {
      renderAppHot();
    } catch (error) {
      renderError(error);
    }
  };

  module.hot.accept("./app-root", () => {
    setTimeout(renderApp);
  });
}

renderApp();
appEl.appendChild(rootEl);
