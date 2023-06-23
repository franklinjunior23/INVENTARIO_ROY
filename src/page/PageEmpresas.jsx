import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useData } from "../contextApi/DataApi";
import Swal from "sweetalert2";
import Skeleton from "react-loading-skeleton";

function PageEmpresas() {
  const { getEmpresasApi, EmpresasGet, deleteEmpresaApi } = useData();
  const [LoadingEmpresa, setLoadingEmpresa] = useState(true);
  const handleEdit = (id) => {
    console.log(`estas editando ${id}`);
  };
  const handleDelete = async (id) => {
    Swal.fire({
      title: `Estas seguro de eliminar esta empresa ?`,
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar Borrado",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteEmpresaApi(id);
      }
    });
  };
  const editname = [
    { name: "Editar", funcion: handleEdit },
    { name: "Borrar", funcion: handleDelete },
  ];

  const Editlink = ({ name, id, handle }) => {
    return (
      <li className="text-center grid rounded-xl hover:bg-slate-100">
        <button
          className="w-full py-2"
          type="button"
          onClick={() => handle(id)}
        >
          {name}
        </button>
      </li>
    );
  };

  useEffect(() => {
    setTimeout(() => {
      setLoadingEmpresa(!LoadingEmpresa);
      getEmpresasApi();
    }, 2000);
  }, []);

  const SectionEmpresa = ({ nombre, fechacreacion, id }) => {
    const [ActiveOptionmod, setActiveOptionmod] = useState(false);
    return (
      <section className="bg-[#E1C59C] py-3 px-6 w-[270px] relative rounded-2xl">
        {ActiveOptionmod && (
          <div className="absolute z-10 top-10 right-4 w-[140px]  rounded-2xl bg-[#ffff] shadow-xl overflow-hidden">
            <ul>
              {editname.map((data, index) => (
                <Editlink
                  key={index}
                  name={data.name}
                  id={id}
                  handle={data.funcion}
                />
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
          <h3 className="text-2xl font-bold mb-8 capitalize">{nombre}</h3>
          <h4>
            Dia de Creacion <br></br> {fechacreacion}
          </h4>
        </Link>
      </section>
    );
  };
  const ContentLoader = () => {
    return (
      <>
        <Skeleton className=" h-36 rounded-lg" width={270} count={1}/>
        <Skeleton className=" h-36 rounded-lg" width={270} count={1}/>
        <Skeleton className=" h-36 rounded-lg" width={270} count={1}/>
        <Skeleton className=" h-36 rounded-lg" width={270} count={1}/>
        <Skeleton className=" h-36 rounded-lg" width={270} count={1}/>
        <Skeleton className=" h-36 rounded-lg" width={270} count={1}/>
      </>
    );
  };
  const FetchEmpresas = () => {
    return EmpresasGet.map((empresa) => (
      <SectionEmpresa
        key={empresa.id}
        id={empresa.id}
        nombre={empresa.nombre}
        fechacreacion={empresa.createdAt}
      />
    ));
  };

  return (
    <main className="flex flex-wrap gap-6">
      {LoadingEmpresa ? <ContentLoader /> : <FetchEmpresas />}
    </main>
  );
}

export default PageEmpresas;
