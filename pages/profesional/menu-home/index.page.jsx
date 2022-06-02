import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { DataContext } from "../../../context/Provider";
import { Button, Loading } from "../../../components/common";
import { ContainerPrimary, Header, HeaderProfesional } from "../../../components/layouts";
import styles from "./menuHome.module.scss";
import { getServiciosForProfesionalServices } from "../../../services/servicio.service";

const MenuHome = () => {
  const [loader, setLoader] = useState(true);
  const [servicios, setServicios] = useState([]);
  const { store } = useContext(DataContext);
  const router = useRouter();
  useEffect(() => {
    const idProfesional = JSON.parse(localStorage.getItem("idProfesional"))[0].idProfesional;
    getServiciosForProfesionalServices(idProfesional, setServicios, setLoader);
  }, []);
  return (
    <>
      <ContainerPrimary>
        <HeaderProfesional />
        <div className={styles.containerDiv}>
          <h1 className={store.onDark ? styles.titleDark : styles.title}>
            Administración de Cursos en Mantenimiento..
          </h1>
          {loader ? (
            <Loading />
          ) : (
            <>
              {servicios.map((servicio, index) => {
                return (
                  <>
                    <article className={store.onDark ? styles.cardDark : styles.card} key={index}>
                      <p className={styles.nameService}>
                        {servicio.descuento > 0 && "en Oferta " + servicio.descuento + "%"}
                      </p>
                      <img className={styles.image} src={servicio.foto} alt={servicio.nombreProfesional} />
                      <p className={styles.nameService}>{servicio.NombreServicio}</p>
                      <p className={styles.nameService}>
                        S/. {servicio.precio - servicio.precio * (servicio.descuento / 100)}
                      </p>
                      <Button
                        onClick={() => {
                          localStorage.setItem("servicio", JSON.stringify(servicio));
                          router.push("/profesional/update-service");
                        }}
                      >
                        Editar
                      </Button>
                      <Button onClick={() => {}}>Eliminar</Button>
                    </article>
                  </>
                );
              })}
            </>
          )}
        </div>
      </ContainerPrimary>
    </>
  );
};

export default MenuHome;
