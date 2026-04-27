import { useState } from 'react'

const INITIAL = {
  nombre: '', dni: '', fnac: '', fcons: '', clase: '', informante: '',
  dx: '', fdx: '', cdr: '', anosognosia: 'ausente', cond: [], tto: '',
  mmse: '', moca: '', fsv: '', reloj: '', tmta: '', tmtb: '',
  enpsResult: 'ENPS dentro de límites normales — no se indica evaluación neuropsicológica abarcativa',
  alarm: [], obsManejo: '',
  avd: 'Independiente para ABVD e AIVD', tipoConduccion: 'urbana', obs: '',
  estudios: [],
  aptitud: '', vigencia: '1 año',
  familiar: '',
  consejeria: 'Se informó al paciente y al familiar/informante sobre: restricciones de conducción según normativa · factores de riesgo identificados · necesidad de informar el diagnóstico al tramitar la licencia · implicancias legales y de cobertura de seguro en caso de conducir sin habilitación · alternativas de movilidad disponibles.',
  medico: '',
}

function Field({ label, children }) {
  return (
    <div className="mb-2.5">
      <label className="block text-[11.5px] font-semibold text-dark mb-1">{label}</label>
      {children}
    </div>
  )
}
function Input({ value, onChange, placeholder, type = 'text' }) {
  return <input type={type} className="form-input" value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} />
}
function Select({ value, onChange, children }) {
  return <select className="form-input" value={value} onChange={e => onChange(e.target.value)}>{children}</select>
}
function Textarea({ value, onChange, placeholder, rows = 3 }) {
  return <textarea className="form-input" value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} rows={rows} />
}
function CheckGroup({ options, selected, onChange }) {
  const toggle = v => onChange(selected.includes(v) ? selected.filter(x => x !== v) : [...selected, v])
  return (
    <div className="checkbox-group">
      {options.map(o => (
        <label key={o.value} className="checkbox-item">
          <input type="checkbox" checked={selected.includes(o.value)} onChange={() => toggle(o.value)} />
          {o.label}
        </label>
      ))}
    </div>
  )
}
function Section({ title, children }) {
  return (
    <div className="border-l-[3px] border-yellow pl-3.5">
      <div className="text-[11px] font-bold uppercase tracking-wide text-yellow mb-2.5">{title}</div>
      {children}
    </div>
  )
}

export default function ModalCognitivo({ open, onClose }) {
  const [f, setF] = useState(INITIAL)
  const [report, setReport] = useState('')
  const [copied, setCopied] = useState(false)

  const set = field => val => setF(prev => ({ ...prev, [field]: val }))

  function generar() {
    const hoy = new Date().toLocaleDateString('es-AR')
    const cond = f.cond.length ? f.cond.join(', ') : 'No referidos'

    let txt = `INFORME NEUROLÓGICO — APTITUD PARA CONDUCCIÓN VEHICULAR
Área: Trastornos Cognitivos
Basado en Protocolo SNA 2026 · Neurología Argentina DOI 10.1016/j.neuarg.2026.100732
Fecha: ${hoy}
────────────────────────────────────────────────────────

DATOS DEL PACIENTE
Nombre: ${f.nombre}
DNI: ${f.dni}   Fecha de nac.: ${f.fnac || 'No consignada'}
Fecha de consulta: ${f.fcons || hoy}
Informante: ${f.informante || 'No consignado'}
Motivo: Evaluación de aptitud neurológica para conducción vehicular — Licencia clase ${f.clase || 'no especificada'}

DIAGNÓSTICO Y CARACTERIZACIÓN COGNITIVA
Diagnóstico: ${f.dx || 'No especificado'}
Fecha de diagnóstico / inicio: ${f.fdx || 'No consignada'}
CDR: ${f.cdr || 'No consignado'}
Anosognosia: ${f.anosognosia}
Síntomas conductuales: ${cond}
Tratamiento actual: ${f.tto || 'No especificado'}

BATERÍA ENPS DE RASTREO
  MMSE: ${f.mmse || 'NR'}   MoCA: ${f.moca || 'NR'}
  Fluencia verbal semántica: ${f.fsv || 'NR'}   Test del reloj (Freedman): ${f.reloj || 'NR'}
  TMT-A: ${f.tmta || 'NR'}   TMT-B: ${f.tmtb || 'NR'}
  Resultado del algoritmo ENPS: ${f.enpsResult}`

    if (f.alarm.length) {
      txt += `\n\nSEÑALES DE ALARMA AL VOLANTE`
      f.alarm.forEach(a => (txt += `\n  ▶ ${a}`))
    }
    if (f.obsManejo) txt += `\n  Relato del informante: ${f.obsManejo}`

    txt += `\n\nSITUACIÓN FUNCIONAL
  ABVD/AIVD: ${f.avd}
  Tipo de conducción habitual: ${f.tipoConduccion}`

    if (f.obs) txt += `\n  Observaciones clínicas: ${f.obs}`

    if (f.estudios.length) {
      txt += `\n\nESTUDIOS / DERIVACIONES SUGERIDAS`
      f.estudios.forEach(e => (txt += `\n  · ${e}`))
    }

    txt += `\n\nCONCLUSIÓN Y RECOMENDACIÓN
${f.aptitud || 'Pendiente de completar.'}
Vigencia sugerida del informe: ${f.vigencia}`

    if (f.familiar) txt += `\n\nABORDAJE FAMILIAR Y TRANSICIÓN\n${f.familiar}`

    txt += `\n\nCONSEJERÍA AL PACIENTE Y FAMILIAR
${f.consejeria}

La evaluación de la capacidad de conducción en personas con deterioro cognitivo constituye una responsabilidad compartida entre el equipo de salud, el paciente, su entorno familiar y la autoridad administrativa competente.

Firma: _________________________________
${f.medico || 'Dr/Dra. ___________________________'}
Sello: _________________________________
Firma del paciente (constancia de consejería): _________________________________
Firma del familiar/informante: _________________________________`

    setReport(txt)
  }

  function copiar() {
    navigator.clipboard.writeText(report).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 bg-black/70 z-50 flex items-start justify-center p-2 sm:p-4 overflow-y-auto"
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-xl w-full max-w-3xl shadow-2xl my-auto">
        <div className="text-white px-4 sm:px-6 py-4 flex justify-between items-center" style={{ background: '#5a4010', borderBottom: '3px solid #b8860b' }}>
          <div>
            <h2 className="text-[16px] font-bold">📝 Informe Neurológico — Trastornos Cognitivos</h2>
            <p className="text-[11px] text-[#d4b878] mt-0.5">Basado en protocolo SNA 2026</p>
          </div>
          <button onClick={onClose} className="bg-white/10 hover:bg-white/20 text-white w-8 h-8 rounded flex items-center justify-center text-lg transition">×</button>
        </div>

        <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(100dvh-10rem)] space-y-5">

          {/* 1. Datos */}
          <Section title="1. Datos del paciente">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <Field label="Nombre y apellido"><Input value={f.nombre} onChange={set('nombre')} placeholder="Apellido, Nombre" /></Field>
              <Field label="DNI"><Input value={f.dni} onChange={set('dni')} placeholder="XX.XXX.XXX" /></Field>
              <Field label="Fecha de nacimiento"><Input type="date" value={f.fnac} onChange={set('fnac')} /></Field>
              <Field label="Fecha de consulta"><Input type="date" value={f.fcons} onChange={set('fcons')} /></Field>
            </div>
            <Field label="Clase de licencia solicitada">
              <Select value={f.clase} onChange={set('clase')}>
                <option value="">— Seleccionar —</option>
                <option value="A-B (particular)">A-B — particular</option>
                <option value="C (profesional)">C — profesional (camiones)</option>
                <option value="D (transporte de pasajeros)">D — transporte de pasajeros</option>
                <option value="E (profesional combinado)">E — profesional / combinaciones</option>
              </Select>
            </Field>
            <Field label="Informante acompañante (nombre y vínculo)">
              <Input value={f.informante} onChange={set('informante')} placeholder="p.ej. María García (hija)" />
            </Field>
          </Section>

          {/* 2. Diagnóstico */}
          <Section title="2. Diagnóstico y caracterización cognitiva">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <Field label="Diagnóstico principal">
                <Select value={f.dx} onChange={set('dx')}>
                  <option value="">— Seleccionar —</option>
                  <option value="Deterioro cognitivo leve (trastorno cognitivo menor)">DCL / TCMn</option>
                  <option value="Demencia leve tipo Alzheimer">Demencia leve — Alzheimer</option>
                  <option value="Demencia leve vascular">Demencia leve — vascular</option>
                  <option value="Demencia leve — otra etiología">Demencia leve — otra etiología</option>
                  <option value="Demencia moderada">Demencia moderada</option>
                  <option value="Demencia severa">Demencia severa</option>
                  <option value="Demencia frontotemporal — variante conductual">DFT — variante conductual</option>
                  <option value="Demencia frontotemporal — variante semántica">DFT — variante semántica</option>
                  <option value="Demencia frontotemporal — afasia progresiva primaria leve">DFT — APPnf leve</option>
                  <option value="Delirium (síndrome confusional) — ya resuelto">Delirium ya resuelto</option>
                  <option value="Delirium (síndrome confusional) — no resuelto o recidivante">Delirium no resuelto / recidivante</option>
                  <option value="Amnesia global transitoria (no epiléptica)">AGT no epiléptica</option>
                  <option value="Disfunción cognitiva relacionada a depresión (antes seudodemencia) — ya resuelta">Seudodemencia — ya resuelta</option>
                </Select>
              </Field>
              <Field label="Fecha de diagnóstico / inicio"><Input type="date" value={f.fdx} onChange={set('fdx')} /></Field>
              <Field label="CDR">
                <Select value={f.cdr} onChange={set('cdr')}>
                  <option value="">— Seleccionar —</option>
                  <option value="CDR 0 (sin demencia)">0 — sin demencia</option>
                  <option value="CDR 0.5 (deterioro cognitivo cuestionable)">0.5 — DCL / cuestionable</option>
                  <option value="CDR 1 (demencia leve)">1 — demencia leve</option>
                  <option value="CDR 2 (demencia moderada)">2 — demencia moderada</option>
                  <option value="CDR 3 (demencia severa)">3 — demencia severa</option>
                </Select>
              </Field>
              <Field label="Anosognosia">
                <Select value={f.anosognosia} onChange={set('anosognosia')}>
                  <option value="ausente">Ausente — conciencia de sus déficits</option>
                  <option value="parcial">Parcial — minimiza algunos déficits</option>
                  <option value="presente">Presente — no reconoce sus déficits</option>
                </Select>
              </Field>
            </div>
            <Field label="Síntomas conductuales relevantes">
              <CheckGroup
                selected={f.cond} onChange={set('cond')}
                options={[
                  { value: 'Irritabilidad', label: 'Irritabilidad' },
                  { value: 'Agresividad', label: 'Agresividad' },
                  { value: 'Impulsividad', label: 'Impulsividad' },
                  { value: 'Desinhibición', label: 'Desinhibición' },
                  { value: 'Apatía marcada', label: 'Apatía' },
                  { value: 'Baja percepción del riesgo', label: 'Baja percepción del riesgo' },
                  { value: 'Sin síntomas conductuales relevantes', label: '✓ Sin síntomas conductuales' },
                ]}
              />
            </Field>
            <Field label="Tratamiento actual"><Input value={f.tto} onChange={set('tto')} placeholder="p.ej. donepecilo 10 mg/d, memantina 20 mg/d" /></Field>
          </Section>

          {/* 3. ENPS */}
          <Section title="3. Batería ENPS de rastreo">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <Field label="MMSE"><Input value={f.mmse} onChange={set('mmse')} placeholder="XX / 30" /></Field>
              <Field label="MoCA"><Input value={f.moca} onChange={set('moca')} placeholder="XX / 30" /></Field>
              <Field label="Fluencia verbal semántica"><Input value={f.fsv} onChange={set('fsv')} placeholder="XX palabras / min" /></Field>
              <Field label="Test del reloj (Freedman)"><Input value={f.reloj} onChange={set('reloj')} placeholder="X / 7" /></Field>
              <Field label="TMT-A"><Input value={f.tmta} onChange={set('tmta')} placeholder="XXX seg / NR" /></Field>
              <Field label="TMT-B"><Input value={f.tmtb} onChange={set('tmtb')} placeholder="XXX seg / NR" /></Field>
            </div>
            <Field label="Resultado del algoritmo ENPS">
              <Select value={f.enpsResult} onChange={set('enpsResult')}>
                <option value="ENPS dentro de límites normales — no se indica evaluación neuropsicológica abarcativa">ENPS normal — no requiere evaluación abarcativa</option>
                <option value="ENPS con alteración — se indica evaluación neuropsicológica abarcativa">ENPS alterada — indica evaluación abarcativa</option>
                <option value="ENPS no realizada — se realiza evaluación neuropsicológica abarcativa directamente">ENPS no realizada — evaluación abarcativa directa</option>
              </Select>
            </Field>
          </Section>

          {/* 4. Conductas de riesgo */}
          <Section title="4. Conductas de riesgo al volante — señales de alarma">
            <CheckGroup
              selected={f.alarm} onChange={set('alarm')}
              options={[
                { value: 'Familiar/cuidador refiere cambios en la conducción', label: 'Cambios referidos por terceros' },
                { value: 'Antecedentes de multas o accidentes recientes', label: 'Multas / accidentes' },
                { value: 'Desorientación en rutas o barrios familiares', label: 'Desorientación vial' },
                { value: 'No respeta señales de tránsito o semáforos', label: 'Incumplimiento de señales' },
                { value: 'Dificultades para estimar distancias o mantenerse en carril', label: 'Cálculo de distancias / carril' },
                { value: 'Estimación errónea de la velocidad', label: 'Errores de velocidad' },
                { value: 'El copiloto debe intervenir activamente durante la conducción', label: 'Intervención del copiloto' },
                { value: 'Evitación de conducción nocturna o en condiciones adversas', label: 'Autolimitación progresiva' },
                { value: 'El propio conductor o acompañante ya no se sienten seguros', label: 'Percepción de inseguridad' },
                { value: 'Sin señales de alarma identificadas', label: '✓ Sin señales de alarma' },
              ]}
            />
            <Field label="Observaciones sobre conductas al volante (informante)">
              <Textarea value={f.obsManejo} onChange={set('obsManejo')} placeholder="Relato del familiar/cuidador..." />
            </Field>
          </Section>

          {/* 5. Situación funcional */}
          <Section title="5. Situación funcional">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <Field label="ABVD / AIVD (Lawton-Brody / Katz)">
                <Select value={f.avd} onChange={set('avd')}>
                  <option value="Independiente para ABVD e AIVD">Independiente (ABVD e AIVD)</option>
                  <option value="Independiente ABVD, dificultades en AIVD">Independiente ABVD, dificultades AIVD</option>
                  <option value="Dependiente parcial">Dependiente parcial</option>
                  <option value="Dependiente total">Dependiente total</option>
                </Select>
              </Field>
              <Field label="Tipo de conducción habitual">
                <Select value={f.tipoConduccion} onChange={set('tipoConduccion')}>
                  <option value="urbana">Urbana</option>
                  <option value="urbana y ruta">Urbana y ruta</option>
                  <option value="solo trayectos cortos y familiares">Solo trayectos cortos / familiares</option>
                  <option value="muy esporádica">Muy esporádica</option>
                  <option value="no conduce actualmente">No conduce actualmente</option>
                </Select>
              </Field>
            </div>
            <Field label="Observaciones clínicas adicionales">
              <Textarea value={f.obs} onChange={set('obs')} placeholder="p.ej. Déficits en funciones ejecutivas..." />
            </Field>
          </Section>

          {/* 6. Estudios */}
          <Section title="6. Estudios y derivaciones sugeridas">
            <CheckGroup
              selected={f.estudios} onChange={set('estudios')}
              options={[
                { value: 'Evaluación neuropsicológica abarcativa', label: 'Neuropsicólogo' },
                { value: 'Test de manejo en vía pública (derivar a autoridad de licencias)', label: 'Test de manejo' },
                { value: 'Evaluación oftalmológica (campo visual)', label: 'Oftalmología' },
                { value: 'Evaluación por terapia ocupacional orientada a conducción', label: 'T. Ocupacional' },
                { value: 'Neuroimagen (TC/RMN cerebral)', label: 'Neuroimagen' },
                { value: 'Evaluación psiquiátrica', label: 'Psiquiatría' },
                { value: 'Sin estudios adicionales en este momento', label: 'Sin estudios adicionales' },
              ]}
            />
          </Section>

          {/* 7. Conclusión */}
          <Section title="7. Conclusión, recomendación y consejería familiar">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <Field label="Impresión clínica de aptitud">
                <Select value={f.aptitud} onChange={set('aptitud')}>
                  <option value="">— Seleccionar —</option>
                  <option value="APTO — Sin déficits cognitivos que comprometan la conducción segura en el momento actual para clase A-B por período de 1 año.">APTO — clase A-B, 1 año</option>
                  <option value="APTITUD CONDICIONAL — supeditada a resultados de evaluación neuropsicológica abarcativa y/o test de manejo. Hasta definición: no conducir.">CONDICIONAL — pendiente estudios</option>
                  <option value="NO APTO — Se identifican déficits cognitivos que comprometen la conducción segura en el momento actual.">NO APTO — déficits que contraindican</option>
                  <option value="NO APTO TEMPORARIO — Se requiere reevaluación tras estabilización clínica o tratamiento.">NO APTO TEMPORARIO — reevaluación</option>
                </Select>
              </Field>
              <Field label="Vigencia sugerida">
                <Select value={f.vigencia} onChange={set('vigencia')}>
                  <option value="6 meses">6 meses</option>
                  <option value="1 año">1 año</option>
                  <option value="sin conducción hasta reevaluación">Sin conducción hasta reevaluación</option>
                </Select>
              </Field>
            </div>
            <Field label="Plan de abordaje familiar y transición">
              <Textarea value={f.familiar} onChange={set('familiar')} placeholder="p.ej. Se realizó entrevista con el familiar..." />
            </Field>
            <Field label="Consejería brindada al paciente (solicitar firma)">
              <Textarea value={f.consejeria} onChange={set('consejeria')} rows={4} />
            </Field>
            <Field label="Médico que suscribe / Servicio">
              <Input value={f.medico} onChange={set('medico')} placeholder="Dr/Dra. ___ · Neurología · Hospital ___" />
            </Field>
          </Section>

          {report && <pre className="preview-area">{report}</pre>}
        </div>

        <div className="px-4 sm:px-6 py-4 border-t border-border flex gap-2.5 justify-end bg-[#fafaf8] flex-wrap">
          <button onClick={onClose} className="px-5 py-2 rounded bg-[#e8e4dc] text-dark text-[13px] font-semibold hover:opacity-85 transition">Cancelar</button>
          <button onClick={generar} className="px-5 py-2 rounded text-[13px] font-semibold hover:opacity-85 transition" style={{ background: '#b8860b', color: '#fff' }}>📄 Generar informe</button>
          {report && (
            <button onClick={copiar} className="px-5 py-2 rounded bg-red text-white text-[13px] font-semibold hover:opacity-85 transition">
              {copied ? '✓ Copiado' : '📋 Copiar texto'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
