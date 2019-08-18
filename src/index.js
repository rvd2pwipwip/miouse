import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Miouse from "./Miouse";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Miouse />, document.getElementById("root"));

// refresh app without page reload
if (module.hot) {
  module.hot.accept();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
