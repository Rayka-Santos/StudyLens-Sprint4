import { Link } from "react-router-dom"

function Navbar({ usuario, sair }) {
  return (
    <header className="bg-esa-950 text-white p-4">
      <div className="max-w-7xl mx-auto flex flex-col gap-4 lg:flex-row justify-between items-center">
        <Link to="/" className="text-2xl font-bold">StudyLens</Link>
        <div className="flex gap-2 items-center text-sm lg:gap-4">
          <a href="/#solucao">Solução</a>
          <a href="/#publico">Público</a>
          <a href="/#galeria">Galeria</a>
          <a href="/#equipe">Equipe</a>
          <a href="/#contato">Contato</a>
          {usuario.id === 0 ? (
            <Link to="/login" className="text-esa-400 font-bold">Entrar</Link>
          ) : (
            <div className="flex gap-2 items-center lg:gap-4">
              <Link to="/central" className="text-esa-400 font-bold">Estudar</Link>
              <button type="button" onClick={sair} className="cursor-pointer">Sair</button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
