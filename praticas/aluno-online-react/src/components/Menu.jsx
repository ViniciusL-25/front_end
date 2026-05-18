import cap from "../assets/learn.svg";
import { NavLink, Link } from "react-router-dom";


function Menu() {

  return (
    <aside className="hidden md:flex flex-col w-64 bg-gray-300 p-6">
      <div className="flex items-center gap-2 mb-8">
        <img src={cap} alt="Quepe" className="w-6 h-6" />

        <h1 className="text-lg font-bold text-gray-800">Aluno Online</h1>
      </div>
      <nav>
        <ul className="space-y-5 text-gray-800">
          <li>
            < NavLink to="/dashboard">Dashboard </NavLink> 
          </li>
          <li>
            < NavLink to="/notas">Notas </NavLink>
          </li>
          <li>
          < NavLink to="/faltas">Faltas </NavLink>
          </li>
          <li> 
            < NavLink to="/boletos">Boletos </NavLink>
          </li>
          <li> 
            <NavLink to="/requerimentos">Requerimentos </NavLink> 
          </li>
          <li> 
            < NavLink to="/login"> Sair </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Menu;
