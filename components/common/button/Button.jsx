import { useContext } from "react";
import { DataContext } from "../../../context/Provider";
import styles from "./button.module.scss";

const Button = ({ children, onClick, variant }) => {
  const { store } = useContext(DataContext);
  return (
    <button
      className={
        store?.onDark ? (variant ? styles.outlineDark : styles.buttonDark) : variant ? styles.outline : styles.button
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
