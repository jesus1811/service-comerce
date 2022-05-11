import Head from "next/head";
import { useContext } from "react";
import { DataContext } from "../../../context/Provider";
import styles from "./containerPrimary.module.scss";

const ContainerPrimary = ({ children }) => {
  const { store } = useContext(DataContext);
  return (
    <>
      <Head>
        <title>Montalvo</title>
        <meta name="description" content="platforma multiservicio montalvo" />
        <meta name="keywords" content="servicio, multiservicio, terapia, cursos, tecnologia, capacitacion" />
        <meta name="author" content="JesuDev" />
      </Head>
      <section className={store.onDark ? styles.containerDark : styles.container}>{children}</section>
    </>
  );
};

export default ContainerPrimary;
