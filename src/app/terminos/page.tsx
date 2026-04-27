import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Términos | TrenzaCorp',
  description: 'Términos de uso del sitio público de TrenzaCorp.',
}

export default function TerminosPage() {
  return (
    <main className="site page">
      <header className="topbar">
        <a className="brand" href="/">
          <span className="brand-mark" aria-hidden="true" />
          TrenzaCorp
        </a>
        <nav className="nav" aria-label="Navegación principal">
          <a href="/">Inicio</a>
          <a href="/privacidad">Privacidad</a>
        </nav>
      </header>

      <article className="legal">
        <h1>Términos de uso</h1>
        <p>
          Al usar este sitio aceptás estos términos básicos de navegación y contacto.
        </p>

        <h2>Uso permitido</h2>
        <p>
          Podés navegar, leer contenido y contactarnos. No está permitido interferir con
          el funcionamiento del sitio o intentar acceder a áreas no públicas.
        </p>

        <h2>Contenido</h2>
        <p>
          La información se publica con fines informativos y comerciales. Puede cambiar
          sin aviso previo.
        </p>

        <h2>Responsabilidad</h2>
        <p>
          TrenzaCorp no garantiza disponibilidad continua ni que el contenido sustituya
          asesoría profesional.
        </p>
      </article>
    </main>
  )
}
