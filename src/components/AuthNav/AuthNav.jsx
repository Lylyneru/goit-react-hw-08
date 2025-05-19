import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";
import { GiArchiveRegister } from "react-icons/gi";
import { FaSpaceShuttle } from "react-icons/fa";

export const AuthNav = () => {
  return (
    <div className={s.container}>
      <NavLink className={s.link} to="/register">
        <div className={s.iconContainer}>
          <GiArchiveRegister />
          Register
        </div>
      </NavLink>
      <NavLink className={s.link} to="/login">
        <div className={s.iconContainer}>
          <FaSpaceShuttle />
          Log In
        </div>
      </NavLink>
    </div>
  );
};
