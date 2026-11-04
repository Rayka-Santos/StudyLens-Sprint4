import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/Footer"
import PrivateRoute from "./components/PrivateRoute"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Central from "./pages/central/Central"

function App() {
  const [usuario, setUsuario] = useState({ id: 0 })

  function sair() {
    setUsuario({ id: 0 })
  }

  return (
    <BrowserRouter>
      <Navbar usuario={usuario} sair={sair} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login usuario={usuario} setUsuario={setUsuario} />} />
        <Route path="/central" element={
          <PrivateRoute usuario={usuario}>
            <Central />
          </PrivateRoute>
        } />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
