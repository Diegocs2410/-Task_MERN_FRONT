import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useProyectos from "../hooks/useProyectos";
import Busqueda from "./Busqueda";

const Header = () => {
  const { handleBuscador, cerrarSesion } = useProyectos();
  const { cerrarSesionAuth } = useAuth();

  const handleCerrarSesion = () => {
    cerrarSesionAuth();
    cerrarSesion();
    localStorage.removeItem("token");
  };
  return (
    <header className="px-4 py-5 bg-white border-b">
      <div className="md:flex md:justify-between">
        <h2 className="text-4xl text-sky-600 font-black text-center mb-5 md:mb-0">
          UpTask
        </h2>
        <div className="flex items-center gap-4 flex-col md:flex-row">
          <button className="font-bold uppercase" onClick={handleBuscador}>
            Buscar Proyecto
          </button>
          <Link to="/proyectos" className="uppercase font-bold">
            Proyectos
          </Link>
          <button
            onClick={handleCerrarSesion}
            className="text-white text-sm bg-sky-600 p-3 rounded-md uppercase font-bold"
            type="button"
          >
            Cerrar Sesión
          </button>
          <Busqueda />
        </div>
      </div>
    </header>
  );
};

export default Header;
