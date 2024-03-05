import { NavBar, Container, Row, Col } from "react-bootstrap";
import { useState, useEffect, Fragment } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Anchor from "../anchor";
import MobileMenu from "./elements/MobileMenu";


 
function MMnavigate() {
  const [offCanvasMobileMenuActive, setOffCanvasMobileMenuActive] = useState(
    false
  );
  return (
    <>
    <Navbar bg="light" fixed="bottom" expand="lg">
    <Container fluid className="justify-content-center ">
      <Row>
        <Col className="px-4 mx-1">
          <Anchor  path="/">
                <img src={process.env.PUBLIC_URL + "/assets/images/icons/house-door.svg"}  alt="Bootstrap" width="32" height="32"/>
            </Anchor>
        </Col>
        <Col className="px-4 mx-1">
        <button onClick={() => setOffCanvasMobileMenuActive(true)}>
        <img src={process.env.PUBLIC_URL + "/assets/images/icons/list.svg"}  alt="Bootstrap" width="32" height="32"/>
                  </button>
                 {/* Mobile Menu */}
      <MobileMenu
        activeStatus={offCanvasMobileMenuActive}
        getActiveStatus={setOffCanvasMobileMenuActive}
      />
        </Col>
      </Row>
    </Container>
  </Navbar>
  
  </>

  );
}

export default MMnavigate;