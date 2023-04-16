import { createContext, useState } from "react";

export const ContactContext = createContext();

export const ContactContextProvider = ({ children }) => {
  const [price, setPrice] = useState(1211);
  const onCall = () => {
    setPrice(price + 1000);
  };

  const [contacts, setContacts] = useState([]);
  const [oldName, setOldName] = useState();
  const [oldNumber, setOldNumber] = useState();

  const addContact = (data) => {
    setContacts([...contacts, data]);
  };

  const deleteContact = (id) => {
    const filterData = contacts.filter((curr) => curr.id != id);
    setContacts(filterData);
  };

  const updateContact = (id, updateContact) => {
    console.log(updateContact);
    setContacts(
      contacts.map((contact) => (contact.id == id ? updateContact : contact))
    );
  };

  return (
    <ContactContext.Provider
      value={{
        price,
        onCall,
        setPrice,
        addContact,
        contacts,
        deleteContact,
        updateContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
