import { useState, useEffect } from "react";
import { Container, HeaderProfesional } from "../../components/layouts";
import { Loading, Title } from "../../styled-components";
import { getServiciosForProfesionalServices } from "../../services/servicio.service";
import { Servicios } from "./components";
import { ContainerCard } from "./styled";

const MenuHomeProfesional = () => {
  const [loader, setLoader] = useState(true);
  const [servicios, setServicios] = useState([]);
  useEffect(() => {
    const idProfesional = JSON.parse(localStorage.getItem("idProfesional"))[0].idProfesional;
    getServiciosForProfesionalServices(idProfesional, setServicios, setLoader);
  }, []);
  return (
    <Container>
      <HeaderProfesional />
      <Title center> Administración de mis Cursos</Title>
      <ContainerCard>
        {loader ? (
          <Loading />
        ) : (
          <>
            {servicios.map((servicio, index) => {
              return (
                <>
                  <Servicios servicio={servicio} key={index} />
                </>
              );
            })}
          </>
        )}
      </ContainerCard>
    </Container>
  );
};

export default MenuHomeProfesional;
