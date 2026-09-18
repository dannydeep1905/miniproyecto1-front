import { useState } from 'react'
import { useNavigate } from 'react-router'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/hoy')
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="brand-header">
          <div className="brand-logo">✨</div>
          <h1 className="brand-title">EventApp</h1>
          <p className="brand-subtitle">Organiza y gestiona tus eventos en un solo lugar</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              id="email"
              type="email"
              placeholder="tu.correo@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn-primary btn-block">
            Iniciar sesión
          </button>
        </form>

        <p className="login-footer">
          Frontend Lead: Daniel (dannydeep1905)
        </p>
      </div>
    </div>
  )
}