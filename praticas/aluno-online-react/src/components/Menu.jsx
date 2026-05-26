import cap from "../assets/learn.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";


function Menu() {
 const { logout } = useAuth();
  const navigate = useNavigate();

  function handleSair(e) {
    e.preventDefault();

    logout();
    navigate("/");
  }

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
            < NavLink to="/" onClick = {handleSair} > 
            Sair
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Menu;