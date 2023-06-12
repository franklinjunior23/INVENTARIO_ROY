import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useSearchParams } from "react-router-dom";

function Usuariosdash() {
  const ContainUser = () => {
    return (
      <div className="bg-[#E1C59C] w-[250px] py-5 px-4 rounded-xl flex">
        <FontAwesomeIcon icon={faUser} fontSize={50} className="mr-4" />
        <h4>De La Cruz Cano Franklin Junior </h4>
      </div>
    );
  };

  const [SearchParamas, setSearchParamas] = useSearchParams();
  const usuario = SearchParamas.get("busqueda") ?? "";
  const handlefilterUsuario = (e) => {
    setSearchParamas({ busqueda: e.target.value });
  };
  return (
    <>
      <section className="flex justify-end mb-6">
        <aside className="">
        <label className="mr-4">Buscar por Nombre</label>
            <input type="text" className="py-2 px-4 border focus:outline-none border-black rounded-md" onChange={handlefilterUsuario} value={usuario} />
        </aside>
      </section>
      <section className="flex flex-wrap gap-5">
        <ContainUser />
        <ContainUser />
        <ContainUser />
        <ContainUser />
        <ContainUser />
        <ContainUser />
      </section>
    </>
  );
}

export default Usuariosdash;
