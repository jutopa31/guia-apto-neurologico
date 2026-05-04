import SectionHeader from '../components/SectionHeader'
import SlideCard from '../components/SlideCard'
import AlertBox from '../components/AlertBox'
import {
  farmacosAltoRiesgo,
  farmacosPrecaucion,
  combinacionesPeligrosas,
  principiosClinicos,
} from '../content/farmacos'
import { AlertTriangle, Info, ShieldAlert, Pill } from 'lucide-react'

export default function FarmacosTab() {
  return (
    <div className="space-y-6">
      <SectionHeader
        num="4"
        title="Fármacos y Conducción Vehicular"
        subtitle="Grupos de riesgo · Precauciones clínicas · Protocolo SNA 2026"
      />

      <AlertBox
        type="blue"
        title="Principio clave"
        text="La prescripción de un fármaco no implica inaptitud automática para conducir — el impacto real debe evaluarse de forma individualizada. Cuando se indique no conducir o conducir con precaución, comunicarlo de forma explícita y dejarlo documentado en la historia clínica con firma del paciente."
      />

      {/* Alto riesgo */}
      <div>
        <div className="flex items-center gap-2 mb-3 ml-1">
          <ShieldAlert size={18} className="text-red-600 flex-shrink-0" />
          <h2 className="font-display text-xl text-gray-800">Grupos de alto riesgo para conducción</h2>
        </div>
        <p className="text-sm text-gray-500 mb-4 ml-1">
          Fármacos que habitualmente requieren restricción de conducción, al menos durante el período de inicio o
          ajuste de dosis. Evaluar individualmente según respuesta clínica.
        </p>
        <div className="space-y-3">
          {farmacosAltoRiesgo.map((f, i) => (
            <SlideCard key={i} accent="red">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center mt-0.5">
                  <Pill size={13} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                    <h3 className="font-semibold text-gray-900">{f.grupo}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-700 font-medium">
                      {f.efecto}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mb-1.5">
                    <span className="font-semibold text-gray-600">Ejemplos: </span>{f.ejemplos}
                  </p>
                  {f.nota && (
                    <p className={`text-xs leading-relaxed ${f.nota.startsWith('⚠') ? 'text-red-700 font-medium' : 'text-gray-600'}`}>
                      {f.nota}
                    </p>
                  )}
                </div>
              </div>
            </SlideCard>
          ))}
        </div>
      </div>

      {/* Precaución variable */}
      <div>
        <div className="flex items-center gap-2 mb-3 ml-1">
          <AlertTriangle size={18} className="text-amber-500 flex-shrink-0" />
          <h2 className="font-display text-xl text-gray-800">Riesgo variable — precaución individual</h2>
        </div>
        <p className="text-sm text-gray-500 mb-4 ml-1">
          Grupos con impacto dependiente de la dosis, el individuo y el momento del tratamiento.
          El riesgo es mayor al inicio o con cambios de dosis.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {farmacosPrecaucion.map((f, i) => (
            <div key={i} className="bg-white rounded-xl border border-amber-200 border-l-4 border-l-amber-400 px-4 py-3">
              <p className="font-semibold text-sm text-gray-800 mb-0.5">{f.grupo}</p>
              <p className="text-xs text-gray-500 mb-1.5">
                <span className="font-medium text-gray-600">Ej.: </span>{f.ejemplos}
              </p>
              <p className={`text-xs leading-relaxed ${f.nota.startsWith('⚠') ? 'text-amber-700 font-medium' : 'text-gray-600'}`}>
                {f.nota}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Combinaciones peligrosas */}
      <SlideCard accent="red" title="Combinaciones especialmente peligrosas">
        <div className="space-y-2">
          {combinacionesPeligrosas.map((c, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <AlertTriangle size={14} className="text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-800">{c}</p>
            </div>
          ))}
        </div>
      </SlideCard>

      {/* Principios clínicos */}
      <SlideCard accent="blue">
        <div className="flex items-center gap-2 mb-3">
          <Info size={18} className="text-blue-600" />
          <h3 className="font-display text-lg text-gray-800">Principios para la práctica clínica</h3>
        </div>
        <ul className="space-y-2">
          {principiosClinicos.map((p, i) => (
            <li key={i} className="flex gap-3 text-sm text-gray-700">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              {p}
            </li>
          ))}
        </ul>
      </SlideCard>

      <div className="text-xs text-gray-400 text-center pb-2">
        Fuente: Protocolo SNA 2026 · EMA guidelines on driving and medicinal products · AAAM drug categorization
      </div>
    </div>
  )
}
