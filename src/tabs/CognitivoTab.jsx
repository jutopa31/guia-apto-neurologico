import SectionHeader from '../components/SectionHeader'
import SlideCard from '../components/SlideCard'
import AlertBox from '../components/AlertBox'
import ClinicalTable from '../components/ClinicalTable'
import {
  tablaCognitivo,
  notasTabla,
  algoritmosEnps,
  enpsCuando,
  algoritmoDemencia,
  alarmasVolante,
  abordajeFamiliar,
} from '../content/cognitivo'
import { Users, TriangleAlert, CheckCircle2, XCircle, ArrowRight } from 'lucide-react'

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
        text="El deterioro cognitivo no implica inaptitud automática. La decisión se basa en el diagnóstico, la severidad funcional, el rendimiento en la batería ENPS y la presencia de señales de alarma al volante. Siempre involucrar al familiar o informante."
      />

      {/* Tabla 10 — Aptitud por diagnóstico */}
      <SlideCard accent="amber" title="Tabla 10 — Aptitud por diagnóstico">
        <ClinicalTable headers={tablaCognitivo.headers} rows={tablaCognitivo.rows} />
        <ul className="mt-3 space-y-1">
          {notasTabla.map((n, i) => (
            <li key={i} className="text-xs text-gray-500 flex gap-2">
              <span className="flex-shrink-0">•</span>
              {n}
            </li>
          ))}
        </ul>
      </SlideCard>

      {/* Algoritmo demencia — Figura 4 */}
      <SlideCard accent="orange" title="Figura 4 — Algoritmo de decisión para demencia">
        <div className="space-y-2">
          {algoritmoDemencia.map((paso, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 text-orange-700 text-xs font-bold flex items-center justify-center mt-0.5">
                {paso.paso}
              </div>
              <p className="text-sm text-gray-700 pt-0.5">{paso.texto}</p>
            </div>
          ))}
        </div>
        <AlertBox
          type="red"
          title="Discontinuar conducción de inmediato"
          text="CDR > 1 o MMSE < 24 → inaptitud sin necesidad de test adicional. El familiar o cuidador que refiere riesgos también implica discontinuar la conducción."
        />
      </SlideCard>

      {/* Algoritmo ENPS — Figura 3 */}
      <SlideCard accent="blue" title="Figura 3 — Algoritmo escalonado ENPS">
        <p className="text-sm text-gray-600 mb-4">
          El algoritmo es <strong>secuencial</strong>: solo se avanza al siguiente paso si el anterior es normal. Un resultado
          alterado en cualquier paso deriva a evaluación neuropsicológica abarcativa.
        </p>

        {/* Cuándo aplicar ENPS */}
        <div className="mb-4 rounded-lg border border-blue-200 bg-blue-50 p-3">
          <p className="text-xs font-semibold text-blue-700 mb-2">Cuándo aplicar la batería ENPS:</p>
          <ul className="space-y-1">
            {enpsCuando.map((c, i) => (
              <li key={i} className="text-xs text-blue-800 flex gap-2">
                <span className="flex-shrink-0">·</span>
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          {algoritmosEnps.map((paso, i) => (
            <div key={i} className="rounded-lg border border-gray-200 bg-white overflow-hidden">
              <div className="bg-gray-50 border-b border-gray-200 px-4 py-2 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {paso.paso}
                </span>
                <span className="font-semibold text-sm text-gray-800">{paso.test}</span>
              </div>
              <div className="px-4 py-3 space-y-2">
                <p className="text-xs text-gray-500">{paso.nota}</p>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="rounded-md border border-green-200 bg-green-50 px-3 py-2 flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-green-700">{paso.corteOk}</p>
                      <p className="text-xs text-green-600 flex items-center gap-1">
                        <ArrowRight size={10} /> {paso.si}
                      </p>
                    </div>
                  </div>
                  <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 flex items-start gap-2">
                    <XCircle size={14} className="text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-red-700">{paso.corteAlerta}</p>
                      <p className="text-xs text-red-600 flex items-center gap-1">
                        <ArrowRight size={10} /> {paso.no}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SlideCard>

      {/* Tabla 11 — Señales de alarma */}
      <SlideCard accent="red" title="Tabla 11 — Señales de alarma al volante">
        <p className="text-sm text-gray-600 mb-3">
          Preguntar sistemáticamente al familiar o cuidador. La presencia de señales marcadas como graves justifica
          evaluación neuropsicológica completa y test de manejo antes de cualquier decisión de aptitud.
        </p>
        <div className="space-y-1.5">
          {alarmasVolante.map((a, i) => (
            <div
              key={i}
              className="rounded-lg border px-4 py-2.5 flex items-start gap-3 bg-red-50 border-red-200"
            >
              <TriangleAlert size={14} className="text-red-500 flex-shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">{a.dominio}</p>
                <p className="text-sm text-red-800">{a.label}</p>
              </div>
            </div>
          ))}
        </div>
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
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-700 text-xs font-semibold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ul>
        <AlertBox
          type="orange"
          title="Si el paciente se niega a dejar de conducir"
          text="Consultar con el servicio de ética y/o legal. La normativa puede contemplar obligación de notificación a la autoridad competente. Documentar siempre la consejería y el rechazo en la HC con firma del paciente y familiar/informante."
        />
      </SlideCard>
    </div>
  )
}
