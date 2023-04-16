import React from "react";
import ChildThree from "./ChildThree";

const ChildTwo = ({ income }) => {
  return (
    <div>
      <ChildThree income={income} />
    </div>
  );
};

export default ChildTwo;
