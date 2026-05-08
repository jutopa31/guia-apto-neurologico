import SectionHeader from '../components/SectionHeader'
import SlideCard from '../components/SlideCard'
import AlertBox from '../components/AlertBox'
import { testRelojItems } from '../content/testsComplementarios'

export default function TestsComplementariosTab() {
  return (
    <div className="space-y-6">
      <SectionHeader
        num="4"
        title="Tests Complementarios"
        subtitle="Instrumentos de apoyo para la evaluación neurológica · Protocolo SNA 2026"
      />

      <SlideCard accent="blue" title="Test del Reloj — Sistema de puntuación">
        <p className="text-sm text-gray-600 mb-4">
          Se indica al paciente: <em>"Dibuje un reloj que marque las 11:10"</em>.
          Se asigna <strong>1 punto</strong> por cada ítem cumplido (máximo 7 puntos).
          Un puntaje ≥ 6 se considera normal.
        </p>

        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="px-4 py-3 text-left font-medium tracking-wide text-xs uppercase w-10">Ítem</th>
                <th className="px-4 py-3 text-left font-medium tracking-wide text-xs uppercase">Descripción</th>
                <th className="px-4 py-3 text-left font-medium tracking-wide text-xs uppercase">Criterio de puntuación</th>
              </tr>
            </thead>
            <tbody>
              {testRelojItems.map((row, i) => (
                <tr
                  key={row.item}
                  className={`border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition-colors`}
                >
                  <td className="px-4 py-3 font-bold text-blue-700 text-center">{row.item}</td>
                  <td className="px-4 py-3 font-medium text-gray-900">{row.descripcion}</td>
                  <td className="px-4 py-3 text-gray-700">{row.criterio}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-gray-100 border-t-2 border-gray-300">
                <td colSpan={2} className="px-4 py-3 font-semibold text-gray-800 text-sm">Puntaje total</td>
                <td className="px-4 py-3 font-semibold text-gray-800 text-sm">/ 7 puntos</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <AlertBox
          type="blue"
          title="Interpretación"
          text="6–7 puntos: normal. 4–5 puntos: deterioro leve, requiere evaluación adicional. ≤ 3 puntos: deterioro significativo, derivar a neuropsicología."
        />
      </SlideCard>
    </div>
  )
}
