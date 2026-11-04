import CaptureForm from './CaptureForm'
import ContentList from './ContentList'
import SubjectFolders from './SubjectFolders'
import Trash from './Trash'

function Body({ view, materiais }) {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <p className="my-5 text-esa-400">{materiais.mensagem}</p>
      <p className="my-5">Seu material permanece disponível enquanto esta página estiver aberta. Sair ou recarregar a página apaga o conteúdo da sessão.</p>
      {view === 'central' && (
        <div className="grid gap-6 lg:grid-cols-2">
          <CaptureForm formulario={materiais.formulario} atualizarEstado={materiais.atualizarEstado} salvar={materiais.salvar} />
          <ContentList material={materiais.material} editar={materiais.editar} excluir={materiais.excluir} />
        </div>
      )}
      {view === 'pastas' && <SubjectFolders material={materiais.material} />}
      {view === 'lixeira' && <Trash material={materiais.lixeira} restaurar={materiais.restaurar} apagar={materiais.apagar} />}
    </div>
  )
}

export default Body
