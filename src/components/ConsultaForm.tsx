
import { useState } from 'react'
import type { FormEvent } from 'react'
import { consultaSchema } from '../schemas/consultaSchema'

interface ConsultaFormProps {
  cargando: boolean
  busqueda: string
  onBusquedaChange: (valor: string) => void
  moneda: string
  onMonedaChange: (valor: string) => void
  onConsultar: () => void
}

function ConsultaForm({
  cargando,
  busqueda,
  onBusquedaChange,
  moneda,
  onMonedaChange,
  onConsultar,
}: ConsultaFormProps) {
  const [errores, setErrores] = useState({
    busqueda: '',
    moneda: '',
  })

  function manejarEnvio(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault()

    const resultado = consultaSchema.safeParse({
      busqueda,
      moneda,
    })

    if (!resultado.success) {
      const campos = resultado.error.flatten().fieldErrors

      setErrores({
        busqueda: campos.busqueda?.[0] ?? '',
        moneda: campos.moneda?.[0] ?? '',
      })
      return
    }

    setErrores({ busqueda: '', moneda: '' })
    onConsultar()
  }

  return (
    <form onSubmit={manejarEnvio} noValidate>
      <div>
        <label htmlFor="busqueda">Buscar criptomoneda:</label>
        <input
          id="busqueda"
          type="text"
          value={busqueda}
          onChange={(evento) => onBusquedaChange(evento.target.value)}
          placeholder="Ej: Bitcoin"
          aria-invalid={Boolean(errores.busqueda)}
          aria-describedby={errores.busqueda ? 'error-busqueda' : undefined}
        />
        {errores.busqueda && (
          <p id="error-busqueda" role="alert">
            {errores.busqueda}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="moneda">Filtrar por moneda:</label>
        <select
          id="moneda"
          value={moneda}
          onChange={(evento) => onMonedaChange(evento.target.value)}
          aria-invalid={Boolean(errores.moneda)}
          aria-describedby={errores.moneda ? 'error-moneda' : undefined}
        >
          <option value="todas">Todas</option>
          <option value="bitcoin">Bitcoin</option>
          <option value="ethereum">Ethereum</option>
          <option value="solana">Solana</option>
        </select>
        {errores.moneda && (
          <p id="error-moneda" role="alert">
            {errores.moneda}
          </p>
        )}
      </div>

      <button type="submit" disabled={cargando}>
        {cargando ? 'Consultando...' : 'Consultar precios'}
      </button>
    </form>
  )
}

export default ConsultaForm
