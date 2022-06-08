import { useContext } from "react";
import { Container, Header } from "../components/layouts";
import { DataContext } from "../context/Provider";
import { Title } from "../styled-components";

const Custom404 = () => {
  const { store } = useContext(DataContext);
  return (
    <>
      <Container>
        <Header />
        <img src="/error404.svg" alt="error404" />
        <Title center>Pagina no Encontrada</Title>
      </Container>
    </>
  );
};

export default Custom404;
