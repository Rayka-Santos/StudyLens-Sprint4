import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import useLogin from "../../hooks/useLogin"

function Login({ usuario, setUsuario }) {
  const navigate = useNavigate()
  const { dados, isLoading, mensagem, atualizarEstado, entrar } = useLogin(setUsuario)

  useEffect(() => {
    if (usuario.id !== 0) {
      navigate('/central')
    }
  }, [usuario])

  return (
    <main className="bg-esa-950 text-white p-4 min-h-dvh">
      <div className="max-w-7xl mx-auto grid gap-6 lg:grid-cols-2 items-center">
        <div className="p-4">
          <p className="text-esa-400 font-bold my-5">SEU ESPAÇO DE ESTUDOS</p>
          <h1 className="text-4xl font-bold leading-tight">Da foto ao conhecimento.</h1>
          <p className="my-5">Organize seus materiais, revise conteúdos e acompanhe seus estudos.</p>
          <img src="/img/tela-pastas.png" alt="Protótipo das pastas do StudyLens" className="w-2/3 mx-auto rounded-xl" />
        </div>
        <form onSubmit={entrar} className="flex flex-col gap-4 border border-white/15 bg-white/5 rounded-xl p-4">
          <h2 className="text-2xl font-bold">Entrar no StudyLens</h2>
          <p>Use a conta pública de demonstração: emilys / emilyspass.</p>
          <label htmlFor="usuario">Usuário</label>
          <input id="usuario" name="username" type="text" value={dados.username} onChange={atualizarEstado} required
            className="border border-white/10 bg-esa-950 px-4 py-3 rounded-xl w-full focus:border-esa-400" />
          <label htmlFor="senha">Senha</label>
          <input id="senha" name="password" type="password" value={dados.password} onChange={atualizarEstado} required
            className="border border-white/10 bg-esa-950 px-4 py-3 rounded-xl w-full focus:border-esa-400" />
          <button type="submit" className="rounded bg-esa-700 hover:bg-esa-400 text-white px-4 py-3">
            {isLoading ? 'Entrando...' : 'Entrar'}
          </button>
          <p>{mensagem}</p>
          <Link to="/" className="text-esa-400">Voltar para a apresentação</Link>
        </form>
      </div>
    </main>
  )
}

export default Login
