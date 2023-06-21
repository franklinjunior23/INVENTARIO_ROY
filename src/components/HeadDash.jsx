import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
function HeadDash() {
  const [ActiveMenu, setActiveMenu] = useState(false);
  return (
    <header className="flex justify-between mb-10">
      <Link to={""}>
        <div className="flex items-center bg-white py-3 px-10 rounded-3xl">
          <img
            src="https://www.intiscorp.com.pe/wp-content/uploads/2022/10/1-1-1.png"
            width={70}
            alt=""
            className="block mr-3"
          />
          <h3 className="uppercase text-xl tracking-wide font-extrabold">
            Intis <br /> Corp
          </h3>
        </div>
      </Link>
      <div className="self-end">
        <div className="flex items-center justify-end mr-2 relative">
          <h3 className="text-black mr-2 text-lg">Roy Segura</h3>
          <div className="bg-white px-3 rounded-3xl py-2 grid place-content-center">
            <FontAwesomeIcon
              icon={faUser}
              fontSize={21}
              style={{ color: "#000000" }}
              className="cursor-pointer"
              onClick={(e) => {
                setActiveMenu(!ActiveMenu);
              }}
            />
          </div>
          {ActiveMenu && (
            <div className="absolute top-11 right-4 rounded-xl bg-white px-8">
              <ul>
                <li>aa</li>
              </ul>
            </div>
          )}
        </div>
        <hr className="mt-8 w-[900px] border-black" />
      </div>
    </header>
  );
}

export default HeadDash;
