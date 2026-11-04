import { useState } from 'react'
const vazio = { titulo: '', materia: 'Banco de Dados', texto: '', revisao: '' }

function useMateriais() {
  const [formulario, setFormulario] = useState(vazio)
  const [material, setMaterial] = useState(vazio)
  const [lixeira, setLixeira] = useState(vazio)
  const [mensagem, setMensagem] = useState('')
  const [editando, setEditando] = useState(false)

  function atualizarEstado(e) {
    setFormulario({ ...formulario, [e.target.name]: e.target.value })
  }

  function salvar(e) {
    e.preventDefault()
    if (formulario.titulo === '' || formulario.texto === '') {
      setMensagem('Preencha o título e o conteúdo.')
      return
    }
    if (material.titulo !== '' && !editando) {
      setMensagem('Há um material aberto. Edite esse material ou mova-o para a lixeira antes de criar outro.')
      return
    }
    setMaterial(formulario)
    setEditando(false)
    setMensagem('Material salvo nesta sessão. Você já pode revisar o conteúdo.')
  }

  function editar() {
    setFormulario(material)
    setEditando(true)
    setMensagem('Altere o formulário e salve o material.')
  }

  function excluir() {
    if (lixeira.titulo !== '') {
      setMensagem('A lixeira já contém um material. Restaure ou apague esse material primeiro.')
      return
    }
    setLixeira(material)
    setMaterial(vazio)
    setFormulario(vazio)
    setEditando(false)
    setMensagem('Material movido para a lixeira.')
  }

  function restaurar() {
    if (material.titulo !== '') {
      setMensagem('Já existe um material aberto. A restauração não substitui esse conteúdo.')
      return
    }
    setMaterial(lixeira)
    setFormulario(lixeira)
    setLixeira(vazio)
    setEditando(false)
    setMensagem('Material restaurado.')
  }

  function apagar() {
    setLixeira(vazio)
    setMensagem('Lixeira esvaziada.')
  }

  return { formulario, material, lixeira, mensagem, atualizarEstado, salvar, editar, excluir, restaurar, apagar }
}

export default useMateriais
