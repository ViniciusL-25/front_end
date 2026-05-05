import { Routes, Route } from "react-router";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Perfil from "./pages/Perfil";
import Settings from "./pages/Settings";
import Erro404 from "./pages/Erro404";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/*template */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/perfil/:id" element={<Perfil />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Erro404 />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
