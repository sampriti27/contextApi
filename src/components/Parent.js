import React from "react";
import ChildOne from "./ChildOne";

const Parent = ({ income, onPress }) => {
  return (
    <>
      <div>
        <p>Parent Income : {income}</p>
        <ChildOne income={income} onPressParent={onPress} />
      </div>
    </>
  );
};

export default Parent;
