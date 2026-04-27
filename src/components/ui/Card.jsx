export default function Card({ children, className = '', style }) {
  return (
    <div
      className={`bg-white border border-border rounded-lg p-5 mb-4 shadow-md ${className}`}
      style={style}
    >
      {children}
    </div>
  )
}

export function CardTitle({ icon, children }) {
  return (
    <h3 className="text-[14px] font-bold text-accent mb-3 uppercase tracking-wide flex items-center gap-2">
      {icon && <span className="text-base">{icon}</span>}
      {children}
    </h3>
  )
}
