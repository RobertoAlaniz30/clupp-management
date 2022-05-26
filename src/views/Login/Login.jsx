import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const { logIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await logIn(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <Form>
      <h1 style={{ alignSelf: "center" }}>Iniciar Sesion</h1>
      <Input
        type="email"
        name="email"
        user={user}
        setData={setUser}
        handleChange={handleChange}
      >
        Email
      </Input>
      <Input
        type="password"
        name="password"
        user={user}
        setData={setUser}
        handleChange={handleChange}
      >
        Password
      </Input>
      <Button handleEvent={handleSubmit}>Iniciar Sesion</Button>

      {error && <p style={{ color: "red" }}>WRONG PASSWORD</p>}
    </Form>
  );
};

export default Login;
