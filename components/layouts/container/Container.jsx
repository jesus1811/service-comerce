import Head from "next/head";
import { Content } from "./Styled";

const Container = ({ children, dark }) => {
  return (
    <>
      <Head>
        <title>Montalvo</title>
        <meta name="description" content="platforma multiservicio montalvo" />
        <meta name="keywords" content="servicio, multiservicio, terapia, cursos, tecnologia, capacitacion" />
        <meta name="author" content="JesuDev" />
      </Head>
      <Content dark={dark}>{children}</Content>
    </>
  );
};
export default Container;
