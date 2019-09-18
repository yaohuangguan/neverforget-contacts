import React, { useContext } from "react";
import ContactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts } = contactContext;
  return (
    <div className="row">
      {contacts.map(contact => (
      <ContactItem contact={contact} key={contact.id}></ContactItem>
      ))}
    </div>
  );
};

export default Contacts;
