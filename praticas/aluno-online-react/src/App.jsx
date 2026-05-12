import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Notas from "./pages/Notas";
import Layout from "./layout/Layout";
import Faltas from "./pages/Faltas";
import Requerimentos from "./pages/Requerimento";
import Boletos from "./pages/Boletos";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/*template */}
        <Route path="/" element={<Menu />} />
        <Route path="/sidebar" element={<Boletos />} />
        <Route path="/perfil/:id" element={<Faltas />} />
        <Route path="/settings" element={<Notas />} />
        <Route path="*" element={<Dashboard />} />
        <Route path="/requerimento" element={<Requerimentos />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
