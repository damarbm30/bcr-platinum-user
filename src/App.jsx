import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Footer, Navbar } from "./components";
import { CarDetail, Cars, Home } from "./pages";
import { userLogin } from "./services/auth";

function App() {
  const [cars, setCars] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    userLogin();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route
          index
          path="/cars"
          element={<Cars cars={cars} setCars={setCars} isFiltered={isFiltered} setIsFiltered={setIsFiltered} />}
        />
        <Route index path="/car/:carId" element={<CarDetail cars={cars} setCars={setCars} isFiltered={isFiltered} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
