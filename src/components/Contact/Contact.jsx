import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import s from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={s.contactConteiner}>
      <li className={s.contactItem}>
        <div className={s.contactInfo}>
          <span className={s.contactName}>👤 {name}</span>
          <span className={s.contactNumber}>📞 {number}</span>
        </div>
        <button className={s.deleteButton} onClick={handleDelete}>
          Delete
        </button>
      </li>
    </div>
  );
};

export default Contact;
