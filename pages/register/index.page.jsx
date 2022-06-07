import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { postClienteServices } from "../../services/cliente.service";
import { app } from "../../services/firebase.service";
import { Container } from "../../components/layouts";
import { DataContext } from "../../context/Provider";
import { Button, Card, Description, Input, Title } from "../../styled-components";
import useField from "../../hooks/useField";
import { ContainerButtons, ContainerFile, ContainerInputs, File, Image, Subtitle } from "./Styled";

const Register = () => {
  const dni = useField("number",8);
  const nombre = useField("text");
  const apellido = useField("text");
  const correo = useField("email");
  const password = useField("password");
  const celular = useField("text",9);
  const [archivo, setArchivo] = useState({});
  const { store } = useContext(DataContext);
  const router = useRouter();
  const clearInputs = () => {
    dni.setValue("");
    nombre.setValue("");
    dni.setValue("");
    celular.setValue("");
    correo.setValue("");
    password.setValue("");
  };
  const handleGuardarCliente = async () => {
    const path = app.storage().ref().child(archivo.name);
    await path.put(archivo);
    postClienteServices(
      dni.value,
      nombre.value,
      apellido.value,
      correo.value,
      password.value,
      celular.value,
      archivo.name,
      router
    );
    clearInputs();
  };
  const handleClickRedirectLogin = () => {
    router.push("/");
  };

  return (
    <Container>
      <Card center>
        <Title center>MONTALVO</Title>
        <Description>plataforma de multiservicios</Description>
        <Image src="./login.png" alt="login" />
        <ContainerButtons>
          <Button onClick={handleClickRedirectLogin}>Ir a Login</Button>
        </ContainerButtons>
      </Card>
      <Card center>
        <Subtitle>Registro</Subtitle>
        <ContainerInputs>
          <Input {...dni} placeholder="DNI" />
          <Input {...nombre} placeholder="Nombre" />
          <Input {...apellido} placeholder="Apellido" />
          <Input {...celular} placeholder="Celular" />
          <Input {...correo} placeholder="Correo Electronico" />
          <Input {...password} placeholder="Contraseña" />
          <ContainerFile>
            <Subtitle>Agregar foto</Subtitle>
            <File
              type="file"
              onChange={(e) => {
                setArchivo(e.target.files[0]);
              }}
            />
          </ContainerFile>
        </ContainerInputs>
        <ContainerButtons>
          <Button onClick={handleGuardarCliente}>Crear</Button>
        </ContainerButtons>
      </Card>
    </Container>
  );
};

export default Register;
