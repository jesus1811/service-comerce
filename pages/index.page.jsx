import { useRouter } from "next/router";
import { useState, useContext, useEffect } from "react";
import { Container } from "../components/layouts";
import { DataContext } from "../context/Provider";
import useField from "../hooks/useField";
import { validarclienteServices } from "../services/cliente.service";
import { Button, Description, Input, Subtitle, Title, Card } from "../styled-components";
import { ContainerInputs, ContainerButtons, Error, Image } from "./Styled";
const Home = () => {
  const email = useField("email","jesus@gmail.com");
  const password = useField("password","123456");
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
    <Container dark={store.onDark}>
      <Card center dark={store.onDark}>
        <Title center dark={store.onDark}>
          MONTALVO
        </Title>
        <Description dark={store.onDark}>Plataforma de multiservicios</Description>
        <Image src="./login.png" alt="login" />
        <ContainerButtons>
          <Button onClick={handleClickRedirectRegistrar} dark={store.onDark}>Registrar</Button>
          {/* <Button onClick={handleClickProfesional} dark={store.onDark} outline>
            Profesional
          </Button> */}
        </ContainerButtons>
      </Card>
      <Card center dark={store.onDark}>
        <Subtitle dark={store.onDark}>Acceso</Subtitle>
        <ContainerInputs>
          <Input {...email} placeholder="Correo Electronico" dark={store.onDark} value={email.value} />
          <Input {...password} placeholder="Contraseña" dark={store.onDark} />
          {error ? <Error dark={store.onDark}>Usuario y/o contraseña incorrecta</Error> : null}
        </ContainerInputs>
        <ContainerButtons>
          <Button dark={store.onDark} onClick={handleClickValidate}>Ingresar</Button>
        </ContainerButtons>
      </Card>
    </Container>
  );
};

export default Home;
