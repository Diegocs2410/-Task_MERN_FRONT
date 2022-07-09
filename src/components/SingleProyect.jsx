import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const SingleProyect = ({ proyecto }) => {
  const { auth } = useAuth();

  const { nombre, _id, cliente, creador } = proyecto;

  return (
    <div className="border-b p-5 flex flex-col md:flex-row justify-between">
      <div className="flex items-center gap-2 ">
        <p className="flex-1">
          {nombre}{" "}
          <span className="text-sm uppercase text-gray-500">{cliente}</span>
        </p>
        {auth._id !== creador && (
          <p className="p-1 text-xs rounded-lg text-white bg-green-500 uppercase font-bold">
            Colaborador
          </p>
        )}
      </div>
      <Link
        to={`${_id}`}
        className="text-gray-600 text-sm font-bold hover:text-gray-800 uppercase"
      >
        Ver proyecto
      </Link>
    </div>
  );
};

export default SingleProyect;
