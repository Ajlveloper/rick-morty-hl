import React, { useState } from "react";
import Button from "../Button/Button";
import { BUTTON_TYPES, INPUTS_TYPES } from "../../Common/types";
import styles from "./styles.module.css";
import IconSearch from "../../assets/icons/Search";

const TextField = ({ onSubmit, placeholder, button }) => {
  const [value, setValue] = useState("");

  const changeHandler = ({ target }) => {
    setValue(target.value);
  };

  const submitHandler = (e) => {
    if (onSubmit) {
      e.preventDefault();
      onSubmit(value);
    }
  };
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <input
        type={INPUTS_TYPES.TEXT}
        onChange={changeHandler}
        value={value}
        placeholder={placeholder}
      />
      {button ? <Button icon className={styles.formButton} type={BUTTON_TYPES.SUBMIT}>
        <IconSearch />
      </Button> : null}
    </form>
  );
};

export default TextField;

TextField.defaultProps = {
  button: false
}
