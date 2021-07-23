import React from "react";
import { Route, Switch, Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Link to="/">About</Link>
      <Link to="/contact">Contact us </Link>
    </>
  );
};

export default Header;
