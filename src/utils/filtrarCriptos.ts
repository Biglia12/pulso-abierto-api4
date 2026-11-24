
export interface Criptomoneda {
  id: string
  nombre: string
  precio: number | undefined
}

export function filtrarCriptos(
  monedas: Criptomoneda[],
  busqueda: string,
  monedaSeleccionada: string
): Criptomoneda[] {
  return monedas.filter(
    (cripto) =>
      cripto.precio !== undefined &&
      cripto.nombre.toLowerCase().includes(busqueda.toLowerCase().trim()) &&
      (monedaSeleccionada === 'todas' ||
        cripto.id === monedaSeleccionada)
  )
}
