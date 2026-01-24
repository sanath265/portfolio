import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const navItems = [
    { id: "home", label: "Home", Icon: AiOutlineHome },
    { id: "experience", label: "Experience", Icon: AiOutlineFundProjectionScreen },
    { id: "projects", label: "Projects", Icon: AiOutlineFundProjectionScreen },
    { id: "skills", label: "Skills", Icon: AiOutlineUser },
    { id: "education", label: "Education", Icon: AiOutlineFundProjectionScreen },
    { id: "resume", label: "Resume", Icon: CgFileDocument }
  ];

  const handleNavClick = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    updateExpanded(false);
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className="sticky"
    >
      <Container>
        <Navbar.Brand
          href="#home"
          className="d-flex"
          onClick={(event) => handleNavClick(event, "home")}
        />
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
          <Nav className="w-100 justify-content-around" defaultActiveKey="#home">
            {navItems.map(({ id, label, Icon }) => (
              <Nav.Item key={id}>
                <Nav.Link
                  href={`#${id}`}
                  onClick={(event) => handleNavClick(event, id)}
                >
                  <Icon style={{ marginBottom: "2px" }} /> {label}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
