import SectionTitle from '../ui/SectionTitle'
import Alert from '../ui/Alert'
import Card, { CardTitle } from '../ui/Card'

const altoRiesgo = [
  { grupo: 'Benzodiacepinas', farmacos: 'Alprazolam, Clonazepam, Diazepam, Lorazepam, Bromazepam', efecto: 'Sedación, ↓reflejos' },
  { grupo: 'Hipnóticos Z', farmacos: 'Zolpidem, Zopiclona', efecto: 'Efecto residual diurno' },
  { grupo: 'ATC', farmacos: 'Amitriptilina, Clomipramina', efecto: 'Sedación intensa' },
  { grupo: 'Antipsicóticos', farmacos: 'Quetiapina, Olanzapina, Risperidona', efecto: 'Sedación, hipotensión' },
  { grupo: 'Antihistamínicos H1', farmacos: 'Difenhidramina, Prometazina, Hidroxizina, Doxilamina', efecto: 'Sedación severa' },
  { grupo: 'Opioides', farmacos: 'Tramadol, Morfina, Codeína', efecto: 'Sedación, confusión' },
  { grupo: 'Antiepilépticos', farmacos: 'Gabapentina, Pregabalina, Carbamazepina', efecto: 'Mareos, ataxia' },
  { grupo: 'Antiparkinsonianos', farmacos: 'Pramipexol (ataques de sueño), Levodopa', efecto: 'Somnolencia repentina' },
]

const precaucion = [
  { nombre: 'ISRS/SNRS', detalle: 'Escitalopram, Sertralina, Paroxetina, Venlafaxina — precaución inicial, primeras semanas' },
  { nombre: 'Relajantes musculares', detalle: 'Carisoprodol, Ciclobenzaprina — sedación variable' },
  { nombre: 'Corticoides sistémicos', detalle: 'Prednisona en altas dosis — mareos, alteraciones visuales' },
  { nombre: 'Antieméticos', detalle: 'Metoclopramida — somnolencia, reacciones extrapiramidales' },
  { nombre: 'Antimigrañosos', detalle: 'Sumatriptán — mareos, debilidad transitoria' },
  { nombre: 'Anticolinérgicos', detalle: 'Oxibutinina — visión borrosa, somnolencia' },
  { nombre: 'Betabloqueantes', detalle: 'Propranolol en algunos pacientes — fatiga, mareos' },
  { nombre: 'Antihipertensivos', detalle: 'Según efecto hipotensor individual' },
]

export default function Farmacos() {
  return (
    <div id="farmacos">
      <SectionTitle num="4">Fármacos con Impacto en la Conducción</SectionTitle>

      <Alert variant="red" title="Principio de prescripción">
        El uso de psicofármacos no implica automáticamente no poder conducir, pero exige evaluación individualizada. Cuando se indique no conducir, comunicarlo de forma explícita y dejarlo en la HC.
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardTitle icon="⚠️">Alto riesgo para conducción</CardTitle>
          <div className="table-wrap">
            <table>
              <thead>
                <tr><th>Grupo</th><th>Fármacos</th><th>Efecto principal</th></tr>
              </thead>
              <tbody>
                {altoRiesgo.map(r => (
                  <tr key={r.grupo}>
                    <td>{r.grupo}</td>
                    <td>{r.farmacos}</td>
                    <td>{r.efecto}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <CardTitle icon="ℹ️">Riesgo variable — precaución individual</CardTitle>
          <ul className="checklist">
            {precaucion.map(p => (
              <li key={p.nombre}><strong>{p.nombre}</strong> <span>{p.detalle}</span></li>
            ))}
          </ul>
          <Alert variant="yellow" title="Combinaciones de alto riesgo" className="mt-3 mb-0 text-[12px]">
            Cualquiera de los anteriores + alcohol · Polifarmacia sedante · Benzodiacepinas + opioides · Inicio o cambio de dosis reciente
          </Alert>
        </Card>
      </div>
    </div>
  )
}
