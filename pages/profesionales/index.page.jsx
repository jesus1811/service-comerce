import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { Container, Header } from "../../components/layouts";
import { DataContext } from "../../context/Provider";
import { getProfesionalesServices } from "../../services/profesional.service";
import {  ContainerCard, Loading, Title } from "../../styled-components";
import { Profesional } from "./components";

const Profesionales = () => {
  const [profesionales, setProfesionales] = useState([]);
  const [loader, setLoader] = useState(true);
  const { store } = useContext(DataContext);
  const router = useRouter();
  const handleClickRedirect = (idProfesional) => {
    localStorage.setItem("idProfesional", JSON.stringify(idProfesional));
    router.push("/profesionales/detalle");
  };
  useEffect(() => {
    getProfesionalesServices(setProfesionales, setLoader);
  }, [loader]);
  return (
    <Container>
      <Header />
      <Title>Provedores</Title>
      <ContainerCard>
        {loader ? (
          <Loading />
        ) : (
          <>
            {profesionales.map((profesional, index) => {
              return <Profesional key={index} profesional={profesional} handleClickRedirect={handleClickRedirect} />;
            })}
          </>
        )}
      </ContainerCard>
    </Container>
  );
};

export default Profesionales;
