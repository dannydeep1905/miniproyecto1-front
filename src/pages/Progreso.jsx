export default function Progreso() {
  const stats = [
    { label: 'Eventos Creados', value: '12', change: '+25% este mes', icon: '🎯' },
    { label: 'Completados', value: '8', change: '66% de cumplimiento', icon: '✅' },
    { label: 'En Agenda', value: '4', change: 'Próxima semana', icon: '📅' },
    { label: 'Asistencia Promedio', value: '89%', change: 'Excelente participación', icon: '📈' }
  ]

  const metrics = [
    { title: 'Reuniones de Equipo', progress: 85, color: '#6366f1' },
    { title: 'Talleres y Capacitaciones', progress: 60, color: '#10b981' },
    { title: 'Presentaciones a Clientes', progress: 40, color: '#f59e0b' }
  ]

  return (
    <div className="page-container">
      <header className="app-header">
        <div>
          <span className="app-badge">EventApp</span>
          <h1 className="page-title">Progreso</h1>
          <p className="page-description">Indicadores y métricas visuales del equipo</p>
        </div>
      </header>

      <section className="stats-grid">
        {stats.map((stat, idx) => (
          <div key={idx} className="stat-card">
            <div className="stat-card-header">
              <span className="stat-icon">{stat.icon}</span>
              <span className="stat-change">{stat.change}</span>
            </div>
            <h3 className="stat-value">{stat.value}</h3>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </section>

      <section className="section-container" style={{ marginTop: '24px' }}>
        <div className="section-header">
          <h2>Avance por Tipo de Evento</h2>
        </div>

        <div className="progress-list">
          {metrics.map((metric, idx) => (
            <div key={idx} className="progress-item">
              <div className="progress-info">
                <span className="progress-title">{metric.title}</span>
                <span className="progress-percentage">{metric.progress}%</span>
              </div>
              <div className="progress-bar-bg">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${metric.progress}%`, backgroundColor: metric.color }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="info-box">
        <span>💡</span>
        <p>Esta pantalla muestra una maqueta visual del progreso. Próximamente se integrará con el backend de Karen para cargar métricas en tiempo real.</p>
      </div>
    </div>
  )
}