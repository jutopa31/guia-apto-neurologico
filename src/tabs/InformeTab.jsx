import { useState } from 'react'
import { FileText, Copy, Check, RefreshCw } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const iCls = 'w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white transition'

const INITIAL = {
  nombre: '', dni: '', fnac: '', fcons: '', clase: '', informante: '',
  motivoConsulta: '', antMedQx: '', antFarma: '', antToxicos: [], antNeuro: '',
  avd: 'Independiente para ABVD e AIVD',
  condprev: 'Sí, conducía regularmente', tipoConduccion: 'urbana', centinela: '',
  fmmss: '', fmmii: '', coordinacion: 'normal', vision: 'sin alteraciones',
  lenguaje: 'sin alteraciones', moca: '', marcha: 'normal', obsExamen: '',
  diagnostico: '', disfunciones: [],
  patologia: '',
  tipoAcv: '', fechaAcv: '', topoAcv: '', etioAcv: '', frAcv: [],
  estadoAcv: 'secuela estable', frecurrAcv: '', ttoAcv: '', areasAcv: [],
  dxCognitivo: '', cdr: '', anosognosia: 'ausente — conciencia de déficits',
  condCognitivo: [], ttoCognitivo: '', mmse: '', fsv: '', reloj: '',
  enpsResult: '', alarmasCognitivo: [], obsAlarmas: '',
  tipoEpilepsia: '', fechaUltimaC: '', libreC: '', ttoEpilepsia: '',
  eeg: 'no consignado', obsEpilepsia: '',
  aptitud: '', vigencia: '1 año', estudios: [],
  consejeria: 'Se informó al paciente y al familiar/informante sobre: restricciones de conducción según normativa vigente · factores de riesgo identificados · necesidad de informar el diagnóstico al tramitar la licencia · implicancias legales y de cobertura de seguro en caso de conducir sin habilitación · alternativas de movilidad disponibles.',
  medico: '',
}

function Field({ label, hint, children }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-600 mb-1">{label}</label>
      {hint && <p className="text-xs text-gray-400 mb-1">{hint}</p>}
      {children}
    </div>
  )
}
function Inp({ value, onChange, placeholder, type = 'text' }) {
  return <input type={type} className={iCls} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} />
}
function Sel({ value, onChange, children }) {
  return <select className={iCls} value={value} onChange={e => onChange(e.target.value)}>{children}</select>
}
function Txt({ value, onChange, placeholder, rows = 3 }) {
  return <textarea className={iCls} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} rows={rows} />
}
function Checks({ options, selected, onChange }) {
  const toggle = v => onChange(selected.includes(v) ? selected.filter(x => x !== v) : [...selected, v])
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mt-1">
      {options.map(o => (
        <label key={o.value} className="flex items-start gap-2 text-sm text-gray-700 cursor-pointer select-none">
          <input type="checkbox" checked={selected.includes(o.value)} onChange={() => toggle(o.value)}
            className="mt-0.5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
          {o.label}
        </label>
      ))}
    </div>
  )
}

const sectionColors = {
  gray:   { num: 'bg-gray-500',   border: 'border-l-gray-400'   },
  blue:   { num: 'bg-blue-600',   border: 'border-l-blue-500'   },
  red:    { num: 'bg-red-600',    border: 'border-l-red-500'    },
  amber:  { num: 'bg-amber-600',  border: 'border-l-amber-500'  },
  purple: { num: 'bg-purple-600', border: 'border-l-purple-500' },
  green:  { num: 'bg-green-600',  border: 'border-l-green-500'  },
}

function FormSection({ num, title, accent = 'blue', children }) {
  const c = sectionColors[accent]
  return (
    <div className={`bg-white rounded-xl border border-gray-200 border-l-4 ${c.border} px-5 py-5`}>
      <div className="flex items-center gap-2.5 mb-4">
        <span className={`w-6 h-6 rounded-full ${c.num} text-white text-xs font-bold flex items-center justify-center flex-shrink-0`}>{num}</span>
        <h3 className="font-semibold text-gray-800">{title}</h3>
      </div>
      <div className="space-y-3">{children}</div>
    </div>
  )
}

function generar(f) {
  const hoy = new Date().toLocaleDateString('es-AR')
  const sep = '─'.repeat(54)
  let txt = `INFORME NEUROLÓGICO — APTITUD PARA CONDUCCIÓN VEHICULAR
Basado en Protocolo SNA 2026 · Neurología Argentina DOI 10.1016/j.neuarg.2026.100732
Fecha: ${f.fcons || hoy}
${sep}

DATOS DEL PACIENTE
Nombre: ${f.nombre || 'No consignado'}   DNI: ${f.dni || '—'}   Fecha de nac.: ${f.fnac || 'No consignada'}
Clase de licencia solicitada: ${f.clase || 'No especificada'}
Informante / acompañante: ${f.informante || 'No consignado'}

1. MOTIVO DE CONSULTA Y ANTECEDENTES
Motivo de consulta: ${f.motivoConsulta || 'No consignado'}
Antecedentes médico-quirúrgicos: ${f.antMedQx || 'No referidos'}
Antecedentes farmacológicos relevantes: ${f.antFarma || 'No referidos'}
Antecedentes tóxicos: ${f.antToxicos.length ? f.antToxicos.join(', ') : 'No referidos'}
Historia neurológica previa y actual: ${f.antNeuro || 'Sin antecedentes neurológicos previos relevantes'}

2. DESCRIPCIÓN DEL ESTADO FUNCIONAL ACTUAL
ABVD / AIVD: ${f.avd}
Conducción previa al proceso actual: ${f.condprev}
Tipo de conducción habitual: ${f.tipoConduccion}
Antecedentes viales / eventos centinela: ${f.centinela || 'Sin antecedentes viales referidos'}

3. HALLAZGOS DEL EXAMEN NEUROLÓGICO POR DOMINIOS
  Fuerza MMSS (MRC): ${f.fmmss || 'No consignada'}
  Fuerza MMII (MRC): ${f.fmmii || 'No consignada'}
  Coordinación: ${f.coordinacion}
  Visión y oculomotricidad: ${f.vision}
  Lenguaje: ${f.lenguaje}
  Cognición — MoCA: ${f.moca ? f.moca + ' / 30' : 'No realizado'}
  Marcha y equilibrio: ${f.marcha}${f.obsExamen ? '\n  Observaciones: ' + f.obsExamen : ''}

4. DIAGNÓSTICO CLÍNICO Y DISFUNCIONES NEUROLÓGICAS RELEVANTES PARA LA CONDUCCIÓN
Diagnóstico: ${f.diagnostico || 'No especificado'}
Disfunciones con impacto en conducción: ${f.disfunciones.length ? f.disfunciones.join(' · ') : 'No especificadas'}`

  if (f.patologia === 'acv') {
    txt += `\n\nCOMPLEMENTO — ENFERMEDAD CEREBROVASCULAR
Tipo de evento: ${f.tipoAcv || 'No especificado'}
Fecha del evento: ${f.fechaAcv || 'No consignada'}
Topografía / territorio: ${f.topoAcv || 'No especificada'}
Causa / etiología: ${f.etioAcv || 'No determinada / en estudio'}
Factores de riesgo (CV, DM, AOS): ${f.frAcv.length ? f.frAcv.join(', ') : 'No referidos'}
Estado evolutivo: ${f.estadoAcv}
Estabilidad clínica: ${f.estabilidadAcv || 'No consignada'}
Adherencia y ajustes terapéuticos: ${f.adherenciaAcv || 'No consignada'}
Tratamiento actual: ${f.ttoAcv || 'No especificado'}
Recurrencias: ${f.recurrenciasAcv || 'No consignadas'}${f.frecurrAcv ? '\nFecha de última recurrencia: ' + f.frecurrAcv : ''}
Evaluación de áreas funcionales: ${f.areasAcv.length ? '\n  · ' + f.areasAcv.join('\n  · ') : 'Sin áreas de inaptitud identificadas en el momento actual'}`
  }

  if (f.patologia === 'cognitivo') {
    txt += `\n\nCOMPLEMENTO — TRASTORNOS COGNITIVOS
Diagnóstico cognitivo: ${f.dxCognitivo || 'No especificado'}
CDR: ${f.cdr || 'No consignado'}   Anosognosia: ${f.anosognosia}
Síntomas conductuales: ${f.condCognitivo.length ? f.condCognitivo.join(', ') : 'No referidos'}
Tratamiento actual: ${f.ttoCognitivo || 'No especificado'}
Batería ENPS de rastreo:
  MMSE: ${f.mmse || 'NR'}   FSV: ${f.fsv || 'NR'}   Test del Reloj (Freedman): ${f.reloj || 'NR'}
  Resultado del algoritmo ENPS: ${f.enpsResult || 'No especificado'}
Señales de alarma al volante: ${f.alarmasCognitivo.length ? f.alarmasCognitivo.join(' · ') : 'Sin señales de alarma identificadas'}${f.obsAlarmas ? '\nRelato del informante: ' + f.obsAlarmas : ''}`
  }

  if (f.patologia === 'epilepsia') {
    txt += `\n\nCOMPLEMENTO — EPILEPSIA Y CONDUCCIÓN
Tipo de epilepsia / síndrome epiléptico: ${f.tipoEpilepsia || 'No especificado'}
Fecha del último episodio: ${f.fechaUltimaC || 'No consignada'}
Período libre de crisis documentado: ${f.libreC || 'No consignado'}
Tratamiento antiepiléptico y adherencia: ${f.ttoEpilepsia || 'No especificado'}
EEG más reciente: ${f.eeg}${f.obsEpilepsia ? '\nObservaciones: ' + f.obsEpilepsia : ''}`
  }

  txt += `\n\n5. RECOMENDACIONES`
  if (f.estudios.length) {
    txt += `\nEstudios / derivaciones sugeridas:`
    f.estudios.forEach(e => (txt += `\n  · ${e}`))
  } else {
    txt += `\nSin derivaciones adicionales en este momento.`
  }

  txt += `\n\nCONCLUSIÓN
${f.aptitud || 'Pendiente de completar.'}
Vigencia sugerida del informe: ${f.vigencia}

CONSEJERÍA AL PACIENTE Y FAMILIAR/INFORMANTE
${f.consejeria}

El presente informe tiene carácter orientativo para la autoridad emisora de la licencia. La decisión administrativa final sobre aptitud para conducir corresponde al organismo competente (ANSV / DHAC / municipio).

Firma: _________________________________
${f.medico || 'Dr/Dra. ___________________________'}
Sello: _________________________________
Firma del paciente (constancia de consejería): _________________________________
Firma del familiar/informante: _________________________________`

  return txt
}

export default function InformeTab() {
  const [f, setF] = useState(INITIAL)
  const [report, setReport] = useState('')
  const [copied, setCopied] = useState(false)

  const set = k => v => setF(prev => ({ ...prev, [k]: v }))

  function copiar() {
    navigator.clipboard.writeText(report).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    })
  }

  return (
    <div className="space-y-5">
      <SectionHeader
        num="3"
        title="Herramienta de Evaluación e Informe"
        subtitle="Guía de evaluación clínica · Generador de informe neurológico"
      />

      <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
        <p className="text-sm text-blue-800">
          Complete las secciones de evaluación. Al finalizar, seleccione la patología principal (si aplica) y presione <strong>Generar informe</strong> para obtener el texto estructurado listo para copiar.
        </p>
      </div>

      {/* Datos del paciente */}
      <FormSection num="A" title="Datos del paciente" accent="gray">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Field label="Nombre y apellido"><Inp value={f.nombre} onChange={set('nombre')} placeholder="Apellido, Nombre" /></Field>
          <Field label="DNI"><Inp value={f.dni} onChange={set('dni')} placeholder="XX.XXX.XXX" /></Field>
          <Field label="Fecha de nacimiento"><Inp type="date" value={f.fnac} onChange={set('fnac')} /></Field>
          <Field label="Fecha de consulta"><Inp type="date" value={f.fcons} onChange={set('fcons')} /></Field>
        </div>
        <Field label="Clase de licencia solicitada">
          <Sel value={f.clase} onChange={set('clase')}>
            <option value="">— Seleccionar —</option>
            <option value="A-B (particular — auto / moto)">A-B — particular (auto / moto)</option>
            <option value="C (profesional — camiones)">C — profesional (camiones)</option>
            <option value="D (transporte de pasajeros)">D — transporte de pasajeros</option>
            <option value="E (profesional combinado)">E — profesional / combinaciones</option>
            <option value="G (agrícola / especial)">G — agrícola / especial</option>
          </Sel>
        </Field>
        <Field label="Informante / acompañante (nombre y vínculo)">
          <Inp value={f.informante} onChange={set('informante')} placeholder="p.ej. María García (hija)" />
        </Field>
      </FormSection>

      {/* Sección 1 */}
      <FormSection num="1" title="Motivo de consulta y antecedentes" accent="blue">
        <Field label="Motivo de consulta">
          <Txt value={f.motivoConsulta} onChange={set('motivoConsulta')} rows={2}
            placeholder="p.ej. Paciente de 68 años que consulta para evaluación neurológica por renovación de licencia clase A-B..." />
        </Field>
        <Field label="Antecedentes médico-quirúrgicos">
          <Txt value={f.antMedQx} onChange={set('antMedQx')} rows={2}
            placeholder="p.ej. HTA, DBT tipo 2, cirugía de cadera 2019, hipotiroidismo..." />
        </Field>
        <Field label="Antecedentes farmacológicos relevantes"
          hint="Incluir medicación con potencial efecto sobre SNC: benzodiacepinas, opioides, antiepilépticos, antipsicóticos, anticolinérgicos, hipnóticos">
          <Txt value={f.antFarma} onChange={set('antFarma')} rows={2}
            placeholder="p.ej. Lorazepam 1 mg nocturno, atorvastatina 40 mg, metformina 850 mg c/12h..." />
        </Field>
        <Field label="Antecedentes tóxicos">
          <Checks selected={f.antToxicos} onChange={set('antToxicos')} options={[
            { value: 'alcohol: consumo habitual (≥ 2 unidades/día)', label: 'Alcohol habitual' },
            { value: 'tabaquismo activo', label: 'Tabaquismo activo' },
            { value: 'cannabis / marihuana', label: 'Cannabis' },
            { value: 'cocaína / estimulantes', label: 'Cocaína / estimulantes' },
            { value: 'otras sustancias psicoactivas', label: 'Otras sustancias' },
            { value: 'sin antecedentes tóxicos referidos', label: '✓ Sin antecedentes tóxicos' },
          ]} />
        </Field>
        <Field label="Historia de procesos neurológicos previos y actuales">
          <Txt value={f.antNeuro} onChange={set('antNeuro')} rows={2}
            placeholder="p.ej. ACV isquémico 2022, TCE leve 2010, cefalea crónica, en tratamiento por epilepsia desde 2020..." />
        </Field>
      </FormSection>

      {/* Sección 2 */}
      <FormSection num="2" title="Descripción del estado funcional actual" accent="blue">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Field label="ABVD / AIVD (Katz / Lawton-Brody)">
            <Sel value={f.avd} onChange={set('avd')}>
              <option value="Independiente para ABVD e AIVD">Independiente (ABVD e AIVD)</option>
              <option value="Independiente para ABVD, dificultades en AIVD">Independiente ABVD, dificultades AIVD</option>
              <option value="Dependiente parcial para ABVD y/o AIVD">Dependiente parcial</option>
              <option value="Dependiente total">Dependiente total</option>
            </Sel>
          </Field>
          <Field label="Conducción previa al proceso actual">
            <Sel value={f.condprev} onChange={set('condprev')}>
              <option value="Sí, conducía regularmente">Sí — regularmente</option>
              <option value="Sí, conducía ocasionalmente">Sí — ocasionalmente</option>
              <option value="No conducía">No conducía</option>
            </Sel>
          </Field>
          <Field label="Tipo de conducción habitual">
            <Sel value={f.tipoConduccion} onChange={set('tipoConduccion')}>
              <option value="urbana">Urbana</option>
              <option value="urbana y ruta">Urbana y ruta</option>
              <option value="solo trayectos cortos y familiares">Solo trayectos cortos / familiares</option>
              <option value="muy esporádica">Muy esporádica</option>
              <option value="no conduce actualmente">No conduce actualmente</option>
            </Sel>
          </Field>
        </div>
        <Field label="Antecedentes viales / eventos centinela (últimos 12 meses)"
          hint="Multas, accidentes, incidentes, autolimitación progresiva referida por el paciente o familiar">
          <Txt value={f.centinela} onChange={set('centinela')} rows={2}
            placeholder="p.ej. Sin antecedentes viales / Accidente menor en estacionamiento (2024) / Familiar refiere que dejó de manejar de noche..." />
        </Field>
      </FormSection>

      {/* Sección 3 */}
      <FormSection num="3" title="Hallazgos del examen neurológico por dominios" accent="blue">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Field label="Fuerza MMSS (escala MRC)"><Inp value={f.fmmss} onChange={set('fmmss')} placeholder="Der: 5/5 — Izq: 5/5" /></Field>
          <Field label="Fuerza MMII (escala MRC)"><Inp value={f.fmmii} onChange={set('fmmii')} placeholder="Der: 5/5 — Izq: 5/5" /></Field>
          <Field label="Coordinación (dedo-nariz, talón-rodilla)">
            <Sel value={f.coordinacion} onChange={set('coordinacion')}>
              <option value="normal">Normal</option>
              <option value="dismetría leve">Dismetría leve</option>
              <option value="dismetría moderada a severa">Dismetría moderada / severa</option>
              <option value="ataxia apendicular">Ataxia apendicular</option>
              <option value="temblor de intención con impacto funcional">Temblor de intención relevante</option>
            </Sel>
          </Field>
          <Field label="Visión y oculomotricidad">
            <Sel value={f.vision} onChange={set('vision')}>
              <option value="sin alteraciones">Sin alteraciones</option>
              <option value="hemianopsia homónima — derivado a oftalmología">Hemianopsia homónima</option>
              <option value="cuadrantanopsia — derivado a oftalmología">Cuadrantanopsia</option>
              <option value="diplopía o oftalmoplejía parcial">Diplopía / oftalmoplejía</option>
              <option value="ptosis palpebral con impacto visual">Ptosis palpebral relevante</option>
              <option value="otra alteración visual — especificar en observaciones">Otra — ver observaciones</option>
            </Sel>
          </Field>
          <Field label="Lenguaje">
            <Sel value={f.lenguaje} onChange={set('lenguaje')}>
              <option value="sin alteraciones">Sin alteraciones</option>
              <option value="afasia de Broca leve (expresiva)">Afasia de Broca leve</option>
              <option value="afasia de Wernicke (receptiva) — contraindica conducción">Afasia de Wernicke</option>
              <option value="afasia global — contraindica conducción">Afasia global</option>
              <option value="disartria">Disartria</option>
              <option value="otra alteración del lenguaje — ver observaciones">Otra — ver observaciones</option>
            </Sel>
          </Field>
          <Field label="Cognición — MoCA"><Inp value={f.moca} onChange={set('moca')} placeholder="XX / 30" /></Field>
          <Field label="Marcha y equilibrio">
            <Sel value={f.marcha} onChange={set('marcha')}>
              <option value="normal">Normal</option>
              <option value="hemiparética leve — autónoma">Hemiparética leve — autónoma</option>
              <option value="hemiparética moderada — requiere apoyo">Hemiparética moderada — requiere apoyo</option>
              <option value="atáxica">Atáxica</option>
              <option value="no deambula en forma independiente">No deambula de forma independiente</option>
            </Sel>
          </Field>
        </div>
        <Field label="Observaciones del examen neurológico">
          <Txt value={f.obsExamen} onChange={set('obsExamen')} rows={2}
            placeholder="p.ej. Clonus aquíleo derecho sostenido, Babinski bilateral, hemi-inatención izquierda leve..." />
        </Field>
      </FormSection>

      {/* Sección 4 */}
      <FormSection num="4" title="Diagnóstico clínico y disfunciones relevantes para la conducción" accent="blue">
        <Field label="Diagnóstico clínico principal">
          <Txt value={f.diagnostico} onChange={set('diagnostico')} rows={2}
            placeholder="p.ej. ACV isquémico en territorio de ACM izquierda (2024) con secuela de hemiparesia derecha leve y déficit ejecutivo leve..." />
        </Field>
        <Field label="Disfunciones neurológicas con impacto en la conducción" hint="Marcar todas las que apliquen en el momento actual">
          <Checks selected={f.disfunciones} onChange={set('disfunciones')} options={[
            { value: 'compromiso motriz (fuerza, tono o destreza) que interfiere con el control del vehículo', label: 'Compromiso motriz' },
            { value: 'alteración de la coordinación relevante para la conducción', label: 'Alteración de coordinación' },
            { value: 'alteración visual o de la motilidad ocular con impacto en conducción', label: 'Déficit visual / oculomotor' },
            { value: 'alteración del lenguaje que compromete la comprensión de señales de tránsito', label: 'Alteración del lenguaje' },
            { value: 'compromiso cognitivo (atención, funciones ejecutivas, visuoespacial)', label: 'Compromiso cognitivo' },
            { value: 'epilepsia / riesgo de crisis con pérdida de conciencia', label: 'Epilepsia / riesgo de crisis' },
            { value: 'dolor crónico con impacto funcional relevante', label: 'Dolor crónico con impacto' },
            { value: 'trastorno del sueño con hipersomnia diurna relevante', label: 'Hipersomnia / somnolencia diurna' },
            { value: 'sin disfunciones neurológicas que determinen inaptitud en el momento actual', label: '✓ Sin disfunciones con impacto' },
          ]} />
        </Field>
      </FormSection>

      {/* Selector de patología */}
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
          Sección específica por patología <span className="text-gray-400 font-normal normal-case tracking-normal">(seleccionar si aplica)</span>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { id: 'acv',       label: 'ACV / Enfermedad cerebrovascular', desc: 'Isquémico, hemorrágico, AIT',   active: 'border-red-500 bg-red-50',    idle: 'border-gray-200 hover:border-red-300'    },
            { id: 'cognitivo', label: 'Trastornos cognitivos',            desc: 'DCL, demencias, DFT, delirium', active: 'border-amber-500 bg-amber-50', idle: 'border-gray-200 hover:border-amber-300' },
            { id: 'epilepsia', label: 'Epilepsia',                        desc: 'Focal, generalizada, síndrome', active: 'border-purple-500 bg-purple-50',idle: 'border-gray-200 hover:border-purple-300'},
          ].map(p => (
            <button key={p.id}
              onClick={() => set('patologia')(f.patologia === p.id ? '' : p.id)}
              className={`text-left rounded-lg border-2 p-3 transition-all ${f.patologia === p.id ? p.active : p.idle}`}
            >
              <p className="font-semibold text-sm text-gray-800">{p.label}</p>
              <p className="text-xs text-gray-500 mt-0.5">{p.desc}</p>
            </button>
          ))}
        </div>
      </div>

      {/* ACV específico */}
      {f.patologia === 'acv' && (
        <FormSection num="+" title="Complemento — ACV / Enfermedad cerebrovascular" accent="red">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Field label="Tipo de evento">
              <Sel value={f.tipoAcv} onChange={set('tipoAcv')}>
                <option value="">— Seleccionar —</option>
                <option value="ACV isquémico">ACV isquémico</option>
                <option value="AIT (accidente isquémico transitorio)">AIT</option>
                <option value="ACV hemorrágico / hematoma intraparenquimatoso (HIP)">ACV hemorrágico / HIP</option>
                <option value="Hemorragia subaracnoidea (HSA)">Hemorragia subaracnoidea (HSA)</option>
              </Sel>
            </Field>
            <Field label="Fecha del evento"><Inp type="date" value={f.fechaAcv} onChange={set('fechaAcv')} /></Field>
            <Field label="Topografía / territorio"><Inp value={f.topoAcv} onChange={set('topoAcv')} placeholder="p.ej. ACM izquierda, cerebelo" /></Field>
            <Field label="Causa / etiología" hint="Mecanismo si se conoce">
              <Inp value={f.etioAcv} onChange={set('etioAcv')} placeholder="p.ej. cardioembólico por FA, aterotrombótico, criptogénico" />
            </Field>
          </div>

          <Field label="Factores de riesgo relevantes (cardiovascular, DM, AOS)">
            <Checks selected={f.frAcv} onChange={set('frAcv')} options={[
              { value: 'HTA', label: 'HTA' },
              { value: 'Diabetes mellitus', label: 'DM / DBT' },
              { value: 'Dislipemia', label: 'Dislipemia' },
              { value: 'Fibrilación auricular', label: 'Fibrilación auricular' },
              { value: 'Cardiopatía isquémica', label: 'Cardiopatía isquémica' },
              { value: 'Apnea obstructiva del sueño (AOS)', label: 'AOS / SAHOS' },
              { value: 'Tabaquismo', label: 'Tabaquismo' },
              { value: 'Obesidad', label: 'Obesidad' },
              { value: 'Vasculitis o coagulopatía', label: 'Vasculitis / coagulopatía' },
            ]} />
          </Field>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Field label="Estado evolutivo">
              <Sel value={f.estadoAcv} onChange={set('estadoAcv')}>
                <option value="secuela estable">Secuela estable</option>
                <option value="fase aguda / subaguda (≤ 30 días)">Fase aguda / subaguda (≤ 30 días)</option>
                <option value="recuperación en curso (subagudo tardío)">Recuperación en curso</option>
              </Sel>
            </Field>
            <Field label="Estabilidad clínica actual">
              <Sel value={f.estabilidadAcv || 'estable — sin nuevos déficits'} onChange={set('estabilidadAcv')}>
                <option value="estable — sin nuevos déficits">Estable — sin nuevos déficits</option>
                <option value="en recuperación activa — déficits en evolución">En recuperación activa</option>
                <option value="inestable — déficits fluctuantes o en progresión">Inestable — déficits fluctuantes</option>
              </Sel>
            </Field>
            <Field label="Adherencia y ajustes terapéuticos">
              <Sel value={f.adherenciaAcv || 'adherente — sin cambios recientes'} onChange={set('adherenciaAcv')}>
                <option value="adherente — sin cambios recientes">Adherente — sin cambios recientes</option>
                <option value="adherente — con ajuste reciente de tratamiento">Adherente — con ajuste reciente</option>
                <option value="adherencia parcial">Adherencia parcial</option>
                <option value="no adherente">No adherente</option>
              </Sel>
            </Field>
            <Field label="Tratamiento actual">
              <Inp value={f.ttoAcv} onChange={set('ttoAcv')} placeholder="p.ej. AAS 100 mg + atorvastatina 40 mg + ACOD" />
            </Field>
          </div>

          <Field label="Presencia / ausencia de recurrencias (últimos 12 meses)">
            <Sel value={f.recurrenciasAcv || 'sin recurrencias en el período de seguimiento'} onChange={set('recurrenciasAcv')}>
              <option value="sin recurrencias en el período de seguimiento">Sin recurrencias</option>
              <option value="una recurrencia documentada en los últimos 12 meses">Una recurrencia documentada</option>
              <option value="múltiples recurrencias">Múltiples recurrencias</option>
            </Sel>
          </Field>
          <Field label="Fecha de última recurrencia (si aplica)">
            <Inp type="date" value={f.frecurrAcv} onChange={set('frecurrAcv')} />
          </Field>

          <Field label="Evaluación de áreas funcionales (Tabla 7 — SNA 2026)"
            hint="Indicar cuáles presentan déficit con impacto en la conducción en el momento actual">
            <Checks selected={f.areasAcv} onChange={set('areasAcv')} options={[
              { value: 'área motriz: compromiso de fuerza, tono o destreza que interfiere con el control del vehículo', label: '1 — Compromiso motriz' },
              { value: 'área de coordinación: ataxia, dismetría o temblor de intención relevante', label: '2 — Alteración de coordinación' },
              { value: 'área sensorial / visual: hemianopsia, cuadrantanopsia, diplopía u otro déficit campimétricamente relevante', label: '3 — Déficit sensorial / visual' },
              { value: 'área de lenguaje: afasia que compromete la comprensión de señales de tránsito', label: '4 — Alteración del lenguaje' },
              { value: 'área cognitiva: compromiso de atención, funciones ejecutivas o habilidades visuoespaciales', label: '5 — Compromiso cognitivo' },
              { value: 'epilepsia post-ACV: aplicar criterios específicos del protocolo', label: '6 — Epilepsia post-ACV' },
              { value: 'dolor crónico con impacto funcional relevante para la conducción', label: '7 — Dolor crónico con impacto' },
              { value: 'sin áreas funcionales que determinen inaptitud en el momento actual', label: '✓ Sin inaptitud funcional en ningún área' },
            ]} />
          </Field>
        </FormSection>
      )}

      {/* Cognitivo específico */}
      {f.patologia === 'cognitivo' && (
        <FormSection num="+" title="Complemento — Trastornos cognitivos" accent="amber">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Field label="Diagnóstico cognitivo">
              <Sel value={f.dxCognitivo} onChange={set('dxCognitivo')}>
                <option value="">— Seleccionar —</option>
                <option value="Deterioro cognitivo leve (TCMn)">DCL / TCMn</option>
                <option value="Demencia leve tipo Alzheimer">Demencia leve — Alzheimer</option>
                <option value="Demencia leve vascular">Demencia leve — vascular</option>
                <option value="Demencia leve — otra etiología">Demencia leve — otra etiología</option>
                <option value="Demencia moderada">Demencia moderada</option>
                <option value="Demencia severa">Demencia severa</option>
                <option value="Demencia frontotemporal — variante conductual">DFT — variante conductual</option>
                <option value="Demencia frontotemporal — variante semántica">DFT — variante semántica</option>
                <option value="Afasia progresiva primaria no fluente — leve">APPnf leve</option>
                <option value="Delirium ya resuelto (≥ 6 meses)">Delirium ya resuelto</option>
                <option value="Delirium no resuelto o recidivante">Delirium no resuelto / recidivante</option>
                <option value="Amnesia global transitoria (no epiléptica)">AGT no epiléptica</option>
                <option value="Disfunción cognitiva por depresión — ya resuelta">Seudodemencia — ya resuelta</option>
              </Sel>
            </Field>
            <Field label="CDR (Clinical Dementia Rating)">
              <Sel value={f.cdr} onChange={set('cdr')}>
                <option value="">— Seleccionar —</option>
                <option value="CDR 0 (sin demencia)">0 — sin demencia</option>
                <option value="CDR 0.5 (cuestionable / DCL)">0.5 — cuestionable / DCL</option>
                <option value="CDR 1 (demencia leve)">1 — demencia leve</option>
                <option value="CDR 2 (demencia moderada)">2 — demencia moderada</option>
                <option value="CDR 3 (demencia severa)">3 — demencia severa</option>
              </Sel>
            </Field>
            <Field label="Anosognosia">
              <Sel value={f.anosognosia} onChange={set('anosognosia')}>
                <option value="ausente — conciencia de déficits">Ausente — conciencia de déficits</option>
                <option value="parcial — minimiza algunos déficits">Parcial — minimiza déficits</option>
                <option value="presente — no reconoce sus déficits">Presente — no reconoce sus déficits</option>
              </Sel>
            </Field>
            <Field label="Tratamiento actual">
              <Inp value={f.ttoCognitivo} onChange={set('ttoCognitivo')} placeholder="p.ej. donepecilo 10 mg/d" />
            </Field>
          </div>
          <Field label="Síntomas conductuales relevantes">
            <Checks selected={f.condCognitivo} onChange={set('condCognitivo')} options={[
              { value: 'irritabilidad', label: 'Irritabilidad' },
              { value: 'agresividad', label: 'Agresividad' },
              { value: 'impulsividad', label: 'Impulsividad' },
              { value: 'desinhibición', label: 'Desinhibición' },
              { value: 'apatía marcada', label: 'Apatía marcada' },
              { value: 'baja percepción del riesgo', label: 'Baja percepción del riesgo' },
              { value: 'sin síntomas conductuales relevantes', label: '✓ Sin síntomas conductuales' },
            ]} />
          </Field>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider pt-2">Batería ENPS de rastreo (Figura 3 — SNA 2026)</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Field label="MMSE (corte ≥ 24)"><Inp value={f.mmse} onChange={set('mmse')} placeholder="XX / 30" /></Field>
            <Field label="FSV — fluencia semántica (corte ≥ 14)"><Inp value={f.fsv} onChange={set('fsv')} placeholder="XX palabras / 1 min" /></Field>
            <Field label="Test del Reloj Freedman (corte ≥ 5/7)"><Inp value={f.reloj} onChange={set('reloj')} placeholder="X / 7" /></Field>
          </div>
          <Field label="Resultado del algoritmo ENPS">
            <Sel value={f.enpsResult} onChange={set('enpsResult')}>
              <option value="">— Seleccionar —</option>
              <option value="ENPS dentro de límites normales — no se indica evaluación neuropsicológica abarcativa">Normal — no requiere evaluación abarcativa</option>
              <option value="ENPS alterada en paso 1 (MMSE &lt; 24) — se indica evaluación neuropsicológica abarcativa">Alterada en paso 1 — MMSE</option>
              <option value="ENPS alterada en paso 2 (FSV &lt; 14) — se indica evaluación neuropsicológica abarcativa">Alterada en paso 2 — FSV</option>
              <option value="ENPS alterada en paso 3 (Reloj &lt; 5/7) — se indica evaluación neuropsicológica abarcativa">Alterada en paso 3 — Test del Reloj</option>
              <option value="ENPS no realizada — evaluación neuropsicológica abarcativa directa">No realizada — evaluación abarcativa directa</option>
            </Sel>
          </Field>
          <Field label="Señales de alarma al volante (Tabla 11 — SNA 2026)"
            hint="Preguntar sistemáticamente al familiar / informante">
            <Checks selected={f.alarmasCognitivo} onChange={set('alarmasCognitivo')} options={[
              { value: 'familiar o cuidador refiere cambios en la conducción', label: 'Cambios referidos por terceros' },
              { value: 'historia de multas o accidentes de tráfico recientes', label: 'Multas / accidentes' },
              { value: 'desorientación en rutas o barrios familiares', label: 'Desorientación vial' },
              { value: 'conductas impulsivas o agresividad al conducir', label: 'Conductas impulsivas / agresividad' },
              { value: 'dificultades para calcular distancias o mantenerse en el carril', label: 'Cálculo de distancias / carril' },
              { value: 'no respeta señales de tránsito o semáforos', label: 'Incumplimiento de señales' },
              { value: 'reacciones tardías o toma de decisiones lenta al conducir', label: 'Reacciones tardías' },
              { value: 'el copiloto debe intervenir activamente durante la conducción', label: 'Intervención del copiloto' },
              { value: 'conductor o pasajeros no se sienten seguros en el automóvil', label: 'Percepción de inseguridad' },
              { value: 'evitación de conducción nocturna o en condiciones adversas', label: 'Autolimitación (noche / adverso)' },
              { value: 'sin señales de alarma identificadas', label: '✓ Sin señales de alarma' },
            ]} />
          </Field>
          <Field label="Relato del informante sobre conductas al volante">
            <Txt value={f.obsAlarmas} onChange={set('obsAlarmas')} rows={2}
              placeholder="p.ej. La hija refiere que en dos ocasiones el paciente se pasó una luz roja y no recordó el trayecto..." />
          </Field>
        </FormSection>
      )}

      {/* Epilepsia específico */}
      {f.patologia === 'epilepsia' && (
        <FormSection num="+" title="Complemento — Epilepsia y conducción" accent="purple">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Field label="Tipo de epilepsia / síndrome epiléptico">
              <Sel value={f.tipoEpilepsia} onChange={set('tipoEpilepsia')}>
                <option value="">— Seleccionar —</option>
                <option value="Epilepsia focal sin alteración de conciencia">Focal — sin alteración de conciencia</option>
                <option value="Epilepsia focal con alteración de conciencia">Focal — con alteración de conciencia</option>
                <option value="Epilepsia generalizada">Generalizada</option>
                <option value="Epilepsia focal a bilateral tónico-clónica">Focal a bilateral tónico-clónica</option>
                <option value="Epilepsia refléjica">Epilepsia refléjica</option>
                <option value="Crisis no epilépticas psicogénicas (CNEP)">CNEP</option>
                <option value="Síndrome epiléptico — ver observaciones">Otro síndrome — ver observaciones</option>
              </Sel>
            </Field>
            <Field label="Fecha del último episodio / crisis"><Inp type="date" value={f.fechaUltimaC} onChange={set('fechaUltimaC')} /></Field>
            <Field label="Período libre de crisis documentado">
              <Inp value={f.libreC} onChange={set('libreC')} placeholder="p.ej. 18 meses / 2 años" />
            </Field>
            <Field label="EEG más reciente">
              <Sel value={f.eeg} onChange={set('eeg')}>
                <option value="normal">Normal</option>
                <option value="con actividad epileptiforme interictal">Con actividad epileptiforme interictal</option>
                <option value="con lentificación focal">Con lentificación focal</option>
                <option value="no realizado">No realizado</option>
                <option value="no consignado">No consignado</option>
              </Sel>
            </Field>
          </div>
          <Field label="Tratamiento antiepiléptico y adherencia">
            <Inp value={f.ttoEpilepsia} onChange={set('ttoEpilepsia')} placeholder="p.ej. Levetiracetam 1000 mg c/12h — adherente" />
          </Field>
          <Field label="Observaciones clínicas adicionales">
            <Txt value={f.obsEpilepsia} onChange={set('obsEpilepsia')} rows={2}
              placeholder="p.ej. Epilepsia temporal mesial izquierda en video-EEG, síndrome de Lennox-Gastaut, crisis refractarias..." />
          </Field>
        </FormSection>
      )}

      {/* Sección 5 */}
      <FormSection num="5" title="Recomendaciones y conclusión" accent="green">
        <Field label="Estudios y derivaciones sugeridas">
          <Checks selected={f.estudios} onChange={set('estudios')} options={[
            { value: 'Prueba de aptitud perceptivo-motora — test de conducción en vía pública (derivar a autoridad de licencias)', label: 'Test de conducción en vía pública' },
            { value: 'Evaluación neurocognitiva / neuropsicológica abarcativa', label: 'Evaluación neuropsicológica' },
            { value: 'Evaluación en simulador de conducción', label: 'Simulador de conducción' },
            { value: 'Evaluación oftalmológica — campo visual formal', label: 'Oftalmología (campo visual)' },
            { value: 'Evaluación por terapia ocupacional orientada a conducción y adaptaciones vehiculares', label: 'Terapia Ocupacional' },
            { value: 'Stroke Driving Screening Assessment (SDSA)', label: 'SDSA (post-ACV)' },
            { value: 'Evaluación psiquiátrica', label: 'Psiquiatría' },
            { value: 'Neuroimagen (TC / RMN cerebral)', label: 'Neuroimagen' },
            { value: 'Sin derivaciones adicionales en este momento', label: '✓ Sin derivaciones adicionales' },
          ]} />
        </Field>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Field label="Conclusión clínica de aptitud">
            <Sel value={f.aptitud} onChange={set('aptitud')}>
              <option value="">— Seleccionar —</option>
              <option value="APTO — Sin déficits neurológicos que comprometan la conducción segura en el momento actual. Clase A-B. Vigencia 1 año.">APTO — clase A-B, 1 año</option>
              <option value="APTO — Sin déficits neurológicos que comprometan la conducción segura en el momento actual. Todas las clases. Vigencia 1 año.">APTO — todas las clases, 1 año</option>
              <option value="APTITUD CONDICIONAL — supeditada a resultados de evaluación/es complementaria/s indicada/s. Hasta la definición: no conducir.">CONDICIONAL — pendiente estudios</option>
              <option value="NO APTO TEMPORARIO — Dentro del período mínimo libre de episodios requerido por el protocolo. Reevaluación con fecha explícita.">NO APTO TEMPORARIO — período mínimo</option>
              <option value="NO APTO — Se identifican déficits neurológicos que contraindican la conducción segura en el momento actual.">NO APTO — déficits que contraindican</option>
            </Sel>
          </Field>
          <Field label="Vigencia sugerida del informe">
            <Sel value={f.vigencia} onChange={set('vigencia')}>
              <option value="3 meses">3 meses</option>
              <option value="6 meses">6 meses</option>
              <option value="1 año">1 año</option>
              <option value="sin conducción hasta nueva evaluación">Sin conducción hasta reevaluación</option>
            </Sel>
          </Field>
        </div>
        <Field label="Consejería brindada al paciente y familiar/informante (solicitar firma)">
          <Txt value={f.consejeria} onChange={set('consejeria')} rows={4} />
        </Field>
        <Field label="Médico que suscribe / Servicio / Institución">
          <Inp value={f.medico} onChange={set('medico')} placeholder="Dr/Dra. ___ · Neurología · Hospital ___" />
        </Field>
      </FormSection>

      {/* Preview */}
      {report && (
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Vista previa del informe</p>
          <pre className="text-xs text-gray-700 leading-relaxed whitespace-pre-wrap font-mono bg-gray-50 rounded-lg p-4 border border-gray-200 max-h-96 overflow-y-auto">
            {report}
          </pre>
        </div>
      )}

      {/* Acciones */}
      <div className="flex gap-3 flex-wrap pb-8">
        <button onClick={() => setReport(generar(f))}
          className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
          <FileText size={16} /> Generar informe
        </button>
        {report && (
          <button onClick={copiar}
            className="flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white rounded-lg text-sm font-semibold hover:bg-green-700 transition">
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? 'Copiado' : 'Copiar texto'}
          </button>
        )}
        <button onClick={() => { setF(INITIAL); setReport('') }}
          className="flex items-center gap-2 px-5 py-2.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-200 transition">
          <RefreshCw size={16} /> Limpiar formulario
        </button>
      </div>
    </div>
  )
}
