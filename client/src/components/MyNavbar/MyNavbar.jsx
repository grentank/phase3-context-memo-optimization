import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { logoutUserAsync } from '../../redux/actions/userActions';

function MyNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

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
                <Button onClick={() => dispatch(logoutUserAsync())}>Logout</Button>
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
