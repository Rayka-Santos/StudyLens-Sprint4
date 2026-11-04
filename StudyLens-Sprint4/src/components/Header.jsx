function Header({ view, onNavigate }) {
  return (
    <header className="max-w-7xl mx-auto p-4">
      <p className="text-esa-400 font-bold my-5">DA FOTO AO CONHECIMENTO</p>
      <h1 className="text-4xl font-bold leading-tight">Seu espaço de estudos.</h1>
      <p className="my-5">Registre o texto do seu material, organize a matéria e revise no seu ritmo.</p>
      <div className="grid gap-4 md:grid-cols-3">
        <button type="button" onClick={() => onNavigate('central')} className="border border-white/15 rounded-xl px-4 py-3 cursor-pointer hover:bg-white/10">Central</button>
        <button type="button" onClick={() => onNavigate('pastas')} className="border border-white/15 rounded-xl px-4 py-3 cursor-pointer hover:bg-white/10">Matéria</button>
        <button type="button" onClick={() => onNavigate('lixeira')} className="border border-white/15 rounded-xl px-4 py-3 cursor-pointer hover:bg-white/10">Lixeira</button>
      </div>
      <p className="my-5">Área aberta: {view === 'central' ? 'Central de conteúdo' : view === 'pastas' ? 'Matéria' : 'Lixeira'}</p>
    </header>
  )
}

export default Header
