
import { z } from 'zod'

export const consultaSchema = z.object({
  busqueda: z.string().trim().min(
    3,
    'Ingresá al menos 3 caracteres.'
  ),
  moneda: z.enum(
    ['todas', 'bitcoin', 'ethereum', 'solana'],
    {
      error: 'Seleccioná una moneda válida.',
    }
  ),
})
