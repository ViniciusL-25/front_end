import logo from './assets/learn.svg'
import avatar from './assets/avatar.svg'

function App(){
  return <div className='flex flex-col md:flex-row'>  
    <aside className='hidden md:block bg-gray-300'>
      <header className='flex flex-rol'>
        <img src={logo} alt="imagem do logo" />
        <h1>ALuno Online</h1>
      </header>
      <nav>
        <ul>
          <li>Dashboard</li>
          <li>Notas</li>
          <li>Faltas</li>
          <li>Boletos</li>
          <li>Requerimentos</li>
          <li>Sair</li>
        </ul>
      </nav>
      <main>
        <header>
          <h1>Olá, Aluno!</h1>
          <img src={avatar} alt="imagem do avatar" />
        </header>
        <h2>Bem Vindo ao portal do aluno</h2>
        <section>
          <article>
            <h3>Mural de Avisos</h3>
            <ul>
              <li>Inscrição para o projeto de extensão</li>
              <li>Eleição para representante de turma</li>
              <li></li>
            </ul>
          </article>
          <article>
            <h3>Calendário Acadêmico</h3>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </article>
          <article>
            <h3>Minhas Diciplinas</h3>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </article>
        </section>
      </main>
    </aside>
  </div>
}

export default App;