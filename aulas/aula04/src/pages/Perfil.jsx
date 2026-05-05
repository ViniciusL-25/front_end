import { useParams } from "react-router";

function Perfil() {
  const { id } = useParams();

  // buscar o usuario pelo id

  return <h1>Perfil do Usuário {id}</h1>;
}

export default Perfil;
