import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Footer } from "./components";
import { CarDetail, Cars, Home, Login, SignUp } from "./pages";
import { userLogin } from "./services/auth";
import Protected from "./components/Protected/Protected";

function App() {
  const [cars, setCars] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    userLogin();
  }, []);

  return (
    <>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route
          exact
          path="/cars"
          element={
            <Protected
              component={
                <Cars
                  cars={cars}
                  setCars={setCars}
                  isFiltered={isFiltered}
                  setIsFiltered={setIsFiltered}
                />
              }
            />
          }
        />
        <Route
          index
          path="/car/:carId"
          element={
            <Protected
              component={
                <CarDetail
                  cars={cars}
                  setCars={setCars}
                  isFiltered={isFiltered}
                />
              }
            />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
