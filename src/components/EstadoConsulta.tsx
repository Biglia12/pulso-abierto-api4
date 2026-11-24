
interface EstadoConsultaProps {
  cargando: boolean
  error: string
  consultado: boolean
  cantidad: number
  onReintentar: () => void
}

function EstadoConsulta({
  cargando,
  error,
  consultado,
  cantidad,
  onReintentar,
}: EstadoConsultaProps) {
  if (cargando) {
    return <p role="status">Cargando precios...</p>
  }

  if (error) {
    return (
      <div role="alert">
        <p>{error}</p>
        <button type="button" onClick={onReintentar}>
          Reintentar
        </button>
      </div>
    )
  }

  if (!consultado) {
    return <p>Presioná "Consultar precios" para comenzar.</p>
  }

  if (cantidad === 0) {
    return <p role="status">No se encontraron resultados.</p>
  }

  return (
    <p role="status">
      Consulta realizada correctamente. Resultados: {cantidad}
    </p>
  )
}

export default EstadoConsulta
