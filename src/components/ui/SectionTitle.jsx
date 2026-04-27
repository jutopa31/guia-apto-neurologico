export default function SectionTitle({ num, children }) {
  return (
    <>
      <div className="flex items-center gap-3.5 mt-10 mb-4">
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center font-mono text-[12px] font-bold shrink-0 text-white"
          style={{
            background: 'linear-gradient(135deg, #5aa5ff, #3580cc)',
            boxShadow: '0 0 14px rgba(90, 165, 255, 0.35)',
          }}
        >
          {num}
        </div>
        <h2
          className="leading-tight"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(19px, 2.5vw, 23px)',
            fontWeight: 700,
            color: '#d8e4f5',
            letterSpacing: '-0.01em',
          }}
        >
          {children}
        </h2>
      </div>
      <div
        className="h-px mb-5"
        style={{ background: 'linear-gradient(90deg, rgba(90, 165, 255, 0.35) 0%, transparent 60%)' }}
      />
    </>
  )
}
