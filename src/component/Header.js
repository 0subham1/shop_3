import React from "react";
import {
  Container,
  Dropdown,
  FormControl,
  Navbar,
  Nav,
  Badge,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" varient="dark" style={{ height: 80 }}>
        <Container>
          <Navbar.Brand>
            <Link to="/">shopping cart</Link>
          </Navbar.Brand>

          <Navbar.Text className="search">
            <FormControl
              style={{ width: 800 }}
              placeholder="search product here"
              className="m-auto"
            />
          </Navbar.Text>
          <Nav>
            <Dropdown >
              <Dropdown.Toggle>
                <FaShoppingCart color="white" />
                <Badge>{10}</Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <span>Cart empty</span>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
