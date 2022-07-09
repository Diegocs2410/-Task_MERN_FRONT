export const formatearFecha = (fecha) => {
  const fechaFormateada = new Date(fecha.split("T")[0].split("-"));

  const opciones = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return fechaFormateada.toLocaleDateString("es-ES", opciones);
};
