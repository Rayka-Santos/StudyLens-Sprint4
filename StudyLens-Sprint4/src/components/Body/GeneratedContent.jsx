function GeneratedContent({ texto, revelado }) {
  return (
    <div className="border border-white/15 rounded-xl p-4">
      {revelado ? <p>{texto}</p> : <p>Tente explicar o conteúdo com suas palavras. Depois, confira o trecho que você registrou.</p>}
    </div>
  )
}

export default GeneratedContent
