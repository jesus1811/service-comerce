import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { DataContext } from "../../../context/Provider";
import { Loading } from "../../../components/common";
import { ContainerPrimary, Header, HeaderProfesional } from "../../../components/layouts";
import styles from "./menuHome.module.scss";

const MenuHome = () => {
  const [tipoServicios, setTipoServicios] = useState([]);
  const [loader, setLoader] = useState(true);
  const { store } = useContext(DataContext);
  const router = useRouter();
  useEffect(() => {
  }, [loader]);
  return (
    <>
      <ContainerPrimary>
      <HeaderProfesional/>
        <div className={styles.containerDiv}>
          <h1 className={store.onDark ? styles.titleDark : styles.title}>Administracion de Cursos</h1>
        </div>
      </ContainerPrimary>
    </>
  );
};

export default MenuHome;
