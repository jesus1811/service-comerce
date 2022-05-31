import { useState, useEffect, useContext } from "react";
import { Loading } from "../../components/common";
import { ContainerPrimary, Header } from "../../components/layouts";
import { DataContext } from "../../context/Provider";
import { getComprobanteServices } from "../../services/comprobante.service";
import { Comprobante } from "./components";
import styles from "./historial.module.scss";

const Historial = () => {
  const [comprobantes, setComprobantes] = useState([]);
  const [loader, setLoader] = useState(true);
  const { store } = useContext(DataContext);
  useEffect(() => {
    const { idCliente } = JSON.parse(localStorage.getItem("store")).user[0];
    getComprobanteServices(idCliente, setComprobantes, setLoader);
  }, [loader]);
  return (
    <ContainerPrimary>
      <Header />
      {loader ? (
        <Loading />
      ) : (
        <>
          <h1 className={store.onDark ? styles.titleMainDark : styles.titleMain}>Historial de Servicios Solicitados</h1>
          <div className={styles.containerCard}>
            {comprobantes.map((comprobante, index) => {
              return <Comprobante comprobante={comprobante} key={index} />;
            })}
          </div>
        </>
      )}
    </ContainerPrimary>
  );
};

export default Historial;
