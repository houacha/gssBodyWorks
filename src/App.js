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
  const [current, setCurrent] = React.useState(0);
  const [appClass, setAppClass] = React.useState(["App"]);
  const [hamClass, setHamClass] = React.useState("");

  const addRemoveClass = () => {
    if (appClass.includes("show")) {
      setAppClass(appClass.splice(0, appClass.length - 1));
      setTimeout(() => {
        setHamClass("");
      }, 500);
    } else {
      setHamClass("ham-clicked");
      setTimeout(() => {
        setAppClass([...appClass, "show"]);
      }, 300);
    }
  };
  return (
    <Router>
      <div className={appClass.join(" ")}>
        <Switch>
          <Route exact path="/">
            <Header aRClasses={addRemoveClass} hamClass={hamClass} />
            <Home setCurrent={setCurrent} current={current} />
          </Route>

          <Route exact path="/about">
            <Header aRClasses={addRemoveClass} hamClass={hamClass} />
            <About setCurrent={setCurrent} current={current} />
          </Route>

          <Route exact path="/contact">
            <Header aRClasses={addRemoveClass} hamClass={hamClass} />
            <Contact setCurrent={setCurrent} current={current} />
          </Route>

          <Route exact path="/availability">
            <Header aRClasses={addRemoveClass} hamClass={hamClass} />
            <Availability setCurrent={setCurrent} current={current} />
          </Route>

          <Route exact path="/location">
            <Header aRClasses={addRemoveClass} hamClass={hamClass} />
            <Location setCurrent={setCurrent} current={current} />
          </Route>

          <Route exact path="/services">
            <Header aRClasses={addRemoveClass} hamClass={hamClass} />
            <Services setCurrent={setCurrent} current={current} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
