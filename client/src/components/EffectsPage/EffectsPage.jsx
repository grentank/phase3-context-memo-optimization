import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearCounter, decrementCounter, incrementCounter, setCounter,
} from '../../redux/actions/counterActions';
// import axios from 'axios';

export default function EffectsPage() {
  // eslint-disable-next-line no-unused-vars
  // const [counter, setCounter] = useState(0);

  // setCounter(1);
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     console.log('interval');
  //     setCounter((prev) => prev + 1);
  //   }, 1000);
  //   return () => clearInterval(intervalId);
  // }, [counter]);

  // useEffect(() => {
  //   const controller = new AbortController();
  //   const { signal } = controller;

  //   fetch('https://jsonplaceholder.typicode.com/users', { signal })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       // eslint-disable-next-line no-alert
  //       alert('Data loaded!');
  //       console.log(res);
  //     })
  //     .catch(console.log);
  //   // eslint-disable-next-line no-return-assign
  //   return () => controller.abort();
  // }, []);

  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <Row>
      <Col xs={3}>
        <Button outline color="info" size="lg" onClick={() => dispatch(incrementCounter())}>+1</Button>
      </Col>
      <Col xs={3}>
        <Button outline color="info" size="lg" onClick={() => dispatch(decrementCounter())}>-1</Button>
      </Col>
      <Col xs={3}>
        <Button outline color="danger" size="lg" onClick={() => dispatch(clearCounter())}>Clear</Button>
      </Col>
      <Col xs={3}>
        <Button outline color="warning" size="lg" onClick={() => dispatch(setCounter(7))}>=7</Button>
      </Col>
      <Col xs={12}>
        <h2>
          {counter}
        </h2>
      </Col>
    </Row>
  );
}
