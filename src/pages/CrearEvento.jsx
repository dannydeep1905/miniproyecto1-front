import { useState } from 'react'
import { useNavigate } from 'react-router'

export default function CrearEvento() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    nombre: '',
    fecha: '',
    hora: '',
    ubicacion: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      navigate('/hoy')
    }, 1200)
  }

  return (
    <div className="page-container">
      <header className="app-header">
        <div>
          <span className="app-badge">EventApp</span>
          <h1 className="page-title">Crear evento</h1>
          <p className="page-description">Agrega un nuevo evento a tu agenda</p>
        </div>
      </header>

      <div className="form-card-wrapper">
        {submitted ? (
          <div className="success-banner">
            <span className="success-icon">✅</span>
            <h3>¡Evento simulado creado con éxito!</h3>
            <p>Redirigiendo a la pantalla principal de Hoy...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="minimal-form">
            <div className="form-group">
              <label htmlFor="nombre">Nombre del evento</label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Ej: Lanzamiento de producto, Reunión de equipo"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fecha">Fecha</label>
                <input
                  id="fecha"
                  name="fecha"
                  type="date"
                  value={formData.fecha}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="hora">Hora</label>
                <input
                  id="hora"
                  name="hora"
                  type="time"
                  value={formData.hora}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="ubicacion">Ubicación</label>
              <input
                id="ubicacion"
                name="ubicacion"
                type="text"
                placeholder="Ej: Sala 101, Google Meet, Oficina Central"
                value={formData.ubicacion}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn-primary btn-block">
              ➕ Crear evento
            </button>
          </form>
        )}
      </div>
    </div>
  )
}