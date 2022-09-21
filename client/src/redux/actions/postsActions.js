import axios from 'axios';
import { ADD_POST, DELETE_POST, SET_POSTS } from '../types';
import { incrementCounter } from './counterActions';

export const addPost = (payload) => ({ type: ADD_POST, payload });
export const deletePost = (payload) => ({ type: DELETE_POST, payload });
export const setPosts = (payload) => ({ type: SET_POSTS, payload });

export const fetchPosts = () => (dispatch) => {
  axios('/api/posts')
    .then((res) => dispatch(setPosts(res.data)))
    .catch(console.log);
};

export const submitPostAsync = (e, input, setInput) => (dispatch) => {
  e.preventDefault();
  axios.post('/api/posts', { input })
    .then((res) => {
      dispatch(addPost(res.data));
      dispatch(incrementCounter());
      setInput('');
    })
    .catch(console.log);
};

export const deletePostAsync = (id) => (dispatch) => {
  axios.delete(`/api/posts/${id}`)
    .then(() => dispatch(deletePost(id)))
    .catch(console.log);
};
