import { useState } from "react";

const getStatusColor = (status) => {
  switch (status) {
    case "Pago":
      return "text-green-600 font-semibold";
    case "Em atraso":
      return "text-red-600 font-semibold";
    default:
      return "text-gray-700";
  }
};

function Boletos({ boletos }) {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-200">
      <div className="md:hidden flex justify-end p-4">
        <button
          type="button"
          className="text-xl"
          onClick={() => setMenuAberto(!menuAberto)}
        >
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
          <li className="hover:text-black cursor-pointer">Notas</li>
          <li className="hover:text-black cursor-pointer">Faltas</li>
          <li className="hover:text-black cursor-pointer font-semibold">
            Boletos
          </li>
          <li className="hover:text-black cursor-pointer">Requerimentos</li>
          <li className="hover:text-black cursor-pointer">Sair</li>
        </ul>
      </aside>

      <main className="flex-1 p-4 md:p-10">
        <div className="flex justify-between items-start mb-4 md:hidden">
          <h1 className="text-3xl font-bold leading-tight">
            Meus <br /> Boletos
          </h1>

          <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
            👤
          </div>
        </div>

        <div className="hidden md:flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Meus Boletos</h2>
          <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
            👤
          </div>
        </div>

        <h3 className="text-xl md:text-2xl font-semibold mb-4">
          Histórico de Pagamentos
        </h3>

        <div className="bg-white rounded-lg shadow-md overflow-x-auto">
          <table className="w-full min-w-[400px] text-left text-sm md:text-base">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3">Vencimento</th>
                <th className="p-3">Valor R$</th>
                <th className="p-3">Situação</th>
              </tr>
            </thead>

            <tbody>
              {boletos.map((boleto) => (
                <tr
                  key={boleto.vencimento}
                  className="border-t hover:bg-gray-50"
                >
                  <td className="p-3">{boleto.vencimento}</td>
                  <td className="p-3">{boleto.valor}</td>
                  <td className={`p-3 ${getStatusColor(boleto.status)}`}>
                    {boleto.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Boletos;
