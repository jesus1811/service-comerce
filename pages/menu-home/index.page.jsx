import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { Loading } from "../../components/common";
import { ContainerPrimary, Header } from "../../components/layouts";
import { getTipoServices } from "../../services/tipoServicio";
import styles from "./menuHome.module.scss";
import { DataContext } from "../../context/Provider";
import { TipoServicio } from "./components";

const MenuHome = () => {
  const [tipoServicios, setTipoServicios] = useState([]);
  const [loader, setLoader] = useState(true);
  const { store } = useContext(DataContext);
  const router = useRouter();
  useEffect(() => {
    store?.user.length == 0 && router.push("/");
    getTipoServices(setTipoServicios, setLoader);
  }, [loader]);
  return (
    <ContainerPrimary>
      <Header />
      <div className={styles.containerDiv}>
        {loader ? (
          <Loading />
        ) : (
          <>
            <h1 className={store.onDark ? styles.titleDark : styles.title}>ELIJA SU CATEGORÍA DE INTERES</h1>
            <div className={styles.containerImages}>
              {tipoServicios.map((tipoServicio, index) => {
                return <TipoServicio tipoServicio={tipoServicio} key={index} />;
              })}
            </div>
          </>
        )}
      </div>
    </ContainerPrimary>
  );
};

export default MenuHome;
