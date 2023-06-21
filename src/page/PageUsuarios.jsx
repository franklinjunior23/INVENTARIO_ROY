import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, Outlet, Route, useNavigate } from "react-router-dom";
import EmpresaUnica from "./PageSucursals";
function  PageUsuarios() {
  const [dataEfect, setdataEfect] = useState([]);
  const [SearchUser, setSearchUser] = useState('');
  const UserJson = [
    {name:"Franklin Junior",id:22323,gmail:"franklin@gmail.com"},
    {name:'Franco Royel Ramos',id:20232,gmail:"frankitomazna@gma.com"},
    {name:"alondra Vega Luna",id:230022,gmail:"alondritamanza@gmail.com"},
    {name:'jessica Casandra',id:2838542,gmail:'jessicaclemente@gmail.com'}
  ]
  const filtr = ()=>{
    setdataEfect(UserJson);
  }
  useEffect(() => {
    filtr()
  }, []);
  const handleinput = (e)=>{
    setSearchUser(e.target.value)
  }
  let resultado = [];
  if(SearchUser){
    resultado=dataEfect.filter((dates, index) => {
      return dates.name.toLocaleLowerCase().includes(SearchUser.toLocaleLowerCase())
    }) 
  }else{
    resultado =dataEfect;
  }
  const ContainUser = ({usuariodatos}) => {
    return (
      <Link to={`${usuariodatos.id}`}>
        <div className="bg-[#E1C59C] w-[250px] py-5 px-4 rounded-xl flex">
          <FontAwesomeIcon icon={faUser} fontSize={50} className="mr-4" />
          <h4 className="capitalize">{ usuariodatos.name }</h4>
        </div>
      </Link>
    );
  };
  return (
    <>
      <section className="flex justify-end mb-6">
        <aside className="">
        <label className="mr-4">Buscar por Nombre</label>
            <input type="text" className="py-2 px-4 border focus:outline-none border-black rounded-md" onChange={handleinput} value={SearchUser} />
        </aside>
      </section>
    
        
      <section className="flex flex-wrap gap-5">
      {
        resultado.map((usuario,index)=>(
          <ContainUser key={index} usuariodatos={usuario} />
        ))
      }
      <Outlet/>
      
       
      </section>
    </>
  );
}

export default PageUsuarios;
