import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useAuth } from "../useContext/useAuth";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Formsign() {
  const navigator = useNavigate();
  const [UsuarioIniciado, setUsuarioIniciado] = useState(false);
  const { isAuthenticated } = useAuth();
  const verificar = () => {
    return navigator("/Dashboard");
  };
  useEffect(() => {
    if (UsuarioIniciado) {
      verificar();
    }
  }, [UsuarioIniciado]);
  return (
    <Formik
      initialValues={{
        usuario: "",
        contraseña: "",
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          setUsuarioIniciado(true);
        }, 3000);
      }}
    >
      {({ values, handleChange, handleSubmit, isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          <div>
            <label className="text-sm tracking-wider py-5">Usuario</label>
            <input
              type="text"
              className="focus:outline-none border py-2 px-4 rounded-2xl w-full tracking-wider text-slate-700"
              name="usuario"
              onChange={handleChange}
              value={values.usuario}
            />
          </div>
          <div className="mt-2">
            <label className="text-sm tracking-wider py-5">Contraseña</label>
            <input
              type="text"
              name="contraseña"
              className="focus:outline-none border py-2 px-4 rounded-2xl w-full tracking-wider text-slate-700"
              onChange={handleChange}
              value={values.contraseña}
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-2xl py-2 text-lg text-white tracking-wider	font-semibold	 bg-black w-full"
            >
              {isSubmitting ? "Validando..." : "Entrar"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default Formsign;
