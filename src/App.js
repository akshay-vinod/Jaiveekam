import "./App.css";
import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus"
import Blog from "./pages/Blog";
import People from "./pages/People"
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/aboutus" exact component={Aboutus}></Route>
          <Route path="/people" exact component={People}></Route>
          <Route path="/blog" exact component={Blog}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
