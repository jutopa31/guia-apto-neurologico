import { useState } from 'react'
import TabBar from './components/TabBar'
import AcvTab from './tabs/AcvTab'
import CognitivoTab from './tabs/CognitivoTab'
import InformeTab from './tabs/InformeTab'
import TestsComplementariosTab from './tabs/TestsComplementariosTab'

const TABS = [
  { id: 'acv',         label: 'ACV Isquémico'        },
  { id: 'cognitivo',   label: 'Deterioro Cognitivo'  },
  { id: 'informe',     label: 'Evaluación e Informe'  },
  { id: 'tests',       label: 'Tests Complementarios' },
]

export default function App() {
  const [active, setActive] = useState('acv')

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-gray-900 px-4 py-3 flex-shrink-0">
        <div className="max-w-4xl mx-auto flex items-baseline justify-between">
          <div>
            <p className="font-display text-red-400 text-sm tracking-wide">Guía de Apto Neurológico</p>
            <p className="text-xs text-gray-500 mt-0.5">Evaluación para conducción vehicular · Neurología</p>
          </div>
          <p className="text-xs text-gray-600 hidden sm:block">Protocolo SNA 2026</p>
        </div>
      </header>

      <TabBar tabs={TABS} active={active} onChange={setActive} />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-6">
        {active === 'acv'       && <AcvTab />}
        {active === 'cognitivo' && <CognitivoTab />}
        {active === 'informe'   && <InformeTab />}
        {active === 'tests'     && <TestsComplementariosTab />}
      </main>

      <footer className="text-center text-xs text-gray-400 py-4 border-t border-gray-200 flex-shrink-0">
        Basado en Protocolo SNA 2026 · Neurología Argentina DOI 10.1016/j.neuarg.2026.100732
      </footer>
    </div>
  )
}
