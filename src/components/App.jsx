import { lazy, useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/Home'));
// const RegisterPage = lazy(() => import('../pages/Register'));
// const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/contacts" element={<ContactsPage />}></Route>
    </Routes>
  );
}
