import { useEffect, useState, useContext } from "react";
import { Container, Header } from "../../components/layouts";
import { DataContext } from "../../context/Provider";
import { getServicioServices } from "../../services/servicio.service";
import { Loading, Title } from "../../styled-components";
import { Servicio } from "./components";
import { ContainerCard } from "./Styled";

const Services = () => {
  const [loader, setLoader] = useState(true);
  const [servicios, setServicios] = useState([]);
  const { store } = useContext(DataContext);
  useEffect(() => {
    getServicioServices(setServicios, setLoader);
  }, []);

  return (
    <Container dark={store.onDark}>
      <Header />
      <Title center dark={store.onDark}>{store.categoria}</Title>
      {loader ? (
        <Loading dark={store.onDark}/>
      ) : (
        <ContainerCard>
          {servicios.map((servicio, index) => {
            return servicio.NombreTipoServicio == store.categoria && <Servicio servicio={servicio} key={index} />;
          })}
        </ContainerCard>
      )}
    </Container>
  );
};

export default Services;
