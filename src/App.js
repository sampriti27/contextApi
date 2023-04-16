import React, { useState } from "react";
import ContactForm from "./components/ContactForm";
import Parent from "./components/Parent";
import ShowContact from "./components/ShowContact";
import EditContact from "./components/EditContact";

const App = () => {
  const [income, setIncome] = useState(300);
  const onCall = () => {
    console.log("Printed From App.js");
    // income = income + 300;
    setIncome(600);
  };

  return (
    <>
      <div>
        {/* <Parent income={income} onPress={onCall} /> */}
        <ContactForm />
        <ShowContact />
      </div>
    </>
  );
};

export default App;
