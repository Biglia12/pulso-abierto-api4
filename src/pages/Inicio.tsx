import { useState } from 'react'
import { consultarPrecios } from '../services/criptoService'
import type { RespuestaAPI } from '../services/criptoService'
import CriptoList from '../components/CriptoList'
import EstadoConsulta from '../components/EstadoConsulta'
import ConsultaForm from '../components/ConsultaForm'
import '../style.css'
import { filtrarCriptos } from '../utils/filtrarCriptos'


function Inicio() {
  const [precios, setPrecios] = useState<RespuestaAPI | null>(null)
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState('')
  const [busqueda, setBusqueda] = useState('')
  const [moneda, setMoneda] = useState('todas')

  async function obtenerPrecios() {
    setCargando(true)
    setError('')
    setPrecios(null)

    try {
      const datos = await consultarPrecios()
      setPrecios(datos)
    } catch {
      setError('Ocurrió un error al consultar los precios.')
    } finally {
      setCargando(false)
    }
  }

  const monedas = [
    { id: 'bitcoin', nombre: 'Bitcoin', precio: precios?.bitcoin?.usd },
    { id: 'ethereum', nombre: 'Ethereum', precio: precios?.ethereum?.usd },
    { id: 'solana', nombre: 'Solana', precio: precios?.solana?.usd },
  ]

const disponibles = filtrarCriptos(monedas, busqueda, moneda)
  .filter((cripto) => typeof cripto.precio === 'number')

  return (
    <main>
      <header>
        <h1>Pulso Abierto</h1>
        <p>Consulta de criptomonedas en tiempo real</p>
      </header>

      <section>
        <h2>Mercado de criptomonedas</h2>
        <p>Consultá los precios de Bitcoin, Ethereum y Solana.</p>

       <ConsultaForm
  cargando={cargando}
  busqueda={busqueda}
  onBusquedaChange={setBusqueda}
  moneda={moneda}
  onMonedaChange={setMoneda}
  onConsultar={obtenerPrecios}
/>


      <EstadoConsulta
  cargando={cargando}
  error={error}
  consultado={precios !== null}
  cantidad={disponibles.length}
  onReintentar={obtenerPrecios}
/>

   {precios && disponibles.length > 0 && (
  <CriptoList
    monedas={disponibles.map((moneda) => ({
      id: moneda.id,
      nombre: moneda.nombre,
      precio: moneda.precio!,
    }))}
  />
)}
      </section>
    </main>
  )
}
export default Inicio
