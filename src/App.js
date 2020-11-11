import React from "react";
import "./App.css";
import { Home, SignIn } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar toggle={setIsOpen} />
        <Sidebar isOpen={isOpen} toggle={setIsOpen} /> */}
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signin" component={SignIn} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
