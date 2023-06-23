import { Route, Routes } from "react-router-dom";
import Sigup from "./views/Sigup";
import { Authprovider } from "./middlewares/useAuth";
import { Blackprovider } from "./middlewares/Blockblack";
import Dashboard from "./views/Dashboard";
import Private from "./routes/Private";
import Page404 from "./views/Page404";
import PageEmpresas from "./page/PageEmpresas";
import PageUsuarios from "./page/PageUsuarios";
import PageSucursals from "./page/PageSucursals";
import PageAjuste from "./page/PageAjuste";
import PageInicio from "./page/PageInicio";
import PageUsuario from "./page/PageUsuario";
import { Apiprovider } from "./contextApi/DataApi";
import "react-loading-skeleton/dist/skeleton.css";
import PageCategory from "./page/PageCategory";
import PageInventario from "./CategoryPages/PageInventario";

function App() {
  return (
    <>
      <Blackprovider>
        <Apiprovider>
          <Authprovider>
            <Routes>
              <Route path="/" element={<Sigup />} />
              <Route element={<Private />}>
                <Route path="Dashboard" element={<Dashboard />}>
                  <Route path="" element={<PageInicio />} />
                  <Route path="Empresas" element={<PageEmpresas />} />
                  <Route path="Empresas/:nombre" element={<PageSucursals />}>
                    <Route path=":sucursal" element={<PageCategory />}>
                      <Route path=":category" element={<PageInventario />} />
                    </Route>
                  </Route>
                  <Route path="Usuarios" element={<PageUsuarios />} />
                  <Route path="Usuarios/:id" element={<PageUsuario />} />
                  <Route path="Ajustes" element={<PageAjuste />} />
                </Route>
              </Route>
              <Route path="*" element={<Page404 />} />
            </Routes>
          </Authprovider>
        </Apiprovider>
      </Blackprovider>
    </>
  );
}

export default App;
