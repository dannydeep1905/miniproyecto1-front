import { Routes, Route, Navigate } from 'react-router'
import Navigation from './components/Navigation'
import Login from './pages/Login'
import Hoy from './pages/Hoy'
import CrearEvento from './pages/CrearEvento'
import DetalleEvento from './pages/DetalleEvento'
import Progreso from './pages/Progreso'
import './App.css'

function App() {
  return (
    <div className="app-layout">
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/hoy" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/hoy" element={<Hoy />} />
          <Route path="/crear" element={<CrearEvento />} />
          <Route path="/evento/:id" element={<DetalleEvento />} />
          <Route path="/progreso" element={<Progreso />} />
          <Route path="*" element={<Navigate to="/hoy" replace />} />
        </Routes>
      </main>
      <Navigation />
    </div>
  )
}

export default App