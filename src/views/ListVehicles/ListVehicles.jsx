import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";
import "./styles.css";

const ListVehicles = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  const getData = () => {
    db.collection("vehicles").onSnapshot((querySnapshot) => {
      const a = [];
      querySnapshot.forEach((element) => {
        a.push({ ...element.data(), id: element.id });
      });
      const b = a.filter((item) => item.deleted === false);
      setData(b);
      setData2(b);
    });
  };

  const handleSearch = (e) => {
    if (!e.target.value.length) {
      setData2(data);
    } else {
      const array2 = data.filter((doc) => {
        if (
          doc.brand.includes(e.target.value.toUpperCase()) ||
          doc.year.includes(e.target.value.toUpperCase()) ||
          doc.model.includes(e.target.value.toUpperCase())
        )
          return doc;
      });
      setData2(array2);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <section className="principal__information">
        <Input
          type="text"
          name="search"
          placeHolder="Ingresa la marca, modelo u año"
          handleChange={handleSearch}
        >
          Busqueda
        </Input>
        <section className="cards__container">
          {data2.map((elemen) => (
            <Card
              id={elemen.id}
              img={elemen.frontPictureUrl}
              brand={elemen.brand}
              model={elemen.model}
              year={elemen.year}
              key={elemen.id}
            />
          ))}
        </section>
      </section>
    </>
  );
};

export default ListVehicles;
