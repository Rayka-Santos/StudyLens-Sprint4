import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
function PrivateRoute({ usuario, children }) {
  const navigate = useNavigate()

  useEffect(() => {
    if (usuario.id === 0) {
      navigate('/login')
    }
  }, [usuario])

  if (usuario.id === 0) return null
  return children
}

export default PrivateRoute
