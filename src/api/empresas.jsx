import axios from "axios"

export const empresasget = async()=>{
    const result = await axios.get('http://localhost:3000/api/empresas')
    return result.data
}
export const getempresaUnica = async()=>{
    const result = await axios.get(`http://localhost:3000/api/sucursales`)
    return result.data
}