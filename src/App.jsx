import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";
import { selectContacts } from "./redux/contactsSlice";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import s from "./App.module.css";

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchContacts({ signal: controller.signal }));

    return () => {
      controller.abort(); // Скасування запиту при розмонтуванні компонента
    };
  }, [dispatch]);

  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {contacts.length > 0 ? <ContactList /> : <p>No contacts found.</p>}
    </div>
  );
};

export default App;
