import axios from "axios"

export const empresasget = async()=>{
    const result = await axios.get('http://localhost:3000/api/empresas')
    return result.data
}
export const getempresaUnica = async()=>{
    const result = await axios.get(`http://localhost:3000/api/sucursales`)
    return result.data
}
export const createEmpresa = async(nombre)=>{
    const result = await axios.post(`http://localhost:3000/api/empresas`,nombre)
    return result
}
export const createSucursal = async(data)=>{
    const result = await axios.post('http://localhost:3000/api/sucursales',data)
    return result
}
export const deleteSucursal = async(data)=>{
    const result = await axios.delete(`http://localhost:3000/api/sucursales/${data}`)
    return result
}
export const deleteEmpresa = async(data)=>{
    const result = await axios.delete(`http://localhost:3000/api/empresas/${data}`);
    return result
}