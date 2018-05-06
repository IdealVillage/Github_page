import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router,Route } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Main from "../src/components/Main";
import store from "../src/store/configureStore";
import createBrowserHistory from "history/createBrowserHistory";

const customHistory=createBrowserHistory()
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={customHistory}>
        <Route path="/" component={Main}></Route>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
