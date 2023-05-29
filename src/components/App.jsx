import { lazy, useEffect } from 'react';
import { refreshUser } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './sharedLayout/SharedLayout';
import { useAuth } from 'hooks/useAuth';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Refreshing user...</p>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="/contacts" element={<ContactsPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Route>
    </Routes>
  );
}
