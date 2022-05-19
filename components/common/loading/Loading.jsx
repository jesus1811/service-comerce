import { useContext } from "react";
import { DataContext } from "../../../context/Provider";
import styles from "./loading.module.scss";

const Loading = () => {
  const { store } = useContext(DataContext);
  return <div className={store?.onDark ? styles.spinnerDark : styles.spinner}></div>;
};

export default Loading;
