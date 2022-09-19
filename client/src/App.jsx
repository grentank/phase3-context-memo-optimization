import React from 'react';
import { Container } from 'reactstrap';
import MyForm from './components/MyForm/MyForm';
import PostList from './components/PostList/PostList';
import PostContextProvider from './contexts/PostContext';

function App() {
  // const expensiveEncrypt = (ar) => {
  //   const result = [];
  //   for (let i = 0; i < 1e5; i += 1) {
  //     result.push(JSON.stringify(ar) + Math.random());
  //   }
  //   return result;
  // };

  // const res = useMemo(() => expensiveEncrypt(posts), [posts]);
  // console.log(res);

  return (
    <Container>
      <PostContextProvider>
        <MyForm />
        <PostList />
      </PostContextProvider>
    </Container>
  );
}

export default App;
