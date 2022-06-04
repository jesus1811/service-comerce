import { useContext, Suspense, lazy } from "react";
import { Button, SubTitle } from "../../../../components/common";
import { DataContext } from "../../../../context/Provider";
import styles from "./tipoServicio.module.scss";
import { useRouter } from "next/router";
import { Card } from "../../../../components/layouts";

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
    <Card>
      <SubTitle>{tipoServicio.nombreTipoServicio}</SubTitle>
      <img className={styles.images} src={tipoServicio.urlServicio} alt="" width={220} height={220} />
      <Button onClick={handleClickStorage}>Ingresar</Button>
    </Card>
  );
};
export default TipoServicio;
