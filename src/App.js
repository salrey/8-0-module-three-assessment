import { Route, Switch } from "react-router-dom";
import "./App.css";

import Nav from "./components/Nav.js";
import Home from "./components/Home.js";
import Movies from "./components/Movies.js";
import People from "./components/People.js";
import Locations from "./components/Locations.js";


const App = () => {

  return (
    <div className="app">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/movies" component={Movies}></Route>
        <Route path="/people" component={People}></Route>
        <Route path="/locations" component={Locations}></Route>
      </Switch>
    </div>
  );
}

export default App;