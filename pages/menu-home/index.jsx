import React, { useEffect, useState, useContext } from "react";
import { Button, ContainerPrimary } from "../../components/common";
import { Header } from "../../components/layouts";
import { getTipoServices } from "../../services/tipoServicio";
import styles from "./menuHome.module.scss";
import { useRouter } from "next/router";
import { DataContext } from "../../context/Provider";

const MenuHome = () => {
  const [tipoServicios, setTipoServicios] = useState([]);
  const [loader, setLoader] = useState(true);
  const router = useRouter();
  const { store } = useContext(DataContext);
  useEffect(() => {
    store.user.length != 1 && router.push("/");
    getTipoServices(setTipoServicios, setLoader);
  }, [loader]);
  return (
    <ContainerPrimary>
      <Header />
      <div className={styles.containerDiv}>
        <h1 className={styles.title}>Elija su Categoria de Interes</h1>
        <div className={styles.containerImages}>
          {tipoServicios.map((n, index) => {
            return (
              <div className={styles.card} key={index}>
                <h2 className={styles.titleCard}>{n.nombreTipoServicio}</h2>
                <img className={styles.images} src="/time.jpg" alt="" />
                <Button onClick={()=>router.push("/services")}>Ingresar</Button>
              </div>
            );
          })}
        </div>
      </div>
    </ContainerPrimary>
  );
};

export default MenuHome;
