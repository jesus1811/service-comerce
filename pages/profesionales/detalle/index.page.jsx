import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { Container, Header } from "../../../components/layouts";
import { DataContext } from "../../../context/Provider";
import { getProfesionalServices } from "../../../services/profesional.service";
import { getServiciosForProfesionalServices } from "../../../services/servicio.service";
import { getClienteForProfesionalServices } from "../../../services/cliente.service";
import { ContainerCard, Loading, Title } from "../../../styled-components";
import { Clientes, ProfesionalDetalle, Servicios } from "../components";

const Detalle = () => {
  const [profesional, setProfesional] = useState([]);
  const [serviciosProfesional, setServiciosProfesional] = useState([]);
  const [loader, setLoader] = useState(true);
  const [loaderService, setLoaderService] = useState(true);
  const [loaderClientes, setLoaderClientes] = useState(true);
  const [clientes, setClientes] = useState([]);
  const { store } = useContext(DataContext);
  const router = useRouter();
  useEffect(() => {
    const idProfesional = JSON.parse(localStorage.getItem("idProfesional"));
    getProfesionalServices(idProfesional, setProfesional, setLoader);
    getServiciosForProfesionalServices(idProfesional, setServiciosProfesional, setLoaderService);
    getClienteForProfesionalServices(idProfesional, setClientes, setLoaderClientes);
  }, []);
  return (
    <Container>
      <Header />
      <Title center>Detalle provedor</Title>
      {loader ? (
        <Loading />
      ) : (
        <>
          {profesional.map((profesional, index) => {
            return <ProfesionalDetalle profesional={profesional} key={index} />;
          })}
        </>
      )}

      <Title center>¿Que servicios ofrezco?</Title>
      <ContainerCard>
        {loaderService ? (
          <Loading />
        ) : (
          <>
            {serviciosProfesional.map((servicio, index) => {
              return <Servicios servicio={servicio} key={index} />;
            })}
          </>
        )}
      </ContainerCard>
      <Title center>¿Que Clientes Confian en Mi?</Title>
      <ContainerCard>
        {loaderClientes ? (
          <Loading />
        ) : (
          <>
            {clientes.map((cliente, index) => {
              return <Clientes cliente={cliente} key={index} />;
            })}
          </>
        )}
      </ContainerCard>
    </Container>
  );
};

export default Detalle;
