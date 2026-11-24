import { describe, it, expect, vi, afterEach } from 'vitest'
import { consultarPrecios } from '../services/criptoService'

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('Servicio de criptomonedas', () => {
  it('obtiene los precios correctamente', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        bitcoin: { usd: 50000 },
        ethereum: { usd: 3000 },
        solana: { usd: 150 },
      }),
    }))

    const datos = await consultarPrecios()

    expect(datos.bitcoin?.usd).toBe(50000)
    expect(datos.ethereum?.usd).toBe(3000)
    expect(datos.solana?.usd).toBe(150)
  })

  it('detecta errores de la API', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: false,
    }))

    await expect(consultarPrecios()).rejects.toThrow(
      'No se pudieron obtener los precios.'
    )
  })
})