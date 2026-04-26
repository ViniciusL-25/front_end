import { useState } from "react";

function Notas({ notas }) {
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
        bg-gray-100 p-6 w-full md:w-64
        ${menuAberto ? "block" : "hidden"} md:block
      `}
      >
        <h1 className="text-xl font-bold mb-8 hidden md:block">
          🎓 Aluno Online
        </h1>

        <ul className="space-y-4 text-gray-700">
          <li>Dashboard</li>
          <li className="font-semibold">Notas</li>
          <li>Faltas</li>
          <li>Boletos</li>
          <li>Requerimentos</li>
          <li>Sair</li>
        </ul>
      </aside>

      <main className="flex-1 p-4 md:p-10">
        <div className="flex justify-between items-start mb-4 md:hidden">
          <h1 className="text-3xl font-bold leading-tight">
            Minhas <br /> Notas
          </h1>

          <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full">
            👤
          </div>
        </div>

        <div className="hidden md:flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Minhas Notas</h2>
          <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full">
            👤
          </div>
        </div>

        <h3 className="text-xl md:text-2xl font-semibold mb-4">
          Histórico de Notas por Semestre
        </h3>

        {notas.map((semestre) => (
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
                  <th className="p-3">A1</th>
                  <th className="p-3">A2</th>
                  <th className="p-3">A3</th>
                  <th className="p-3">Menção</th>
                </tr>
              </thead>

              <tbody>
                {semestre.disciplinas.map((disciplina, index) => (
                  <tr key={index} className="border-t">
                    <td className="p-3">{disciplina.nome}</td>
                    <td className="p-3">{disciplina.a1}</td>
                    <td className="p-3">{disciplina.a2}</td>
                    <td className="p-3">{disciplina.a3}</td>
                    <td className="p-3">{disciplina.mencao}</td>
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

export default Notas;
