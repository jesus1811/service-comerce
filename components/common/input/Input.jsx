import React from "react";
import styles from "./input.module.scss";

const Input = ({ type, placeholder, onChange, value }) => {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
