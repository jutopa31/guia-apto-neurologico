export default function SectionTitle({ num, children }) {
  return (
    <>
      <div className="flex items-center gap-3 mt-9 mb-4">
        <div className="bg-accent text-white w-7 h-7 rounded flex items-center justify-center font-mono text-[13px] font-semibold shrink-0">
          {num}
        </div>
        <h2 className="text-[19px] font-bold text-dark tracking-tight">{children}</h2>
      </div>
      <div className="h-0.5 mb-5 opacity-25" style={{ background: 'linear-gradient(90deg, #0d4f8c 0%, transparent 100%)' }} />
    </>
  )
}
