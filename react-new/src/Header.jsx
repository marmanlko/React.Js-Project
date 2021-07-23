import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Link, Route, Switch } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar className="Navbar" expand="lg">
        <Navbar.Brand>
          <span style={{ fontSize: "35px", color: "Red" }}>E</span>
          <span
            style={{ fontSize: "30px", color: "white", fontFamily: "cursive" }}
          >
            picure
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/" style={{ color: "black" }}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about" style={{ color: "black" }}>
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/products" style={{ color: "black" }}>
                Products
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact" style={{ color: "black" }}>
                Contact
              </Link>
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button
              variant="outline-success"
              style={{ color: "white", border: "1px solid white" }}
            >
              Search
            </Button>
            <AddShoppingCartIcon style={{ color: "white", fontSize: "40px" }} />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
