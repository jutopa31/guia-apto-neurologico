import SectionHeader from '../components/SectionHeader'
import SlideCard from '../components/SlideCard'
import AlertBox from '../components/AlertBox'
import ClinicalTable from '../components/ClinicalTable'
import { tiemposMinimos, dominios, contraindicacionesAbsolutas, derivaciones, aptitudes } from '../content/acv'
import { Clock, Eye, Brain, MessageSquare, AlertCircle } from 'lucide-react'

const dominioIcons = { motor: Clock, visual: Eye, cognitivo: Brain, lenguaje: MessageSquare, negligencia: AlertCircle }
const dominioAccent = { blue: 'blue', orange: 'orange', red: 'red', gray: 'gray' }

export default function AcvTab() {
  return (
    <div className="space-y-6">
      <SectionHeader
        num="1"
        title="ACV Isquémico y Conducción Vehicular"
        subtitle="Evaluación de aptitud neurológica · Protocolo SNA 2026"
      />

      <AlertBox
        type="blue"
        title="Principio clave"
        text="El neurólogo evalúa el impacto funcional y aporta una recomendación orientativa. La decisión administrativa final sobre aptitud para conducir corresponde al organismo emisor de la licencia (ANSV / DHAC / municipio)."
      />

      {/* Tiempos mínimos */}
      <SlideCard accent="red" title="Tiempos mínimos post-evento">
        <p className="text-sm text-gray-600 mb-4">
          El tiempo transcurrido desde el evento es el factor inicial más importante. Ningún paciente debe ser evaluado
          para aptitud antes de cumplir el período mínimo correspondiente.
        </p>
        <ClinicalTable headers={tiemposMinimos.headers} rows={tiemposMinimos.rows} />
        <AlertBox
          type="orange"
          title="Período mínimo"
          text="Durante el período mínimo post-evento el paciente es considerado NO APTO con independencia del examen neurológico. Documentar fecha del evento en el informe."
        />
      </SlideCard>

      {/* Dominios neurológicos */}
      <div>
        <h2 className="font-display text-xl text-gray-800 mb-3 ml-1">Evaluación por dominios neurológicos</h2>
        <div className="space-y-3">
          {dominios.map(dom => {
            const Icon = dominioIcons[dom.id] ?? Brain
            const accent = dominioAccent[dom.color] ?? 'gray'
            return (
              <SlideCard key={dom.id} accent={accent}>
                <div className="flex items-start gap-3">
                  <div className={`flex-shrink-0 p-2 rounded-lg bg-${dom.color}-50`}>
                    <Icon size={18} className={`text-${dom.color}-600`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-base text-gray-900 mb-2">{dom.titulo}</h3>
                    <ul className="space-y-1.5">
                      {dom.items.map((item, i) => (
                        <li key={i} className="text-sm text-gray-700 flex gap-2">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-400 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    {dom.alerta && (
                      <AlertBox type="orange" text={dom.alerta} />
                    )}
                  </div>
                </div>
              </SlideCard>
            )
          })}
        </div>
      </div>

      {/* Contraindicaciones absolutas */}
      <SlideCard accent="red" title="Contraindicaciones absolutas para conducción">
        <AlertBox
          type="red"
          title="No apto en forma absoluta"
          items={contraindicacionesAbsolutas}
        />
        <p className="text-xs text-gray-500 mt-3">
          * La epilepsia post-ACV tiene criterios propios según tiempo libre de crisis y clase de licencia. Ver protocolo epilepsia.
        </p>
      </SlideCard>

      {/* Derivaciones */}
      <SlideCard accent="blue" title="Estudios y derivaciones recomendadas">
        <ClinicalTable headers={derivaciones.headers} rows={derivaciones.rows} />
        <AlertBox
          type="blue"
          title="Test de manejo"
          text="Indicar al paciente presentarse ante la autoridad de licencias de su jurisdicción. El test en vía pública lo evalúa el ente emisor — el neurólogo deriva, no administra el test."
        />
      </SlideCard>

      {/* Conclusión */}
      <SlideCard accent="green" title="Opciones de conclusión en el informe">
        <ClinicalTable headers={aptitudes.headers} rows={aptitudes.rows} />
        <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-xs text-gray-500 leading-relaxed">
            <span className="font-semibold text-gray-700">Vigencia sugerida: </span>
            APTO → 1 año habitual · CONDICIONAL → hasta resolución del estudio pendiente ·
            NO APTO TEMPORARIO → fecha de reevaluación explícita en el informe.
          </p>
        </div>
      </SlideCard>

    </div>
  )
}
