import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import Component from "./Body";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import Login from "./Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Error from "./Error";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Body} exact />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/products" component={Products} />
        <Route path="/login" component={Login} />
        <Route /*path="/error/:fname"*/ component={Error} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
