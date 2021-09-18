import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./Home";
import Header from "./Header";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Location from "./Location";
import Availability from "./Availability";
import "./App.css";

function App() {
  //test
  const [current, setCurrent] = React.useState();
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home setCurrent={setCurrent} current={current} />
          </Route>

          <Route exact path="/about">
            <Header />
            <About setCurrent={setCurrent} current={current} />
          </Route>

          <Route exact path="/contact">
            <Header />
            <Contact setCurrent={setCurrent} current={current} />
          </Route>

          <Route exact path="/availability">
            <Header />
            <Availability setCurrent={setCurrent} current={current} />
          </Route>

          <Route exact path="/location">
            <Header />
            <Location setCurrent={setCurrent} current={current} />
          </Route>

          <Route exact path="/services">
            <Header />
            <Services setCurrent={setCurrent} current={current} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
