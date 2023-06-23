import React from "react";
import { Link, useParams, Outlet } from "react-router-dom";
import { CategorySucursal } from "../DataCampo/DataCamp";

function PageCategory() {
  const NombreSucursal = useParams().sucursal;
  const NombreEmpresa = useParams().nombre;
  const CategoryEmpresa = useParams().category;

  const Category = ({ data }) => {
    return (
      <div className="w-80 h-40 bg-gray-400">
        <Link to={data.link}>{data.name}</Link>
      </div>
    );
  };

  return (
    <>
      {CategoryEmpresa == undefined ? (
        <>
          <div className="py-4 ">
            <h3 className="text-xl">
              Empresa {NombreEmpresa} // Sucursal {NombreSucursal}
            </h3>
          </div>
          <section className="flex gap-2 flex-wrap">
            {CategorySucursal.map((data, index) => (
              <Category key={index} data={data} />
            ))}
          </section>
        </>
      ) : (
        <Outlet />
      )}
    </>
  );
}

export default PageCategory;
