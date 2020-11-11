import React, { useState } from 'react';
import './App.css';
import { Home, SignIn } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Sidebar,
  Navbar,
} from './components/';
import useToggle from "./utils/hooks/useToggle"

function App() {

  const [isOpen, setIsOpen] = useToggle(false);

  return (
    <>
      <Router>
        <Navbar toggle={setIsOpen} />
        <Sidebar isOpen={isOpen} toggle={setIsOpen} />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signin" component={SignIn} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
