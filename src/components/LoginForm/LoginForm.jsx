import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import s from "./LoginForm.module.css";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = (values, options) => {
    dispatch(login(values))
      .unwrap()
      .then((res) => {
        toast.success(`Welcome, ${res.user.name}`);
        navigate("/contacts", { replace: true });
      })
      .catch(() => toast.error("Invalid Data"));

    options.resetForm();
  };

  return (
    <div className={s.div}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label>
            <span>Email</span>
            <Field name="email" />
          </label>
          <label>
            <span>Password</span>
            <Field name="password" type="password" />
          </label>
          <button type="submit">Login</button>
          <p>
            You do not have account yet? <Link to="/register">Get it!</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};
