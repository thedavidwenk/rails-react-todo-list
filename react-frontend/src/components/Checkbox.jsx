// eslint-disable-next-line no-unused-vars
import React from "react";

const Checkbox = ({ checked, onClick }) => {
  return <input type="checkbox" checked={checked} onChange={onClick} />;
};

export default Checkbox;
