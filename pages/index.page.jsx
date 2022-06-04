import { useRouter } from "next/router";
import { useState, useContext, useEffect } from "react";
import { Button, Description, Input, SubTitle, TitleMain } from "../components/common";
import { ContainerPrimary } from "../components/layouts";
import { DataContext } from "../context/Provider";
import useField from "../hooks/useField";
import { validarclienteServices } from "../services/cliente.service";
import styles from "./index.module.scss";

const Home = () => {
  const email = useField("email");
  const password = useField("password");
  const [loader, setLoader] = useState(true);
  const { store, setStore } = useContext(DataContext);
  const [error, setError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    store?.user.length != 0 && router.push("/menu-home");
    setLoader(false);
  }, [loader]);
  const handleClickValidate = (e) => {
    e.preventDefault();
    validarclienteServices(email.value, password.value, setStore, store, setLoader, setError);
  };
  const handleClickProfesional = (e) => {
    e.preventDefault();
    router.push("/profesional");
  };

  return (
    <ContainerPrimary>
      <div className={store?.onDark ? styles.containerDark : styles.containerSecundary}>
        <TitleMain>Montalvo</TitleMain>
        <Description>plataforma de multiservicios</Description>
        <img className={styles.image} src="./login.png" alt="" />
        <div className={styles.containerButtons}>
          <Button onClick={() => router.push("/register")}>Registrar</Button>
          <Button onClick={handleClickProfesional} variant>
            Profesional
          </Button>
        </div>
      </div>
      <div className={store?.onDark ? styles.containerDark : styles.containerSecundary}>
        <SubTitle>Acceso</SubTitle>
        <div className={styles.containerInputs}>
          <Input {...email} placeholder="Correo Electronico" />
          <Input {...password} placeholder="Contraseña" />
          {error ? (
            <h2 className={store.onDark ? styles.errorDark : styles.error}>Usuario y/o contraseña incorrecta</h2>
          ) : null}

          <div className={styles.containerButton}>
            <Button onClick={handleClickValidate}>Ingresar</Button>
          </div>
        </div>
      </div>
    </ContainerPrimary>
  );
};

export default Home;
