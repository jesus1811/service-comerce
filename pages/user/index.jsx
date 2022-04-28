import { useContext } from "react";
import Image from "next/image";
import { ContainerPrimary } from "../../components/common";
import { Header } from "../../components/layouts";
import { DataContext } from "../../context/Provider";
import styles from "./user.module.scss";

const User = () => {
  const { store } = useContext(DataContext);
  return (
    <ContainerPrimary>
      <Header />
      <div className={styles.celeste}>
        <h1 className={styles.titleBlue}>Perfil </h1>

        {store.user.map((n, index) => {
          return (
            <div>
              <img
                className={styles.image}
                src={store.user[0]?.urlFoto}
                alt=""
              />
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
            </div>
            // <>
            //   <p className={styles.description}>{store.user[0].DNI}</p>
            //   <p className={styles.description}>
            //     {store.user[0].nombreCliente}
            //   </p>
            //   <p className={styles.description}>
            //     {store.user[0].apellidoCliente}
            //   </p>
            //   <p className={styles.description}>
            //     {store.user[0].correoCliente}
            //   </p>
            // </>
          );
        })}

        {/* <Button onClick={() => router.push("/register")}>Registrar</Button> */}
      </div>
      {/* <Header />
      <h1>Perfil</h1>
      {store.user.map((n, index) => {
        return (
          <div key={index}>
            <h1>{store.user[0].DNI}</h1>
            <h1>{store.user[0].nombreCliente}</h1>
            <h1>{store.user[0].apellidoCliente}</h1>
            <h1>{store.user[0].correoCliente}</h1>
            <img src={store.user[0]?.urlFoto} alt="" width={100} height={100} />
          </div>
        );
      })} */}
    </ContainerPrimary>
  );
};

export default User;
