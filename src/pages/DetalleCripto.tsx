import { Link, useParams } from 'react-router-dom'
import FavoritoButton from '../components/FavoritoButton'

const criptomonedas = {
  bitcoin: {
    nombre: 'Bitcoin',
    simbolo: 'BTC',
    descripcion: 'Bitcoin es una criptomoneda descentralizada.',
  },
  ethereum: {
    nombre: 'Ethereum',
    simbolo: 'ETH',
    descripcion: 'Ethereum permite ejecutar contratos inteligentes.',
  },
  solana: {
    nombre: 'Solana',
    simbolo: 'SOL',
    descripcion: 'Solana es una blockchain orientada a transacciones rápidas.',
  },
}

function DetalleCripto() {
  const { id } = useParams()

  const cripto = id && Object.prototype.hasOwnProperty.call(criptomonedas, id)
    ? criptomonedas[id as keyof typeof criptomonedas]
    : undefined

  if (!cripto || !id) {
    return (
      <main>
        <h1>Criptomoneda no encontrada</h1>
        <p>La criptomoneda solicitada no existe.</p>
        <Link to="/">Volver al inicio</Link>
      </main>
    )
  }

  return (
    <main>
      <header>
        <h1>{cripto.nombre}</h1>
        <p>Detalle de la criptomoneda</p>
      </header>

      <section>
        <h2>{cripto.nombre} ({cripto.simbolo})</h2>
        <p>{cripto.descripcion}</p>

        <FavoritoButton id={id} />

        <p>
          <Link to="/">Volver al inicio</Link>
        </p>
      </section>
    </main>
  )
}

export default DetalleCripto