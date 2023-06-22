import { createContext, useContext, useState } from "react";
import { createEmpresa, deleteEmpresa, empresasget, getempresaUnica } from "../api/empresas";
import { toast } from "react-toastify";

export const contextoDataApi = createContext();

export const useData = () => {
  const data = useContext(contextoDataApi);
  return data;
};
export const Apiprovider = ({ children }) => {
  const [EmpresasGet, setEmpresasGet] = useState([]);
  const [SucursalesGet, setSucursalesGet] = useState([]);
  const [UsuariosGet, setUsuariosGet] = useState([]);


  const getEmpresasApi = async () => {
    const result = await empresasget();
    setEmpresasGet(result.data);
  };

  const createEmpresaApi = async (nombre) => {
    const result = await createEmpresa(nombre)
    setEmpresasGet([...EmpresasGet, result.data])
    toast.success(`Empresa Creada Correctamente ${nombre}`)
  }
  const deleteEmpresaApi = async (id) => {
    try {
      const result = await deleteEmpresa(id);
      const update = EmpresasGet.filter((value) => value.id !== id);
      setEmpresasGet(update);
      toast.success(`Empresa borrada correctamente`);
    } catch (error) {
      toast.error("Algo salio mal , Intentelo Nuevamente")
    }
   
  }

  const getSucursalesApi = async () => {
    const result = await getempresaUnica();
    setSucursalesGet(result.data)
  }

  const deleteSucursalApi = async (id) => {
    try {
      const result = await deleteSucursal(id)
      const update = EmpresasGet.filter((value) => value.id !== id);
      setSucursalesGet(update);
      toast.success("Sucursal borrada");
    } catch (error) {
      toast.error("Algo Salio mal, Intentelo Nuevamente")
    }

  }
  return (
    <contextoDataApi.Provider
      value={{ EmpresasGet, SucursalesGet, setEmpresasGet, getEmpresasApi, createEmpresaApi, deleteEmpresaApi, getSucursalesApi, deleteSucursalApi }}
    >
      {children}
    </contextoDataApi.Provider>
  );
};
