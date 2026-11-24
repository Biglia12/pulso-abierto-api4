import { Link } from 'react-router-dom'
import FavoritoButton from './FavoritoButton'

interface CriptoCardProps {
  id: string
  nombre: string
  precio: number
}

function CriptoCard({ id, nombre, precio }: CriptoCardProps) {
  return (
    <article className="tarjeta">
      <h3>
        <Link to={`/criptomonedas/${id}`}>
          {nombre}
        </Link>
      </h3>

      <p>
        {precio.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })}
      </p>

      <FavoritoButton id={id} />
    </article>
  )
}

export default CriptoCard