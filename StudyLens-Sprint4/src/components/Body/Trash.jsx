function Trash({ material, restaurar, apagar }) {
  return (
    <section className="border border-white/15 bg-white/5 rounded-xl p-4">
      <h2 className="text-2xl font-bold my-2">Lixeira</h2>
      {material.titulo === '' ? <p>A lixeira está vazia.</p> : (
        <div className="flex flex-col gap-4 my-5">
          <p>{material.titulo} | {material.materia}</p>
          <p>Você pode recuperar este material ou apagá-lo da sessão.</p>
          <div className="grid gap-4 md:grid-cols-2">
            <button type="button" onClick={restaurar} className="border border-white/15 rounded-xl px-4 py-3 cursor-pointer hover:bg-white/10">Restaurar</button>
            <button type="button" onClick={apagar} className="border border-white/15 rounded-xl px-4 py-3 cursor-pointer hover:bg-white/10">Apagar da sessão</button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Trash
