import logo from './assets/learn.svg'

function Sidebar(){
    return (  
    <aside className='hidden md:block bg-gray-300'>
    <header className='flex flex-rol'>
      <img src={logo} alt="imagem do logo" />
      <h1>ALuno Online</h1>
    </header>
    <Menu/>
    </aside>
    )
}

export default Sidebar;