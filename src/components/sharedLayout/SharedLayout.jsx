import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AppBar from 'components/appBar/AppBar';
import Loader from 'components/loader/Loader';

const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
