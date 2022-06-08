import { useState, useEffect } from "react";
import { Container, HeaderProfesional } from "../../components/layouts";
import { ContainerCard, Loading, Title } from "../../styled-components";
import { getServiciosForProfesionalServices } from "../../services/servicio.service";
import { Servicios } from "./components";
const MenuHomeProfesional = () => {
  const [loader, setLoader] = useState(true);
  const [servicios, setServicios] = useState([]);
  useEffect(() => {
    const idProfesional = JSON.parse(localStorage.getItem("idProfesional"))[0].idProfesional;
    getServiciosForProfesionalServices(idProfesional, setServicios, setLoader);
  }, [loader]);
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
                  <Servicios servicio={servicio} key={index} setLoader={setLoader} />
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
