import { useState, useEffect, useContext } from "react";
import { Loading } from "../../components/common";
import { ContainerPrimary, Header } from "../../components/layouts";
import { DataContext } from "../../context/Provider";
import { getProfesionalesServices } from "../../services/profesional";
import styles from "./profesionales.module.scss";

const Profesionales = () => {
  const [profesionales, setProfesionales] = useState([]);
  const [loader, setLoader] = useState(true);
  const { store } = useContext(DataContext);
  useEffect(() => {
    getProfesionalesServices(setProfesionales, setLoader);
  }, [loader]);
  return (
    <ContainerPrimary>
      <Header />
      <h1 className={store.onDark ? styles.titleDark : styles.title}>Provedores</h1>
      <div className={styles.container}>
        {loader ? (
          <Loading />
        ) : (
          <>
            {profesionales.map((profesional, index) => {
              return (
                <article className={store.onDark ? styles.cardDark : styles.card} key={index}>
                  <img className={styles.image} src={profesional.urlFoto} alt="" />
                  <p className={styles.name}>
                    {profesional.nombreProfesional} {profesional.apellidoProfesional}
                  </p>
                  <p className={styles.text}>{profesional.DNI}</p>

                  <p className={styles.text}>{profesional.correoProfesional}</p>
                  <p className={styles.text}>{profesional.celularProfesional}</p>
                  <p className={styles.text}>{profesional.nombrePais}</p>
                  <p className={styles.text}>{profesional.direccionDomicilio}</p>
                </article>
              );
            })}
          </>
        )}
      </div>
    </ContainerPrimary>
  );
};

export default Profesionales;
