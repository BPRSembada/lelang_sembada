import { React } from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import "../component/css/navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "../redux/pagination_data";

const NaviBar = () => {
  const data = useSelector((state) => state.pagin.data);
  const dispatch = useDispatch();

  const handleJual = () => {
    dispatch(setData("jual"));
  };

  const handleLelang = () => {
    dispatch(setData("lelang"));
  };
  const handleAll = () => {
    dispatch(setData("all"));
  };
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
              {/* <NavDropdown title="Kategori" id="basic-nav-dropdown">
                <NavDropdown.Item href="#All_kategori" onClick={handleAll}>
                  All
                </NavDropdown.Item>
                <NavDropdown.Item href="#Jual_kategori" onClick={handleJual}>
                  Jual Jaminan
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#Lelang_kategori"
                  onClick={handleLelang}
                >
                  Lelang Jaminan
                </NavDropdown.Item>
              </NavDropdown> */}
              <Nav.Link href="/HubungiKami">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NaviBar;
