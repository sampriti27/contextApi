import React, { useState } from "react";
import { useContext } from "react";
import { ContactContext } from "../context/ContactContext";

const ContactForm = () => {
  const { addContact } = useContext(ContactContext);
  const [name, setName] = useState();
  const [number, setNumber] = useState();

  const contact = {
    id: new Date().getTime().toString(),
    name: "",
    number: "",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    contact.name = name;
    contact.number = number;
    addContact(contact);
    console.log(contact);
  };
  return (
    <>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
};

export default ContactForm;
