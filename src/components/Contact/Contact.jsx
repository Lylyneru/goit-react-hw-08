import s from "./Contact.module.css";
import { RiContactsFill } from "react-icons/ri";
import { BsTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations.js";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <div className={s.contact}>
      <p>
        <RiContactsFill className={s.icon} /> {name}
      </p>
      <p>
        <BsTelephoneFill className={s.icon} /> {number}
      </p>
      <button className={s.button} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
