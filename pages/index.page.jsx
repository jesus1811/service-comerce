import { useRouter } from "next/router";
import { useState, useContext, useEffect } from "react";
import { Button, Input } from "../components/common";
import { ContainerPrimary } from "../components/layouts";
import { DataContext } from "../context/Provider";
import useField from "../hooks/useField";
import { validarclienteServices } from "../services/cliente";
import styles from "./index.module.scss";

const Home = () => {
  const email = useField("email");
  const password = useField("password");

  const [loader, setLoader] = useState(true);
  const { store, setStore } = useContext(DataContext);
  const router = useRouter();

  useEffect(() => {
    store.user.length != 0 && router.push("/menu-home");
    setLoader(false);
  }, [loader]);
  const handleClickValidate = (e) => {
    e.preventDefault();
    validarclienteServices(email.value, password.value, setStore, store, setLoader);
  };

  return (
    <ContainerPrimary>
      <div className={styles.containerCeleste}>
        <h2 className={styles.titleBlue}>Bienvenido a Montalvo</h2>
        <img className={styles.image} src="./login.png" alt="" />
        <p className={styles.description}>¿ no tienes cuenta ?</p>
        <Button onClick={() => router.push("/register")}>Registrar</Button>
      </div>
      <div className={store.onDark ? styles.containerDark : styles.containerGray}>
        <h1 className={styles.titleWhite}>Ingresa Aqui </h1>
        <div className={styles.containerInputs}>
          <Input {...email} placeholder="Correo Electronico" />
          <Input {...password} placeholder="Contraseña" />
          <div className={styles.containerButton}>
            <Button onClick={handleClickValidate}>Ingresar</Button>
          </div>
        </div>
      </div>
    </ContainerPrimary>
  );
};

export default Home;
