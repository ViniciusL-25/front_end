import Menu from "../components/Menu";
import avatar from "../assets/avatar.svg";
import cap from "../assets/learn.svg";

function Dashboard({ menu }) {
  return (
    <div className="flex min-h-screen bg-gray-200">
      <Menu itensMenu={menu} />

      <main className="flex-1 p-6 md:p-10">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <img src={cap} alt="Quepe" className="w-8 h-8" />
            <h1 className="text-3xl font-bold text-gray-800">Olá, Aluno!</h1>
          </div>

          <img
            src={avatar}
            alt="Avatar"
            className="w-12 h-12 rounded-full border"
          />
        </div>

        <h2 className="text-xl font-semibold text-gray-700 mb-8">
          Bem-vindo ao portal do aluno
        </h2>

        {/* GRID PRINCIPAL */}
        <div className="space-y-6 max-w-3xl">
          {/* MURAL */}
          <div className="bg-white rounded-lg shadow">
            <div className="bg-gray-200 px-4 py-2 font-semibold text-gray-700 rounded-t-lg">
              Mural de Avisos
            </div>
            <div className="p-4 text-gray-700 space-y-1">
              <p>Inscrição para o projeto de extensão</p>
              <p>Eleição para representante de turma</p>
            </div>
          </div>

          {/* CALENDÁRIO */}
          <div className="bg-white rounded-lg shadow">
            <div className="bg-gray-200 px-4 py-2 font-semibold text-gray-700 rounded-t-lg">
              Calendário Acadêmico
            </div>
            <div className="p-4 text-gray-700 space-y-1">
              <p>23/02 - Início do período letivo 2026-1</p>
              <p>25/04 - Prazo final para aplicação da P1</p>
              <p>23/06 - Prazo final para aplicação da P2</p>
              <p>04/07 - Fim do período letivo 2026-1</p>
            </div>
          </div>

          {/* DISCIPLINAS */}
          <div className="bg-white rounded-lg shadow">
            <div className="bg-gray-200 px-4 py-2 font-semibold text-gray-700 rounded-t-lg">
              Minhas Disciplinas
            </div>
            <div className="p-4 text-gray-700 space-y-1">
              <p>BI e Data Warehousing</p>
              <p>Construção de Frontend</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
