import { formatearFecha } from "../helpers/formatearFecha";
import useAdmin from "../hooks/useAdmin";
import useProyectos from "../hooks/useProyectos";

const Tarea = ({ tarea }) => {
  const { descripcion, nombre, prioridad, fechaEntrega, estado, _id } = tarea;
  const { handleModalEditarTarea, hanldeModalEliminarTarea, completarTarea } =
    useProyectos();
  const admin = useAdmin();
  return (
    <div className="flex justify-between p-5 border-b items-center">
      <div className="flex flex-col items-start">
        <p className="mb-1 text-2xl">{nombre}</p>
        <p className="mb-1 text-sm text-gray-500 uppercase">{descripcion}</p>
        <p className="mb-1 text-sm">{formatearFecha(fechaEntrega)}</p>
        <p className="mb-1 text-gray-600">Prioridad: {prioridad}</p>
        {estado && (
          <p className="text-xs bg-green-600 uppercase p-1 rounded-lg text-white">
            Completada por: {tarea.completado.nombre}
          </p>
        )}
      </div>
      <div className="flex gap-2 flex-col lg:flex-row">
        {admin && (
          <button
            className="bg-indigo-600 font-bold rounded-lg px-4 py-3 text-white text-sm uppercase"
            onClick={() => handleModalEditarTarea(tarea)}
          >
            Editar
          </button>
        )}
        <button
          onClick={() => completarTarea(_id)}
          className={`${
            !estado ? "bg-slate-700" : "bg-lime-600"
          } font-bold rounded-lg px-4 py-3 text-white text-sm uppercase`}
        >
          {estado ? "Completa" : "Incompleta"}
        </button>
        {admin && (
          <button
            onClick={() => hanldeModalEliminarTarea(tarea)}
            className="bg-red-600 font-bold rounded-lg px-4 py-3 text-white text-sm uppercase"
          >
            Eliminar
          </button>
        )}
      </div>
    </div>
  );
};

export default Tarea;
