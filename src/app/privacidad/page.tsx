import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Privacidad | TrenzaCorp',
  description: 'Política de privacidad del sitio público de TrenzaCorp.',
}

export default function PrivacidadPage() {
  return (
    <main className="site page">
      <header className="topbar">
        <a className="brand" href="/">
          <span className="brand-mark" aria-hidden="true" />
          TrenzaCorp
        </a>
        <nav className="nav" aria-label="Navegación principal">
          <a href="/">Inicio</a>
          <a href="/terminos">Términos</a>
        </nav>
      </header>

      <article className="legal">
        <h1>Privacidad</h1>
        <p>
          Este sitio es una landing pública. Solo recopilamos los datos que nos envías
          voluntariamente por correo o mediante canales de contacto externos.
        </p>

        <h2>Datos que podemos recibir</h2>
        <ul>
          <li>Nombre y correo electrónico de contacto.</li>
          <li>Mensajes enviados por email o formularios externos.</li>
          <li>Métricas técnicas básicas del sitio si se habilitan analíticas.</li>
        </ul>

        <h2>Uso</h2>
        <p>
          Usamos esa información solo para responder consultas, coordinar ventas y
          mejorar el sitio público.
        </p>

        <h2>Contacto</h2>
        <p>
          Para consultas sobre privacidad, escribí a{' '}
          <a href="mailto:ventas@trenzacorp.com">ventas@trenzacorp.com</a>.
        </p>
      </article>
    </main>
  )
}
