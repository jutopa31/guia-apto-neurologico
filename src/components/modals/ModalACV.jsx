import { useState } from 'react'

const INITIAL = {
  nombre: '', dni: '', fnac: '', fcons: '', clase: '',
  tipo: '', fevento: '', topo: '', etiologia: '',
  fr: [], estado: 'secuela estable', frecurr: '', tto: '',
  avd: 'independiente para ABVD e AIVD', condprev: 'Sí, conducía regularmente', centinela: '',
  moca: '', tmt: '', reloj: '', vision: 'sin alteraciones',
  fmmss: '', fmmii: '', coord: 'normal', lenguaje: 'sin alteraciones',
  negligencia: 'ausente', marcha: 'normal',
  areas: [], obs: '', estudios: [],
  aptitud: '', vigencia: '1 año', consejeria: 'Se informó al paciente sobre: restricciones de conducción según normativa · efectos adversos de la medicación · conductas de seguridad · obligación de informar el diagnóstico al tramitar la licencia · implicancias legales y de cobertura de seguro en caso de conducir sin habilitación.',
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
  return (
    <select className="form-input" value={value} onChange={e => onChange(e.target.value)}>
      {children}
    </select>
  )
}

function Textarea({ value, onChange, placeholder }) {
  return <textarea className="form-input" value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} rows={3} />
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

export default function ModalACV({ open, onClose }) {
  const [f, setF] = useState(INITIAL)
  const [report, setReport] = useState('')
  const [copied, setCopied] = useState(false)

  const set = field => val => setF(prev => ({ ...prev, [field]: val }))

  function generar() {
    const hoy = new Date().toLocaleDateString('es-AR')
    const fr = f.fr.join(', ') || 'no referidos'
    const noAptas = f.areas.filter(a => !a.includes('Sin áreas'))
    const sinInaptitud = f.areas.some(a => a.includes('Sin áreas'))

    let txt = `INFORME NEUROLÓGICO — APTITUD PARA CONDUCCIÓN VEHICULAR
Basado en Protocolo SNA 2026 · Neurología Argentina DOI 10.1016/j.neuarg.2026.100732
Fecha: ${hoy}
────────────────────────────────────────────────────────

DATOS DEL PACIENTE
Nombre: ${f.nombre}
DNI: ${f.dni}   Fecha de nac.: ${f.fnac || 'No consignada'}
Fecha de consulta: ${f.fcons || hoy}
Motivo: Evaluación de aptitud neurológica para conducción vehicular — Licencia clase ${f.clase || 'no especificada'}

DIAGNÓSTICO CEREBROVASCULAR
Tipo de evento: ${f.tipo || 'No especificado'}
Fecha del evento: ${f.fevento || 'No consignada'}
Topografía/territorio: ${f.topo || 'No especificada'}
Etiología: ${f.etiologia || 'No determinada / en estudio'}
Factores de riesgo: ${fr}
Estado evolutivo: ${f.estado}`

    if (f.frecurr) txt += `\nÚltima recurrencia: ${f.frecurr}`

    txt += `
Tratamiento actual: ${f.tto || 'No especificado'}

SITUACIÓN FUNCIONAL
ABVD/AIVD: ${f.avd}
Conducción previa: ${f.condprev}
Eventos centinela: ${f.centinela || 'Sin eventos referidos'}

EXAMEN NEUROLÓGICO
  Cognición — MoCA: ${f.moca || 'No realizado'}   TMT-B: ${f.tmt || 'No realizado'}   Test del reloj: ${f.reloj || 'No realizado'}
  Visión y oculomotricidad: ${f.vision}
  Fuerza MMSS (MRC): ${f.fmmss || 'No consignada'}
  Fuerza MMII (MRC): ${f.fmmii || 'No consignada'}
  Coordinación: ${f.coord}
  Lenguaje: ${f.lenguaje}
  Negligencia/hemi-inatención: ${f.negligencia}
  Marcha y equilibrio: ${f.marcha}`

    if (f.obs) txt += `\n  Observaciones: ${f.obs}`

    txt += `\n\nÁREAS FUNCIONALES CON IMPACTO PARA LA CONDUCCIÓN`
    if (sinInaptitud && noAptas.length === 0) {
      txt += `\n  Sin áreas funcionales que determinen inaptitud para la conducción en el momento actual.`
    } else if (noAptas.length > 0) {
      noAptas.forEach(a => (txt += `\n  ▶ ${a}`))
    } else {
      txt += `\n  No especificadas.`
    }

    if (f.estudios.length > 0) {
      txt += `\n\nESTUDIOS / DERIVACIONES SUGERIDAS`
      f.estudios.forEach(e => (txt += `\n  · ${e}`))
    }

    txt += `\n\nCONCLUSIÓN Y RECOMENDACIÓN
${f.aptitud || 'Pendiente de completar.'}
Vigencia sugerida del informe: ${f.vigencia}

CONSEJERÍA AL PACIENTE
${f.consejeria}

El presente informe tiene carácter orientativo para la autoridad emisora de la licencia (ANSV / municipio / DHAC). La decisión administrativa final sobre la aptitud para conducir corresponde al organismo competente.

Firma: _________________________________
${f.medico || 'Dr/Dra. ___________________________'}
Sello: _________________________________
Firma del paciente (constancia de consejería): _________________________________`

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
      <div className="bg-card rounded-xl w-full max-w-3xl shadow-2xl my-auto" style={{ border: '1px solid #1c3050' }}>
        {/* Header */}
        <div className="bg-navy text-white px-4 sm:px-6 py-4 flex justify-between items-center" style={{ borderBottom: '3px solid #5aa5ff' }}>
          <div>
            <h2 className="text-[16px] font-bold">📝 Informe Neurológico — Aptitud post-ACV</h2>
            <p className="text-[11px] text-[#8899bb] mt-0.5">Basado en protocolo SNA 2026</p>
          </div>
          <button onClick={onClose} className="bg-white/10 hover:bg-white/20 text-white w-8 h-8 rounded flex items-center justify-center text-lg transition">×</button>
        </div>

        {/* Body */}
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
                <option value="A-B (particular)">A-B — particular (moto/auto)</option>
                <option value="C (profesional)">C — profesional (camiones)</option>
                <option value="D (transporte de pasajeros)">D — transporte de pasajeros</option>
                <option value="E (profesional combinado)">E — profesional / combinaciones</option>
                <option value="G (agrícola/especial)">G — agrícola / especial</option>
              </Select>
            </Field>
          </Section>

          {/* 2. Diagnóstico */}
          <Section title="2. Diagnóstico cerebrovascular">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <Field label="Tipo de evento">
                <Select value={f.tipo} onChange={set('tipo')}>
                  <option value="">— Seleccionar —</option>
                  <option value="ACV isquémico">ACV isquémico</option>
                  <option value="AIT (accidente isquémico transitorio)">AIT</option>
                  <option value="ACV hemorrágico / hematoma intraparenquimatoso">ACV hemorrágico / HIP</option>
                  <option value="Hemorragia subaracnoidea">Hemorragia subaracnoidea</option>
                  <option value="Hemorragia intraventricular">Hemorragia intraventricular</option>
                </Select>
              </Field>
              <Field label="Fecha del evento"><Input type="date" value={f.fevento} onChange={set('fevento')} /></Field>
              <Field label="Topografía / territorio"><Input value={f.topo} onChange={set('topo')} placeholder="p.ej. ACM izquierda" /></Field>
              <Field label="Etiología"><Input value={f.etiologia} onChange={set('etiologia')} placeholder="p.ej. cardioembólico" /></Field>
            </div>
            <Field label="Factores de riesgo">
              <CheckGroup
                selected={f.fr} onChange={set('fr')}
                options={[
                  { value: 'HTA', label: 'HTA' }, { value: 'DBT', label: 'DBT' },
                  { value: 'Dislipemia', label: 'Dislipemia' }, { value: 'Fibrilación auricular', label: 'FA' },
                  { value: 'Cardiopatía isquémica', label: 'Cardiopatía isquémica' },
                  { value: 'Apnea del sueño (SAHOS)', label: 'SAHOS' },
                  { value: 'Tabaquismo', label: 'Tabaquismo' }, { value: 'Obesidad', label: 'Obesidad' },
                ]}
              />
            </Field>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-2">
              <Field label="Estado evolutivo">
                <Select value={f.estado} onChange={set('estado')}>
                  <option value="secuela estable">Secuela estable</option>
                  <option value="fase aguda / subaguda">Fase aguda / subaguda</option>
                  <option value="recuperación en curso">Recuperación en curso</option>
                </Select>
              </Field>
              <Field label="Fecha de última recurrencia"><Input type="date" value={f.frecurr} onChange={set('frecurr')} /></Field>
            </div>
            <Field label="Tratamiento actual y adherencia"><Input value={f.tto} onChange={set('tto')} placeholder="p.ej. AAS 100 mg, rivaroxabán 20 mg — adherente" /></Field>
          </Section>

          {/* 3. Funcional */}
          <Section title="3. Situación funcional y conducción">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <Field label="ABVD / AIVD">
                <Select value={f.avd} onChange={set('avd')}>
                  <option value="independiente para ABVD e AIVD">Independiente (ABVD e AIVD)</option>
                  <option value="independiente para ABVD, asistencia parcial en AIVD">Independiente ABVD, asistencia parcial AIVD</option>
                  <option value="dependiente parcial">Dependiente parcial</option>
                  <option value="dependiente total">Dependiente total</option>
                </Select>
              </Field>
              <Field label="Conducía previamente al evento">
                <Select value={f.condprev} onChange={set('condprev')}>
                  <option value="Sí, conducía regularmente">Sí — regularmente</option>
                  <option value="Sí, ocasionalmente">Sí — ocasionalmente</option>
                  <option value="No conducía">No conducía</option>
                </Select>
              </Field>
            </div>
            <Field label="Eventos centinela (últimos 12 meses)"><Input value={f.centinela} onChange={set('centinela')} placeholder="p.ej. sin eventos / accidente menor / multas" /></Field>
          </Section>

          {/* 4. Examen */}
          <Section title="4. Examen neurológico por dominios">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <Field label="MoCA"><Input value={f.moca} onChange={set('moca')} placeholder="XX / 30" /></Field>
              <Field label="Trail Making Test B"><Input value={f.tmt} onChange={set('tmt')} placeholder="XXX seg / no realizado" /></Field>
              <Field label="Test del reloj (Freedman 7 pts)"><Input value={f.reloj} onChange={set('reloj')} placeholder="X / 7" /></Field>
              <Field label="Visión y motilidad ocular">
                <Select value={f.vision} onChange={set('vision')}>
                  <option value="sin alteraciones">Sin alteraciones</option>
                  <option value="hemianopsia homónima">Hemianopsia homónima</option>
                  <option value="cuadrantanopsia">Cuadrantanopsia</option>
                  <option value="oftalmoplejía parcial">Oftalmoplejía parcial</option>
                  <option value="diplopía">Diplopía</option>
                  <option value="alteración de la motilidad ocular — especificar en observaciones">Otra — ver observaciones</option>
                </Select>
              </Field>
              <Field label="Fuerza MMSS (MRC)"><Input value={f.fmmss} onChange={set('fmmss')} placeholder="Der: X/5 — Izq: X/5" /></Field>
              <Field label="Fuerza MMII (MRC)"><Input value={f.fmmii} onChange={set('fmmii')} placeholder="Der: X/5 — Izq: X/5" /></Field>
              <Field label="Coordinación">
                <Select value={f.coord} onChange={set('coord')}>
                  <option value="normal">Normal</option>
                  <option value="dismetría leve">Dismetría leve</option>
                  <option value="dismetría moderada a severa">Dismetría moderada/severa</option>
                  <option value="ataxia apendicular">Ataxia apendicular</option>
                </Select>
              </Field>
              <Field label="Lenguaje">
                <Select value={f.lenguaje} onChange={set('lenguaje')}>
                  <option value="sin alteraciones">Sin alteraciones</option>
                  <option value="afasia de Broca (motora)">Afasia de Broca</option>
                  <option value="afasia de Wernicke (sensorial)">Afasia de Wernicke</option>
                  <option value="afasia mixta">Afasia mixta</option>
                  <option value="disartria">Disartria</option>
                  <option value="leve alteración del lenguaje — especificar">Leve — ver observaciones</option>
                </Select>
              </Field>
              <Field label="Negligencia / hemi-inatención">
                <Select value={f.negligencia} onChange={set('negligencia')}>
                  <option value="ausente">Ausente</option>
                  <option value="hemi-inatención izquierda leve">Hemi-inatención izquierda leve</option>
                  <option value="negligencia visuoespacial izquierda">Negligencia visuoespacial izquierda</option>
                  <option value="negligencia visuoespacial derecha">Negligencia visuoespacial derecha</option>
                </Select>
              </Field>
              <Field label="Marcha y equilibrio">
                <Select value={f.marcha} onChange={set('marcha')}>
                  <option value="normal">Normal</option>
                  <option value="hemiparética leve — autónoma">Hemiparética leve — autónoma</option>
                  <option value="hemiparética moderada — requiere apoyo">Hemiparética moderada — requiere apoyo</option>
                  <option value="atáxica">Atáxica</option>
                  <option value="no deambula en forma independiente">No deambula independiente</option>
                </Select>
              </Field>
            </div>
          </Section>

          {/* 5. Áreas */}
          <Section title="5. Áreas funcionales — impacto para conducción">
            <CheckGroup
              selected={f.areas} onChange={set('areas')}
              options={[
                { value: 'Compromiso motriz que interfiere con la conducción', label: 'Compromiso motriz' },
                { value: 'Alteración de la coordinación relevante para la conducción', label: 'Coordinación' },
                { value: 'Alteración sensorial o visual relevante para la conducción', label: 'Sensorial / visual' },
                { value: 'Alteración del lenguaje que compromete la comprensión de señales', label: 'Lenguaje' },
                { value: 'Compromiso cognitivo (atención, funciones ejecutivas, visuoespacial)', label: 'Cognición' },
                { value: 'Epilepsia post-ACV', label: 'Epilepsia post-ACV' },
                { value: 'Dolor crónico con impacto funcional', label: 'Dolor crónico' },
                { value: 'Sin áreas funcionales que determinen inaptitud', label: '✓ Sin inaptitud funcional' },
              ]}
            />
            <Field label="Observaciones clínicas adicionales" ><Textarea value={f.obs} onChange={set('obs')} placeholder="p.ej. Déficits sutiles..." /></Field>
          </Section>

          {/* 6. Estudios */}
          <Section title="6. Estudios y derivaciones sugeridas">
            <CheckGroup
              selected={f.estudios} onChange={set('estudios')}
              options={[
                { value: 'Test de manejo en vía pública (derivar a autoridad de licencias)', label: 'Test de manejo' },
                { value: 'Evaluación neuropsicológica completa', label: 'Neuropsicólogo' },
                { value: 'Evaluación en simulador de conducción', label: 'Simulador' },
                { value: 'Evaluación oftalmológica (campo visual formal)', label: 'Oftalmología' },
                { value: 'Evaluación terapia ocupacional orientada a conducción', label: 'T. Ocupacional' },
                { value: 'Stroke Driving Screening Assessment (SDSA)', label: 'SDSA' },
                { value: 'No se requieren estudios adicionales en este momento', label: 'Sin estudios adicionales' },
              ]}
            />
          </Section>

          {/* 7. Conclusión */}
          <Section title="7. Conclusión y recomendación">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <Field label="Impresión clínica de aptitud">
                <Select value={f.aptitud} onChange={set('aptitud')}>
                  <option value="">— Seleccionar —</option>
                  <option value="APTO — Sin déficits neurológicos que comprometan la conducción segura para clase A-B por período de 1 año.">APTO — clase A-B, 1 año</option>
                  <option value="APTO — Sin déficits neurológicos que comprometan la conducción segura para clases A-B y C-D-E-G por período de 1 año.">APTO — todas las clases, 1 año</option>
                  <option value="APTITUD CONDICIONAL — supeditada a resultados de test de manejo y/o evaluación neuropsicológica. Hasta definición: no conducir.">CONDICIONAL — pendiente test de manejo</option>
                  <option value="NO APTO — Se detectan déficits neurológicos que contraindican la conducción segura en el momento actual.">NO APTO — déficits que contraindican</option>
                  <option value="NO APTO TEMPORARIO — Se requiere reevaluación en los próximos meses.">NO APTO TEMPORARIO — reevaluación</option>
                </Select>
              </Field>
              <Field label="Período de vigencia sugerido">
                <Select value={f.vigencia} onChange={set('vigencia')}>
                  <option value="6 meses">6 meses</option>
                  <option value="1 año">1 año</option>
                  <option value="sin conducción hasta nueva evaluación">Sin conducción hasta reevaluación</option>
                </Select>
              </Field>
            </div>
            <Field label="Consejería brindada al paciente"><Textarea value={f.consejeria} onChange={set('consejeria')} /></Field>
            <Field label="Médico que suscribe / Servicio"><Input value={f.medico} onChange={set('medico')} placeholder="Dr/Dra. ___ · Neurología · Hospital ___" /></Field>
          </Section>

          {report && <pre className="preview-area">{report}</pre>}
        </div>

        {/* Footer */}
        <div className="px-4 sm:px-6 py-4 border-t border-border flex gap-2.5 justify-end bg-navy flex-wrap">
          <button onClick={onClose} className="px-5 py-2 rounded bg-surface text-dark text-[13px] font-semibold hover:opacity-85 transition" style={{ border: '1px solid #1c3050' }}>Cancelar</button>
          <button onClick={generar} className="px-5 py-2 rounded bg-accent text-white text-[13px] font-semibold hover:opacity-85 transition">📄 Generar informe</button>
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

function Section({ title, children }) {
  return (
    <div className="border-l-[3px] border-accent pl-3.5">
      <div className="text-[11px] font-bold uppercase tracking-wide text-accent mb-2.5">{title}</div>
      {children}
    </div>
  )
}
