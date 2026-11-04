import { useState } from 'react'
import Header from '../../components/Header'
import Body from '../../components/Body/Body'
import useMateriais from '../../hooks/useMateriais'

function Central() {
  const [view, setView] = useState('central')
  const materiais = useMateriais()

  return (
    <main className="bg-esa-950 text-white min-h-dvh p-4">
      <Header view={view} onNavigate={setView} />
      <Body view={view} materiais={materiais} />
    </main>
  )
}

export default Central
