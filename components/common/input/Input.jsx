import { useContext } from "react";
import { DataContext } from "../../../context/Provider";
import styles from "./input.module.scss";

const Input = ({ type, placeholder, onChange, value }) => {
  const { store } = useContext(DataContext);

  return (
    <input
      className={store.onDark ? styles.inputDark : styles.input}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
