import React, { useContext } from 'react';
import {
  Button, Col, Form, FormGroup, Input, Label, Row,
} from 'reactstrap';
import { UserContext } from '../../contexts/UserContext';

export default function Login() {
  const { loginHandler } = useContext(UserContext);
  return (
    <Row>
      <Col>
        <Form onSubmit={(e) => loginHandler(e, Object.fromEntries(new FormData(e.target)))}>
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
