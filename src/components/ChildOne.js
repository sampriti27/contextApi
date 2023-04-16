import React from "react";
import ChildTwo from "./ChildTwo";

const ChildOne = ({ income, onPressParent }) => {
  return (
    <div>
      <p onClick={onPressParent}>Clicked</p>
      <ChildTwo income={income} />
    </div>
  );
};

export default ChildOne;
