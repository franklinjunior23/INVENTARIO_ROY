import { Route, Routes } from "react-router-dom";
import Sigup from "./views/Sigup";
import { Authprovider } from "./useContext/useAuth";
import Dashboard from "./views/Dashboard";
import Private from "./routes/Private";
import Page404 from "./views/Page404";
import EmpresasDash from "./components/EmpresasDash";
import Usuariosdash from "./components/Usuariosdash";
import EmpresaUnica from "./components/EmpresaUnica";
import AjustesDash from "./components/AjustesDash";
import InicioDash from "./components/InicioDash";

function App() {
  return (
    <>
      <Authprovider>
        <Routes>
          <Route path="/" element={<Sigup />} />
          <Route element={<Private />}>
            <Route path="Dashboard" element={<Dashboard />}>
              <Route path="" element={<InicioDash />} />
              <Route path="Empresas" element={<EmpresasDash />} />
              <Route path="Empresas/:nombre" element={<EmpresaUnica />} />
              <Route path="Usuarios" element={<Usuariosdash />} />
              <Route path="Ajustes" element={<AjustesDash />} />
            </Route>
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Authprovider>
    </>
  );
}

export default App;
