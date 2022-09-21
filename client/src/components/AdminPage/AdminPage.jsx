import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'reactstrap';
import { SET_COUNTER } from '../../redux/types';

export default function AdminPage() {
  const dispatch = useDispatch();
  return (
    <div><Button outline color="info" size="lg" onClick={() => dispatch({ type: SET_COUNTER, payload: 32 })}>+1</Button></div>
  );
}
