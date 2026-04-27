export default function Header() {
  return (
    <header
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(140deg, #030c18 0%, #051528 55%, #04101f 100%)',
        borderBottom: '1px solid rgba(28, 48, 80, 0.6)',
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: 'linear-gradient(90deg, transparent 0%, #5aa5ff 25%, #35d48a 65%, transparent 100%)' }}
      />

      {/* EEG wave background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.045 }}
      >
        <defs>
          <pattern id="eeg" x="0" y="0" width="500" height="90" patternUnits="userSpaceOnUse">
            <path
              d="M0,45 L70,45 L90,12 L110,78 L130,45 L200,45 L215,25 L230,65 L245,45 L320,45 L340,8 L358,82 L375,45 L500,45"
              stroke="#5aa5ff" strokeWidth="1.5" fill="none"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#eeg)" />
      </svg>

      <div className="relative px-6 md:px-10 pt-8 pb-6">
        <div
          className="font-mono text-[10.5px] tracking-[3px] uppercase mb-3"
          style={{ color: '#4a6890' }}
        >
          Neurología · Consultorios Externos · SNA 2026
        </div>

        <h1
          className="leading-tight mb-2"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(24px, 4vw, 40px)',
            fontWeight: 700,
            color: '#e8f0ff',
            letterSpacing: '-0.02em',
          }}
        >
          Guía de Apto Neurológico
          <span
            className="block font-normal italic"
            style={{ fontSize: 'clamp(18px, 3vw, 28px)', color: '#6aabff', marginTop: '2px' }}
          >
            para Conducción Vehicular
          </span>
        </h1>

        <p className="text-[13px] font-light mb-4" style={{ color: '#506888' }}>
          Protocolo clínico para evaluación, estudios y certificación · Consenso SNA 2026
        </p>

        <div className="flex gap-2 flex-wrap header-meta">
          {['Ley 24.449', 'LNC: Clases A-B / C-D-E-G', 'Neurología Argentina 2026', 'Hospital Posadas · HCP'].map(t => (
            <span
              key={t}
              className="rounded-full px-3 py-1 text-[11px] font-mono"
              style={{
                background: 'rgba(90, 165, 255, 0.07)',
                border: '1px solid rgba(90, 165, 255, 0.2)',
                color: '#6aabff',
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </header>
  )
}
