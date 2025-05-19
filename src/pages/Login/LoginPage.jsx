import s from "./LoginPage.module.css";
import LoginForm from "..//..//components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Log In</h2>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
