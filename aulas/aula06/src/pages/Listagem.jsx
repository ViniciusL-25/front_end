import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { listar, remover } from "../services/produtoService";
import { useAuthContext } from "../contexts/AuthContext";

function Listagem() {
  const [dados, setDados] = useState([]);
  const navigate = useNavigate();
  const { logout, usuario } = useAuthContext()

  const trataRemover = async (produto) => {
    await remover(produto);
    setDados(dados.filter((item) => item.id != produto.id));
  }

  useEffect(() => {
    const carregar = async () => {
      const resposta = await listar(usuario.token);
      setDados(resposta);
    };
    carregar();
  }, []);

  return (
    <>
      <Link to="/login" onClick={() => logout()}>Sair</Link>
      <h1>Listagem de Produtos</h1>
      <button onClick={() => navigate("/produtos/novo")}>Novo</button>
      <table>
        <thead>
          <tr>
            <th>Nome do Produto</th>
            <th>Preço</th>
            <th>Unidade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item) => (
            <tr key={item.id}>
              <td>{item.nome}</td>
              <td>{item.preco}</td>
              <td>{item.unidade}</td>
              <td>
                <Link to={`/produtos/editar/${item.id}`}>Editar</Link>|
                <Link to="/produtos" onClick={() => trataRemover(item)}>Remover</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Listagem;