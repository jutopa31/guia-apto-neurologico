const variants = {
  red: 'bg-red-50 border-red-600 text-red-900',
  blue: 'bg-blue-50 border-blue-700 text-blue-900',
  green: 'bg-green-50 border-green-700 text-green-900',
  yellow: 'bg-yellow-50 border-yellow-600 text-yellow-900',
}

export default function Alert({ variant = 'blue', title, children, className = '' }) {
  return (
    <div className={`rounded border-l-[5px] p-3.5 text-[13px] mb-3.5 ${variants[variant]} ${className}`}>
      {title && <strong className="block mb-1 text-[12px] uppercase tracking-wide">{title}</strong>}
      {children}
    </div>
  )
}
