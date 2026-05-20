import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Faltas from "./pages/Faltas";
import Notas from "./pages/Notas";
import Boletos from "./pages/Boletos";
import Requerimentos from "./pages/Requerimento";
import Layout from "./layout/Layout";
import { useAuth } from "./contexts/AuthContext";

function App() {
  const { logado } = useAuth();
  // ... rest of component
}

export default App;