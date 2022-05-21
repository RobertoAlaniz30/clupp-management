import React, { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    //console.log(e.target.name, e.target.value)
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(user);

  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        placeholder="youremail@email.com"
        onChange={handleChange}
      />

      <label htmlFor="email">Email</label>
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <button >Submit</button>
    </form>
  );
};

export default Register;
