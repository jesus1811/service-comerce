import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { Button, Loading } from "../../components/common";
import { ContainerPrimary, Header } from "../../components/layouts";
import { DataContext } from "../../context/Provider";
import { getProfesionalesServices } from "../../services/profesional";
import styles from "./profesionales.module.scss";

const Profesionales = () => {
  const [profesionales, setProfesionales] = useState([]);
  const [loader, setLoader] = useState(true);
  const { store } = useContext(DataContext);
  const router = useRouter();
  const handleClickRedirect = (idProfesional) => {
    localStorage.setItem("idProfesional", JSON.stringify(idProfesional));
    router.push("/profesionales/detalle");
  };
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
                  <Button onClick={() => handleClickRedirect(profesional.idProfesional)}>Ver Detalle</Button>
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
