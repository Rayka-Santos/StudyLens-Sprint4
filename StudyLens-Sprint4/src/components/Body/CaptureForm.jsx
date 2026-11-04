function CaptureForm({ formulario, atualizarEstado, salvar }) {
  return (
    <form onSubmit={salvar} className="border border-white/15 bg-white/5 rounded-xl p-4 flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Registrar material</h2>
      <p>Transcreva o trecho da sua foto ou do seu caderno. A leitura automática da imagem faz parte da proposta, não desta demonstração.</p>
      <label htmlFor="titulo">Título</label>
      <input id="titulo" name="titulo" type="text" value={formulario.titulo} onChange={atualizarEstado} required minLength={3} maxLength={80}
        className="border border-white/10 bg-esa-950 px-4 py-3 rounded-xl w-full focus:border-esa-400" />
      <label htmlFor="materia">Matéria</label>
      <select id="materia" name="materia" value={formulario.materia} onChange={atualizarEstado}
        className="border border-white/10 bg-esa-950 px-4 py-3 rounded-xl w-full focus:border-esa-400">
        <option value="Banco de Dados">Banco de Dados</option>
        <option value="Cálculo I">Cálculo I</option>
        <option value="Engenharia de Software">Engenharia de Software</option>
        <option value="Outra matéria">Outra matéria</option>
      </select>
      <label htmlFor="texto">Trecho para estudar</label>
      <input id="texto" name="texto" type="text" value={formulario.texto} onChange={atualizarEstado} required minLength={10} maxLength={1000}
        className="border border-white/10 bg-esa-950 px-4 py-3 rounded-xl w-full focus:border-esa-400" />
      <label htmlFor="revisao">Data de revisão (opcional)</label>
      <input id="revisao" name="revisao" type="date" value={formulario.revisao} onChange={atualizarEstado}
        className="border border-white/10 bg-esa-950 px-4 py-3 rounded-xl w-full focus:border-esa-400" />
      <button type="submit" className="rounded bg-esa-700 hover:bg-esa-400 px-4 py-3 cursor-pointer">Salvar material</button>
    </form>
  )
}

export default CaptureForm
