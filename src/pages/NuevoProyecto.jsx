import React from "react";
import FormProyecto from "../components/FormProyecto";

const NuevoProyecto = () => {
  return (
    <>
      <h1 className="text-4xl font-black">Crear Proyecto</h1>
      <div className="mt-10 justify-center flex">
        <FormProyecto />
      </div>
    </>
  );
};

export default NuevoProyecto;
