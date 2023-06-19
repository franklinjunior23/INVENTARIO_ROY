import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Capaferst from "../components/Capaferst";
import { Form, Formik } from "formik";
import HeadCabe from "../components/HeadCabe";
import LinksDash from "../components/LinksDash";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import { createEmpresa } from "../api/empresas";
function Dashboard({ children }) {
  const userNavigate = [{ name: "Configuracion" }, { name: "Cerrar Seccion" }];
  const [Modalcreate, setModalcreate] = useState(false);
  const handlebut = async(values) => {
    const data = await createEmpresa(values)
    console.log(data)
    if(data.status==200){
      toast.success("Creando Empresa",{position:"bottom-right",theme:"dark",pauseOnHover:true})
      modalfunc()
    }
    // setModalcreate(!Modalcreate);

  };
  const modalfunc = ()=>{
    setModalcreate(!Modalcreate)
  }
  const Createempresa = () => {
    return (
      <Formik
        initialValues={{
          name: "",
        }}
        onSubmit={(values, actiibs) => {
         handlebut(values)
        }}
      >
        {({ values, handleChange, handleSubmit, isSubmitting }) => (
          <Form>
            <h3 className="text-center text-2xl py-6">
              Añadir una Empresa nueva
            </h3>
            <div>
              <label className="text-base tracking-wider block pb-3 ml-2">
                Nombre de la Empresa
              </label>
              <input
                type="text"
                className=" outline-none border-none focus:outline-none border py-3 px-4 rounded-2xl w-full tracking-wider text-slate-700 bg-slate-100/100"
                name="name"
                onChange={handleChange}
                value={values.name}
                required
              />
            </div>
            <div className="mt-7">
              <button
                type="submit"
                className="mx-1 py-3 px-6 bg-black tracking-wider text-white font-bold rounded-lg"
              >
                Añadir
              </button>
              <button
              type="button"
                className="mx-1 py-3 px-6 tracking-wider bg-red-700 rounded-lg text-white font-bold "
                onClick={modalfunc}
              >
                Cancelar
              </button>
              
            </div>
          </Form>
        )}
      </Formik>
    );
  };

  return (
    <>
      <Capaferst>
        <main className="w-[1300px] h-[95vh]  py-2 px-4 ">
          <HeadCabe />
          <main className="flex flex-col">
            <section className="w-full mb-6">
              {/** Modal --- crear empresas*/}
              {Modalcreate && (
                <div className="fixed top-0 right-0  w-screen h-screen  bg-slate-700/20  grid place-content-center shadow-lg z-10">
                  <section className="w-[500px] rounded-2xl bg-[#E1C59C] px-8 py-7 relative">
                    <Createempresa />
                    <div className="absolute top-4 right-5" onClick={modalfunc}>
                      <FontAwesomeIcon
                        icon={faXmark}
                        fontSize={30}
                        className="cursor-pointer"
                      />
                    </div>
                  </section>
                </div>
              )}
              <button
                onClick={modalfunc}
                type="button"
                className="py-2 px-8 bg-black ml-auto block text-white font-semibold text-lg rounded-2xl cursor-pointer hover:bg-gray-900"
              >
                + Empresa
              </button>
            </section>
            <section className="flex h-full ">
              <div className="bg-white w-[320px] h-full mr-8 rounded-xl  py-6 px-4">
                <LinksDash />
              </div>
              <div className="bg-white w-[100%] rounded-xl py-6 px-6">
                <Outlet/>
              </div>
            </section>
          </main>
        </main>
      </Capaferst>
    </>
  );
}

export default Dashboard;
