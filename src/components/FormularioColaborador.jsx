import { useState } from "react";
import useProyectos from "../hooks/useProyectos";
import Alerta from "./Alerta";

const FormularioColaborador = () => {
  const [email, setEmail] = useState("");

  const { mostrarAlerta, alerta, submitColaborador } = useProyectos();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
      mostrarAlerta({
        msg: "El email es obligatorio",
        error: true,
      });
      return;
    }

    submitColaborador(email);
  };

  const { msg } = alerta;
  return (
    <form
      className="py-10 px-5 bg-white rounded-lg shadow w-full md:w-1/2"
      onSubmit={handleSubmit}
    >
      {msg && <Alerta alerta={alerta} />}
      <div className="mb-5">
        <label
          htmlFor="email"
          className="text-gray-700 uppercase font-bold text-sm"
        >
          Email colaborador
        </label>
        <input
          type="email"
          id="email"
          placeholder="Email del usuario"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <input
        type="submit"
        value="Buscar colaborador"
        className="bg-sky-600 hover:bg-sky-700 cursor-pointer transition-colors rounded font-bold uppercase text-white w-full p-3"
      />
    </form>
  );
};

export default FormularioColaborador;
