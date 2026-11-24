// @vitest-environment jsdom

import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import EstadoConsulta from '../components/EstadoConsulta'

describe('Consulta exitosa', () => {
  it('muestra la carga y luego los resultados', () => {
    const { rerender } = render(
      <EstadoConsulta
        cargando={true}
        error=""
        consultado={false}
        cantidad={0}
        onReintentar={() => {}}
      />
    )

    expect(
      screen.getByText('Cargando precios...')
    ).toBeTruthy()

    rerender(
      <EstadoConsulta
        cargando={false}
        error=""
        consultado={true}
        cantidad={3}
        onReintentar={() => {}}
      />
    )

    expect(
      screen.getByText(
        'Consulta realizada correctamente. Resultados: 3'
      )
    ).toBeTruthy()
  })
})