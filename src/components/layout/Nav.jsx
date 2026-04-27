import { useState } from 'react'

const links = [
  { href: '#eval', label: '1. Evaluación' },
  { href: '#estudios', label: '2. Estudios' },
  { href: '#patologias', label: '3. Por Patología' },
  { href: '#acv-section', label: '→ ACV' },
  { href: '#cognitivo-section', label: '→ Cognitivo' },
  { href: '#farmacos', label: '4. Fármacos' },
  { href: '#certificado', label: '5. Certificado' },
  { href: '#banderas', label: '6. Banderas Rojas' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-accent sticky top-0 z-40 shadow-md">
      {/* Desktop */}
      <div className="hidden md:flex px-6 overflow-x-auto">
        {links.map(l => (
          <a
            key={l.href}
            href={l.href}
            className="text-white/80 no-underline px-5 py-3 text-[13px] font-medium tracking-wide border-b-[3px] border-transparent whitespace-nowrap transition-all hover:text-white hover:bg-white/10 hover:border-white/60"
          >
            {l.label}
          </a>
        ))}
      </div>

      {/* Mobile */}
      <div className="md:hidden flex items-center justify-between px-4 py-2">
        <span className="text-white text-[13px] font-semibold">Guía Apto Neurológico</span>
        <button
          onClick={() => setOpen(o => !o)}
          className="text-white text-xl px-2 py-1 rounded hover:bg-white/10 transition"
          aria-label="Menú"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>
      {open && (
        <div className="md:hidden flex flex-col border-t border-white/20">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/80 px-5 py-3 text-[13px] font-medium border-b border-white/10 hover:bg-white/10 transition"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
