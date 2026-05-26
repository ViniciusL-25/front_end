import { useEffect, useState } from "react";

function Home() {

  const [carregando, setCarregando] = useState(true);
  const [tarefas, setTarefas] = useState([]);


  useEffect(() => {


   
  const timeout = setTimeout(() => {
      setTarefas([
        { id: 1, nome: "Implementar Trabalho", situacao: "aberta" },
        { id: 2, nome: "Entregar Práticas", situacao: "pendente" },
        { id: 3, nome: "Revisar Conteudo", situacao: "aberta" },
        { id: 4, nome: "Assistir Video-aulas", situacao: "concluída" },
      ]);
      setCarregando(false);
    }, 
    3000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <h1>Página Principal</h1>
      {carregando ? (
        <p>Aguarde...</p>
      ) : (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tarefa</th>
            <th>Situação</th>
          </tr>
        </thead>
        <tbody>
          {tarefas.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.situacao}</td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
    </>
  );
}

export default Home;
