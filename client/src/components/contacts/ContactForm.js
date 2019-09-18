import React, { useState, useContext } from "react";
import ContactContext from "../../context/contact/contactContext";
const ContactForm = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal"
  });
  const contactContext = useContext(ContactContext);

  const { name, email, phone, type } = contact;

  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });
  const submitForm = e => {
    e.preventDefault();
    contactContext.addContact(contact);
    setContact({
      name: "",
      email: "",
      phone: "",
      type: "personal"
    });
  };

  return (
    <form onSubmit={submitForm}>
      <h2 className='text-primary'>Add Contact</h2>
      <label>Name</label>
      <input type='text' name='name' value={name} onChange={onChange} />
      <label>Email</label>
      <input type='email' name='email' value={email} onChange={onChange} />
      <label>Phone</label>
      <input type='text' name='phone' value={phone} onChange={onChange} />
      <h5>Contact Type</h5>
      <input
        type='radio'
        name='type'
        value='personal'
        checked={type === "personal"}
        onChange={onChange}
      />
      Personal{" "}
      <input
        type='radio'
        name='type'
        value='professional'
        checked={type === "professional"}
        onChange={onChange}
      />
      Professional
      <div>
        <input
          type='submit'
          value='Add Contact'
          className='btn btn-primary btn-block'
        />
      </div>
    </form>
  );
};

export default ContactForm;
