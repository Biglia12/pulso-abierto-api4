
export interface PrecioCripto {
  usd: number
}

export interface RespuestaAPI {
  bitcoin?: PrecioCripto
  ethereum?: PrecioCripto
  solana?: PrecioCripto
}

const API_URL =
  'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd'

export async function consultarPrecios(): Promise<RespuestaAPI> {
  const respuesta = await fetch(API_URL)

  if (!respuesta.ok) {
    throw new Error('No se pudieron obtener los precios.')
  }

  const datos: unknown = await respuesta.json()

  if (typeof datos !== 'object' || datos === null || Array.isArray(datos)) {
    throw new Error('La API devolvió datos inválidos.')
  }

  const objeto = datos as Record<string, unknown>
  const resultado: RespuestaAPI = {}

  for (const moneda of ['bitcoin', 'ethereum', 'solana'] as const) {
    const valor = objeto[moneda]

    if (typeof valor === 'object' && valor !== null) {
      const precio = (valor as Record<string, unknown>).usd

      if (typeof precio === 'number' && Number.isFinite(precio)) {
        resultado[moneda] = { usd: precio }
      }
    }
  }

  return resultado
}
