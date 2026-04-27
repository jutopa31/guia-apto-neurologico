export default function Header() {
  return (
    <header className="bg-dark text-white px-6 md:px-10 pt-7 pb-5 border-b-4 border-accent2">
      <div className="font-mono text-[11px] text-[#8899bb] tracking-[2px] uppercase mb-1.5">
        Neurología — Consultorios Externos
      </div>
      <h1 className="text-[22px] md:text-[26px] font-bold tracking-tight mb-1">
        Guía de Apto Neurológico para Conducción Vehicular
      </h1>
      <p className="text-[13px] text-[#a0aabb] font-light">
        Protocolo clínico para evaluación, estudios y certificación · Basado en consenso SNA 2026
      </p>
      <div className="flex gap-3 mt-3.5 flex-wrap header-meta">
        {['Ley 24.449', 'LNC: Clases A-B / C-D-E-G', 'Neurología Argentina 2026', 'Hospital Posadas · HCP'].map(t => (
          <span
            key={t}
            className="bg-white/10 border border-white/15 rounded px-3 py-1 text-[11px] font-mono text-[#c0cfdd]"
          >
            {t}
          </span>
        ))}
      </div>
    </header>
  )
}
