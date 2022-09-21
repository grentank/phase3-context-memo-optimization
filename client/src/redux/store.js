import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterReducer';
import postsReducer from './reducers/postsReducer';
import userReducer from './reducers/userReducer';

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    posts: postsReducer,
  },
});
