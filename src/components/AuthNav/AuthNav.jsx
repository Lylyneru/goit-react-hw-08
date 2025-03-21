import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "./AuthNav.module.css";

export const AuthNav = () => {
  return (
    <div>
      <NavLink
        to="/register"
        className={({ isActive }) => clsx(s.link, isActive && s.active)}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => clsx(s.link, isActive && s.active)}
      >
        Log In
      </NavLink>
    </div>
  );
};
