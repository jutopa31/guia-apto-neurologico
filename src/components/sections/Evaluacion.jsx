import SectionTitle from '../ui/SectionTitle'
import Alert from '../ui/Alert'
import Card, { CardTitle } from '../ui/Card'

export default function Evaluacion() {
  return (
    <div id="eval">
      <SectionTitle num="1">Evaluación Neurológica Orientada a Conducción</SectionTitle>

      <Alert variant="blue" title="Principio clave">
        El neurólogo NO decreta aptitud/inaptitud — aporta diagnóstico e impacto funcional. La decisión final corresponde al circuito administrativo (ANSV/DHAC).
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardTitle icon="📋">Anamnesis dirigida</CardTitle>
          <ul className="checklist">
            <li><strong>Diagnósticos neurológicos activos</strong> <span>(especificar si están resueltos)</span></li>
            <li><strong>Epilepsia / crisis</strong> <span>— fecha última crisis, tiempo libre</span></li>
            <li><strong>ACV / AIT</strong> <span>— fecha, secuelas, recurrencias</span></li>
            <li><strong>Parkinson / trastornos del movimiento</strong></li>
            <li><strong>Deterioro cognitivo / demencia</strong></li>
            <li><strong>Trastornos del sueño</strong> <span>— ronquidos, apneas, somnolencia</span></li>
            <li><strong>Esclerosis múltiple</strong> <span>— último brote, EDSS</span></li>
            <li><strong>Enf. neuromuscular</strong> <span>— fuerza, progresión</span></li>
            <li><strong>Medicación actual</strong> <span>— especial atención BDZ, FAE, antiparkinsonianos, antipsicóticos, opioides</span></li>
            <li><strong>ABVD / AIVD</strong> <span>— nivel de independencia funcional</span></li>
          </ul>
        </Card>
        <Card>
          <CardTitle icon="🧠">Interrogatorio de conducción</CardTitle>
          <ul className="checklist">
            <li><strong>Tipo de conducción</strong> <span>(urbana / ruta / nocturna), frecuencia</span></li>
            <li><strong>Eventos centinela</strong> <span>choques, "casi choques", multas</span></li>
            <li><strong>Autolimitación</strong> <span>evita autopistas, noche, lluvia</span></li>
            <li><strong>Somnolencia al volante</strong> <span>cabeceos, adormecimiento</span></li>
            <li><strong>Desorientación</strong> <span>en rutas familiares</span></li>
            <li><strong>Quejas de acompañantes</strong></li>
            <li><strong>Impulsos / agresividad</strong> <span>al conducir</span></li>
            <li><strong>Escala de Epworth (ESS)</strong> <span>— patológico si &gt;10</span></li>
          </ul>
        </Card>
      </div>

      <Card>
        <CardTitle icon="🔬">Examen Neurológico — Dominios mínimos a documentar</CardTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              label: 'Cognición',
              items: ['MoCA (preferible sobre MMSE)', 'Trail Making Test A/B (si disponible)', 'Test del reloj', 'Atención, funciones ejecutivas', 'Habilidades visuoespaciales'],
            },
            {
              label: 'Visión y pares craneales',
              items: ['Motilidad ocular y palpebral', 'Ducciones y versiones', 'Diplopía', 'Ptosis', 'Campo visual (confrontación)'],
            },
            {
              label: 'Motor y reflejos',
              items: ['Fuerza MRC (MMSS y MMII)', 'Tono muscular', 'Destreza manual', 'ROT (asimetrías, clonus)', 'Clonus aquíleo — relevante para conducción'],
            },
            {
              label: 'Extrapiramidal',
              items: ['Bradicinesia (finger tapping, pronosupinación)', 'Rigidez (pasiva)', 'Temblor (tipo, amplitud, incapacidad)', 'Movimientos involuntarios (corea, mioclonías, tics)', 'UPDRS III si EP (documentar en ON)'],
            },
            {
              label: 'Sensibilidad y coordinación',
              items: ['Superficial (tacto comparativo)', 'Profunda (vibratoria, propioceptiva)', 'Dedo-nariz, talón-rodilla', 'Dismetría / temblor de intención', 'Ataxia apendicular'],
            },
            {
              label: 'Marcha y equilibrio',
              items: ['Base de sustentación', 'Romberg (ojos cerrados)', 'Velocidad, longitud del paso', 'Braceo, simetría', 'Freezing, festinación', 'Giros (número de pasos)'],
            },
          ].map(({ label, items }) => (
            <div key={label}>
              <div className="informe-label">{label}</div>
              <ul className="checklist">
                {items.map(i => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
