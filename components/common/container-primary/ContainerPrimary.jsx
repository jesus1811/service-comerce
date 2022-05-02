import React from "react";
import styles from "./containerPrimary.module.scss";

const ContainerPrimary = ({ children }) => {
  return <section className={styles.containerMain}>{children}</section>;
};

export default ContainerPrimary;
