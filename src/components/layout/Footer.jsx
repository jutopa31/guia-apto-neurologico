export default function Footer() {
  return (
    <footer
      className="text-center py-5 px-5 mt-10"
      style={{ background: '#030c18', borderTop: '1px solid rgba(28, 48, 80, 0.7)' }}
    >
      <p className="text-[11.5px]" style={{ color: '#3d5570' }}>
        Guía de uso clínico · Hospital Posadas / Hospital Central de Pilar
      </p>
      <p className="text-[11px] mt-1" style={{ color: '#2e4260' }}>
        Basada en consenso SNA 2026 · La decisión final corresponde a la autoridad administrativa competente
      </p>
    </footer>
  )
}
