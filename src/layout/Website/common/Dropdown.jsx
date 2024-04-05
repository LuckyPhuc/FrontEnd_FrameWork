import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

function Dropdown() {
  return (
    <Navbar>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          <NavDropdown title="Dropdown">
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
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Dropdown;
