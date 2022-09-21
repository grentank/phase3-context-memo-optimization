import {
  CLEAR, DECREMENT, INCREMENT, SET_COUNTER,
} from '../types';

export const incrementCounter = () => ({ type: INCREMENT });
export const decrementCounter = () => ({ type: DECREMENT });
export const clearCounter = () => ({ type: CLEAR });
export const setCounter = (payload) => ({ type: SET_COUNTER, payload });
