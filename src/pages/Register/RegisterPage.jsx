import s from "./RegisterPage.module.css";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const RegisterPage = () => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Register</h2>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
