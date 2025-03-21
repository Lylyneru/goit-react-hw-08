import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ContactList } from "../components/ContactList/ContactList";
import { fetchContacts } from "../redux/contacts/operations";

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>Your contacts</title>
        </Helmet>
        <ContactList />
      </>
    </HelmetProvider>
  );
}
