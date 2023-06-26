import { Formik, Form } from "formik";
import React from "react";
import {
  nivel_red_data,
  tipo_correo_data,
  tipo_documento,
  tipo_user_data,
} from "../DataCampo/DataCamp";

function FormCreateUser({ nombresucursal }) {
  const Content_date = ({ children ,nameDate}) => {
    return (
      <section className="p-7 border-2 rounded-xl border-black/20  shado relative flex flex-col gap-4">
        <div className="absolute top-[-20px] left-4 px-3 bg-white">
           <h3 className="text-lg">{nameDate}</h3> 
        </div>
      
      {children}</section>
    );
  };

  return (
    <>
      <Formik
        initialValues={{
          sucursal: nombresucursal,
          nombre: "",
          apellido: "",
          tipo_doc: "DNI",
          tipo_usuario: "",
          nivel_red: "",
          usuario: "",
          contraseña: "",
          anydesk_id: "",
          anydesk_contraseña: "",
          email_tipo: "",
          email_dirrecion: "",
          email_contraseña: "",
        }}
        onSubmit={(values) => {}}
      >
        {({ values, handleChange, isSubmitting, handleSubmit }) => (
          <Form onSubmit={handleSubmit} className="grid grid-cols-2 gap-8">
            <Content_date nameDate={'Datos Personales'}>
              <div className="grid grid-cols-2">
                <label>Nombre</label>
                <input type="text" placeholder="Nombre" className="focus:outline-none border border-black indent-4 py-1 rounded-xl" />
              </div>
              <div className="grid grid-cols-2">
                <label>Apellido</label>
                <input type="text" placeholder="Apellido"  className="focus:outline-none border border-black indent-4 py-1 rounded-xl"/>
              </div>
              <div className="grid grid-cols-2">
                <label>Tipo de Doc</label>
                <select
                  name="tipo_doc"
                  onChange={handleChange}
                  value={values.tipo_doc}
                >
                  {tipo_documento.map((doc, index) => (
                    <option value={doc.name} key={index}>
                      {doc.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2">
                <label>{values.tipo_doc}</label>
                <input type="text" placeholder="DOC"  className="focus:outline-none border border-black indent-4 py-1 rounded-xl"/>
              </div>
            </Content_date>

            <Content_date nameDate={'Red'}>
              <div className="grid grid-cols-2">
                <label>Tipo de Usuario</label>
                <select name="tipo_usuario">
                  {tipo_user_data.map((user, index) => (
                    <option value={user.name} key={index}>
                      {user.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2">
                <label>Nivel de red</label>
                <select name="nivel_red">
                  {nivel_red_data.map((user, index) => (
                    <option value={user.name} key={index}>
                      {user.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2">
                <label>Usuario</label>
                <input type="text"  className="focus:outline-none border border-black indent-4 py-1 rounded-xl"/>
              </div>
              <div className="grid grid-cols-2">
                <label>Contraseña</label>
                <input type="text"  className="focus:outline-none border border-black indent-4 py-1 rounded-xl"/>
              </div>
            </Content_date>
            <Content_date nameDate={'Anydesk'}>
              <div className="grid grid-cols-2">
                <label>Anydesk_ID</label>
                <input type="text" className="focus:outline-none border border-black indent-4 py-1 rounded-xl" />
              </div>
              <div className="grid grid-cols-2">
                <label>Anydesk_Contraseña</label>
                <input type="text" className="focus:outline-none border border-black indent-4 py-1 rounded-xl" />
              </div>
            </Content_date>

            <Content_date nameDate={'Dirrecion Email'}>
              <div className="grid grid-cols-2">
                <label>Tipo de Correo</label>
                <select>
                  {tipo_correo_data.map((correo, index) => (
                    <option value={correo.name} key={index}>
                      {correo.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2">
                <label>Dirrecion Email</label>
                <input type="text" className="focus:outline-none border border-black indent-4 py-1 rounded-xl" />
              </div>
              <div className="grid grid-cols-2">
                <label>Dirrecion Contraseña</label>
                <input type="text" className="focus:outline-none border border-black indent-4 py-1 rounded-xl" />
              </div>
            </Content_date>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default FormCreateUser;
