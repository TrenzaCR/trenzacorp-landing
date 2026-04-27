import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'TrenzaCorp | Landing pública',
  description: 'Sitio público de TrenzaCorp para marca, contacto y documentación legal.',
}

const highlights = [
  ['Operaciones', 'Software para logística, rutas y coordinación.'],
  ['ERP privado', 'Acceso separado para equipos internos y clientes.'],
  ['Privacidad', 'Sitio público mínimo, sin surfaces operativas expuestas.'],
]

export default function HomePage() {
  return (
    <main className="site">
      <header className="topbar">
        <a className="brand" href="/">
          <span className="brand-mark" aria-hidden="true" />
          TrenzaCorp
        </a>
        <nav className="nav" aria-label="Navegación principal">
          <a href="/privacidad">Privacidad</a>
          <a href="/terminos">Términos</a>
        </nav>
      </header>

      <section className="hero">
        <p className="eyebrow">TrenzaCorp</p>
        <h1 className="title">Marca pública. Operación privada.</h1>
        <p className="lead">
          Este sitio concentra la presencia pública de TrenzaCorp: información general,
          contacto y documentos legales. La operación interna vive aparte.
        </p>

        <div className="actions">
          <a className="button primary" href="mailto:ventas@trenzacorp.com">
            Contacto comercial
          </a>
          <a className="button" href="/privacidad">
            Ver privacidad
          </a>
        </div>
      </section>

      <section className="grid" aria-label="Pilares públicos">
        {highlights.map(([title, description]) => (
          <article key={title} className="card">
            <h2>{title}</h2>
            <p>{description}</p>
          </article>
        ))}
      </section>

      <footer className="footer" aria-label="Información legal">
        <p>© 2026 TrenzaCorp</p>
        <p>TrenzaCorp es una marca operada por Luis Alejandro Rojas Ramírez</p>
        <p>Cédula / ID Fiscal: 112680725</p>
        <p>Dirección: 100 e 100 s BCR, San Sebastian, San Jose 10111, Costa Rica</p>
      </footer>
    </main>
  )
}
