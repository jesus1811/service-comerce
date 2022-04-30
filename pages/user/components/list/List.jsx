import Image from "next/image";
import { useContext } from "react";
import { Button } from "../../../../components/common";
import { DataContext } from "../../../../context/Provider";
import styles from "./list.module.scss";

const List = ({ onClick }) => {
  const { store } = useContext(DataContext);
  return (
    <div className={styles.celeste}>
      <h1 className={styles.titleBlue}>Perfil </h1>
      <div className={styles.card}>
        <div className={styles.containerImage}>
          <Image
            className={styles.image}
            src={store.user[0]?.urlFoto}
            alt=""
            width={161}
            height={161}
          />
        </div>

        <h2 className={styles.titleSub}>DNI</h2>
        <p className={styles.description}>{store.user[0]?.DNI}</p>
        <h2 className={styles.titleSub}>Nombre</h2>
        <p className={styles.description}>
          {store.user[0]?.nombreCliente + "  " + store.user[0]?.apellidoCliente}
        </p>

        <h2 className={styles.titleSub}>Correo</h2>
        <p className={styles.description}>{store.user[0]?.correoCliente}</p>
        <Button onClick={onClick}>Cambiar Contraseña</Button>
      </div>
    </div>
  );
};

export default List;
