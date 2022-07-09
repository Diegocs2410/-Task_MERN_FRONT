import Alerta from "../components/Alerta";
import SingleProyect from "../components/SingleProyect";
import useProyectos from "../hooks/useProyectos";

const Proyectos = () => {
  const { proyectos, alerta } = useProyectos();

  const { msg } = alerta;

  return (
    <>
      <h1 className="text-4xl font-black">Proyectos</h1>
      {msg && <Alerta alerta={alerta} />}
      <div className="bg-white shadow mt-10 rounded-lg ">
        {proyectos.length > 0 ? (
          proyectos.map((p) => <SingleProyect proyecto={p} key={p._id} />)
        ) : (
          <p className="text-gray-600 uppercase  text-center p-5">
            No hay proyectos aun
          </p>
        )}
      </div>
    </>
  );
};

export default Proyectos;
