import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useData } from "../contextApi/DataApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import FormCreateUser from "../components/FormCreateUser";
import { InventarioCategory } from "../DataCampo/DataCamp";

function PageInventario() {
  const CategoryEmpresa = useParams().category;
  const SucursalNombre = useParams().sucursal;

  console.log(SucursalNombre);
  const { UsuariosGet, UsuariosApiGet } = useData();

  useEffect(() => {
    UsuariosApiGet();
  }, []);
  const InventarioContent = () => {
    return (
      <>
        <div>
          <h3>Inventario</h3>
        </div>
        <section className="flex flex-wrap gap-3">
          {InventarioCategory.map((value, index) => (
            <div className="w-80 h-36 bg-orange-400" key={index}>
              {value.name}
            </div>
          ))}
        </section>
      </>
    );
  };
  const InformesContent = () => {
    return (
      <>
        <h1>hola</h1>
      </>
    );
  };

  const PersonalConent = () => {
    return (
      <>
        <div className="fixed w-full h-full top-0 left-0 bg-slate-700/20 grid place-content-center">
          <div className="shadow-lg bg-white py-10 px-16 rounded-lg">
            <FormCreateUser nombresucursal={SucursalNombre}/>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h3>Empleados de la sucursal </h3>
          <div>
            <button
              type="button"
              className="py-2 px-5 bg-black text-white rounded-lg"
            >
              + Personal
            </button>
          </div>
        </div>
        <section className="flex gap-2 flex-wrap">
          {UsuariosGet.map((value, index) => (
            <div
              className="bg-red-400 flex w-48 p-4 rounded-lg items-center gap-3"
              key={index}
            >
              <div>
                <FontAwesomeIcon icon={faUser} fontSize={45} />
              </div>
              <div>
                <h3>{value.nombre}</h3>
                <h3>{value.apellido}</h3>
              </div>
            </div>
          ))}
        </section>
      </>
    );
  };

  const BlockList = () => {
    if (CategoryEmpresa == "Inventario") {
      return <InventarioContent />;
    } else if (CategoryEmpresa == "Informes") {
      return <InformesContent />;
    } else if (CategoryEmpresa == "Personal") {
      return <PersonalConent />;
    }
  };

  return (
    <>
      <BlockList />
    </>
  );
}

export default PageInventario;
