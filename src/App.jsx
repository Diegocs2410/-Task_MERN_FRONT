import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import AuthLayout from "./layouts/AuthLayout";
import ConfirmarCuenta from "./pages/ConfirmarCuenta";
import Login from "./pages/Login";
import NuevoPassword from "./pages/NuevoPassword";
import OlvidePassword from "./pages/OlvidePassword";
import Proyectos from "./pages/Proyectos";
import Registrar from "./pages/Registrar";
import RutaProtegida from "./layouts/RutaProtegida";
import NuevoProyecto from "./pages/NuevoProyecto";
import { ProyectosProvider } from "./context/ProyectoContext";
import Proyecto from "./pages/Proyecto";
import EditarProyecto from "./pages/EditarProyecto";
import NuevoColaborador from "./pages/NuevoColaborador";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ProyectosProvider>
          <Routes>
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path="registrar" element={<Registrar />} />
              <Route path="olvide-password" element={<OlvidePassword />} />
              <Route
                path="olvide-password/:token"
                element={<NuevoPassword />}
              />
              <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
            </Route>

            <Route path="/proyectos" element={<RutaProtegida />}>
              <Route index element={<Proyectos />} />
              <Route path="crear-proyecto" element={<NuevoProyecto />} />
              <Route path=":id" element={<Proyecto />} />
              <Route
                path="nuevo-colaborador/:id"
                element={<NuevoColaborador />}
              />
              <Route path="editar/:id" element={<EditarProyecto />} />
            </Route>
          </Routes>
        </ProyectosProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
