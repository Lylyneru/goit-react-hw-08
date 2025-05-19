import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { login } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "At least 6 characters").required("Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values))
      .unwrap()
      .then((response) => {
        toast.success(`Welcome, ${response.user.name}`);
        navigate("/contacts", { replace: true });
      })
      .catch(() => toast.error("Wrong email or password"));

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.form}>
        <label className={s.label}>
          Email
          <Field type="email" name="email" className={s.input} />
          <ErrorMessage name="email" component="div" className={s.error} />
        </label>

        <label className={s.label}>
          Password
          <Field type="password" name="password" className={s.input} />
          <ErrorMessage name="password" component="div" className={s.error} />
        </label>

        <button type="submit" className={s.button}>
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
