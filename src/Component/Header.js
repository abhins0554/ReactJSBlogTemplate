import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../images/logo.png";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { BiNetworkChart } from "react-icons/bi";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <div className="container">
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColour ? "sticky" : "navbar"}
      >
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} className="" alt="brand" width={75} height={55} />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              updateExpanded(expand ? false : "expanded");
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto" defaultActiveKey="#home">
              <Nav.Item>
                <Nav.Link href="/" onClick={() => updateExpanded(false)}>
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                </Nav.Link>
              </Nav.Item>

              <Nav.Item className="has-children">
                <Nav.Link
                  href="/technology"
                  onClick={() => updateExpanded(false)}
                >
                  <BiNetworkChart style={{ marginBottom: "2px" }} /> Technology
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="/project" onClick={() => updateExpanded(false)}>
                  <AiOutlineFundProjectionScreen
                    style={{ marginBottom: "2px" }}
                  />{" "}
                  Projects
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="/contact" onClick={() => updateExpanded(false)}>
                  <CgFileDocument style={{ marginBottom: "2px" }} /> Contact Us
                </Nav.Link>
              </Nav.Item>

              <Nav.Item className="has-children">
                <Nav.Link href="/about" onClick={() => updateExpanded(false)}>
                  <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
