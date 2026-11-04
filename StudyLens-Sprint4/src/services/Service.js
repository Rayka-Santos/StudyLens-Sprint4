import axios from "axios"
const api = axios.create({
  baseURL: 'https://dummyjson.com'
})

export const login = async (url, dados, setDados) => {
  const resposta = await api.post(url, dados)
  setDados(resposta.data)
}
