import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
function EmpresasDash() {
  const editname = [{ name: "Editar" }, { name: "Borrar" }];
  const Editlink = ({ name }) => {
    return (
      <li className="text-center grid rounded-xl hover:bg-slate-100">
        <button className="w-full py-2">{name}</button>
      </li>
    );
  };
  const SectionEmpresa = ({ nombre, fechacreacion }) => {
    const [ActiveOptionmod, setActiveOptionmod] = useState(false);
    return (
      <section className="bg-[#E1C59C] py-3 px-6 w-[270px] relative rounded-2xl">
        {ActiveOptionmod && (
          <div className="absolute top-10 right-4 w-[140px]  rounded-2xl bg-[#ffff] shadow-xl overflow-hidden">
            <ul>
              {editname.map((data, index) => (
                <Editlink key={index} name={data.name} />
              ))}
            </ul>
          </div>
        )}
        <div className="absolute top-3 right-4">
          {ActiveOptionmod ? (
            <FontAwesomeIcon
              icon={faChevronUp}
              fontSize={20}
              className="cursor-pointer"
              onClick={() => setActiveOptionmod(!ActiveOptionmod)}
            />
          ) : (
            <FontAwesomeIcon
              icon={faChevronDown}
              fontSize={20}
              className="cursor-pointer"
              onClick={() => setActiveOptionmod(!ActiveOptionmod)}
            />
          )}
        
        </div>
        <Link to={`${nombre}`}>
          <h3 className="text-2xl font-bold mb-8">{nombre}</h3>
          <h4>Dia de Creacion : {fechacreacion}</h4>
        </Link>
      </section>
    );
  };
  return (
    <main className="flex flex-wrap gap-6">
      <SectionEmpresa nombre={"Corpalen"} fechacreacion={"20/22/22"} />
      <SectionEmpresa nombre={"Corpalen"} fechacreacion={"20/22/22"} />
      <SectionEmpresa nombre={"Corpalen"} fechacreacion={"20/22/22"} />
    </main>
  );
}

export default EmpresasDash;
