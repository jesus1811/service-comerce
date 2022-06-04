import { useContext } from "react";
import { DataContext } from "../../../context/Provider";
import styles from "./styles.module.scss";

const Card = ({ children }) => {
  const { store } = useContext(DataContext);
  return <article className={store.onDark ? styles.cardDark : styles.card}>{children}</article>;
};

export default Card;
