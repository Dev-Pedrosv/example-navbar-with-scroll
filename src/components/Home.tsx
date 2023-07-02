import { useParams } from 'react-router-dom'
import "./nav.css"
import { useEffect } from 'react'
import { scrollTo } from '../lib/scroll-to'
import { NavBar } from './Navbar'

export const Home = () => {
  const {sessionId} = useParams()

  useEffect(() => {
    scrollTo(sessionId)
  }, [sessionId]);

  return (
    <div>
      <h1>Home</h1>

      <NavBar />
      <section id="session-sobre">
        Sobre
      </section>
      <section id="session-projetos">
        Projetos
      </section>
      <section id="session-suporte">
        Suporte
      </section>
    </div>

  )
}