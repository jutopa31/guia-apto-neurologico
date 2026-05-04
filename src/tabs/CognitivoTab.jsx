import SectionHeader from '../components/SectionHeader'
import SlideCard from '../components/SlideCard'
import AlertBox from '../components/AlertBox'
import ClinicalTable from '../components/ClinicalTable'
import { cdrConduccion, enpsBateria, alarmasVolante, diagnosticosEspeciales, abordajeFamiliar } from '../content/cognitivo'
import { Users, TriangleAlert } from 'lucide-react'

const enpsColor = { blue: { bg: 'bg-blue-50', border: 'border-blue-200', label: 'text-blue-700', badge: 'bg-blue-100 text-blue-800' }, green: { bg: 'bg-green-50', border: 'border-green-200', label: 'text-green-700', badge: 'bg-green-100 text-green-800' }, orange: { bg: 'bg-orange-50', border: 'border-orange-200', label: 'text-orange-700', badge: 'bg-orange-100 text-orange-800' }, red: { bg: 'bg-red-50', border: 'border-red-200', label: 'text-red-700', badge: 'bg-red-100 text-red-800' } }

export default function CognitivoTab() {
  return (
    <div className="space-y-6">
      <SectionHeader
        num="2"
        title="Deterioro Cognitivo y Conducción Vehicular"
        subtitle="Evaluación de aptitud neurológica · Protocolo SNA 2026"
      />

      <AlertBox
        type="blue"
        title="Principio clave"
        text="El deterioro cognitivo no implica inaptitud automática. La decisión se basa en la severidad funcional (CDR), el rendimiento en la batería ENPS y la presencia de señales de alarma al volante. Siempre involucrar al familiar o informante."
      />

      {/* CDR y conducción */}
      <SlideCard accent="amber" title="CDR y conducción — referencia rápida">
        <p className="text-sm text-gray-600 mb-4">
          El CDR (Clinical Dementia Rating) es la escala de referencia para la toma de decisiones. Un CDR ≥ 2 implica
          inaptitud absoluta para todas las clases de licencia.
        </p>
        <ClinicalTable headers={cdrConduccion.headers} rows={cdrConduccion.rows} />
      </SlideCard>

      {/* Batería ENPS */}
      <SlideCard accent="blue" title="Batería ENPS de rastreo cognitivo">
        <p className="text-sm text-gray-600 mb-4">
          La batería ENPS evalúa los dominios cognitivos más relevantes para la conducción. Los valores de corte son
          orientativos — siempre interpretar en contexto clínico y nivel educativo del paciente.
        </p>
        <div className="space-y-2">
          {enpsBateria.map(test => {
            const c = enpsColor[test.color] ?? enpsColor.blue
            return (
              <div key={test.nombre} className={`rounded-lg border ${c.bg} ${c.border} p-3`}>
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-semibold ${c.label}`}>{test.nombre}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${c.badge}`}>corte: {test.corte}</span>
                  </div>
                  <span className="text-xs text-gray-500">{test.rango}</span>
                </div>
                <p className="text-xs text-gray-600 mt-1.5">{test.uso}</p>
              </div>
            )
          })}
        </div>
        <AlertBox
          type="red"
          title="TMT-B — el test más relevante"
          text="El Trail Making Test B evalúa atención dividida y flexibilidad cognitiva, habilidades directamente requeridas durante la conducción. Un TMT-B > 3 minutos o incompleto es señal de alarma significativa."
        />
      </SlideCard>

      {/* Señales de alarma */}
      <SlideCard accent="red" title="Señales de alarma al volante">
        <p className="text-sm text-gray-600 mb-3">
          Preguntar sistemáticamente al acompañante. La presencia de 2 o más señales graves indica evaluación
          neuropsicológica completa y test de manejo antes de cualquier recomendación de aptitud.
        </p>
        <div className="space-y-2">
          {alarmasVolante.map((a, i) => (
            <div
              key={i}
              className={`rounded-lg border px-4 py-2.5 flex items-center gap-3 ${
                a.grave
                  ? 'bg-red-50 border-red-200'
                  : 'bg-gray-50 border-gray-200'
              }`}
            >
              <TriangleAlert size={14} className={a.grave ? 'text-red-500 flex-shrink-0' : 'text-gray-400 flex-shrink-0'} />
              <span className={`text-sm ${a.grave ? 'text-red-800 font-medium' : 'text-gray-700'}`}>{a.label}</span>
              {a.grave && <span className="ml-auto text-xs text-red-600 font-semibold flex-shrink-0">GRAVE</span>}
            </div>
          ))}
        </div>
      </SlideCard>

      {/* Diagnósticos especiales */}
      <SlideCard accent="orange" title="Aptitud por diagnóstico — referencia rápida">
        <ClinicalTable headers={diagnosticosEspeciales.headers} rows={diagnosticosEspeciales.rows} />
      </SlideCard>

      {/* Abordaje familiar */}
      <SlideCard accent="green">
        <div className="flex items-center gap-2 mb-3">
          <Users size={18} className="text-green-600" />
          <h3 className="font-display text-lg text-gray-800">Abordaje familiar y transición</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          La comunicación de inaptitud para conducir es una de las conversaciones más difíciles en la consulta de
          deterioro cognitivo. Requiere preparación y acompañamiento.
        </p>
        <ul className="space-y-2">
          {abordajeFamiliar.map((item, i) => (
            <li key={i} className="flex gap-3 text-sm text-gray-700">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-700 text-xs font-semibold flex items-center justify-center mt-0.5">{i + 1}</span>
              {item}
            </li>
          ))}
        </ul>
        <AlertBox
          type="orange"
          title="Si el paciente se niega a dejar de conducir"
          text="Consultar con el servicio de ética y/o legal. En algunos marcos normativos el médico tiene obligación de notificar a la autoridad competente. Documentar siempre la consejería y el rechazo en la HC."
        />
      </SlideCard>

    </div>
  )
}
