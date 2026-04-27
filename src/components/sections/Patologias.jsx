import SectionTitle from '../ui/SectionTitle'
import Alert from '../ui/Alert'
import Badge from '../ui/Badge'
import Card, { CardTitle } from '../ui/Card'

/* ── Epilepsia ── */
function Epilepsia() {
  const rows = [
    { sit: 'Epilepsia resistente a FAE', ab: 'no-apto', cdeg: 'no-apto', req: 'Certificado neurólogo' },
    { sit: 'No resistente — libre de crisis <1 año o cambio de FAE/dosis en últimos 6 m', ab: 'no-apto', cdeg: 'no-apto', req: 'Certificado + confirmar tratamiento' },
    { sit: 'No resistente — libre de crisis >1 año y sin cambios FAE en 6 m', ab: 'condicional', abLabel: 'APTO 6 MESES', cdeg: 'no-apto', req: 'Tto >6 m con igual medicación y dosis' },
    { sit: 'No resistente — libre de crisis >3 años y sin cambios FAE en 6 m', ab: 'condicional', abLabel: 'APTO 1 AÑO', cdeg: 'condicional', cdegLabel: 'APTO 6 MESES', req: 'Tto >6 m con igual medicación y dosis' },
    { sit: 'No resistente — libre de crisis >5 años y sin cambios FAE en 6 m', ab: 'condicional', abLabel: 'APTO 1 AÑO', cdeg: 'condicional', cdegLabel: 'APTO 1 AÑO', req: 'Tto >6 m con igual medicación y dosis' },
  ]
  return (
    <Card>
      <CardTitle icon="⚡">Epilepsia</CardTitle>
      <div className="table-wrap">
        <table>
          <thead><tr><th>Situación</th><th>Clase A-B</th><th>Clase C-D-E-G</th><th>Requisitos</th></tr></thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.sit}>
                <td>{r.sit}</td>
                <td><Badge variant={r.ab}>{r.abLabel ?? 'NO APTO'}</Badge></td>
                <td><Badge variant={r.cdeg}>{r.cdegLabel ?? 'NO APTO'}</Badge></td>
                <td>{r.req}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Alert variant="blue" title="Consejería obligatoria — dejar en HC con firma del paciente:" className="mt-3 mb-0">
        No conducir fuera de lo permitido · Informar diagnóstico al tramitar licencia · Evitar trayectos prolongados · Consultar ante cambio de medicación · Implicancias legales y cobertura de seguro si conduce sin habilitación.
      </Alert>
    </Card>
  )
}

/* ── ACV ── */
function ACV({ onOpenModal }) {
  const testItems = [
    { n: 1, t: 'Posición del coche en la carretera (<50 km/h)' },
    { n: 2, t: 'Cambios de carril' },
    { n: 3, t: 'Distancia con el vehículo precedente (<50 km/h)' },
    { n: 4, t: 'Velocidad en áreas con límite (<50 km/h)' },
    { n: 5, t: 'Anticipación y percepción de señales' },
    { n: 6, t: 'Operaciones mecánicas' },
    { n: 7, t: 'Incorporación al tráfico' },
    { n: 8, t: 'Posición en la carretera (>50 km/h)' },
    { n: 9, t: 'Distancia con el vehículo precedente (>50 km/h)' },
    { n: 10, t: 'Velocidad en áreas con límite (>50 km/h)' },
    { n: 11, t: 'Giro a la izquierda en una carretera principal' },
    { n: 12, t: 'Comportamiento visual y comunicación' },
    { n: 13, t: 'Calidad de la interacción con el tráfico' },
  ]
  return (
    <Card id="acv-section" style={{ borderTop: '4px solid #c8391e' }}>
      <CardTitle icon="🫀">Enfermedad Cerebrovascular — ACV / AIT / HSA</CardTitle>

      <Alert variant="blue" title="Marco conceptual" className="mb-3.5">
        La conducción integra 4 sistemas que pueden verse afectados por un ACV: <strong>percepción sensorial</strong> · <strong>sistema atencional</strong> · <strong>corteza cerebral</strong> · <strong>sistema motor</strong>. Incluye: ACV isquémico, AIT, ACV hemorrágico / HIP, HSA y hemorragia intraventricular.
      </Alert>

      <div className="informe-label mb-2">Criterios de aptitud</div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr><th>Diagnóstico</th><th>Descripción</th><th>Clase A-B</th><th>Clase C-D-E-G</th><th>Cert.</th><th>Libre de episodios</th><th>Estudios</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>ACV isquémico</strong></td>
              <td className="col-cond">Primeros 5 años</td>
              <td><Badge variant="condicional">APTO 1 AÑO</Badge></td>
              <td><Badge variant="condicional">APTO 1 AÑO</Badge></td>
              <td>Neurólogo</td>
              <td>Últimos <strong>6 meses</strong></td>
              <td>Test de manejo (salvo sin secuelas)</td>
            </tr>
            <tr>
              <td><strong>ACV hemorrágico / HIP</strong></td>
              <td className="col-cond">Primeros 5 años</td>
              <td><Badge variant="condicional">APTO 1 AÑO</Badge></td>
              <td><Badge variant="condicional">APTO 1 AÑO</Badge></td>
              <td>Neurólogo</td>
              <td>Últimos <strong>12 meses</strong></td>
              <td>Test de manejo (salvo sin secuelas)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Áreas funcionales */}
      <div className="mt-4">
        <div className="informe-label mb-2">Áreas funcionales — evaluar y documentar</div>
        <div className="flex flex-wrap gap-2">
          {['① Compromiso motriz','② Coordinación','③ Sensorial (visión / audición)','④ Lenguaje','⑤ Cognición','⑥ Epilepsia post-ACV','⑦ Dolor crónico'].map(a => (
            <span key={a} className="bg-blue-50 text-accent border border-blue-200 rounded px-2.5 py-1 text-[12px] font-semibold">{a}</span>
          ))}
        </div>
      </div>

      {/* Tests predictivos */}
      <div className="mt-4">
        <div className="informe-label mb-2">Tests predictivos de aptitud — metaanálisis 2011 (27 estudios)</div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {[
            { t: 'Test de señales viales', d: 'Reconocimiento de señales y comprensión visual. Evalúa procesamiento visual semántico.' },
            { t: 'Compass (SDSA)', d: 'Capacidad visuoespacial/visuoperceptiva, atención dividida, velocidad mental y funciones ejecutivas.' },
            { t: 'Trail Making Test B', d: 'Seguimiento visuomotor y funciones ejecutivas. Punto de corte orientativo: >180 seg = alerta.' },
          ].map(item => (
            <div key={item.t} className="bg-green-50 border border-green-200 rounded p-3">
              <div className="text-[11px] font-bold text-green uppercase tracking-wide mb-1">{item.t}</div>
              <div className="text-[12px] text-dark">{item.d}</div>
            </div>
          ))}
        </div>
        <p className="mt-2 text-[12px] text-gray italic">También: SDSA completo — sensibilidad 71.4%, especificidad 77.8% · Simuladores de manejo.</p>
      </div>

      {/* Test de manejo 13 ítems */}
      <div className="mt-4">
        <div className="informe-label mb-2">
          Test de manejo en carretera — 13 ítems{' '}
          <span className="text-[10px] font-normal text-gray">(Akinwuntan et al. — sens. 80.6%, esp. 100%)</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
          {testItems.map(item => (
            <div
              key={item.n}
              className={`flex gap-1.5 items-start text-[12px] p-2 bg-[#fafaf8] border border-border rounded${item.n === 13 ? ' sm:col-span-2' : ''}`}
            >
              <span className="bg-accent text-white rounded text-[10px] font-bold px-1.5 py-0.5 shrink-0">{item.n}</span>
              {item.t}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={onOpenModal}
        className="inline-flex items-center gap-1.5 bg-accent text-white border-none rounded px-4 py-2 text-[12.5px] font-semibold cursor-pointer mt-3.5 hover:opacity-85 transition-opacity"
      >
        📝 Redactar informe neurológico ACV
      </button>
    </Card>
  )
}

/* ── Parkinson ── */
function Parkinson() {
  return (
    <Card>
      <CardTitle icon="🤚">Enfermedad de Parkinson</CardTitle>
      <div className="table-wrap">
        <table>
          <thead><tr><th>Estadio</th><th>Clase A-B</th><th>Clase C-D-E-G</th><th>Estudios</th></tr></thead>
          <tbody>
            <tr>
              <td>H&Y I y II</td>
              <td><Badge variant="condicional">APTO 1 AÑO</Badge></td>
              <td><Badge variant="no-apto">NO APTO</Badge></td>
              <td>UPDRS III en ON — si &lt;27, no requiere test de manejo</td>
            </tr>
            <tr>
              <td>H&Y III y IV o temblor incapacitante, fluctuaciones, discinesias</td>
              <td><Badge variant="no-apto">NO APTO</Badge></td>
              <td><Badge variant="no-apto">NO APTO</Badge></td>
              <td>UPDRS III en ON</td>
            </tr>
            <tr>
              <td>Post-DBS / cirugía de Parkinson</td>
              <td><Badge variant="no-apto">NO APTO</Badge> hasta ≥6 m postcirugía</td>
              <td><Badge variant="no-apto">NO APTO</Badge></td>
              <td>Test de manejo post período</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Alert variant="yellow" title="Banderas rojas en EP — derivar a test formal si:" className="mt-3 mb-0">
        Edad &gt;75 años · Accidentes recientes · CDR &gt;0.5 · Ataques de sueño · H&Y ≥2.5 · UPDRS III &gt;27 · MoCA o MMSE &lt;27 · TMT-B &gt;180 s · QUIP &gt;1 · Duración de la EP ≥8 años · Levodopa equivalente &gt;585 mg
      </Alert>
    </Card>
  )
}

/* ── Esclerosis Múltiple ── */
function EM() {
  return (
    <Card>
      <CardTitle icon="🔵">Esclerosis Múltiple / Enfermedades Desmielinizantes</CardTitle>
      <div className="table-wrap">
        <table>
          <thead><tr><th>EDSS</th><th>Situación funcional</th><th>Clase A-B</th><th>Clase C-D-E-G</th><th>Plazo</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>0 – 3.0</strong></td>
              <td>Sin discapacidad o mínima. Marcha conservada.</td>
              <td><Badge variant="apto">APTO</Badge></td>
              <td><Badge variant="no-apto">NO APTO</Badge></td>
              <td>1 año</td>
            </tr>
            <tr>
              <td><strong>3.5 – 5.5</strong></td>
              <td>Discapacidad moderada. Marcha independiente con posible fatiga o ataxia leve.</td>
              <td><Badge variant="condicional">APTO con restricciones</Badge></td>
              <td><Badge variant="no-apto">NO APTO</Badge></td>
              <td>6 meses</td>
            </tr>
            <tr>
              <td><strong>≥ 6.0</strong></td>
              <td>Requiere ayuda para la marcha o discapacidad significativa.</td>
              <td><Badge variant="no-apto">NO APTO</Badge></td>
              <td><Badge variant="no-apto">NO APTO</Badge></td>
              <td>—</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-[12.5px] text-gray mt-2.5">
        Condiciones obligatorias: estabilidad clínica sin brotes ni progresión en los últimos 3 meses · Certificado con EDSS actual, fecha último brote y déficits residuales · Test de manejo obligatorio en EDSS 3.5-5.5 · No apto transitorio durante brotes.
      </p>
    </Card>
  )
}

/* ── Cognitivo ── */
function Cognitivo({ onOpenModal }) {
  const aptitudRows = [
    { dx: 'Deterioro cognitivo leve (TCMn)', desc: '—', ab: 'condicional', abL: 'APTO 1 AÑO', cdeg: 'no-apto', cert: 'Neurólogo / Psiquiatra', est: 'ENPS + Test de manejo' },
    { dx: 'Demencia leve', desc: 'Alzheimer, vascular, otras', ab: 'condicional', abL: 'APTO 1 AÑO', cdeg: 'no-apto', cert: 'Neurólogo / Psiquiatra', est: 'ENPS + Test de manejo' },
    { dx: 'Demencia moderada / severa', desc: 'Alzheimer, vascular, otras', ab: 'no-apto', cdeg: 'no-apto', cert: 'Neurólogo / Psiquiatra', est: 'ENPS' },
    { dx: 'DFT — variante conductual / semántica', desc: 'Incluye variante conductual', ab: 'no-apto', cdeg: 'no-apto', cert: 'Neurólogo / Psiquiatra', est: 'ENPS' },
    { dx: 'DFT — solo lenguaje, etapa leve', desc: 'Afasia progresiva primaria leve', ab: 'condicional', abL: 'APTO 1 AÑO', cdeg: 'no-apto', cert: 'Neurólogo / Psiquiatra', est: 'ENPS + Test de manejo' },
    { dx: 'Delirium — ya resuelto', desc: '6 meses con síntoma resuelto', ab: 'condicional', abL: 'APTO', cdeg: null, cert: 'Neurólogo / Psiquiatra', est: 'ENPS' },
    { dx: 'Delirium — no resuelto o recidivante', desc: '—', ab: 'no-apto', cdeg: 'no-apto', cert: 'Neurólogo / Psiquiatra', est: '—' },
    { dx: 'Amnesia global transitoria', desc: 'No epiléptica · 3 meses', ab: 'condicional', abL: 'APTO', cdeg: null, cert: 'Neurólogo', est: '—' },
    { dx: 'Disfunción cognitiva por depresión', desc: 'Ya resuelta · 6 meses', ab: 'condicional', abL: 'APTO', cdeg: 'no-apto', cert: 'Psiquiatría', est: 'ENPS' },
  ]

  const alarmas = [
    { dom: 'Clínico / cognitivo (base)', desc: 'Comorbilidades relevantes, fármacos con efecto sobre SNC, alteración de la atención, desorientación, déficit visuoespacial, anosognosia' },
    { dom: 'Información de terceros', desc: 'Familiar/cuidador refiere cambios, pérdida de habilidad para conducir o presencia de acciones no seguras' },
    { dom: 'Antecedentes viales', desc: 'Historia de multas y/o accidentes de tráfico en los últimos meses/años' },
    { dom: 'Orientación / navegación', desc: 'Desorientación en lugares o rutas familiares · confusión en carreteras de un solo sentido · aumento de dudas en cruces' },
    { dom: 'Conducta y regulación emocional', desc: 'Conductas impulsivas, agresividad o frustración durante la conducción' },
    { dom: 'Percepción visuoespacial', desc: 'Problemas para calcular distancias en el carril o al estacionar · choques con cordones, otros vehículos u objetos' },
    { dom: 'Estimación de velocidad', desc: 'Estimar erróneamente la velocidad: conducir demasiado lento o con exceso de velocidad' },
    { dom: 'Señales de tránsito', desc: 'No respetar señales o interpretarlas equivocadamente (p. ej., pasar en rojo, no detenerse en PARE)' },
    { dom: 'Tiempo de reacción / decisión', desc: 'Reacciones tardías, toma de decisiones lenta o equivocada durante la conducción' },
    { dom: 'Control del vehículo', desc: 'Control deficiente, errores operativos frecuentes, inseguridad creciente en maniobras habituales' },
    { dom: 'Necesidad del acompañante', desc: 'El copiloto debe involucrarse activamente señalando peligros o cambios de semáforo' },
    { dom: 'Percepción de inseguridad', desc: 'Otros pasajeros o el propio conductor ya no se sienten seguros cuando viajan en el auto' },
    { dom: 'Evitación situacional', desc: 'Conductas de evitación: evitar conducir de noche o con condiciones climáticas adversas' },
    { dom: 'Factores agravantes adicionales', desc: 'Comorbilidades significativas · disminución de agudeza visual · polifarmacia · consumo de tóxicos' },
  ]

  return (
    <Card id="cognitivo-section" style={{ borderTop: '4px solid #b8860b' }}>
      <CardTitle icon="🧠">Trastornos Cognitivos y Conducción</CardTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 mb-3.5">
        <Alert variant="yellow" title="Riesgo aumentado" className="mb-0">
          El deterioro cognitivo se asocia a un incremento del riesgo de siniestro de <strong>2,5 a 8 veces</strong> comparado con la población sin deterioro, con predominio de eventos vinculados a la distracción.
        </Alert>
        <Alert variant="green" title="No cese automático" className="mb-0">
          No toda persona con diagnóstico de deterioro cognitivo debe dejar de conducir de inmediato. En etapas iniciales una proporción relevante puede aún aprobar una prueba en ruta. La evaluación es individual.
        </Alert>
      </div>

      <Alert variant="red" title="Factores que aumentan el riesgo independientemente del estadio" className="mb-3.5">
        Anosognosia · Irritabilidad o agresividad al conducir · Impulsividad · Baja percepción del riesgo · Polimedicación con efecto sobre el SNC · Aislamiento familiar que impide supervisión
      </Alert>

      {/* Tabla de aptitud */}
      <div className="informe-label mb-2">Criterios de aptitud por diagnóstico</div>
      <div className="table-wrap mb-5">
        <table>
          <thead>
            <tr><th>Diagnóstico</th><th>Descripción</th><th>Clase A-B</th><th>Clase C-D-E-G</th><th>Certificante</th><th>Estudios</th></tr>
          </thead>
          <tbody>
            {aptitudRows.map(r => (
              <tr key={r.dx}>
                <td>{r.dx}</td>
                <td className="col-cond">{r.desc}</td>
                <td><Badge variant={r.ab}>{r.abL ?? 'NO APTO'}</Badge></td>
                <td>{r.cdeg ? <Badge variant={r.cdeg}>NO APTO</Badge> : <span className="col-cond">—</span>}</td>
                <td>{r.cert}</td>
                <td>{r.est}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cuándo aplicar ENPS */}
      <div className="informe-label mb-2">¿Cuándo aplicar la ENPS de rastreo?</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
        {[
          { color: 'green', n: '1', title: 'Estado cognitivo conocido, normal', desc: 'Apto cognitivamente — puede manejar.' },
          { color: 'green', n: '2', title: 'Estado cognitivo desconocido, <50 años, sin riesgo', desc: 'Apto cognitivamente — puede manejar.' },
          { color: 'red',   n: '3', title: 'Estado cognitivo conocido, certificación anormal', desc: 'Aplicar tabla de aptitud por diagnóstico (arriba).' },
          { color: 'yellow',n: '4', title: 'Estado cognitivo desconocido, ≥50 años o con factores de riesgo', desc: 'Aplicar ENPS de rastreo → si alterada, evaluación neuropsicológica abarcativa.' },
        ].map(s => {
          const bg = s.color === 'green' ? 'bg-green-50 border-green-200' : s.color === 'red' ? 'bg-red-50 border-red-200' : 'bg-yellow-50 border-yellow-200'
          const nBg = s.color === 'green' ? 'bg-green' : s.color === 'red' ? 'bg-red' : 'bg-yellow'
          const titleColor = s.color === 'green' ? 'text-green' : s.color === 'red' ? 'text-red' : 'text-yellow'
          return (
            <div key={s.n} className={`${bg} border rounded p-2.5 flex gap-2.5`}>
              <span className={`${nBg} text-white rounded-full w-5 h-5 text-[11px] font-bold flex items-center justify-center shrink-0`}>{s.n}</span>
              <div className="text-[12px]"><strong className={titleColor}>{s.title}</strong><br/>{s.desc}</div>
            </div>
          )
        })}
      </div>

      {/* Algoritmo ENPS */}
      <div className="informe-label mb-3">Algoritmo ENPS mínimo de rastreo</div>
      <div className="overflow-x-auto mb-4">
      <div className="flex flex-col items-center gap-0 font-mono text-[12px] min-w-[560px]">
        <div className="bg-dark text-white rounded px-5 py-2 font-bold text-[13px]">MMSE</div>
        <div className="flex gap-10 sm:gap-20 items-start mt-1">
          {/* ≥24 branch */}
          <div className="flex flex-col items-center">
            <div className="text-[10px] text-green font-bold mb-0.5">≥ 24</div>
            <div className="text-gray text-xl">↓</div>
            <div className="bg-dark text-white rounded px-4 py-1.5 font-bold text-[12px] whitespace-nowrap">FSV (Fluencia verbal semántica)</div>
            <div className="flex gap-6 sm:gap-12 items-start mt-1">
              {/* ≥14 branch */}
              <div className="flex flex-col items-center">
                <div className="text-[10px] text-green font-bold mb-0.5">≥ 14</div>
                <div className="text-gray text-xl">↓</div>
                <div className="bg-dark text-white rounded px-3 py-1.5 font-bold text-[12px] whitespace-nowrap">Test del Reloj (Freedman)</div>
                <div className="flex gap-5 sm:gap-8 items-start mt-1">
                  <div className="flex flex-col items-center">
                    <div className="text-[10px] text-green font-bold mb-0.5">≥ 5</div>
                    <div className="text-gray text-xl">↓</div>
                    <div className="bg-green-100 text-green-800 border-2 border-green-300 rounded px-3 py-1.5 font-bold text-[12px] text-center">✓ Continúa<br/>manejando</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-[10px] text-red font-bold mb-0.5">&lt; 5</div>
                    <div className="text-gray text-xl">↓</div>
                    <div className="bg-red-100 text-red-800 border-2 border-red-300 rounded px-3 py-1.5 font-bold text-[11px] text-center">Evaluación<br/>neuropsicológica<br/>abarcativa</div>
                  </div>
                </div>
              </div>
              {/* ≤13 branch */}
              <div className="flex flex-col items-center">
                <div className="text-[10px] text-red font-bold mb-0.5">≤ 13</div>
                <div className="text-gray text-xl">↓</div>
                <div className="bg-red-100 text-red-800 border-2 border-red-300 rounded px-3 py-1.5 font-bold text-[11px] text-center">Evaluación<br/>neuropsicológica<br/>abarcativa</div>
              </div>
            </div>
          </div>
          {/* ≤23 branch */}
          <div className="flex flex-col items-center">
            <div className="text-[10px] text-red font-bold mb-0.5">≤ 23</div>
            <div className="text-gray text-xl">↓</div>
            <div className="bg-red-100 text-red-800 border-2 border-red-300 rounded px-3 py-1.5 font-bold text-[11px] text-center">Evaluación<br/>neuropsicológica<br/>abarcativa</div>
          </div>
        </div>
      </div>
      </div>
      <p className="text-[12px] text-gray italic text-center mb-4">En algunos contextos el MoCA puede ser preferible. El TMT-A/B aporta información adicional sobre seguridad al volante.</p>

      {/* Señales de alarma */}
      <div className="informe-label mb-2">🚩 Señales de alarma — conductas de riesgo al volante</div>
      <div className="alarm-grid mb-4">
        {alarmas.map(a => (
          <div key={a.dom} className="alarm-item">
            <div className="alarm-dom">{a.dom}</div>
            <div className="alarm-desc">{a.desc}</div>
          </div>
        ))}
      </div>

      {/* Impacto del cese */}
      <div className="bg-[#f8f6f0] border border-border rounded-lg p-3.5 mt-1">
        <div className="informe-label mb-2 text-yellow">⚠️ Impacto del cese de la conducción y estrategias de mitigación</div>
        <p className="text-[12.5px] text-dark mb-2.5">La suspensión de la conducción en el adulto mayor se asocia a mayor riesgo de <strong>síntomas depresivos, aislamiento social, reducción de la participación comunitaria y pérdida de autonomía</strong>.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[12px]">
          {[
            { icon: '📅', title: 'Planificación anticipada', desc: 'Iniciar la conversación en etapas tempranas, antes de que represente un riesgo real. Proceso progresivo y pactado.' },
            { icon: '🚌', title: 'Alternativas de movilidad', desc: 'Transporte público accesible · servicios comunitarios · apoyo familiar · transporte compartido.' },
            { icon: '👨‍👩‍👧', title: 'Abordaje familiar', desc: 'Involucrar al paciente en la decisión · enfatizar seguridad propia y de terceros · no retirar las llaves sin diálogo previo.' },
          ].map(s => (
            <div key={s.title} className="bg-white rounded p-2.5 border border-border">
              <div className="font-bold text-accent mb-1">{s.icon} {s.title}</div>
              {s.desc}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={onOpenModal}
        className="inline-flex items-center gap-1.5 border-none rounded px-4 py-2 text-[12.5px] font-semibold cursor-pointer mt-3.5 hover:opacity-85 transition-opacity"
        style={{ background: '#b8860b', color: '#fff' }}
      >
        📝 Redactar informe neurológico cognitivo
      </button>
    </Card>
  )
}

/* ── Sueño ── */
function Sueno() {
  return (
    <Card>
      <CardTitle icon="💤">Trastornos del Sueño</CardTitle>
      <div className="table-wrap">
        <table>
          <thead><tr><th>Diagnóstico</th><th>Clase A-B</th><th>Clase C-D-E-G</th><th>Requisito</th></tr></thead>
          <tbody>
            <tr>
              <td>SAHOS tratado con CPAP</td>
              <td><Badge variant="condicional">APTO 1 AÑO</Badge></td>
              <td><Badge variant="condicional">APTO 1 AÑO</Badge></td>
              <td>PSG nocturna + oximetría + adherencia CPAP con respuesta adecuada</td>
            </tr>
            <tr>
              <td>Narcolepsia en tratamiento</td>
              <td><Badge variant="condicional">APTO 1 AÑO</Badge></td>
              <td><Badge variant="no-apto">NO APTO</Badge></td>
              <td>Respuesta adecuada al tratamiento documentada</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-3">
        <div className="informe-label">Screening obligatorio para todos los postulantes</div>
        <p className="text-[12.5px] text-gray mt-1">Medir peso, talla, IMC, circunferencia de cuello y abdomen, preguntar ronquidos, aplicar ESS. Derivar a evaluación especializada si: IMC ≥35 · Cuello ≥43 cm H / ≥40 cm M · Abdomen ≥110 cm H / ≥90 cm M · Ronquidos referidos o desconocidos · ESS ≥9.</p>
      </div>
    </Card>
  )
}

/* ── Patologias (composición) ── */
export default function Patologias({ onOpenACV, onOpenCognitivo }) {
  return (
    <div id="patologias">
      <SectionTitle num="3">Criterios de Aptitud por Patología</SectionTitle>
      <Epilepsia />
      <ACV onOpenModal={onOpenACV} />
      <Parkinson />
      <EM />
      <Cognitivo onOpenModal={onOpenCognitivo} />
      <Sueno />
    </div>
  )
}
