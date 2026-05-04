import SectionHeader from '../components/SectionHeader'
import SlideCard from '../components/SlideCard'
import AlertBox from '../components/AlertBox'
import ClinicalTable from '../components/ClinicalTable'
import { tablaAcv, notasTablaAcv, areasFuncionales, criterioAptitud, derivaciones, aptitudes } from '../content/acv'

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
        text="El neurólogo evalúa el impacto funcional y emite una recomendación orientativa. La decisión administrativa final sobre aptitud para conducir corresponde al organismo emisor de la licencia (ANSV / DHAC / municipio)."
      />

      {/* Tabla 7 — Tiempos mínimos y aptitud */}
      <SlideCard accent="red" title="Tabla 7 — Tiempos mínimos y aptitud post-evento">
        <ClinicalTable headers={tablaAcv.headers} rows={tablaAcv.rows} />
        <ul className="mt-3 space-y-1">
          {notasTablaAcv.map((n, i) => (
            <li key={i} className="text-xs text-gray-500 flex gap-2">
              <span className="flex-shrink-0">•</span>
              {n}
            </li>
          ))}
        </ul>
      </SlideCard>

      {/* Áreas funcionales */}
      <div>
        <h2 className="font-display text-xl text-gray-800 mb-3 ml-1">Evaluación por áreas funcionales</h2>
        <p className="text-sm text-gray-600 mb-4 ml-1">
          La aptitud queda supeditada a la ausencia de déficits significativos en cada una de las siguientes áreas.
          Ante cualquier duda clínica, complementar con test de manejo y/o evaluación funcional específica.
        </p>
        <div className="space-y-3">
          {areasFuncionales.map(area => (
            <SlideCard key={area.num} accent="blue">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 text-blue-700 text-sm font-bold flex items-center justify-center mt-0.5">
                  {area.num}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{area.area}</h3>
                  <p className="text-sm text-gray-600">{area.detalle}</p>
                </div>
              </div>
            </SlideCard>
          ))}
        </div>
      </div>

      {/* Criterio de aptitud */}
      <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
        <p className="text-sm text-blue-800 leading-relaxed">{criterioAptitud}</p>
      </div>

      {/* Derivaciones */}
      <SlideCard accent="blue" title="Estudios y derivaciones recomendadas">
        <ClinicalTable headers={derivaciones.headers} rows={derivaciones.rows} />
        <AlertBox
          type="blue"
          title="Test de manejo"
          text="El test en vía pública lo administra el ente emisor de licencias — el neurólogo deriva, no lo administra. Indicar al paciente presentarse ante la autoridad de licencias de su jurisdicción (DHAC / municipio)."
        />
      </SlideCard>

      {/* Opciones de conclusión */}
      <SlideCard accent="green" title="Opciones de conclusión en el informe">
        <ClinicalTable headers={aptitudes.headers} rows={aptitudes.rows} />
        <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-xs text-gray-500 leading-relaxed">
            <span className="font-semibold text-gray-700">Vigencia sugerida: </span>
            APTO → 1 año (primeros 5 años post-evento) · CONDICIONAL → hasta resolución del estudio pendiente ·
            NO APTO TEMPORARIO → fecha de reevaluación explícita en el informe.
          </p>
        </div>
      </SlideCard>
    </div>
  )
}
