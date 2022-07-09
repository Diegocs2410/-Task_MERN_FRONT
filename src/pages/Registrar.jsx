import { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/clienteAxios";

const Registrar = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [alerta, setAlerta] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([nombre, email, password, repeatPassword].includes("")) {
      setAlerta({
        error: true,
        msg: "Todos los campos son obligatorios",
      });
      return;
    }
    if (password !== repeatPassword) {
      setAlerta({
        error: true,
        msg: "Las contraseñas no coinciden",
      });
      return;
    }
    if (password.length < 6) {
      setAlerta({
        error: true,
        msg: "La contraseña debe tener al menos 6 caracteres",
      });
      return;
    }
    setAlerta({});

    // Crear el usuario
    try {
      const { data } = await clienteAxios.post("/usuarios", {
        nombre,
        password,
        email,
      });
      setAlerta({
        error: false,
        msg: data.msg,
      });

      setNombre("");
      setEmail("");
      setPassword("");
      setRepeatPassword("");
    } catch ({ response }) {
      setAlerta({
        error: true,
        msg: response.data.msg,
      });
    }
  };

  const { msg } = alerta;
  return (
    <>
      <h1 className="text-sky-600 text-6xl font-black capitalize">
        Crea tu cuenta y administra tus{" "}
        <span className="text-slate-700">proyectos</span>
      </h1>
      {msg && <Alerta alerta={alerta} />}
      <form
        className="my-10 bg-white shadow rounded-lg p-10"
        onSubmit={handleSubmit}
      >
        <div className="my-5 ">
          <label
            htmlFor="nombre"
            className="uppercase text-gray-600 block font-bold text-xl"
          >
            nombre
          </label>
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            id="nombre"
            type="nombre"
            placeholder="EJ: Camilo Serrano"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-100"
          />
        </div>
        <div className="my-5 ">
          <label
            htmlFor="email"
            className="uppercase text-gray-600 block font-bold text-xl"
          >
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="email"
            placeholder="Email de registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-100"
          />
        </div>
        <div className="my-5 ">
          <label
            htmlFor="password"
            className="uppercase text-gray-600 block font-bold text-xl"
          >
            password
          </label>
          <input
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password de registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-100"
          />
        </div>
        <div className="my-5 ">
          <label
            htmlFor="password2"
            className="uppercase text-gray-600 block font-bold text-xl"
          >
            repetir password
          </label>
          <input
            id="password2"
            type="password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            placeholder="Repetir password"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-100"
          />
        </div>
        <input
          type="submit"
          value="Crear cuenta"
          className="py-3 w-full uppercase font-bold rounded-xl bg-sky-700 mg-5 text-white hover:cursor-pointer hover:bg-sky-800 transition-colors"
        />
      </form>
      <nav className="lg:flex lg:justify-between">
        <Link
          to="/"
          className="block text-center my-5 text-slate-500 uppercase text-sm"
        >
          ¿Ya tienes una cuenta? Inicia sesión
        </Link>
      </nav>
    </>
  );
};

export default Registrar;
