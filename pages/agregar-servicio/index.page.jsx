import { useState, useEffect, useContext } from "react";
import { Container, HeaderProfesional } from "../../components/layouts";
import { DataContext } from "../../context/Provider";
import useField from "../../hooks/useField";
import { app } from "../../services/firebase.service";
import { postServicioServcices } from "../../services/servicio.service";
import { getTipoServices } from "../../services/tipoServicio.service";
import { Button, Card, Input, Title } from "../../styled-components";
import { ContainerFile, File, Select, Subtitle } from "./Styled";
// import { ContainerFile, File, Select, Subtitle } from "./Styled";

const AgregarServicio = () => {
  const nombre = useField("text");
  const descripcion = useField("text");
  const precio = useField("number");
  const [loader, setLoader] = useState(true);
  const [tipo, setTipo] = useState(true);
  const [archivo, setArchivo] = useState({});
  const [tiposServicios, setTiposServicios] = useState([]);
  const { store } = useContext(DataContext);
  const handleClickAddService = async () => {
    const path = app.storage().ref().child(archivo.name);
    await path.put(archivo);
    postServicioServcices(
      nombre.value,
      descripcion.value,
      tipo,
      precio.value,
      store.userProfesional[0].idProfesional,
      archivo.name
    );
  };
  useEffect(() => {
    getTipoServices(setTiposServicios, setLoader);
  }, []);
  return (
    <Container>
      <HeaderProfesional />
      <Title>Agregar Servicio</Title>
      <Card>
        <Input {...nombre} placeholder="Nombre" value={nombre.value} />
        <Input {...descripcion} placeholder="Descripcion" />
        <Select onChange={(e) => setTipo(e.target.value)} defaultValue={null}>
          <option selected disabled>
            Tipo de Servicio
          </option>
          {tiposServicios.map((tipoServicio, index) => {
            return (
              <option key={index} value={tipoServicio.idTipoServicio}>
                {tipoServicio.nombreTipoServicio}
              </option>
            );
          })}
        </Select>
        <Input {...precio} placeholder="Precio S/." />
        <ContainerFile>
          <Subtitle>Agregar foto</Subtitle>
          <File
            type="file"
            onChange={(e) => {
              setArchivo(e.target.files[0]);
            }}
          />
        </ContainerFile>
        <Button onClick={handleClickAddService}>Agregar Servicio</Button>
      </Card>
    </Container>
  );
};

export default AgregarServicio;
