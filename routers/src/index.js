import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
let change = () => {
  window.location.href = '/profile';
}
  ReactDOM.render(
    <React.StrictMode>
      <button onClick={change}>wef</button>
      <Routes />
    </React.StrictMode>,
    document.getElementById("root")
  );


