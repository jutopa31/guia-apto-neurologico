const variants = {
  red: {
    bg: 'rgba(255, 95, 95, 0.07)',
    border: '#ff5f5f',
    color: '#f0b8b8',
    titleColor: '#ff6060',
  },
  blue: {
    bg: 'rgba(90, 165, 255, 0.07)',
    border: '#5aa5ff',
    color: '#a8c8f0',
    titleColor: '#5aa5ff',
  },
  green: {
    bg: 'rgba(53, 212, 138, 0.07)',
    border: '#35d48a',
    color: '#a0dfc0',
    titleColor: '#35d48a',
  },
  yellow: {
    bg: 'rgba(245, 183, 49, 0.07)',
    border: '#f5b731',
    color: '#e8d098',
    titleColor: '#f5b731',
  },
}

export default function Alert({ variant = 'blue', title, children, className = '' }) {
  const v = variants[variant] ?? variants.blue
  return (
    <div
      className={`rounded-lg p-3.5 text-[13px] mb-3.5 ${className}`}
      style={{
        background: v.bg,
        borderLeft: `4px solid ${v.border}`,
        color: v.color,
      }}
    >
      {title && (
        <strong
          className="block mb-1 text-[11px] uppercase tracking-[0.07em]"
          style={{ color: v.titleColor }}
        >
          {title}
        </strong>
      )}
      {children}
    </div>
  )
}
