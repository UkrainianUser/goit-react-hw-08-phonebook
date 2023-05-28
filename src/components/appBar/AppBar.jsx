// import { useAuth } from 'components/hooks/useAuth';
import { NavLink } from 'react-router-dom';
import css from './AppBar.module.css';

const AppBar = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <nav>
        <NavLink className={css.link} to="/">
          Home
        </NavLink>
        {/* {isLoggedIn && ( */}
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
        {/* )} */}
      </nav>
      <div className={css.menu}>
        <NavLink className={css.link} to="/register">
          Register
        </NavLink>
        <NavLink className={css.link} to="/login">
          Login
        </NavLink>
      </div>
      {/* <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </header>
  );
};

export default AppBar;
