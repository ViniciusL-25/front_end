import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";
import Faltas from "./pages/Faltas";
import Notas from "./pages/Notas";
import Boletos from "./pages/Boletos";
import Requerimentos from "./pages/Requerimento";
import Layout from "./layout/Layout";

import { useAuth } from "./contexts/useAuth";

function App() {
  const { logado } = useAuth();

  return (
    <Routes>
      {/* Login */}
      <Route
        path="/"
        element={
          logado ? <Navigate to="/dashboard" /> : <Login />
        }
      />

      {/* Rotas privadas */}
      <Route
        element={
          logado ? <Layout /> : <Navigate to="/" />
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/faltas" element={<Faltas />} />
        <Route path="/boletos" element={<Boletos />} />
        <Route path="/notas" element={<Notas />} />
        <Route
          path="/requerimentos"
          element={<Requerimentos />}
        />
      </Route>
    </Routes>
  );
}

export default App;