import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { selectContacts } from "../../redux/contacts/slice";
import { addContact } from "../../redux/contacts/operations.js";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const initialValues = {
    name: "",
    number: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required!"),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, "Format: 123-45-67")
      .required("Required!"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const isExist = contacts.some(
      (contact) => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (isExist) {
      alert(`${values.name} is already in contacts.`);
      return;
    }

    dispatch(addContact(values));
    resetForm();
  };

  return (
    <div className={s.formContainer}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <label>
            <p className={s.txt}>Name</p>
            <Field type="text" name="name" className={s.input} />
            <ErrorMessage name="name" component="div" className={s.error} />
          </label>
          <label>
            <p className={s.txt}>Number</p>
            <Field type="text" name="number" className={s.input} />
            <ErrorMessage name="number" component="div" className={s.error} />
          </label>
          <button type="submit" className={s.button}>
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
