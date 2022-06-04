import { useContext } from "react";
import styles from "./styles.module.scss";
import { DataContext } from "../../../context/Provider";

const TitleMain = ({ children }) => {
  const { store } = useContext(DataContext);

  return <h2 className={store.onDark ? styles.titlePrimaryDark : styles.titlePrimary}>{children}</h2>;
};

export default TitleMain;
