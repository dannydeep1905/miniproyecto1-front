import { Link } from 'react-router'

export default function EventCard({ event }) {
  return (
    <article className="event-card">
      <div className="event-card-header">
        <span className="category-badge">{event.category}</span>
        <span className="status-badge">{event.status}</span>
      </div>
      <h3 className="event-title">{event.title}</h3>
      <div className="event-info">
        <p className="event-detail">
          <span className="icon">🗓️</span> {event.date}
        </p>
        <p className="event-detail">
          <span className="icon">⏰</span> {event.time}
        </p>
        <p className="event-detail">
          <span className="icon">📍</span> {event.location}
        </p>
      </div>
      <div className="event-card-footer">
        <span className="attendees">👥 {event.attendees} asistentes</span>
        <Link to={`/evento/${event.id}`} className="btn-detail">
          Ver detalle →
        </Link>
      </div>
    </article>
  )
}