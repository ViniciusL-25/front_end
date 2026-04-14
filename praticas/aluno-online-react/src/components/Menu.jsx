import cap from "../assets/learn.svg";

function Menu({ itensMenu }) {
  return (
    <aside className="hidden md:flex flex-col w-64 bg-gray-300 p-6">
      <div className="flex items-center gap-2 mb-8">
        <img src={cap} alt="Quepe" className="w-6 h-6" />

        <h1 className="text-lg font-bold text-gray-800">Aluno Online</h1>
      </div>
      <nav>
        <ul className="space-y-5 text-gray-800">
          <li className="cursor-pointer hover:text-black">Dashboard</li>
          <li className="cursor-pointer hover:text-black">Notas</li>
          <li className="cursor-pointer hover:text-black">Faltas</li>
          <li className="cursor-pointer hover:text-black">Boletos</li>
          <li className="cursor-pointer hover:text-black">Requerimentos</li>
          <li className="cursor-pointer hover:text-black">Sair</li>
        </ul>
      </nav>
    </aside>
  );
}

export default Menu;
