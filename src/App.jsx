import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Footer } from "./components";
import { CarDetail, Cars, Home, Login, SignUp, Order } from "./pages";
import { ProtectedRoutes, PublicRoutes } from "./routes";

function App() {
  const [cars, setCars] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PublicRoutes />}>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route index path="/order" element={<Order />} />
          <Route
            exact
            path="/cars"
            element={
              <Cars
                cars={cars}
                setCars={setCars}
                isFiltered={isFiltered}
                setIsFiltered={setIsFiltered}
              />
            }
          />
          <Route
            index
            path="/car/:carId"
            element={
              <CarDetail
                cars={cars}
                setCars={setCars}
                isFiltered={isFiltered}
              />
            }
          />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
