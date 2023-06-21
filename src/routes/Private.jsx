import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../middlewares/useAuth";


export default function Private() {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate replace to={"/"} />;
}
