import { useContext } from "react";
import { useRouter } from "next/router";
import { Button, Card, Description, Subtitle } from "../../../../styled-components";
import { DataContext } from "../../../../context/Provider";

const Comprobante = ({ comprobante }) => {
  const router = useRouter();
  const { store } = useContext(DataContext);
  const handleClickRedirect = () => {
    localStorage.setItem("idComprobanteElectronico", JSON.stringify(comprobante.idComprobanteElectronico));
    router.push("/historial/detalle");
  };
  return (
    <Card center dark={store.onDark}>
      <Description center dark={store.onDark}>
        {comprobante.fecha}
      </Description>
      <Subtitle center dark={store.onDark}>
        {comprobante.NombreServicio}
      </Subtitle>
      <Description dark={store.onDark}>{comprobante.plataformaDePago}</Description>
      <Button onClick={handleClickRedirect} dark={store.onDark}>Ver Detalle</Button>
    </Card>
  );
};

export default Comprobante;
