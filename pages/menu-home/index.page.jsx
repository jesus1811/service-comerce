import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { Container, Header } from "../../components/layouts";
import { getTipoServices } from "../../services/tipoServicio.service";
import { TipoServicio } from "./components";
import { ContainerCard, Loading, Title } from "../../styled-components";
import { DataContext } from "../../context/Provider";

const MenuHome = () => {
  const [tipoServicios, setTipoServicios] = useState([]);
  const [loader, setLoader] = useState(true);
  const { store } = useContext(DataContext);
  const router = useRouter();
  useEffect(() => {
    const cliente = JSON.parse(localStorage.getItem("cliente")) || [];
    cliente.length == 0 && router.push("/");
    getTipoServices(setTipoServicios, setLoader);
  }, [loader]);
  return (
    <Container dark={store.onDark}>
      <Header />
      <Title center dark={store.onDark}>Elija su Categoria de Interes</Title>
      <ContainerCard>
        {loader ? (
          <Loading dark={store.onDark}/>
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
