import { useRouter } from "next/router";
import { useState, useContext, useEffect } from "react";
import { Button, Input } from "../../components/common";
import { ContainerPrimary } from "../../components/layouts";
import { DataContext } from "../../context/Provider";
import useField from "../../hooks/useField";
import { validarProfesionalServices } from "../../services/profesional";
import styles from "./profesional.module.scss";

const Profesional = () => {
  const email = useField("email");
  const password = useField("password");

  const [loader, setLoader] = useState(true);
  const { store, setStore } = useContext(DataContext);
  const router = useRouter();

  useEffect(() => {
    store?.userProfesional.length != 0 && router.push("/profesional/menu-home");
    setLoader(false);
  }, [loader]);
  const handleClickValidate = (e) => {
    e.preventDefault();
    validarProfesionalServices(email.value, password.value, setStore, store, setLoader);
  };
  const handleClickCliente = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <ContainerPrimary>
      <div className={styles.containerPrimary}>
        <h2 className={styles.titlePrimary}>Bienvenido a MONTALVO</h2>
        <h2 className={styles.titlePrimary}>Esta en modo Profesional</h2>
        <img className={styles.image} src="./login.png" alt="" />
        <p className={styles.description}>¿ no tienes cuenta ?</p>
        <Button onClick={() => router.push("/profesional/register")}>Registrar</Button>
      </div>
      <div className={store?.onDark ? styles.containerDark : styles.containerSecundary}>
        <h1 className={styles.titleSecundary}>Ingresa Aqui </h1>
        <div className={styles.containerInputs}>
          <Input {...email} placeholder="Correo Electronico" />
          <Input {...password} placeholder="Contraseña" />
          <div className={styles.containerButton}>
            <Button onClick={handleClickValidate}>Ingresar</Button>
            <Button onClick={handleClickCliente}>Modo Cliente</Button>
          </div>
        </div>
      </div>
    </ContainerPrimary>
  );
};

export default Profesional;
