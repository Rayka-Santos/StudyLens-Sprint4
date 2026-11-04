import { useState } from 'react'
import { login } from '../services/Service'
function useLogin(setUsuario) {
  const [dados, setDados] = useState({ username: '', password: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [mensagem, setMensagem] = useState('')

  function atualizarEstado(e) {
    setDados({ ...dados, [e.target.name]: e.target.value })
  }

  async function entrar(e) {
    e.preventDefault()
    if (isLoading) return
    setIsLoading(true)
    setMensagem('Conferindo os dados...')
    try {
      await login('/auth/login', dados, setUsuario)
      setMensagem('Login realizado.')
    } catch (error) {
      setMensagem('Não foi possível entrar. Confira usuário, senha e conexão e tente novamente.')
    }
    setIsLoading(false)
  }

  return { dados, isLoading, mensagem, atualizarEstado, entrar }
}

export default useLogin
