import { useContext } from "react";
import { DataContext } from "../../../context/Provider";
import styles from "./button.module.scss";

const Button = ({ children, onClick }) => {
  const { store } = useContext(DataContext);
  return (
    <button className={store?.onDark ? styles.buttonDark : styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
