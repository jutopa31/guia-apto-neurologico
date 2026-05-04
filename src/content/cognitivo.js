// Fuente: Tablas 10 y 11, Figuras 3 y 4 — Alet MJ et al. Protocolos de apto neurológico para la conducción vehicular.
// Neurología Argentina 2026. DOI 10.1016/j.neuarg.2026.100732

// Tabla 10 — Recomendaciones para pacientes con trastornos cognitivos y conducción
export const tablaCognitivo = {
  headers: ['Diagnóstico', 'Descripción adicional', 'Clases A–B', 'Clases C–D–E–G', 'Estudios complementarios'],
  rows: [
    ['Deterioro cognitivo leve (TCMn)', '—', 'Apto — 1 año', 'No apto', 'ENPS + Test de manejo'],
    ['Demencia leve', 'Alzheimer, vascular y otras etiologías', 'Apto — 1 año', 'No apto', 'ENPS + Test de manejo'],
    ['Demencia moderada y severa', 'Alzheimer, vascular y otras etiologías', 'No apto', 'No apto', '—'],
    ['Demencia frontotemporal', 'Variantes conductual y semántica', 'No apto', 'No apto', '—'],
    ['Demencia frontotemporal', 'Solo variante de lenguaje, etapa leve', 'Apto — 1 año', 'No apto', 'ENPS + Test de manejo'],
    ['Delirium (síndrome confusional)', 'Ya resuelto', 'Apto', '—', '— (6 meses con síntoma resuelto)'],
    ['Delirium (síndrome confusional)', 'No resuelto o recidivante', 'No apto', 'No apto', '—'],
    ['Amnesia global transitoria', 'No epiléptica', 'Apto', '—', '— (3 meses mínimos)'],
    ['Disfunción cognitiva por depresión (seudodemencia)', 'Ya resuelta', 'Apto', 'No apto', 'ENPS (+ 6 meses resuelto)'],
  ],
}

export const notasTabla = [
  'Certificado emitido por neurólogo y/o psiquiatra tratante en todos los casos.',
  'El tiempo mínimo de tratamiento generalmente no es determinante para DCL y demencia.',
  'La aptitud "Apto un año" para demencia leve no implica aptitud automática — requiere ENPS + test de manejo.',
]

// Algoritmo escalonado ENPS — Figura 3
// MMSE → FSV → Test del Reloj (secuencial)
export const algoritmosEnps = [
  {
    paso: 1,
    test: 'MMSE (Mini-Mental State Examination)',
    corteOk: '≥ 24',
    corteAlerta: '≤ 23',
    si: 'Continuar con FSV',
    no: 'Evaluación neuropsicológica abarcativa',
    nota: 'Versión en español validada para Argentina.',
  },
  {
    paso: 2,
    test: 'Fluencia verbal semántica (FSV)',
    corteOk: '≥ 14 palabras',
    corteAlerta: '≤ 13',
    si: 'Continuar con Test del Reloj',
    no: 'Evaluación neuropsicológica abarcativa',
    nota: 'Ejemplo: animales en 1 minuto.',
  },
  {
    paso: 3,
    test: 'Test del reloj (Freedman)',
    corteOk: '≥ 5 / 7',
    corteAlerta: '< 5',
    si: 'Continúa manejando',
    no: 'Evaluación neuropsicológica abarcativa',
    nota: 'Versión de 7 puntos de Freedman et al., 1994.',
  },
]

export const enpsCuando = [
  'Mayores de 50 años en cualquier trámite de licencia.',
  'Sospecha durante la evaluación clínica (independientemente de la edad).',
  'Cuestionario con riesgo alto: medicación, antecedentes, conductas de riesgo al manejar y/o siniestros previos.',
]

// Algoritmo de decisión para demencia — Figura 4
export const algoritmoDemencia = [
  { paso: '1', texto: 'CDR > 1 o MMSE < 24 → Discontinuar conducción' },
  { paso: '2', texto: 'Si CDR ≤ 1 y MMSE ≥ 24 → Interrogatorio al familiar: ¿riesgos, siniestros y/o conductas peligrosas?' },
  { paso: '3', texto: 'Si refiere riesgos → Discontinuar conducción' },
  { paso: '4', texto: 'Si no refiere riesgos → Evaluación cognitiva dirigida: ¿déficits atencionales, disejecutivos o visuoconstructivos?' },
  { paso: '5', texto: 'Si hay déficits → Test de conducción en la calle: si falla → Discontinuar / si normal → Continúa (control semestral)' },
  { paso: '6', texto: 'Si no hay déficits → Continúa manejando con control semestral' },
]

// Tabla 11 — Señales de alarma (Signos de alarma y variables que aumentan el riesgo)
export const alarmasVolante = [
  { dominio: 'Información de terceros', label: 'Familiar o cuidador refiere cambios en la conducción o pérdida de habilidades', grave: true },
  { dominio: 'Antecedentes viales', label: 'Historia de multas o accidentes de tráfico en los últimos meses/años', grave: false },
  { dominio: 'Orientación / navegación', label: 'Desorientación en lugares o rutas familiares, confusión en rutas de un solo sentido, aumento de dudas en cruces', grave: true },
  { dominio: 'Conducta y regulación emocional', label: 'Conductas impulsivas, agresividad o frustración al conducir', grave: true },
  { dominio: 'Percepción visuoespacial', label: 'Problemas para calcular distancias, mantenerse en el carril o al estacionar — choques con cordones u objetos', grave: true },
  { dominio: 'Estimación de velocidad', label: 'Conducir demasiado lento o con exceso de velocidad', grave: false },
  { dominio: 'Cumplimiento de señales', label: 'No atender o no respetar señales de tránsito o semáforos (p. ej., pasar en rojo, no detenerse en "PARE")', grave: true },
  { dominio: 'Tiempo de reacción', label: 'Reacciones tardías, toma de decisiones lenta o equivocada durante la conducción', grave: true },
  { dominio: 'Control del vehículo', label: 'Control deficiente, errores operativos frecuentes, inseguridad creciente en maniobras habituales', grave: true },
  { dominio: 'Necesidad de acompañante', label: 'El copiloto debe involucrarse activamente: señala peligros o cambios de semáforo', grave: true },
  { dominio: 'Percepción de inseguridad', label: 'El propio conductor o los pasajeros ya no se sienten seguros en el automóvil', grave: true },
  { dominio: 'Evitación situacional', label: 'Conductas de evitación: evita conducir de noche o con condiciones climáticas adversas', grave: false },
  { dominio: 'Factores agravantes', label: 'Comorbilidades significativas, disminución de agudeza visual, tratamiento farmacológico con efecto sobre SNC', grave: false },
]

export const abordajeFamiliar = [
  'Iniciar la conversación antes de que el cese sea urgente — en etapas tempranas del deterioro, cuando el paciente conserva mayor capacidad de participar en la decisión.',
  'Hablar primero con el paciente respetando su autonomía; luego involucrar al familiar con consentimiento.',
  'Explicar que el límite no es una sanción sino una medida de seguridad propia y de terceros.',
  'Estrategias de transición: limitación progresiva (no nocturno, no ruta), reorganización familiar, transporte adaptado, red de apoyo comunitario.',
  'Promover activamente alternativas de movilidad para evitar el aislamiento social — efecto adverso frecuente del cese de la conducción.',
  'Documentar la consejería en la HC con firma del paciente y familiar/informante.',
  'Si el paciente se niega a dejar de conducir pese a criterios de inaptitud: consultar con el servicio de ética y/o legal; la normativa puede contemplar obligación de notificación a la autoridad competente.',
]
