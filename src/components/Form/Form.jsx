import React from "react";
import "./styles.css";

const Form = (props) => {
  return (
    <form className={`form__container ${props.className}`}>
      {props.children}
    </form>
  );
};

export default Form;
