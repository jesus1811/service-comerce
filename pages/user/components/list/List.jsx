import { useContext } from "react";
import { Button } from "../../../../components/common";
import { DataContext } from "../../../../context/Provider";
import styles from "./list.module.scss";

const List = ({ onClick }) => {
  const { store } = useContext(DataContext);
  return (
    <div className={store.onDark ? styles.cardDark : styles.card}>
      <h1 className={styles.title}>Perfil </h1>
      <div className={styles.containerImage}>
        <img className={styles.image} src={store.user[0]?.urlFoto} alt="" width={161} height={161} />
      </div>
      <h2 className={styles.titleSub}>DNI</h2>
      <p className={styles.description}>{store.user[0]?.DNI}</p>
      <h2 className={styles.titleSub}>Nombre</h2>
      <p className={styles.description}>{store.user[0]?.nombreCliente + "  " + store.user[0]?.apellidoCliente}</p>

      <h2 className={styles.titleSub}>Correo</h2>
      <p className={styles.description}>{store.user[0]?.correoCliente}</p>
      <Button onClick={onClick}>Cambiar Contraseña</Button>
    </div>
  );
};

export default List;
