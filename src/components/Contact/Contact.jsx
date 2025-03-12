import s from "./Contact.module.css";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <div className={s.contactConteiner}>
      <li className={s.contactItem}>
        <div className={s.contactInfo}>
          <span className={s.contactName}>👤 {name}</span>
          <span className={s.contactNumber}>📞 {number}</span>
        </div>
        <button className={s.deleteButton} onClick={() => onDelete(id)}>
          Delete
        </button>
      </li>
    </div>
  );
};

export default Contact;
