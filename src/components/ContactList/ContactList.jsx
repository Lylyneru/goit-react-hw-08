import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors.js";
import Contact from "../Contact/Contact.jsx";
import s from "./ContactList.module.css";

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={s.contactList}>
      {filteredContacts.map((contact) => (
        <Contact {...contact} key={contact.id} />
      ))}
    </ul>
  );
};
