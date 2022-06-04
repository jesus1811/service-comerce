import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { Loading, TitleMain } from "../../components/common";
import { ContainerPrimary, Header } from "../../components/layouts";
import { getTipoServices } from "../../services/tipoServicio.service";
import styles from "./menuHome.module.scss";
import { DataContext } from "../../context/Provider";
import { TipoServicio } from "./components";

const MenuHome = () => {
  const [tipoServicios, setTipoServicios] = useState([]);
  const [loader, setLoader] = useState(true);
  const { store } = useContext(DataContext);
  const router = useRouter();
  useEffect(() => {
    const cliente = JSON.parse(localStorage.getItem("cliente")) || [];
    cliente.length == 0 && router.push("/");
    getTipoServices(setTipoServicios, setLoader);
  }, [loader]);
  return (
    <>
      <ContainerPrimary>
        <Header />
        <div className={styles.containerDiv}>
          {loader ? (
            <Loading />
          ) : (
            <>
              <TitleMain>Elija su Categoria de Interes</TitleMain>
              <div className={styles.containerImages}>
                {tipoServicios.map((tipoServicio, index) => {
                  return <TipoServicio tipoServicio={tipoServicio} key={index} />;
                })}
              </div>
            </>
          )}
        </div>
      </ContainerPrimary>
    </>
  );
};

export default MenuHome;
