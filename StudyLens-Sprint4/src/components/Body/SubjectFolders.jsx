function SubjectFolders({ material }) {
  return (
    <section className="border border-white/15 bg-white/5 rounded-xl p-4">
      <h2 className="text-2xl font-bold my-2">Organização por matéria</h2>
      {material.titulo === '' ? <p>Nenhum material para organizar.</p> : (
        <div className="flex flex-col gap-4 my-5">
          <p className="text-esa-400 font-bold">{material.materia}</p>
          <p>{material.titulo}</p>
          <p>Para mudar a matéria, volte à Central, edite o formulário e salve.</p>
        </div>
      )}
    </section>
  )
}

export default SubjectFolders
