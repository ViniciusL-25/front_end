import { useState } from "react";

import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";
import Faltas from "./pages/Faltas";
import Notas from "./pages/Notas";
import Boletos from "./pages/Boletos";
import Requerimentos from "./pages/Requerimento";

function App() {
  const [logado, setLogado] = useState(false);
  const [pagina, setPagina] = useState("dashboard");

  const listaBoletos = [
    { vencimento: "19/01/2026", valor: "500,00", status: "Pago" },
    { vencimento: "19/02/2026", valor: "500,00", status: "Em atraso" },
    { vencimento: "19/03/2026", valor: "500,00", status: "A Pagar" },
  ];

  const listaRequerimentos = [
    { tipo: "Revisão de Menção", data: "15/12/2025", situacao: "Indeferido" },
    {
      tipo: "Dispensa de Disciplina",
      data: "12/06/2025",
      situacao: "Indeferido",
    },
    {
      tipo: "Trancamento de Matrícula",
      data: "05/01/2024",
      situacao: "Deferido",
    },
  ];

  const dadosNotas = [
    {
      periodo: "2025.2",
      disciplinas: [
        {
          nome: "Construção de Backend",
          a1: "5.4",
          a2: "6.2",
          a3: "",
          mencao: "MM",
        },
      ],
    },
  ];

  const dadosFaltas = [
    {
      periodo: "2025.2",
      disciplinas: [
        {
          nome: "Construção de Backend",
          faltas: 27,
          presenca: "87.5%",
        },
      ],
    },
  ];

  if (!logado) {
    return <Login onLogin={() => setLogado(true)} />;
  }

  return (
    <>
      <div className="p-4 flex gap-2">
        <button onClick={() => setPagina("dashboard")}>Dashboard</button>
        <button onClick={() => setPagina("notas")}>Notas</button>
        <button onClick={() => setPagina("faltas")}>Faltas</button>
        <button onClick={() => setPagina("boletos")}>Boletos</button>
        <button onClick={() => setPagina("requerimentos")}>
          Requerimentos
        </button>
      </div>

      {pagina === "dashboard" && <Dashboard />}
      {pagina === "notas" && <Notas notas={dadosNotas} />}
      {pagina === "faltas" && <Faltas faltas={dadosFaltas} />}
      {pagina === "boletos" && <Boletos boletos={listaBoletos} />}
      {pagina === "requerimentos" && (
        <Requerimentos requerimentos={listaRequerimentos} />
      )}
    </>
  );
}

export default App;
