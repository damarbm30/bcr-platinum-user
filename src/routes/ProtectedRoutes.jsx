import { Outlet, Navigate } from "react-router-dom";
import { Navbar } from "../components";

const isAuth = () => {
  const user = localStorage.getItem("userInfo");
  console.log("line 6", user);
  return user ? true : false;
};

const ProtectedRoutes = () => {
  const user = isAuth();
  return user ? (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoutes;
