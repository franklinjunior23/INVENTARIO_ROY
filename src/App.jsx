import { Route, Routes } from "react-router-dom";
import Sigup from "./views/Sigup";
import { Authprovider } from "./useContext/useAuth";
import { Blackprovider } from "./useContext/Blockblack";
import Dashboard from "./views/Dashboard";
import Private from "./routes/Private";
import Page404 from "./views/Page404";
import EmpresasDash from "./components/EmpresasDash";
import Usuariosdash from "./components/Usuariosdash";
import EmpresaUnica from "./components/EmpresaUnica";
import AjustesDash from "./components/AjustesDash";
import InicioDash from "./components/InicioDash";
import UsuarioSolodash from "./components/UsuarioSolodash";

function App() {
  return (
    <>
    <Blackprovider>
      <Authprovider>
        <Routes>
          <Route path="/" element={<Sigup />} />
          <Route element={<Private />}>
            <Route path="Dashboard" element={<Dashboard />}>
              <Route path="" element={<InicioDash />} />
              <Route path="Empresas" element={<EmpresasDash />} />
              <Route path="Empresas/:nombre" element={<EmpresaUnica />}>
                <Route path=":sucursal" element={<h2>ola</h2>} />
              </Route>
              <Route path="Usuarios" element={<Usuariosdash />} />
              <Route path="Usuarios/:id" element={<UsuarioSolodash />} />
              <Route path="Ajustes" element={<AjustesDash />} />
            </Route>
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Authprovider>
      </Blackprovider>
    </>
  );
}

export default App;
