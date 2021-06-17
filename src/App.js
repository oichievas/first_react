import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route patn="/services" component={Services} />
          <Route patn="/products" component={Products} />
          <Route patn="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
