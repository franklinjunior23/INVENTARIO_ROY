import { createContext, useContext, useState } from "react";


export const blockblack = createContext();

export const Useblack = ()=>{
    const black = useContext(blockblack);
    return black
}
export const Blackprovider = ({children})=>{
    const [EstadoBlack, setEstadoBlack] = useState(false);

    return(
        <blockblack.Provider value={{ EstadoBlack }}>
        {children}
        </blockblack.Provider>
    )
}