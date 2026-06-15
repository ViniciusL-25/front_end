import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { listarRequerimento } from "../services/requerimentoService";


 
 

function Requerimentos() {
  const [menuAberto, setMenuAberto] = useState(false);
  const navigate = useNavigate();
  const [requerimentos, setRequerimentos] = useState([]);
  useEffect (() => {
  async function carregarDados() {
    const dados = await listarRequerimento();
    setRequerimentos(dados);
  }

  carregarDados();
}, []);
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
        <h2 className="text-xl font-bold mb-8 hidden md:block">
          🎓 Aluno Online
        </h2>

        <ul className="space-y-4 text-gray-700">
          <li>Dashboard</li>
          <li>Notas</li>
          <li>Faltas</li>
          <li>Boletos</li>
          <li className="font-semibold">Requerimentos</li>
          <li>Sair</li>
        </ul>
      </aside>

      <main className="flex-1 p-4 md:p-10">
        <div className="flex justify-between items-start mb-4 md:hidden">
          <h1 className="text-3xl font-bold leading-tight">
            Meus <br /> Requerimentos
          </h1>

          <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
            👤
          </div>
        </div>

        <div className="hidden md:flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Meus Requerimentos</h1>

          <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
            👤
          </div>
        </div>

        <p className="text-gray-700 mb-6 text-sm md:text-base">
          Faça solicitações online para a secretaria
        </p>

        <div className="bg-white rounded-lg shadow-md overflow-x-auto">
          <table className="w-full min-w-[500px] text-left text-sm md:text-base">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3">Tipo de Requerimento</th>
                <th className="p-3">Data de Solicitação</th>
                <th className="p-3">Situação</th>
              </tr>
            </thead>

            <tbody>
              {requerimentos.map((req, index) => (
                <tr key={index} className="border-t hover:bg-gray-50">
                  <td className="p-3">{req.tipo}</td>
                  <td className="p-3">{req.descricao}</td>
                  <td className="p-3">{req.dataCriacao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <button className="flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition mt-4" 
          onClick={() => navigate("/novoreq")} 
          >
            Novo Requerimento 
          </button>
        </div>
      </main>
    </div>
  );
}

export default Requerimentos;
