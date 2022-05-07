import { useContext } from "react";
import { DataContext } from "../../../context/Provider";
import styles from "./containerPrimary.module.scss";

const ContainerPrimary = ({ children }) => {
  const { store } = useContext(DataContext);
  return <section className={store.onDark ? styles.containerDark : styles.container}>{children}</section>;
};

export default ContainerPrimary;
