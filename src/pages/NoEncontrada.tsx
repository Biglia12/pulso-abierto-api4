
import { Link } from 'react-router-dom'

function NoEncontrada() {
  return (
    <main>
      <header>
        <h1>Página no encontrada</h1>
        <p>Error 404</p>
      </header>

      <section>
        <h2>La página que buscás no existe.</h2>
        <p>Revisá la dirección o volvé al inicio.</p>
        <Link to="/">Volver al inicio</Link>
      </section>
    </main>
  )
}

export default NoEncontrada
