import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  createSucursal,
  deleteSucursal,
  getempresaUnica,
} from "../api/empresas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faReply,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

function PageSucursals() {
  const [EmpresaUnica, setEmpresaUnica] = useState([]);
  const parametro = useParams().nombre;
  const resultData = async () => {
    const result = await getempresaUnica();
    const filtrar = result.filter((empresa) =>
      empresa.empresa.nombre
        .toLocaleLowerCase()
        .includes(parametro.toLocaleLowerCase())
    );
    setEmpresaUnica(filtrar);
  };
  useEffect(() => {
    resultData();
  }, []);
  const AgregarSucursal = async () => {
    const { value: text } = await Swal.fire({
      title: "Escriba el Nombre de la Sucursal",
      input: "text",
      inputPlaceholder: "Enter your message",
      inputAttributes: {
        autocapitalize: "off",
        autocorrect: "off",
        require: true,
      },
      showCancelButton: true,
      cancelButtonText: "Cancel",
      confirmButtonText: "Crear",
      inputValidator: (value) => {
        if (!value) {
          return "Please enter a message";
        }
      },
    });
    if (text != null) {
      const data = { nombre: text, empresa: parametro };

      const respuesta = await createSucursal(data);
      setEmpresaUnica([...EmpresaUnica, respuesta.data]);
      if (respuesta.status == 200) {
        toast.success(`Se creo la sucursal ${respuesta.data.nombre}`);
      } else {
        toast.error("Algo salio mal intentelo nuevamente");
      }
    }
  };
  const ContentSucursal = ({ nombre, fecha, id }) => {
    const [ActiveEdit, setActiveEdit] = useState(false);
    const ElimnarSucursal = async (id, nombre) => {
      Swal.fire({
        title: `Estas seguro de eliminar la sucursal ${nombre} ?`,
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirmar Borrado",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const eliminacion = await deleteSucursal(id);
          if (eliminacion.status == 200) {
            const update = EmpresaUnica.filter((item) => item.id !== id);
            setEmpresaUnica(update);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            toast.success(`Sucursal ${nombre} eliminado Exitosamente`);
          } else {
            Swal.fire(
              "Error!",
              "An error occurred while deleting the file.",
              "error"
            );
            toast.error("Algo salio mal intentelo nuevamente");
          }
        }
      });
    };
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
                {id}
              </li>
              <li className="px-8 py-2  hover:bg-slate-400 rounded-xl">
                <button
                  type="button"
                  onClick={() => ElimnarSucursal(id, nombre)}
                >
                  Eliminar
                </button>
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
  const navegador = useNavigate();
  return (
    <section>
      <div className="w-full flex justify-between items-center">
        <div>
          <h4 className="tracking-wide	text-base">
            Sedes de la empresa {parametro}
          </h4>
          <hr className="border-1	border-black mt-3" />
        </div>
        <div className="flex  text-white gap-5">
          <button
            type="button"
            className="bg-black px-4 py-3 rounded-xl"
            onClick={AgregarSucursal}
          >
            + Agregar Sucursal
          </button>
          <button
            type="button"
            className="bg-black px-4 rounded-xl"
            onClick={() => {
              navegador(-1);
            }}
          >
            <FontAwesomeIcon icon={faReply} color="white" />
            Regresar
          </button>
        </div>
      </div>
      <div className="mt-8 flex gap-2 flex-wrap">
        {EmpresaUnica.map((sucursal, index) => (
          <ContentSucursal
            key={sucursal.id}
            id={sucursal.id}
            nombre={sucursal.nombre}
            fecha={sucursal.createdAt}
          />
        ))}
      </div>
    </section>
  );
}

export default PageSucursals;
