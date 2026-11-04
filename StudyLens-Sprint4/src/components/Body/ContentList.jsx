import ContentCard from './ContentCard'

function ContentList({ material, editar, excluir }) {
  return (
    <section className="border border-white/15 bg-white/5 rounded-xl p-4">
      <h2 className="text-2xl font-bold my-2">Central de conteúdo</h2>
      {material.titulo === '' ? (
        <p className="my-5">Nenhum material aberto. Preencha o formulário para começar.</p>
      ) : (
        <ContentCard material={material} editar={editar} excluir={excluir} />
      )}
    </section>
  )
}

export default ContentList
