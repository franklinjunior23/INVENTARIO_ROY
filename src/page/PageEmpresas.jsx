import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { empresasget, deleteEmpresa } from "../api/empresas";
import Swal from "sweetalert2";
function PageEmpresas() {
  const [EmpresaData, setEmpresaData] = useState([]);

  const handleEdit = (id) => {
    console.log(`estas editando ${id}`);
  };
  const handleDelete = async (id) => {
    const resp = await deleteEmpresa(id);
    if (resp.status == 200) {
      toast.success("Empresa borrada");
      const filtrarborrado = EmpresaData.filter((value) => value.id !== id);
      setEmpresaData(filtrarborrado);
    }
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
  const realizarbusqueda = async () => {
    try {
      const databusqueda = await empresasget();
      setEmpresaData(databusqueda.data);
      
      /** 
      if (databusqueda.request.status == 200) {
        setEmpresaData(databusqueda.data);
      } else if (databusqueda.request.status == 404) {
      }
      */
    } catch (error) {
      if (error.request) {
        Swal.fire({
          icon: "error",
          title: "Error de conexión",
          text: "Verifique su conexión de red y vuelva a intentarlo",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error en el servidor",
          text: "Comuníquese con el técnico",
        });
      }
    }
  };
  console.log(EmpresaData)
  useEffect(() => {
    realizarbusqueda();
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
  if (EmpresaData === 0) {
    return (
      <div className=" w-full h-full grid place-content-center">
        <h2 className="text-center text-xl">
          No se encontraron datos de la empresa.
        </h2>
        <p className="text-lg">
          Comuníquese con el técnico para resolver el problema.
        </p>
        <img width={400} src="https://img.freepik.com/vector-gratis/ups-error-404-ilustracion-concepto-robot-roto_114360-5529.jpg?w=826&t=st=1687381597~exp=1687382197~hmac=cc8d958745c227285ec83c2c53e30e8fad70d732e553d63fb72a8b95408e6fb5" alt="" />
      </div>
    );
  }
  return (
    <main className="flex flex-wrap gap-6">
      {EmpresaData.map((empresa, index) => (
        <SectionEmpresa
          key={empresa.id}
          id={empresa.id}
          nombre={empresa.nombre}
          fechacreacion={empresa.createdAt}
        />
      ))}
    </main>
  );
}

export default PageEmpresas;
