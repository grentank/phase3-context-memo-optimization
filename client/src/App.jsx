import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'reactstrap';
import AdminPage from './components/AdminPage';
import EffectsPage from './components/EffectsPage';
import Login from './components/Login';
import MyNavbar from './components/MyNavbar';
import NoPage from './components/NoPage/NoPage';
import PostsPage from './components/PostsPage';
import SignUp from './components/SignUp';
import ProtectedRoute from './HOCs/ProtectedRoute';
import { fetchPosts } from './redux/actions/postsActions';
import { checkAuth } from './redux/actions/userActions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
    dispatch(fetchPosts());
  }, []);
  const user = useSelector((state) => state.user);
  return (
    <Container>
      <MyNavbar />
      <Routes>
        <Route element={<ProtectedRoute redirect="/posts" isAllowed={!user.id} />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route element={<ProtectedRoute redirect="/login" isAllowed={!!user.id} />}>
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/effects" element={<EffectsPage />} />
        </Route>
        <Route
          path="/admin"
          element={(
            <ProtectedRoute redirect="/login" isAllowed={!!user.id && user.name === 'admin'}>
              <AdminPage />
            </ProtectedRoute>
          )}
        />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Container>
  );
}

export default App;
