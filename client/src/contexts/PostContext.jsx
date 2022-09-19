import React, {
  createContext, useCallback, useEffect, useState,
} from 'react';
import axios from 'axios';

const PostContext = createContext();
const HandlerContext = createContext();

function PostContextProvider({ children }) {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  const changeHandler = (e) => setInput(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_BASEURL}/api/posts`, { input })
      .then((res) => {
        setPosts((prev) => [...prev, res.data]);
        setInput('');
      })
      .catch(console.log);
  };

  useEffect(() => {
    axios(`${process.env.REACT_APP_BASEURL}/api/posts`)
      .then((res) => setPosts(res.data))
      .catch(console.log);
  }, []);

  const deleteHandler = useCallback((id) => {
    axios.delete(`${process.env.REACT_APP_BASEURL}/api/posts/${id}`)
      .then(() => setPosts((prev) => prev.filter((el) => el.id !== id)))
      .catch(console.log);
  }, []);
  return (
    <PostContext.Provider value={{
      input, posts, submitHandler, changeHandler,
    }}
    >
      <HandlerContext.Provider value={deleteHandler}>
        {children}
      </HandlerContext.Provider>
    </PostContext.Provider>
  );
}

// export const usePostContext = () => useContext(PostContext);

export { PostContext, HandlerContext };

export default PostContextProvider;
