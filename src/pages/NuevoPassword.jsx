import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/clienteAxios";

const NuevoPassword = () => {
  const { token } = useParams();
  const [alerta, setAlerta] = useState({
    msg: "",
    error: false,
  });
  const [tokenValido, setTokenValido] = useState(false);
  const [password, setPassword] = useState("");
  const [passModificado, setPassModificado] = useState(false);

  useEffect(() => {
    const comprobarToken = async () => {
      try {
        await clienteAxios(`/usuarios/olvide-password/${token}`);
        setTokenValido(true);
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true,
        });
        console.log(error);
      }
    };
    comprobarToken();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.trim() === "") {
      setAlerta({
        msg: "El password no puede estar vacío",
        error: true,
      });
      return;
    }
    if (password.length < 6) {
      setAlerta({
        msg: "El password debe tener al menos 6 caracteres",
        error: true,
      });
      return;
    }

    try {
      const { data } = await clienteAxios.post(
        `/usuarios/olvide-password/${token}`,
        {
          password,
        }
      );
      setAlerta({
        msg: data.msg,
        error: false,
      });
      setPassModificado(true);
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
      console.log(error);
    }
  };

  const { msg } = alerta;
  return (
    <>
      <h1 className="text-sky-600 text-6xl font-black capitalize">
        Restablece tu password, no pierdas acceso a tus{" "}
        <span className="text-slate-700">proyectos</span>
      </h1>
      {msg && <Alerta alerta={alerta} />}

      {tokenValido && (
        <form
          onSubmit={handleSubmit}
          className="my-10 bg-white shadow rounded-lg p-10"
        >
          <div className="my-5 ">
            <label
              htmlFor="password"
              className="uppercase text-gray-600 block font-bold text-xl"
            >
              nuevo password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Escribe tu nuevo Password"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-100"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input
            type="submit"
            value="Guardar nuevo password"
            className="py-3 w-full uppercase font-bold rounded-xl bg-sky-700 mg-5 text-white hover:cursor-pointer hover:bg-sky-800 transition-colors"
          />
        </form>
      )}
      {passModificado && (
        <Link
          to="/"
          className="block text-center my-5 text-slate-500 uppercase text-sm"
        >
          Inicia sesión
        </Link>
      )}
    </>
  );
};

export default NuevoPassword;
