import {
  CLEAR, DECREMENT, INCREMENT, SET_COUNTER,
} from '../types';

export default function counterReducer(state = 0, action) {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case CLEAR:
      return 0;
    case SET_COUNTER:
      return payload;
    default:
      return state;
  }
}
