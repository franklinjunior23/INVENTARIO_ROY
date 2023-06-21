import {
  faChevronDown,
  faChevronUp,
  faDesktop,
  faEnvelope,
  faFolder,
  faGear,
  faLaptop,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink as Linkes } from "react-router-dom";
const links = [
  {
    link: "Empresas",
    name: "Empresas",
    icon: faUsers,
  },
  {
    link: "Usuarios",
    name: "Usuarios",
    icon: faUser,
  },
  {
    link: "Emails",
    name: "Correos",
    icon: faEnvelope,
  },
  {
    link: "Pc",
    name: "Inv Pc",
    icon: faDesktop,
  },
  {
    link: "Laptop",
    name: "Inv Laptop",
    icon: faLaptop,
  },
  {
    link: 'Reportes',
    name:'Reportes',
    icon:faFolder
  },
  {
    link: "Ajustes",
    name: "Ajustes",
    icon: faGear,
    position: "mt-16",
  },
];

function NavigateDash() {
  const Navlink = ({ link, namespace, icons, position = "" }) => {
    return (
      <Linkes
        className={({ isActive }) =>
          isActive
            ? `rounded-2xl bg-gray-950 transition-all text-white ${position}`
            : `rounded-2xl  hover:bg-gray-950 transition-all hover:text-white ${position}`
        }
        to={`${link}`}
      >
        <li className="py-4 px-6 ">
          <div className="flex items-center gap-x-4">
            <FontAwesomeIcon
              icon={icons}
              fontSize={25}
              style={{ color: "#000000", color: "#fffff" }}
            />
            <h4>{namespace}</h4>
          </div>
        </li>
      </Linkes>
    );
  };
  return (
    <ul className="flex flex-col gap-y-3">
      {links.map((data, index) => (
        <Navlink
          key={index}
          link={data.link}
          namespace={data.name}
          icons={data.icon}
          position={data.position}
        ></Navlink>
      ))}
    </ul>
  );
}

export default NavigateDash;
