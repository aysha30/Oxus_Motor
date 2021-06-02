import React from "react";
import { Browser, BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import Contact from "./components/Contact";
import Inventory from "./components/Inventory";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact component={Home} path='/' />
        <Route exact component={Contact} path='/contact' />
        <Route exact component={Inventory} path='/inventory' />
        <Route exact component={About} path='/about' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;