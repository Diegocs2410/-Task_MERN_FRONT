import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import clienteAxios from "../config/clienteAxios";

const AuthContext = createContext();

const initialAuth = {
  _id: "",
  nombre: "",
  email: "",
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialAuth);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const autenticarUsuario = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setLoading(false);
        return;
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const { data } = await clienteAxios("/usuarios/perfil", config);
        setAuth(data);
        navigate("/proyectos");
      } catch (error) {
        setAuth({});
        console.log(error);
      }
      setLoading(false);
    };

    autenticarUsuario();
  }, []);

  const cerrarSesionAuth = () => {
    setAuth(initialAuth);
  };
  return (
    <AuthContext.Provider value={{ setAuth, auth, loading, cerrarSesionAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
