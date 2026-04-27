const variants = {
  apto: 'bg-green-100 text-green-800 border border-green-300',
  'no-apto': 'bg-red-100 text-red-800 border border-red-300',
  condicional: 'bg-yellow-100 text-yellow-800 border border-yellow-300',
}

export default function Badge({ variant, children }) {
  return (
    <span className={`inline-block px-2.5 py-0.5 rounded text-[11px] font-bold font-mono tracking-wide ${variants[variant] ?? ''}`}>
      {children}
    </span>
  )
}
