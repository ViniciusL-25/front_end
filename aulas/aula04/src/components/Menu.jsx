import "./Menu.css";
import { NavLink, Link } from "react-router";

function Menu() {
  const usuarioId = 0;

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to={`/perfil/${usuarioId}`}>Perfil</NavLink>
        </li>
        <li>
          <NavLink to="/settings">Configurações</NavLink>
        </li>
        <li>
          <NavLink to="/about">Sobre</NavLink>
        </li>
        <li>
          <Link to="/login">Sair</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
