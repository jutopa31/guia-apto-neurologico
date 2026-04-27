export default function Card({ children, className = '', style }) {
  return (
    <div
      className={`rounded-xl p-5 mb-4 ${className}`}
      style={{
        background: '#0c1628',
        border: '1px solid #1c3050',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.35)',
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export function CardTitle({ icon, children }) {
  return (
    <h3
      className="text-[13px] font-bold mb-3 uppercase tracking-[0.07em] flex items-center gap-2"
      style={{ color: '#5aa5ff' }}
    >
      {icon && <span className="text-base">{icon}</span>}
      {children}
    </h3>
  )
}
