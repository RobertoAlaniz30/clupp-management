import React, { useState } from "react";
import "./styles.css";

const InputFile = (props) => {
  const [file, setFile] = useState(null);
  const { handleEvent } = props;

  const uploadSingleFile = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    handleEvent(e);
  };
  let imgPreview;
  if (!file) {
    imgPreview = (
      <img
        className="img"
        src="https://dues.com.mx/duesAdmin/assets/web-page/logos/defaultSF.png"
        alt=""
      />
    );
  } else {
    imgPreview = <img className="img" src={file} alt="" />;
  }

  return (
    <label className="custom-file-upload">
      {imgPreview}
      <input type="file" className="form-control" onChange={uploadSingleFile} />
    </label>
  );
};
export default InputFile;
