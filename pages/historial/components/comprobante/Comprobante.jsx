import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { DataContext } from "../../../../context/Provider";
import { Button, Card, Description, Subtitle } from "../../../../styled-components";

const Comprobante = ({ comprobante }) => {
  const { store } = useContext(DataContext);
  const router = useRouter();
  const handleClickRedirect = () => {
    localStorage.setItem("idComprobanteElectronico", JSON.stringify(comprobante.idComprobanteElectronico));
    router.push("/historial/detalle");
  };
  return (
    <Card center>
      <Description center>{comprobante.fecha}</Description>
      <Subtitle center>{comprobante.NombreServicio}</Subtitle>
      <Description>{comprobante.plataformaDePago}</Description>
      <Button onClick={handleClickRedirect}>Ver Detalle</Button>
    </Card>
  );
};

export default Comprobante;
