import { useNavigate, useParams} from "react-router-dom"

export const NavBar = () => {
  const { sessionId } = useParams()
  const navigate = useNavigate()
  
  const handleNavigate = (to: string) => {
    if(`/${sessionId}` === to) {
      return window.location.href = to
    }

    navigate(to, { replace: true })
  }

  return (
    <nav>
      <a onClick={() => handleNavigate('/session-sobre')}>Sobre</a>
      <a onClick={() => handleNavigate('/session-projetos')}>Projetos</a>
      <a onClick={() => handleNavigate('/join')}>Entre para o time</a>
      <a onClick={() => handleNavigate('/session-suporte')}>Suporte</a>
    </nav>
  )
}