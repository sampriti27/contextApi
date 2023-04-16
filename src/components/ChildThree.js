import React, { useContext } from "react";
import { ContactContext } from "../context/ContactContext";

const ChildThree = ({ income }) => {
  const { price, onCall, setPrice } = useContext(ContactContext);
  return (
    <>
      <div>
        From Child3 Compo : {income} You get Income using props drilling.
      </div>
      <div>From Child3 Compo : {price} You get Income using context api.</div>
      <button onClick={() => setPrice(price + 1000)}>Change Price</button>
    </>
  );
};

export default ChildThree;
