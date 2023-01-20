import { Fragment, useState } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { NavLink } from "react-router-dom";
import MyModal from "../UI/MyModal";

import * as Constants from '../constants/Constants';

function MainNavigation() {
  const [show, setShow] = useState(false);

  const handleCloser = () => setShow(false);
  const handleShow = () => setShow(true);

  const linkStyle = {
    color: "black",
    fontWeight: "bold",
    listStyle: "none",
    textDecoration: "none",
    marginLeft: "1rem",
  };

  return (
    <Fragment>
      <Navbar expand="lg" style={{ background: "#708090" }}>
        <Container>
          <Navbar.Brand href="#home">
            <h1>TanisGigs</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{ marginLeft: "3rem" }}>
              {/* <Nav.Link href="/gigs" style={linkStyle}> */}
              <NavLink to={"/gigs"} style={linkStyle}>
                <h3>GIGS</h3>
              </NavLink>
              {/* </Nav.Link> */}
              {/* <Nav.Link> */}
              <NavLink to={"/players"} style={linkStyle}>
                <h3>PLAYERS</h3>
              </NavLink>
              {/* </Nav.Link> */}
              <NavDropdown title="ADD" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={handleShow}>
                  <h4>PLAYER</h4>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <h4>GIG</h4>
                </NavDropdown.Item>
                {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {show && <MyModal handleCloser={handleCloser} formType={Constants.PLAYER_ADD}/>}
    </Fragment>
  );
}

export default MainNavigation;