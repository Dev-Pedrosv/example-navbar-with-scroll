import { useNavigate, useParams} from "react-router-dom"
import "./nav.css"

export const NavBar = () => {
  const { sessionId } = useParams()
  const navigate = useNavigate()

  const handleNavigate = (to: string) => {
    if(`/home/${sessionId}` === to) {
      return window.location.href = to
    }

    navigate(to, { replace: true })
  }

  return (
    <nav>
      <a onClick={() => handleNavigate('/home/session-sobre')}>Sobre</a>
      <a onClick={() => handleNavigate('/home/session-projetos')}>Projetos</a>
      <a onClick={() => handleNavigate('/join')}>Entre para o time</a>
      <a onClick={() => handleNavigate('/home/session-suporte')}>Suporte</a>
      <a onClick={() => handleNavigate('/')}>Main</a>
    </nav>
  )
}