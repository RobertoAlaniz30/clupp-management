import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home/Home";
import Login from "../views/Login/Login";
import Register from "../views/Register/Register";
import ListVehicles from "../views/ListVehicles/ListVehicles";
import ProtectedRoutes from "../components/ProtectedRoutes";
import Layout from "../components/Layout/Layout";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        ></Route>
        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        ></Route>
        <Route
          path="/detail"
          element={
            <Layout>
              <ListVehicles />
            </Layout>
          }
        ></Route>
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <Layout>
                <Home />
              </Layout>
            </ProtectedRoutes>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
