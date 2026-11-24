// @vitest-environment jsdom

import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import CriptoCard from '../components/CriptoCard'
import { useFavoritesStore } from '../store/useFavoritesStore'

describe('Botón de favoritos', () => {
  it('permite marcar y desmarcar Bitcoin', async () => {
    const user = userEvent.setup()

    useFavoritesStore.setState({ favorites: [] })

    render(
      <MemoryRouter>
        <CriptoCard
          id="bitcoin"
          nombre="Bitcoin"
          precio={50000}
        />
      </MemoryRouter>
    )

    const boton = screen.getByRole('button', {
      name: /marcar favorito/i,
    })

    await user.click(boton)

    expect(
      screen.getByRole('button', {
        name: /quitar favorito/i,
      })
    ).toBeTruthy()

    await user.click(
      screen.getByRole('button', {
        name: /quitar favorito/i,
      })
    )

    expect(
      screen.getByRole('button', {
        name: /marcar favorito/i,
      })
    ).toBeTruthy()
  })
})