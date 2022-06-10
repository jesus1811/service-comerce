import { useRouter } from "next/router";
import { useState, useContext, useEffect } from "react";
import { Container } from "../../components/layouts";
import { DataContext } from "../../context/Provider";
import useField from "../../hooks/useField";
import { validarProfesionalServices } from "../../services/profesional.service";
import { Button, Card, Description, Input, Subtitle, Title } from "../../styled-components";
import { ContainerButtons, ContainerInputs, Image, Error } from "./Styled";

const Profesional = () => {
  const email = useField("email");
  const password = useField("password");
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);
  const { store, setStore } = useContext(DataContext);
  const router = useRouter();

  useEffect(() => {
    store?.userProfesional.length != 0 && router.push("/menu-home-profesional");
    setLoader(false);
  }, [loader]);
  const handleClickValidate = (e) => {
    e.preventDefault();
    validarProfesionalServices(email.value, password.value, setStore, store, setLoader, setError);
  };
  const handleClickCliente = (e) => {
    e.preventDefault();
    router.push("/");
  };
  const handleClickRedirectRegistrar = () => {
    router.push("/register-profesional");
  };

  return (
    <Container dark={store.onDark}>
      <Card center dark={store.onDark}>
        <Title center dark={store.onDark}>MONTALVO</Title>
        <Description dark={store.onDark}>plataforma de multiservicios</Description>
        <Image src="./login.png" alt="login" />
        <ContainerButtons>
          <Button onClick={handleClickRedirectRegistrar}>Registrar</Button>
          <Button onClick={handleClickCliente} outline>
            Cliente
          </Button>
        </ContainerButtons>
      </Card>
      <Card center dark={store.onDark}>
        <Subtitle dark={store.onDark}>Acceso</Subtitle>
        <ContainerInputs>
          <Input dark={store.onDark} {...email} placeholder="Correo Electronico" />
          <Input dark={store.onDark} {...password} placeholder="Contraseña" />
          {error ? <Error dark={store.onDark}>Usuario y/o contraseña incorrecta</Error> : null}
        </ContainerInputs>
        <ContainerButtons>
          <Button onClick={handleClickValidate}>Ingresar</Button>
        </ContainerButtons>
      </Card>
    </Container>
  );
};

export default Profesional;
