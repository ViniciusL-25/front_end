import { Routes, Route } from "react-router";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Perfil from "./pages/Perfil";
import Settings from "./pages/Settings";
import Erro404 from "./pages/Erro404";
import Login from "./pages/Login";
import { useAuth } from "./contexts/AuthContext";

function App() {
  const { logado } = useAuth();
  
  return (
    <Routes>
      {logado ? (
        <Route element={<Layout />}>
          {/*template */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/perfil/:id" element={<Perfil />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      ) : (
        <Route path="/login" element={<Login />} />
      )}
      <Route path="*" element={<Erro404 />} />
    </Routes>
  );
}

export default App;
