import { useFavoritesStore } from '../store/useFavoritesStore'

interface FavoritoButtonProps {
  id: string
}

function FavoritoButton({ id }: FavoritoButtonProps) {
  const favorita = useFavoritesStore((state) =>
    state.favorites.includes(id)
  )

  const toggleFavorite = useFavoritesStore(
    (state) => state.toggleFavorite
  )

  return (
    <button
      type="button"
      onClick={() => toggleFavorite(id)}
      aria-pressed={favorita}
    >
      {favorita ? '★ Quitar favorito' : '☆ Marcar favorito'}
    </button>
  )
}

export default FavoritoButton