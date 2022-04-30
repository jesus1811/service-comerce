import { useEffect, useState, useContext } from "react";
import { ContainerPrimary, Loading } from "../../components/common";
import { Header } from "../../components/layouts";
import { getTipoServices } from "../../services/tipoServicio";
import styles from "./menuHome.module.scss";
import { DataContext } from "../../context/Provider";
import { TipoServicio } from "./components";

const MenuHome = () => {
  const [tipoServicios, setTipoServicios] = useState([]);
  const [loader, setLoader] = useState(true);
  const { store } = useContext(DataContext);
  useEffect(() => {
    store.user.length != 1 && router.push("/");
    getTipoServices(setTipoServicios, setLoader);
  }, [loader]);
  return (
    <ContainerPrimary>
      <Header />
      <div className={styles.containerDiv}>
        <h1 className={styles.title}>ELIJA SU CATEGORIA DE INTERES</h1>
        <div className={styles.containerImages}>
          {loader ? (
            <Loading />
          ) : (
            tipoServicios.map((tipoServicio, index) => {
              return <TipoServicio tipoServicio={tipoServicio} key={index} />;
            })
          )}
        </div>
      </div>
    </ContainerPrimary>
  );
};

export default MenuHome;
