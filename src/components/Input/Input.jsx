import React from "react";
import "./styles.css";

const Input = (props) => {
  return (
    <div className="label-input__container">
      <input
        className="form__input"
        type={props.type}
        name={props.name}
        value={props.value}
        placeholder={props.placeHolder}
        onChange={props.handleChange}
      />
      <label className="form__label">{props.children}</label>
    </div>
  );
};

export default Input;
