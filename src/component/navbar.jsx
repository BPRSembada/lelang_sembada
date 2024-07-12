import React from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import "../component/css/navbar.css";

const NaviBar = () => {
  return (
    <div className="main_navbar">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/assets/logo_sembada.png"
              alt=""
              className="logo_sembada"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Kategori" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">
                  Jual Jaminan
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Lelang Jaminan
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/HubungiKami">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NaviBar;
