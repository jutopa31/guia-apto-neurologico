import { useState } from 'react'

const links = [
  { href: '#eval',             label: '1. Evaluación' },
  { href: '#estudios',         label: '2. Estudios' },
  { href: '#patologias',       label: '3. Por Patología' },
  { href: '#acv-section',      label: '→ ACV' },
  { href: '#cognitivo-section',label: '→ Cognitivo' },
  { href: '#farmacos',         label: '4. Fármacos' },
  { href: '#certificado',      label: '5. Certificado' },
  { href: '#banderas',         label: '6. Banderas Rojas' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      className="sticky top-0 z-40"
      style={{
        background: 'rgba(3, 12, 24, 0.92)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(28, 48, 80, 0.7)',
      }}
    >
      {/* Desktop */}
      <div className="hidden md:flex px-4 overflow-x-auto">
        {links.map(l => (
          <a
            key={l.href}
            href={l.href}
            className="no-underline px-4 py-3 text-[12.5px] font-medium tracking-wide whitespace-nowrap border-b-2 border-transparent transition-all duration-200 hover:text-accent hover:border-accent"
            style={{ color: '#607090' }}
          >
            {l.label}
          </a>
        ))}
      </div>

      {/* Mobile */}
      <div className="md:hidden flex items-center justify-between px-4 py-2.5">
        <span className="text-[12.5px] font-semibold font-mono" style={{ color: '#5aa5ff' }}>
          Guía Apto Neurológico
        </span>
        <button
          onClick={() => setOpen(o => !o)}
          className="text-lg px-2 py-1 rounded transition-colors hover:text-accent"
          style={{ color: '#607090' }}
          aria-label="Menú"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col" style={{ borderTop: '1px solid rgba(28, 48, 80, 0.6)' }}>
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-5 py-3 text-[13px] font-medium no-underline hover:text-accent transition-colors"
              style={{
                color: '#607090',
                borderBottom: '1px solid rgba(28, 48, 80, 0.4)',
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
