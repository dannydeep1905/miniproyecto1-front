import { useState } from 'react'
import EventCard from '../components/EventCard'
import { mockEvents } from '../data/mockEvents'

export default function Hoy() {
  const [events] = useState(mockEvents)

  return (
    <div className="page-container">
      <header className="app-header">
        <div>
          <span className="app-badge">EventApp</span>
          <h1 className="page-title">Hoy</h1>
          <p className="page-description">Próximos eventos agendados y actividades</p>
        </div>
        <div className="today-date-badge">
          📅 {new Date().toLocaleDateString('es-ES', { weekday: 'short', day: 'numeric', month: 'short' })}
        </div>
      </header>

      <section className="section-container">
        <div className="section-header">
          <h2>Próximos Eventos</h2>
          <span className="counter-pill">{events.length} eventos</span>
        </div>

        <div className="events-grid">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </div>
  )
}