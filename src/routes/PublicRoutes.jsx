import { Outlet, Navigate } from "react-router-dom";

const isAuth = () => {
  const user = localStorage.getItem("userInfo");
  return user ? true : false;
};

const PublicRoutes = () => {
  const user = isAuth();
  return user ? <Navigate to="/" /> : <Outlet />;
};
export default PublicRoutes;
