import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { Container, HeaderProfesional } from "../../components/layouts";
import useField from "../../hooks/useField";
import { putServiceServices } from "../../services/servicio.service";
import { Button, Card, Input, Title } from "../../styled-components";
import { DataContext } from "../../context/Provider";

const EditarServicio = () => {
  const nombre = useField("text");
  const descripcion = useField("text");
  const precio = useField("number");
  const descuento = useField("number");
  const router = useRouter();
  const { store } = useContext(DataContext);

  const handleClickPutService = () => {
    const { idServicio } = JSON.parse(localStorage.getItem("servicio"));
    putServiceServices(idServicio, nombre.value, descripcion.value, precio.value, descuento.value);
  };
  useEffect(() => {
    const servicio = JSON.parse(localStorage.getItem("servicio"));
    nombre.setValue(servicio.NombreServicio);
    descripcion.setValue(servicio.descripcion);
    precio.setValue(servicio.precio);
    descuento.setValue(servicio.descuento);
  }, []);
  return (
    <Container dark={store.onDark}>
      <HeaderProfesional />
      <Title dark={store.onDark}>Editar Servicio</Title>
      <Card dark={store.onDark}>
        <Input {...nombre} placeholder="Nombre" value={nombre.value} dark={store.onDark} />
        <Input {...descripcion} placeholder="Descripcion" dark={store.onDark} />
        <Input {...precio} placeholder="Precio S/." dark={store.onDark} />
        <Input {...descuento} placeholder="descuento %" dark={store.onDark} />
        <Button onClick={handleClickPutService}>Editar Servicio</Button>
      </Card>
    </Container>
  );
};

export default EditarServicio;
