import { useRouter } from "next/router";
import { useState, useContext, useEffect } from "react";
import { Container } from "../components/layouts";
import { DataContext } from "../context/Provider";
import useField from "../hooks/useField";
import { validarclienteServices } from "../services/cliente.service";
import { Button, Description, Input, Subtitle, Title, Card } from "../styled-components";
import { ContainerButtons, ContainerInputs, Error, Image } from "./Styles";

const Home = () => {
  const email = useField("email");
  const password = useField("password");
  const [loader, setLoader] = useState(true);
  const { store, setStore } = useContext(DataContext);
  const [error, setError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    store?.user.length != 0 && router.push("/menu-home");
    setLoader(false);
  }, [loader]);
  const handleClickValidate = (e) => {
    e.preventDefault();
    validarclienteServices(email.value, password.value, setStore, store, setLoader, setError);
  };
  const handleClickProfesional = (e) => {
    e.preventDefault();
    router.push("/profesional");
  };
  const handleClickRedirectRegistrar = () => {
    router.push("/register");
  };

  return (
    <Container>
      <Card center>
        <Title center>MONTALVO edit</Title>
        <Description>plataforma de multiservicios</Description>
        <Image src="./login.png" alt="login" />
        <ContainerButtons>
          <Button onClick={handleClickRedirectRegistrar}>Registrar</Button>
          <Button onClick={handleClickProfesional} variant>
            Profesional
          </Button>
        </ContainerButtons>
      </Card>
      <Card center>
        <Subtitle>Acceso</Subtitle>
        <ContainerInputs>
          <Input {...email} placeholder="Correo Electronico" />
          <Input {...password} placeholder="Contraseña" />
          {error ? <Error>Usuario y/o contraseña incorrecta</Error> : null}
        </ContainerInputs>
        <ContainerButtons>
          <Button onClick={handleClickValidate}>Ingresar</Button>
        </ContainerButtons>
      </Card>
    </Container>
  );
};

export default Home;
