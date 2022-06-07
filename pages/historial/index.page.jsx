import { useState, useEffect, useContext } from "react";
import { Loading } from "../../components/common";
import { Container, Header } from "../../components/layouts";
import { DataContext } from "../../context/Provider";
import { getComprobanteServices } from "../../services/comprobante.service";
import { Title } from "../../styled-components";
import { Comprobante } from "./components";
import { ContainerCard } from "./Styled";

const Historial = () => {
  const [comprobantes, setComprobantes] = useState([]);
  const [loader, setLoader] = useState(true);
  const { store } = useContext(DataContext);
  useEffect(() => {
    const { idCliente } = JSON.parse(localStorage.getItem("store")).user[0];
    getComprobanteServices(idCliente, setComprobantes, setLoader);
  }, [loader]);
  return (
    <Container>
      <Header />
      <Title center>Historial de Servicios Solicitados</Title>
      {loader ? (
        <Loading />
      ) : (
        <>
          <ContainerCard>
            {comprobantes.map((comprobante, index) => {
              return <Comprobante comprobante={comprobante} key={index} />;
            })}
          </ContainerCard>
        </>
      )}
    </Container>
  );
};

export default Historial;
