import { useContext, Suspense, lazy } from "react";
import { Button } from "../../../../components/common";
import { DataContext } from "../../../../context/Provider";
import styles from "./tipoServicio.module.scss";
import { useRouter } from "next/router";

const TipoServicio = ({ tipoServicio }) => {
  const router = useRouter();
  const { store, setStore } = useContext(DataContext);
  const handleClickStorage = () => {
    setStore({ ...store, categoria: tipoServicio.nombreTipoServicio });
    localStorage.setItem(
      "store",
      JSON.stringify({
        ...store,
        categoria: tipoServicio.nombreTipoServicio,
      })
    );
    router.push("/services");
  };
  return (
    <div className={styles.card}>
      <h2 className={store.onDark ? styles.titleCardDark : styles.titleCard}>{tipoServicio.nombreTipoServicio}</h2>
      <img className={styles.images} src={tipoServicio.urlServicio} alt="" width={220} height={220} />
      <Button onClick={handleClickStorage}>Ingresar</Button>
    </div>
  );
};
export default TipoServicio;
