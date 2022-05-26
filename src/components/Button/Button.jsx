import React from "react";
import "./styles.css";

const Button = (props) => {
  return (
    <button
      onClick={props.handleEvent}
      className={`primary__button ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
