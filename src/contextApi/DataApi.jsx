import { createContext, useContext, useState } from "react";
import {
  createEmpresa,
  createSucursal,
  deleteEmpresa,
  deleteSucursal,
  empresasget,
  getUsuarios,
  getempresaUnica,
} from "../api/empresas";
import { toast } from "react-toastify";

export const contextoDataApi = createContext();

export const useData = () => {
  const data = useContext(contextoDataApi);
  return data;
};

export const Apiprovider = ({ children }) => {
  const [EmpresasGet, setEmpresasGet] = useState([]);
  const [SucursalesGet, setSucursalesGet] = useState([]);
  const [DipositivosGet, setDipositivosGet] = useState([]);
  const [UsuariosGet, setUsuariosGet] = useState([]);

  const getEmpresasApi = async () => {
    const result = await empresasget();
    setEmpresasGet(result.data);
  };

  const createEmpresaApi = async (nombre) => {
    const result = await createEmpresa(nombre);
    setEmpresasGet([...EmpresasGet, result.data]);
    toast.success(`Empresa Creada Correctamente ${result.data.nombre}`);
  };
  const deleteEmpresaApi = async (id) => {
    try {
      if(!id){
        return toast.error("Comuniquese con su provedor")
      }
      const result = await deleteEmpresa(id);
      const update = EmpresasGet.filter((value) => value.id !== id);
      setEmpresasGet(update);
      toast.success(`Empresa borrada correctamente`);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const getSucursalesApi = async (NombreEmpresa) => {
    const result = await getempresaUnica();
    const filtrar = result.data.filter((empresa) =>
      empresa.empresa.nombre == NombreEmpresa
    );
    setSucursalesGet(filtrar);
  };

  const createSucursalesApi = async(data)=>{
    const result = await createSucursal(data)
    setSucursalesGet([...SucursalesGet, result.data])
    toast.success(`Sucursal creada correctamente`);
  }

  const deleteSucursalApi = async (id) => {
    try {
      if(!id){
        return toast.error("Comuniquese con su provedor")
      }
      const result = await deleteSucursal(id);
      const update = SucursalesGet.filter((value) => value.id !== id);
      setSucursalesGet(update);
      toast.success("Sucursal borrada");
    } catch (error) {
      toast.error("Algo Salio mal, Intentelo Nuevamente");
    }
  };

  const UsuariosApiGet = async()=>{
    try {
      const result = await getUsuarios()
      setUsuariosGet(result.data)
    } catch (error) {
      toast.error('Algo Salio mal , si sigue asi comunicate con tu provedor')
    }
  }
  return (
    <contextoDataApi.Provider
      value={{
        EmpresasGet,
        SucursalesGet,
        UsuariosGet,
        setEmpresasGet,
        getEmpresasApi,
        createEmpresaApi,
        deleteEmpresaApi,
        getSucursalesApi,
        deleteSucursalApi,
        createSucursalesApi,
        UsuariosApiGet,
        

      }}
    >
      {children}
    </contextoDataApi.Provider>
  );
};
