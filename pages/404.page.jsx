import { Container, Header } from "../components/layouts";
import { Title } from "../styled-components";

const Custom404 = () => {
  return (
    <Container>
      <Header />
      <img src="/error404.svg" alt="error404" />
      <Title center>Pagina no Encontrada</Title>
    </Container>
  );
};

export default Custom404;
