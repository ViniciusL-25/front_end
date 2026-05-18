import { Routes , Route} from "react-router-dom";


import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";
import Faltas from "./pages/Faltas";
import Notas from "./pages/Notas";
import Boletos from "./pages/Boletos";
import Requerimentos from "./pages/Requerimento";
import Layout from "./layout/Layout";


function App () {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/*template */}
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/faltas" element={<Faltas />} />
        <Route path="/boletos" element={<Boletos />} />
        <Route path="/notas" element={<Notas />} />
        <Route path="/requerimentos" element={<Requerimentos />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}


export default App;