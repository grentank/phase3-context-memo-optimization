import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Button, Col, Form, FormGroup, Input, Label, Row,
} from 'reactstrap';
import { loginUser } from '../../redux/actions/userActions';

export default function Login() {
  const dispatch = useDispatch();
  return (
    <Row>
      <Col>
        <Form onSubmit={(e) => dispatch(loginUser(e, Object.fromEntries(new FormData(e.target))))}>
          <FormGroup floating>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Email"
              type="email"
            />
            <Label for="exampleEmail">
              Email
            </Label>
          </FormGroup>
          <FormGroup floating>
            <Input
              id="examplePassword"
              name="password"
              placeholder="Password"
              type="password"
            />
            <Label for="examplePassword">
              Password
            </Label>
          </FormGroup>
          <Button>
            Login
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
