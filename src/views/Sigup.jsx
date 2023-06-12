import Capaferst from "../components/Capaferst";
import Formsign from "../components/Formsign";

function Sigup() {
  return (
    <Capaferst>
      <section className="w-[620px] p-6 bg-white rounded-3xl ">
        <h3 className="text-center font-light	 text-3xl uppercase ">
          Inventario
        </h3>
        <main className="grid grid-cols-2 mt-6 px-4">
          <section>
            <img
              src="https://www.intiscorp.com.pe/wp-content/uploads/2022/10/1-1-1.png"
              alt=""
              className="block w-[200px]"
            />
          </section>
          <section>
           <Formsign />
          </section>
        </main>
      </section>
    </Capaferst>
  );
}

export default Sigup;
