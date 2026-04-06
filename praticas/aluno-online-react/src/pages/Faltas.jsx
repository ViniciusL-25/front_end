import cap from "../assets/learn.svg";
import avatar from "../assets/avatar.svg";

function Faltas() {
  return (
    <div className="flex min-h-screen bg-gray-200">
      <aside className="hidden md:flex flex-col w-64 bg-gray-300 p-6">
        <div className="flex items-center gap-2 mb-8">
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

      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Minhas Faltas</h2>

          {/* 👉 AVATAR (substitui o emoji) */}
          <img
            src={avatar}
            alt="Aluno"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>

        <h3 className="text-xl font-semibold mb-4">
          Histórico de Faltas por Semestre
        </h3>

        <div className="bg-white rounded-lg shadow mb-6">
          <div className="bg-gray-200 px-4 py-3 font-semibold rounded-t-lg">
            2026.1
          </div>
          <table className="w-full text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3">Disciplina</th>
                <th className="p-3">Total de Faltas</th>
                <th className="p-3">% de Presença</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3">BI e Data Warehousing</td>
                <td className="p-3">0</td>
                <td className="p-3">100%</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Construção de Frontend</td>
                <td className="p-3">0</td>
                <td className="p-3">100%</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Manutenção de Software e Devops</td>
                <td className="p-3">0</td>
                <td className="p-3">100%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="bg-gray-200 px-4 py-3 font-semibold rounded-t-lg">
            2025.2
          </div>
          <table className="w-full text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3">Disciplina</th>
                <th className="p-3">Total de Faltas</th>
                <th className="p-3">% de Presença</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3">Construção de Backend</td>
                <td className="p-3">27</td>
                <td className="p-3">87.5%</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Estrutura de Dados</td>
                <td className="p-3">9</td>
                <td className="p-3">85%</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Gerenciamento de Projetos</td>
                <td className="p-3">10.5</td>
                <td className="p-3">82.5%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Faltas;
