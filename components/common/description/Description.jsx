import { useContext } from "react";
import { DataContext } from "../../../context/Provider";
import styles from "./styles.module.scss";

const Description = ({ children }) => {
  const { store } = useContext(DataContext);
  return <p className={store.onDark ? styles.descriptionDark : styles.description}>{children}</p>;
};

export default Description;
