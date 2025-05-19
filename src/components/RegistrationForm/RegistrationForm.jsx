import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { register } from "../../redux/auth/operations";
import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./RegisterForm.module.css";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required!"),
    email: Yup.string().email("Invalid email").required("Required!"),
    password: Yup.string()
      .min(6, "At least 6 characters")
      .required("Required!"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values))
      .unwrap()
      .then((response) => {
        toast.success(`Welcome, ${response.user.name}`);
        resetForm();
      })
      .catch(() => {
        toast.error("Email is already in use");
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.form}>
        <label className={s.label}>
          Name
          <Field type="text" name="name" className={s.input} />
          <ErrorMessage name="name" component="div" className={s.error} />
        </label>

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
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
