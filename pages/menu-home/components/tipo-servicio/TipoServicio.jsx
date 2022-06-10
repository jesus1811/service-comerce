import { useContext } from "react";
import { useRouter } from "next/router";
import { Button, Card, Subtitle } from "../../../../styled-components";
import { Images } from "./Styled";
import { DataContext } from "../../../../context/Provider";

const TipoServicio = ({ tipoServicio }) => {
  const router = useRouter();
  const { store,setStore } = useContext(DataContext);

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
    <Card center dark={store.onDark}>
      <Subtitle dark={store.onDark} center>{tipoServicio.nombreTipoServicio}</Subtitle>
      <Images src={tipoServicio.urlServicio} alt={tipoServicio.nombreTipoServicio} />
      <Button onClick={handleClickStorage} dark={store.onDark}>Ingresar</Button>
    </Card>
  );
};
export default TipoServicio;
