import { useContext } from "react";
import { ContainerPrimary, Header } from "../components/layouts";
import { DataContext } from "../context/Provider";
import styles from "./page404.module.scss";

const Custom404 = () => {
  const { store } = useContext(DataContext);
  return (
    <>
      <ContainerPrimary>
        <Header />
        <img src="/error404.svg" alt="" />
        <h1 className={store.onDark ? styles.titleDark : styles.title}>Pagina no Encontrada</h1>
      </ContainerPrimary>
    </>
  );
};

export default Custom404;
