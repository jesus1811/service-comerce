import { useContext } from "react";
import { DataContext } from "../../../context/Provider";
import styles from "./styles.module.scss";

const SubTitle = ({ children }) => {
  const { store } = useContext(DataContext);
  return <h2 className={store.onDark ? styles.subTitleDark : styles.subTitle}>{children} </h2>;
};

export default SubTitle;
