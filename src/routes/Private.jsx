import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../useContext/useAuth";


export default function Private() {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate replace to={"/"} />;
}
