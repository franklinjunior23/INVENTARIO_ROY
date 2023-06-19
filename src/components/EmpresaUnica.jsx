import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getempresaUnica } from "../api/empresas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

function EmpresaUnica() {
  const [EmpresaUnica, setEmpresaUnica] = useState([]);
  const parametro = useParams().nombre;
  const resultData = async () => {
    const result = await getempresaUnica();
    const filtrar= result.filter((empresa)=>empresa.empresa.nombre.toLocaleLowerCase().includes(parametro.toLocaleLowerCase()))
    setEmpresaUnica(filtrar);
  };
  useEffect(() => {
    resultData();
  }, []);
  const ContentSucursal = ({ nombre, fecha }) => {
    const [ActiveEdit, setActiveEdit] = useState(false);
    
    return (
      <section className="w-[300px]  bg-[#E1C59C] p-5 rounded-xl capitalize relative">
        <Link to={`${nombre}`}>
          <h4 className="text-2xl tracking-wide">{nombre}</h4>
          {fecha}
        </Link>
        {ActiveEdit && (
          <div className="absolute top-10 right-7 w-[140px] bg-white rounded-xl overflow-hidden z-10 shadow-lg">
            <ul className="text-center">
              <li className="px-8 py-2 hover:bg-slate-400 rounded-xl">
                <button type="button">Editar</button>
              </li>
              <li className="px-8 py-2  hover:bg-slate-400 rounded-xl">
                <button type="button">Eliminar</button>
              </li>
            </ul>
          </div>
        )}

        <div className="absolute top-4 right-4">
          {ActiveEdit ? (
            <FontAwesomeIcon
              icon={faChevronUp}
              fontSize={20}
              className="cursor-pointer"
              onClick={() => setActiveEdit(!ActiveEdit)}
            />
          ) : (
            <FontAwesomeIcon
              icon={faChevronDown}
              fontSize={20}
              className="cursor-pointer"
              onClick={() => setActiveEdit(!ActiveEdit)}
            />
          )}
        </div>
      </section>
    );
  };
  return (
    <section>
      <div className="w-full flex justify-between">
        <div>
          <h4 className="tracking-wide	text-base">
            Sedes de la empresa {parametro}
          </h4>
          <hr className="border-2	border-black mt-3" />
        </div>
        <button type="button">Regresar</button>
      </div>
      <div className="mt-8 flex gap-2 flex-wrap">
        {EmpresaUnica.map((sucursal, index) => (
          <ContentSucursal
            key={sucursal.id}
            nombre={sucursal.nombre}
            fecha={sucursal.createdAt}
          />
        ))}
      </div>
    </section>
  );
}

export default EmpresaUnica;
