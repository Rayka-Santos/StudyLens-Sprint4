import { useState } from 'react'
import GeneratedContent from './GeneratedContent'

function ContentCard({ material, editar, excluir }) {
  const [revelado, setRevelado] = useState(false)

  return (
    <div className="flex flex-col gap-4 my-5">
      <p className="text-esa-400">{material.materia}</p>
      <h2 className="text-xl font-bold">{material.titulo}</h2>
      <GeneratedContent texto={material.texto} revelado={revelado} />
      <button type="button" onClick={() => setRevelado(!revelado)} className="border border-white/15 rounded-xl px-4 py-3 cursor-pointer hover:bg-white/10">
        {revelado ? 'Ocultar conteúdo' : 'Conferir conteúdo'}
      </button>
      {material.revisao !== '' && <p>Revisão planejada: {material.revisao}</p>}
      <div className="grid gap-4 md:grid-cols-2">
        <button type="button" onClick={editar} className="border border-white/15 rounded-xl px-4 py-3 cursor-pointer hover:bg-white/10">Editar no formulário</button>
        <button type="button" onClick={excluir} className="border border-white/15 rounded-xl px-4 py-3 cursor-pointer hover:bg-white/10">Mover para a lixeira</button>
      </div>
    </div>
  )
}

export default ContentCard
