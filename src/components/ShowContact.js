import React from "react";
import { useContext, useState } from "react";
import { ContactContext } from "../context/ContactContext";
import EditContact from "./EditContact";
import { Modal, Button, OverlayTrigger, Tooltip } from "react-bootstrap";

const ShowContact = () => {
  const { contacts, deleteContact, updateContact } = useContext(ContactContext);

  const [show, setShow] = useState(false);
  const [currContact, setCurrContact] = useState();
  const handleShow = (curr) => {
    setShow(true);

    setCurrContact(curr);
  };
  const handleClose = () => {
    setShow(false);
  };
  return (
    <>
      <div>
        {contacts.map((curr, i) => {
          return (
            <>
              <div key={i}>
                <hr />
                <p>Name : {curr.name}</p>
                <p>Phone : {curr.number}</p>
                <button onClick={() => deleteContact(curr.id)}>Delete</button>
                <button onClick={() => handleShow(curr)}>Update</button>
              </div>
            </>
          );
        })}
      </div>
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditContact theContact={currContact} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close Button
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default ShowContact;
