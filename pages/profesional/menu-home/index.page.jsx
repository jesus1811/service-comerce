import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { DataContext } from "../../../context/Provider";
import { Button, Loading } from "../../../components/common";
import { ContainerPrimary, Header, HeaderProfesional } from "../../../components/layouts";
import styles from "./menuHome.module.scss";

const MenuHome = () => {
  const [loader, setLoader] = useState(true);
  const { store } = useContext(DataContext);
  const router = useRouter();
  useEffect(() => {}, [loader]);
  return (
    <>
      <ContainerPrimary>
        <HeaderProfesional />
        <div className={styles.containerDiv}>
          <h1 className={store.onDark ? styles.titleDark : styles.title}>
            Administración de Cursos en Mantenimiento..
          </h1>
          {loader ? <Loading /> : <></>}
          <Button
            onClick={() => {
              router.push("/profesional/update-service");
            }}
          >
            Editar en Mantenimiento
          </Button>
        </div>
      </ContainerPrimary>
    </>
  );
};

export default MenuHome;
