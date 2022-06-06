import { useEffect } from "react";
import { useRouter } from "next/router";
import { Container, HeaderProfesional } from "../../components/layouts";
import useField from "../../hooks/useField";
import { putServiceServices } from "../../services/servicio.service";
import { Button, Card, Input, Title } from "../../styled-components";

const EditarServicio = () => {
  const nombre = useField("text");
  const descripcion = useField("text");
  const precio = useField("number");
  const descuento = useField("number");
  const router = useRouter();

  const handleClickPutService = () => {
    const { idServicio } = JSON.parse(localStorage.getItem("servicio"));
    putServiceServices(idServicio, nombre.value, descripcion.value, precio.value, descuento.value);
    router.push("/menu-home-profesional")
  };
  useEffect(() => {
    const servicio = JSON.parse(localStorage.getItem("servicio"));
    nombre.setValue(servicio.NombreServicio);
    descripcion.setValue(servicio.descripcion);
    precio.setValue(servicio.precio);
    descuento.setValue(servicio.descuento);
  }, []);
  return (
    <Container>
      <HeaderProfesional />
      <Title>Editar Servicio</Title>
      <Card>
        <Input {...nombre} placeholder="Nombre" value={nombre.value} />
        <Input {...descripcion} placeholder="Descripcion" />
        <Input {...precio} placeholder="Precio S/." />
        <Input {...descuento} placeholder="descuento %" />
        <Button onClick={handleClickPutService}>Editar Servicio</Button>
      </Card>
    </Container>
  );
};

export default EditarServicio;
