import { useState } from "react";
import { useContext } from "react";
import { Button, ContainerPrimary, Input } from "../../components/common";
import { Header } from "../../components/layouts";
import { DataContext } from "../../context/Provider";
import { putPasswordCliente } from "../../services/cliente";
import styles from "./user.module.scss";

const User = () => {
  const { store } = useContext(DataContext);
  const [password, setPassword] = useState("");
  const [onUserEdit, setOnUserEdit] = useState(false);
  const editPassword = () => {
    putPasswordCliente(parseInt(store.user[0].idCliente), password);
    setPassword("");
  };
  return (
    <ContainerPrimary>
      <Header />
      {onUserEdit ? (
        <div className={styles.celeste}>
          <h1 className={styles.titleBlue}>Editar Contraseña</h1>

          <div className={styles.card}>
            <Input
              type="text"
              placeholder="Contraseña Nueva"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <Button onClick={editPassword}>Confirmar</Button>
          </div>
        </div>
      ) : (
        <div className={styles.celeste}>
          <h1 className={styles.titleBlue}>Perfil </h1>

          {store.user.map((n, index) => {
            return (
              <div className={styles.card}>
                <div className={styles.containerImage}>
                  <img
                    className={styles.image}
                    src={store.user[0]?.urlFoto}
                    alt=""
                  />
                </div>

                <h2 className={styles.titleSub}>DNI</h2>
                <p className={styles.description}>{store.user[0].DNI}</p>
                <h2 className={styles.titleSub}>Nombre</h2>
                <p className={styles.description}>
                  {store.user[0].nombreCliente +
                    "  " +
                    store.user[0].apellidoCliente}
                </p>

                <h2 className={styles.titleSub}>Correo</h2>
                <p className={styles.description}>
                  {store.user[0].correoCliente}
                </p>
                <Button onClick={() => setOnUserEdit(true)}>
                  Cambiar Contraseña
                </Button>
              </div>
            );
          })}
        </div>
      )}
    </ContainerPrimary>
  );
};

export default User;
