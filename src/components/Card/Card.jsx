import React from "react";
import "./styles.css";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "../Button/Button";
import { db } from "../../firebase";

const Card = (props) => {
  const Delete = async (id) => {
    const vehicleRef = db.collection("vehicles").doc(id);
    await vehicleRef.update({ deleted: true });
  };

  return (
    <div className="card-item__container">
      <div className="card-img__container">
        <Button
          handleEvent={() => Delete(props.id)}
          className="button2"
          style={{ backgroundColor: "red" }}
        >
          <DeleteIcon />
        </Button>
        <img src={props.img} alt="" />
      </div>
      <div className="info__container">
        <p>{props.brand}</p>
        <p>{props.model}</p>
        <p>{props.year}</p>
      </div>
    </div>
  );
};

export default Card;
