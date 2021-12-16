import { Route, Switch } from "react-router-dom";
import "./App.css";

import Nav from "./components/Nav.js";
import Home from "./components/Home.js";


const App = () => {
  return (
    <div className="app">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        {/* <Route exact path="/" component={}></Route>
        <Route exact path="/" component={}></Route> */}
      </Switch>
    </div>
  );
}

export default App;