import React from "react";
import RedBox from "redbox-react";


import {render} from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";

import Route from "../../router";


import store from "../../redux";

import "./app.css";
import "normalize.css";

const appEl = document.querySelector(".app-root");
const rootEl = document.createElement("div");

rootEl.style.height = "100%";
let renderApp = () => {
  render(
    <Provider store={createStore(store)}>
      <Route />
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
