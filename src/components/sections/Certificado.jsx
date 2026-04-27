import SectionTitle from '../ui/SectionTitle'
import Alert from '../ui/Alert'
import Card, { CardTitle } from '../ui/Card'

const campos = [
  {
    label: '1. Datos del paciente y motivo',
    text: 'Nombre, DNI, fecha de nacimiento, fecha de consulta. Motivo: evaluación de aptitud neurológica para obtención/renovación de Licencia Nacional de Conducir clase [A-B / C-D-E-G].',
  },
  {
    label: '2. Antecedentes neurológicos',
    text: 'Diagnósticos neurológicos previos y actuales (activos/resueltos). Historia de crisis/ACV/proceso neurodegenerativo. Medicación neurológica actual con dosis y fecha de inicio. Hábitos tóxicos relevantes.',
  },
  {
    label: '3. Situación funcional actual',
    text: 'ABVD / AIVD: independiente / con asistencia parcial / dependiente. Actividades relevantes para conducción: manejo habitual, frecuencia, tipo de recorridos. Eventos centinela en los últimos [X] meses.',
  },
  {
    label: '4. Examen neurológico por dominios',
    text: 'Cognición: MoCA [X]/30 · MMSE [X]/30 · TMT-B: [X] seg · Test del reloj: [X]/7. Visión/oculomotricidad: [normal / alterada — especificar]. Motor: fuerza MRC MMSS [X]/5, MMII [X]/5 · tono · reflejos. Extrapiramidal: [normal / bradicinesia / temblor / rigidez — H&Y: / UPDRS III en ON: ]. Sensibilidad: [normal / alterada]. Coordinación: [normal / dismetría / ataxia]. Marcha: [normal / alterada — especificar].',
  },
  {
    label: '5. Diagnóstico y disfunciones relevantes para conducción',
    text: 'Diagnóstico principal: [...]. Disfunciones con impacto para la conducción: [ninguna / motriz / sensitiva / visual / cognitiva / ejecutiva / coordinación / somnolencia — detallar]. Tiempo libre de crisis / episodios desde: [fecha].',
  },
  {
    label: '6. Recomendaciones',
    text: 'Se sugiere / no se sugiere aptitud para conducir clase [A-B / C-D-E-G] por período de [X meses / 1 año]. Se recomienda: test de manejo · evaluación neuropsicológica completa · evaluación de conducción en simulador · reevaluación en [fecha]. No se detectan déficits funcionales que contraindiquen la conducción / Se detectan los siguientes déficits que contraindican la conducción: [...].',
  },
  {
    label: '7. Consejería documentada (firma del paciente)',
    text: 'Se informó al paciente sobre: restricciones de conducción · efectos adversos de la medicación · conductas de seguridad · obligación de informar el diagnóstico al tramitar la licencia · implicancias legales y de seguro en caso de conducir sin habilitación. El paciente declara haber comprendido la información brindada. Firma: ___________',
  },
]

export default function Certificado() {
  return (
    <div id="certificado">
      <SectionTitle num="5">Modelo de Certificado / Informe Neurológico</SectionTitle>

      <Alert variant="green" title="Principio de documentación">
        El informe apoya la decisión del organismo competente. Describir diagnóstico e impacto funcional — NO simplemente "apto" o "no apto". La determinación final es una instancia médico-legal del circuito administrativo.
      </Alert>

      <Card>
        <CardTitle icon="📄">Estructura del informe</CardTitle>
        {campos.map(c => (
          <div className="informe-field" key={c.label}>
            <div className="informe-label">{c.label}</div>
            <div className="informe-text">{c.text}</div>
          </div>
        ))}
      </Card>
    </div>
  )
}
