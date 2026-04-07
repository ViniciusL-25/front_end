import { useState } from "react";

function Notas() {
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
          <li className="hover:text-black cursor-pointer">Dashboard</li>
          <li className="hover:text-black cursor-pointer font-semibold">
            Notas
          </li>
          <li className="hover:text-black cursor-pointer">Faltas</li>
          <li className="hover:text-black cursor-pointer">Boletos</li>
          <li className="hover:text-black cursor-pointer">Requerimentos</li>
          <li className="hover:text-black cursor-pointer">Sair</li>
        </ul>
      </aside>

      <main className="flex-1 p-4 md:p-10">
        <div className="flex justify-between items-start mb-4 md:hidden">
          <h1 className="text-3xl font-bold leading-tight">
            Minhas <br /> Notas
          </h1>

          <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
            👤
          </div>
        </div>

        <div className="hidden md:flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Minhas Notas</h2>
          <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
            👤
          </div>
        </div>

        <h3 className="text-xl md:text-2xl font-semibold mb-4">
          Histórico de Notas por Semestre
        </h3>

        <div className="bg-white rounded-lg shadow mb-6 overflow-x-auto">
          <div className="bg-gray-200 px-4 py-3 font-semibold rounded-t-lg">
            2026.1
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
              <tr className="border-t">
                <td className="p-3">BI e Data Warehousing</td>
                <td className="p-3"></td>
                <td className="p-3"></td>
                <td className="p-3"></td>
                <td className="p-3">SR</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Construção de Frontend</td>
                <td className="p-3"></td>
                <td className="p-3"></td>
                <td className="p-3"></td>
                <td className="p-3">SR</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Manutenção de Software e Devops</td>
                <td className="p-3"></td>
                <td className="p-3"></td>
                <td className="p-3"></td>
                <td className="p-3">SR</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-white rounded-lg shadow mb-6 overflow-x-auto">
          <div className="bg-gray-200 px-4 py-3 font-semibold rounded-t-lg">
            2025.2
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
              <tr className="border-t">
                <td className="p-3">Construção de Backend</td>
                <td className="p-3">5.4</td>
                <td className="p-3">6.2</td>
                <td className="p-3"></td>
                <td className="p-3">MM</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Estrutura de Dados</td>
                <td className="p-3">6.3</td>
                <td className="p-3">6.1</td>
                <td className="p-3"></td>
                <td className="p-3">MM</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Gerenciamento de Projetos</td>
                <td className="p-3">7.4</td>
                <td className="p-3">7.1</td>
                <td className="p-3"></td>
                <td className="p-3">MS</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <div className="bg-gray-200 px-4 py-3 font-semibold rounded-t-lg">
            2025.1
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
            <tbody></tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Notas;
