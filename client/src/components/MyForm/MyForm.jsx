import React, { useContext } from 'react';
import {
  Button,
  Col,
  Form, FormGroup, Input, Label, Row,
} from 'reactstrap';
import { PostContext } from '../../contexts/PostContext';

export default function MyForm() {
  const { submitHandler, changeHandler, input } = useContext(PostContext);
  return (
    <Row>
      <Col>
        <Form onSubmit={submitHandler}>
          <FormGroup>
            <Label for="exampleEmail">
              Text
            </Label>
            <Input
              id="exampleEmail"
              name="message"
              value={input}
              onChange={changeHandler}
              placeholder="..."
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Button type="submit">Send</Button>
          </FormGroup>
        </Form>
      </Col>
    </Row>
  );
}
