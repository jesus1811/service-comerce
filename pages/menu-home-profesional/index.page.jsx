import { useState, useEffect, useContext } from "react";
import { Container, HeaderProfesional } from "../../components/layouts";
import { ContainerCard, Loading, Title } from "../../styled-components";
import { getServiciosForProfesionalServices } from "../../services/servicio.service";
import { Servicios } from "./components";
import { DataContext } from "../../context/Provider";
const MenuHomeProfesional = () => {
  const [loader, setLoader] = useState(true);
  const [servicios, setServicios] = useState([]);
  const { store } = useContext(DataContext);
  useEffect(() => {
    const idProfesional = JSON.parse(localStorage.getItem("idProfesional"))[0].idProfesional;
    getServiciosForProfesionalServices(idProfesional, setServicios, setLoader);
  }, [loader]);
  return (
    <Container dark={store.onDark}>
      <HeaderProfesional />
      <Title dark={store.onDark} center> Administración de mis Cursos</Title>
      <ContainerCard>
        {loader ? (
          <Loading dark={store.onDark} />
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
