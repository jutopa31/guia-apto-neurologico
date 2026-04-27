import SectionTitle from '../ui/SectionTitle'
import Alert from '../ui/Alert'
import Card, { CardTitle } from '../ui/Card'

const col1 = [
  'Accidentes o "casi accidentes" en los últimos 2 años',
  'Desorientación en rutas o barrios familiares',
  'Quejas del familiar/cuidador sobre la conducción',
  'MoCA o MMSE <27 / TMT-B >180 seg',
  'ESS >10 / somnolencia al volante referida',
  'CDR >0.5 (deterioro cognitivo objetivable)',
  'H&Y ≥2.5 y/o UPDRS III >27 en ON',
]

const col2 = [
  'Ataques de sueño (narcolepsia, pramipexol)',
  'Autolimitación progresiva (evita noche, autopistas, lluvia)',
  'Confusión con pedales o señales de tránsito',
  'Impulsividad, agresividad o frustración al conducir',
  'Discrepancia entre autopercepción y relato de terceros',
  'Duración de EP ≥8 años · edad >75 años',
  'Polifarmacia con efecto sedativo acumulativo',
]

export default function Banderas() {
  return (
    <div id="banderas">
      <SectionTitle num="6">Banderas Rojas — Derivar a Test Formal de Manejo</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          {col1.map(t => (
            <div className="bandera" key={t}><span className="flag">🚩</span><div>{t}</div></div>
          ))}
        </div>
        <div>
          {col2.map(t => (
            <div className="bandera" key={t}><span className="flag">🚩</span><div>{t}</div></div>
          ))}
        </div>
      </div>

      <Alert variant="blue" title="Recordatorio final — flujo de decisión" className="mt-5">
        Consulta neurológica → evaluación clínica + estudios → informe neurológico → autoridad de licencias (DHAC/municipio) → test de manejo si corresponde → decisión administrativa final. El neurólogo es consultor, no habilitador.
      </Alert>

      <Card className="mt-5" style={{ borderLeft: '4px solid #0d4f8c' }}>
        <CardTitle icon="📚">Fuente</CardTitle>
        <p className="text-[12.5px] text-gray">
          Alet MJ et al. <em>Protocolos de apto neurológico para la conducción vehicular.</em> Neurología Argentina 2026. DOI: 10.1016/j.neuarg.2026.100732. Sociedad Neurológica Argentina.
        </p>
      </Card>
    </div>
  )
}
