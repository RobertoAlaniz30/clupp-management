import React from "react";
import "./styles.css";
const Layout = (props) => {
  return (
    <>
      <header>
        <div className="logo__container">
          <img
            src="https://images.typeform.com/images/thQhDFGvsdi7/image/default"
            alt="aqui va una imaen"
          />
        </div>
      </header>
      <main className="main__container">{props.children}</main>
    </>
  );
};

export default Layout;
