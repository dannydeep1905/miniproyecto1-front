import { useParams, Link } from 'react-router'
import { mockEvents } from '../data/mockEvents'

export default function DetalleEvento() {
  const { id } = useParams()
  
  const event = mockEvents.find((e) => e.id === id) || {
    id: id || '0',
    title: 'Evento de Ejemplo (ID: ' + id + ')',
    date: '2026-09-20',
    time: '03:00 PM',
    location: 'Auditorio Central',
    category: 'General',
    description: 'Este es un evento de prueba cargado de forma dinámica a partir de la ruta /evento/' + id + '.',
    status: 'En agenda',
    attendees: 5
  }

  return (
    <div className="page-container">
      <header className="app-header">
        <Link to="/hoy" className="btn-back">
          ← Volver a Hoy
        </Link>
      </header>

      <div className="event-detail-card">
        <div className="detail-header">
          <div className="detail-tags">
            <span className="category-badge">{event.category}</span>
            <span className="status-badge">{event.status}</span>
          </div>
          <h1 className="detail-title">{event.title}</h1>
        </div>

        <div className="detail-grid">
          <div className="detail-item">
            <span className="detail-icon">🗓️</span>
            <div>
              <span className="detail-label">Fecha</span>
              <p className="detail-value">{event.date}</p>
            </div>
          </div>

          <div className="detail-item">
            <span className="detail-icon">⏰</span>
            <div>
              <span className="detail-label">Hora</span>
              <p className="detail-value">{event.time}</p>
            </div>
          </div>

          <div className="detail-item">
            <span className="detail-icon">📍</span>
            <div>
              <span className="detail-label">Ubicación</span>
              <p className="detail-value">{event.location}</p>
            </div>
          </div>

          <div className="detail-item">
            <span className="detail-icon">👥</span>
            <div>
              <span className="detail-label">Asistentes estimados</span>
              <p className="detail-value">{event.attendees} personas</p>
            </div>
          </div>
        </div>

        <div className="detail-description-section">
          <h3>Descripción del evento</h3>
          <p>{event.description}</p>
        </div>

        <div className="detail-actions">
          <Link to="/hoy" className="btn-secondary">
            Volver a la lista
          </Link>
        </div>
      </div>
    </div>
  )
}