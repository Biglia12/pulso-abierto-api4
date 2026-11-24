
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import DetalleCripto from './pages/DetalleCripto'
import NoEncontrada from './pages/NoEncontrada'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route
          path="/criptomonedas/:id"
          element={<DetalleCripto />}
        />
        <Route path="*" element={<NoEncontrada />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
