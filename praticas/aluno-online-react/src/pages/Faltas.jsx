import { useState } from "react";
import cap from "../assets/learn.svg";
import avatar from "../assets/avatar.svg";

function Faltas({ faltas }) {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-200">
      <div className="md:hidden flex justify-end p-4">
        <button className="text-xl" onClick={() => setMenuAberto(!menuAberto)}>
          ☰
        </button>
      </div>

      <aside
        className={`
        bg-gray-300 p-6 w-full md:w-64
        ${menuAberto ? "block" : "hidden"} md:flex md:flex-col
      `}
      >
        <div className="flex items-center gap-2 mb-8 hidden md:flex">
          <img src={cap} alt="Quepe" className="w-6 h-6" />
          <h1 className="text-lg font-bold text-gray-800">Aluno Online</h1>
        </div>

        <ul className="space-y-4 text-gray-700">
          <li>Dashboard</li>
          <li>Notas</li>
          <li className="font-semibold">Faltas</li>
          <li>Boletos</li>
          <li>Requerimentos</li>
          <li>Sair</li>
        </ul>
      </aside>

      <main className="flex-1 p-4 md:p-10">
        <div className="flex justify-between items-start mb-4 md:hidden">
          <h1 className="text-3xl font-bold leading-tight">
            Minhas <br /> Faltas
          </h1>

          <img
            src={avatar}
            alt="Aluno"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>

        <div className="hidden md:flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Minhas Faltas</h2>
          <img
            src={avatar}
            alt="Aluno"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>

        <h3 className="text-xl md:text-2xl font-semibold mb-4">
          Histórico de Faltas por Semestre
        </h3>

        {faltas.map((semestre) => (
          <div
            key={semestre.periodo}
            className="bg-white rounded-lg shadow mb-6 overflow-x-auto"
          >
            <div className="bg-gray-200 px-4 py-3 font-semibold rounded-t-lg">
              {semestre.periodo}
            </div>

            <table className="w-full min-w-[500px] text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3">Disciplina</th>
                  <th className="p-3">Total de Faltas</th>
                  <th className="p-3">% de Presença</th>
                </tr>
              </thead>

              <tbody>
                {semestre.disciplinas.map((disciplina, index) => (
                  <tr key={index} className="border-t">
                    <td className="p-3">{disciplina.nome}</td>
                    <td className="p-3">{disciplina.faltas}</td>
                    <td className="p-3">{disciplina.presenca}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </main>
    </div>
  );
}

export default Faltas;
