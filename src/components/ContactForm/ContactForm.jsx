import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import s from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    number: Yup.string().required("Required"),
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(addContact(values));
        resetForm();
      }}
    >
      <Form className={s.formContainer}>
        <label>
          Name:
          <Field type="text" name="name" className={s.inputField} />
          <ErrorMessage
            name="name"
            component="div"
            className={s.errorMessage}
          />
        </label>
        <label>
          Number:
          <Field type="text" name="number" className={s.inputField} />
          <ErrorMessage
            name="number"
            component="div"
            className={s.errorMessage}
          />
        </label>
        <button type="submit" className={s.addButton}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
