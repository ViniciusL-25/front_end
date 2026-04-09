import Menu from "../components/Menu";
import Card from "../components/Card";

import avatar from "../assets/avatar.svg";
import cap from "../assets/learn.svg";

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-200">
      <Menu />

      <main className="flex-1 p-6 md:p-10">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <img src={cap} alt="Quepe" className="w-8 h-8" />

            <h1 className="text-3xl font-bold text-gray-800">Olá, Aluno!</h1>
          </div>

          <img
            src={avatar}
            alt="Avatar"
            className="w-12 h-12 rounded-full object-cover border"
          />
        </div>

        <h2 className="text-xl font-semibold text-gray-700 mb-8">
          Bem-vindo ao portal do aluno
        </h2>

        <div className="space-y-6 max-w-2xl">
          <Card title="Mural de Avisos">
            <p>Inscrição para o projeto de extensão</p>
            <p>Eleição para representante de turma</p>
          </Card>

          <Card title="Calendário Acadêmico">
            <p>23/02 - Início do período letivo</p>
            <p>25/04 - Prazo P1</p>
            <p>23/06 - Prazo P2</p>
            <p>04/07 - Fim do período</p>
          </Card>

          <Card title="Minhas Disciplinas">
            <p>BI e Data Warehousing</p>
            <p>Construção de Frontend</p>
          </Card>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
