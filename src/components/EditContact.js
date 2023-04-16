import { Form, Button } from "react-bootstrap";

import { ContactContext } from "../context/ContactContext";
import { useContext, useState } from "react";

const EditContact = ({ theContact }) => {
  const id = theContact.id;

  const [name, setName] = useState(theContact.name);
  const [number, setNumber] = useState(theContact.number);

  const { updateContact } = useContext(ContactContext);

  const updatedEmployee = { id, name, number };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(updatedEmployee);
    updateContact(id, updatedEmployee);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Name *"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Phone"
          name="phone"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </Form.Group>
      <Button variant="success" type="submit" block>
        Edit Contact
      </Button>
    </Form>
  );
};

export default EditContact;
