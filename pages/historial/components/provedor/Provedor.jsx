import { useContext } from "react";
import { DataContext } from "../../../../context/Provider";
import { Card, Description, Subtitle } from "../../../../styled-components";
import { Image } from "./Styled";

const Provedor = ({ comprobanteDetalle }) => {
  const { store } = useContext(DataContext);
  return (
    <Card dark={store.onDark}>
      <Subtitle center dark={store.onDark}>Provedor</Subtitle>
      <Image src={comprobanteDetalle[0]?.fotoProfesional} alt={comprobanteDetalle[0]?.nombreProfesional} />
      <Subtitle dark={store.onDark}>
        {comprobanteDetalle[0]?.nombreProfesional} {comprobanteDetalle[0]?.apellidoProfesional}
      </Subtitle>
      <Description dark={store.onDark}>Codigo Provedor: {comprobanteDetalle[0]?.idProfesional}</Description>
      <Description dark={store.onDark}>Celular: {comprobanteDetalle[0]?.celularProfesional}</Description>
      <Description dark={store.onDark}>Docimilio: {comprobanteDetalle[0]?.direccionDomicilio}</Description>
    </Card>
  );
};

export default Provedor;
