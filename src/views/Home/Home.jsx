import React, { useState } from "react";
import { db, storageRef } from "../../firebase";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import InputFile from "../../components/InputFile/InputFile";
import swal from "sweetalert";
import "./styles.css";
const Home = () => {
  const initialValues = {
    brand: "",
    model: "",
    year: 0,
    frontPictureUrl: "",
    deleted: false,
    timeStamp: new Date().getTime(),
  };
  const [data, setData] = useState(initialValues);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value.toUpperCase() });
  };

  const handleInfo = async (e) => {
    e.preventDefault();
    await db.collection("vehicles").doc().set(data);
    swal({
      title: "Automovil añadido",
      icon: "success",
      button: "Aceptar",
    });
    setData({ ...data, brand: "", model: "", year: 0, deleted: false });
  };

  const handleFile = async (e) => {
    const file = e.target.files[0];
    const filePath = storageRef.child(file.name);
    await filePath.put(file);
    const url = await filePath.getDownloadURL();
    setData({ ...data, frontPictureUrl: url });
  };

  return (
    <>
      <h1 style={{ alignSelf: "center" }}>Añadir Vehiculo</h1>
      <Form className="form-home--view">
        <div className="input-file__wrap">
          <InputFile handleEvent={handleFile} />
        </div>
        <div className="inputs__wrap">
          <Input
            type="text"
            name="brand"
            value={data.brand}
            handleChange={handleChange}
            data={data}
            setData={setData}
          >
            Marca
          </Input>

          <Input
            handleChange={handleChange}
            data={data}
            setData={setData}
            type="text"
            name="model"
            value={data.model}
          >
            Modelo
          </Input>
          <Input
            handleChange={handleChange}
            data={data}
            setData={setData}
            type="number"
            name="year"
            value={data.year}
          >
            Año
          </Input>
          <Button handleEvent={handleInfo} className="button__styles">
            Agregar Vehiculo
          </Button>
        </div>
      </Form>
    </>
  );
};

export default Home;
