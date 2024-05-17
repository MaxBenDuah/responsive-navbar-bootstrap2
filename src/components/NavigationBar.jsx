import { MagnifyingGlass } from "@phosphor-icons/react";
import { ShoppingCart } from "@phosphor-icons/react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";

function NavigationBar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <Image
              src="https://frankotrading.com/wp-content/uploads/2024/02/cropped-XMAS-TSHIRT-PRINT-_2_.jpg"
              alt="Logo"
              fluid="true"
              className="imgLogo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <div className="d-flex justify-content-between">
                <Nav.Link className="search-icon" href="#home">
                  <MagnifyingGlass size={24} />
                </Nav.Link>
                <Nav.Link className="cart-icon" href="#home">
                  <ShoppingCart size={24} />
                </Nav.Link>
              </div>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#category">Category</Nav.Link>
            </Nav>
            <Nav className="align-items-start">
              <Nav.Link className="d-none d-lg-block" href="#search">
                <MagnifyingGlass size={24} />
              </Nav.Link>
              <Nav.Link className="d-none d-lg-block" href="#memes">
                <ShoppingCart size={24} />
              </Nav.Link>
              <NavDropdown title="Ozias Asante" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Orders</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
