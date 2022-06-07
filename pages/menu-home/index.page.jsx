import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Container, Header } from "../../components/layouts";
import { getTipoServices } from "../../services/tipoServicio.service";
import { TipoServicio } from "./components";
import {  Loading, Title } from "../../styled-components";
import { ContainerCard } from "./styled";

const MenuHome = () => {
  const [tipoServicios, setTipoServicios] = useState([]);
  const [loader, setLoader] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const cliente = JSON.parse(localStorage.getItem("cliente")) || [];
    cliente.length == 0 && router.push("/");
    getTipoServices(setTipoServicios, setLoader);
  }, [loader]);
  return (
    <Container>
      <Header />
      <Title center>Elija su Categoria de Interes</Title>
      <ContainerCard>
        {loader ? (
          <Loading />
        ) : (
          <>
            {tipoServicios.map((tipoServicio, index) => {
              return <TipoServicio tipoServicio={tipoServicio} key={index} />;
            })}
          </>
        )}
      </ContainerCard>
    </Container>
  );
};

export default MenuHome;
