import { useRouter } from "next/router";
import { useState, useContext, useEffect } from "react";
import { Button, ContainerPrimary, Input } from "../components/common";
import { DataContext } from "../context/Provider";
import { validarclienteServices } from "../services/cliente";
import styles from "./index.module.scss";

const Home = () => {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(true);
  const { store, setStore } = useContext(DataContext);
  const router = useRouter();
  useEffect(() => {
    store.user.length != 0 && router.push("/menu-home");
    setLoader(false);
  }, [loader]);

  return (
    <ContainerPrimary>
      <div className={styles.celeste}>
        <h1 className={styles.titleBlue}>Bienvenido a Montalvo </h1>
        <img className={styles.image} src="./login.png" alt="" />
        <p className={styles.description}>
          Por favor ingresar tu cuenta aqui abajo
        </p>
        <Button onClick={() => router.push("/register")}>Registrar</Button>
      </div>
      <div className={styles.gray}>
        <h1 className={styles.titleWhite}>Ingresa Aqui </h1>
        <div className={styles.containerInputs}>
          <Input
            placeholder="Correo Electronico"
            type={"email"}
            onChange={({ target }) => setCorreo(target.value)}
          />
          <Input
            placeholder="Contraseña"
            type="password"
            onChange={({ target }) => setPassword(target.value)}
          />
          <div className={styles.containerButton}>
            <Button
              onClick={(e) => {
                e.preventDefault();
                validarclienteServices(
                  correo,
                  password,
                  setStore,
                  store,
                  setLoader
                );
              }}
            >
              Ingresar
            </Button>
          </div>
        </div>
      </div>
    </ContainerPrimary>
  );
};

export default Home;
