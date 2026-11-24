# Pulso Abierto

Aplicación web desarrollada con React y TypeScript para consultar los precios de Bitcoin, Ethereum y Solana en tiempo real mediante la API pública de CoinGecko.

## Funcionalidades

- Consulta de precios de criptomonedas.
- Búsqueda y filtrado de resultados.
- Navegación entre listado y detalle.
- Gestión de favoritos con Zustand.
- Persistencia de favoritos mediante localStorage.
- Validación de formularios.
- Manejo de carga, errores y reintentos.
- Diseño adaptable a dispositivos móviles.

## Tecnologías utilizadas

- React
- TypeScript
- Vite
- React Router
- Zustand
- Zod
- Fetch API
- Vitest
- Testing Library
- ESLint

## Instalación

Clonar el repositorio y entrar a la carpeta del proyecto.

Instalar las dependencias:

```bash
npm install
```

## Ejecutar en desarrollo

```bash
npm run dev
```

## Ejecutar las pruebas

```bash
npm run test
```

## Revisar el código

```bash
npm run lint
```

## Generar la versión de producción

```bash
npm run build
```

## Comprobar la versión de producción

```bash
npm run preview
```

## Mejora de mantenibilidad

Se detectó código repetido en los botones de favoritos de las páginas de listado y detalle.

Para solucionarlo, se creó el componente reutilizable FavoritoButton.tsx, que centraliza la lógica de favoritos utilizando Zustand.

Después del cambio se verificó que los favoritos continuaran funcionando correctamente en ambas pantallas.

También se ejecutaron las pruebas automatizadas, el build y ESLint, sin detectar errores.

## Publicación

URL de Vercel: https://pulso-abierto-api4-flame.vercel.app/

## Verificación final

Fecha: 24/11/2026

- Pruebas automatizadas: 7 aprobadas.
- Build de producción: generado correctamente.
- ESLint: sin errores.
- Preview: comprobado correctamente.
- Despliegue en Vercel: realizado correctamente.
- Navegación y recarga de detalle: verificadas.
- URL pública: https://pulso-abierto-api4-flame.vercel.app/
