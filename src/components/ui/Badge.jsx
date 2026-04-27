const variants = {
  apto: {
    bg: 'rgba(53, 212, 138, 0.12)',
    color: '#35d48a',
    border: 'rgba(53, 212, 138, 0.3)',
  },
  'no-apto': {
    bg: 'rgba(255, 95, 95, 0.12)',
    color: '#ff6060',
    border: 'rgba(255, 95, 95, 0.3)',
  },
  condicional: {
    bg: 'rgba(245, 183, 49, 0.12)',
    color: '#f5b731',
    border: 'rgba(245, 183, 49, 0.3)',
  },
}

export default function Badge({ variant, children }) {
  const v = variants[variant] ?? {
    bg: 'rgba(125, 144, 168, 0.1)',
    color: '#7d90a8',
    border: 'rgba(125, 144, 168, 0.25)',
  }
  return (
    <span
      className="inline-block px-2.5 py-0.5 rounded font-bold font-mono tracking-wide"
      style={{
        fontSize: '10.5px',
        background: v.bg,
        color: v.color,
        border: `1px solid ${v.border}`,
      }}
    >
      {children}
    </span>
  )
}
