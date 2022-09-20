import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
  Row,
  Col,
  Button,
} from 'reactstrap';
import { UserContext } from '../../contexts/UserContext';

function MyNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const { user, logoutHandler } = useContext(UserContext);

  const links = user.id ? ['posts', 'effects', 'admin']
    : ['login', 'signup'];

  return (
    <Row>
      <Col>
        <Navbar>
          <NavbarBrand href="/">RELOAD</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              {links.map((link) => (
                <NavItem key={link}>
                  <NavLink to={`/${link}`}>{link}</NavLink>
                </NavItem>
              ))}
              {user.id && (
              <NavItem key="logout">
                <Button onClick={logoutHandler}>Logout</Button>
              </NavItem>
              )}
            </Nav>
            <NavbarText>{user.name ? `Hello, ${user.name}` : 'Not authed'}</NavbarText>
          </Collapse>
        </Navbar>
      </Col>
    </Row>
  );
}

export default MyNavbar;
