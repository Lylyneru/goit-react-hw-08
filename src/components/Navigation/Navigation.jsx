import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import clsx from "clsx";
import s from "./Navigation.module.css";

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={s.nav}>
      <NavLink
        to="/"
        className={({ isActive }) => clsx(s.link, isActive && s.active)}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) => clsx(s.link, isActive && s.active)}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
