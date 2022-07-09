import useProyectos from "../hooks/useProyectos";

const Colaborador = ({ nombre, email, _id }) => {
  const { handleModalEliminarColaborador } = useProyectos();
  return (
    <div className="border-b p-5 flex justify-between items-center">
      <div className="">
        <p className="font-bold">{nombre}</p>{" "}
        <p className="text-gray-700 text-sm">{email}</p>
      </div>
      <div>
        <button
          onClick={() => handleModalEliminarColaborador({ nombre, _id, email })}
          type="button"
          className="bg-red-600 px-4 py-3 text-white text-sm rounded-lg uppercase font-bold"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Colaborador;
