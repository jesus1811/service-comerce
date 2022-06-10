import { useContext } from "react";
import { DataContext } from "../../../../context/Provider";
import { Card, Description, Subtitle } from "../../../../styled-components";
import { Image } from "./Styled";
const Cliente = ({ comprobanteDetalle }) => {
  const { store } = useContext(DataContext);
  return (
    <Card dark={store.onDark}>
      <Subtitle center dark={store.onDark}>
        Cliente
      </Subtitle>
      <Image src={comprobanteDetalle[0]?.urlFoto} alt="" />
      <Subtitle dark={store.onDark}>
        {comprobanteDetalle[0]?.nombreCliente} {comprobanteDetalle[0]?.apellidoCliente}
      </Subtitle>
      <Description dark={store.onDark}>Codigo Cliente: {comprobanteDetalle[0]?.idCliente}</Description>
      <Description dark={store.onDark}>Celular: {comprobanteDetalle[0]?.celularCliente}</Description>
    </Card>
  );
};

export default Cliente;
