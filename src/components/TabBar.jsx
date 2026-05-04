export default function TabBar({ tabs, active, onChange }) {
  return (
    <nav className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-4xl mx-auto flex overflow-x-auto hide-scrollbar">
        {tabs.map(tab => {
          const isActive = active === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={`
                flex-shrink-0 px-5 py-3 text-sm font-medium transition-all duration-150 border-b-2 whitespace-nowrap
                ${isActive
                  ? 'border-red-600 text-red-700 bg-red-50'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'}
              `}
            >
              {tab.label}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
