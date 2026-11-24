
import CriptoCard from './CriptoCard'

interface Criptomoneda {
  id: string
  nombre: string
  precio: number
}

interface CriptoListProps {
  monedas: Criptomoneda[]
}

function CriptoList({ monedas }: CriptoListProps) {
  return (
    <div id="resultados">
      {monedas.map((moneda) => (
        <CriptoCard
          key={moneda.id}
           id={moneda.id}
          nombre={moneda.nombre}
          precio={moneda.precio}
        />
      ))}
    </div>
  )
}

export default CriptoList
