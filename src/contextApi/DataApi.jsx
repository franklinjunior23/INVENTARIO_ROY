import { createContext, useContext, useState } from "react";
import { empresasget } from "../api/empresas";

export const contextoDataApi = createContext();

export const useDataC = ()=>{
    const data = useContext(contextoDataApi);
    return data
}
export const Apiprovider = ({children})=>{
    const [EmpresasGet, setEmpresasGet] = useState([]);

    const getEmpresas = async()=>{
        const result = await empresasget()
        setEmpresasGet(result.data)
    }
    return (
        <contextoDataApi.Provider value={{ EmpresasGet,setEmpresasGet,getEmpresas }}>
        {children}
        </contextoDataApi.Provider>
    )
}