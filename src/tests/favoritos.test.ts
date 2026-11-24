// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { useFavoritesStore } from '../store/useFavoritesStore'

describe('Favoritos', () => {
  it('permite agregar y quitar una criptomoneda', () => {
    useFavoritesStore.setState({ favorites: [] })

    useFavoritesStore.getState().toggleFavorite('bitcoin')

    expect(
      useFavoritesStore.getState().favorites
    ).toContain('bitcoin')

    useFavoritesStore.getState().toggleFavorite('bitcoin')

    expect(
      useFavoritesStore.getState().favorites
    ).not.toContain('bitcoin')
  })
})