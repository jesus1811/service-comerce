import { useContext, useState, useEffect } from "react";
import { Container, Header } from "../../../components/layouts";
import { DataContext } from "../../../context/Provider";
import { getComprobanteByIdServices } from "../../../services/comprobante.service";
import { ContainerCard, Title } from "../../../styled-components";
import { Cliente, Provedor, Servicio } from "../components";

const Detalle = () => {
  const { store } = useContext(DataContext);
  const [comprobanteDetalle, setComprobanteDetalle] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const idComprobante = JSON.parse(localStorage.getItem("idComprobanteElectronico"));
    getComprobanteByIdServices(idComprobante, setComprobanteDetalle, setLoader);
  }, []);
  return (
    <Container dark={store.onDark}>
      <Header />
      <Title dark={store.onDark}>Boleta de Pago</Title>
      <ContainerCard>
        <Provedor comprobanteDetalle={comprobanteDetalle} />
        <Cliente comprobanteDetalle={comprobanteDetalle} />
        <Servicio comprobanteDetalle={comprobanteDetalle} />
      </ContainerCard>
    </Container>
  );
};

export default Detalle;
