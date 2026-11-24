// @vitest-environment jsdom

import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import EstadoConsulta from '../components/EstadoConsulta'

describe('Estado de consulta', () => {
  it('muestra un mensaje cuando no hay resultados', () => {
    render(
      <EstadoConsulta
        cargando={false}
        error=""
        consultado={true}
        cantidad={0}
        onReintentar={() => {}}
      />
    )

    expect(
      screen.getByText('No se encontraron resultados.')
    ).toBeTruthy()
  })

  it('muestra un error y permite reintentar', async () => {
    const reintentar = vi.fn()
    const user = userEvent.setup()

    render(
      <EstadoConsulta
        cargando={false}
        error="Ocurrió un error al consultar los precios."
        consultado={false}
        cantidad={0}
        onReintentar={reintentar}
      />
    )

    expect(screen.getByRole('alert')).toBeTruthy()

    await user.click(
      screen.getByRole('button', { name: 'Reintentar' })
    )

    expect(reintentar).toHaveBeenCalledOnce()
  })
})