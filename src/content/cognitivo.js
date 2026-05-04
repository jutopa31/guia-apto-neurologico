export const cdrConduccion = {
  headers: ['CDR', 'Diagnóstico', 'Conducción clase A–B', 'Conducción C–D–E–G', 'Requisito adicional'],
  rows: [
    ['CDR 0', 'Sin deterioro', '✓ Apto', '✓ Apto', '—'],
    ['CDR 0.5', 'DCL / cuestionable', 'Apto con ENPS normal', 'Condicional', 'ENPS + test de manejo si duda'],
    ['CDR 1', 'Demencia leve', 'Condicional — test de manejo', 'No apto', 'Neuropsicología + test manejo'],
    ['CDR 2', 'Demencia moderada', 'No apto', 'No apto', '—'],
    ['CDR 3', 'Demencia severa', 'No apto', 'No apto', '—'],
  ],
}

export const enpsBateria = [
  {
    nombre: 'MMSE',
    rango: '0–30',
    corte: '≥ 24',
    uso: 'Rastreo global. Sensibilidad limitada para déficits leves. Complementar con MoCA.',
    color: 'blue',
  },
  {
    nombre: 'MoCA',
    rango: '0–30',
    corte: '≥ 26 (ajustar por educación)',
    uso: 'Mejor sensibilidad que MMSE para DCL. Evalúa atención, ejecutivo, visuoespacial.',
    color: 'blue',
  },
  {
    nombre: 'Fluencia verbal semántica',
    rango: 'Animales/min',
    corte: '≥ 12 palabras',
    uso: 'Marcador de función ejecutiva y velocidad de procesamiento.',
    color: 'green',
  },
  {
    nombre: 'Test del reloj (Freedman)',
    rango: '0–7',
    corte: '≥ 5',
    uso: 'Visuoespacial y funciones ejecutivas. Alta correlación con aptitud para conducir.',
    color: 'green',
  },
  {
    nombre: 'TMT-A',
    rango: 'Segundos',
    corte: '< 90 seg',
    uso: 'Velocidad de procesamiento y atención sostenida.',
    color: 'orange',
  },
  {
    nombre: 'TMT-B',
    rango: 'Segundos',
    corte: '< 180 seg',
    uso: 'Función ejecutiva y atención dividida — el más relevante para conducción.',
    color: 'red',
  },
]

export const alarmasVolante = [
  { label: 'Familiar o cuidador refiere cambios en la forma de conducir', grave: false },
  { label: 'Desorientación en rutas o barrios conocidos', grave: true },
  { label: 'No respeta señales de tránsito o semáforos', grave: true },
  { label: 'Dificultades para estimar distancias o mantener el carril', grave: true },
  { label: 'Velocidad inadecuada al contexto (muy lento o muy rápido)', grave: false },
  { label: 'El copiloto debe intervenir activamente durante la conducción', grave: true },
  { label: 'Antecedentes de multas, raspones o accidentes recientes', grave: false },
  { label: 'Autolimitación progresiva (evita autopistas, noche, lluvia)', grave: false },
  { label: 'El propio paciente o acompañante ya no se sienten seguros', grave: true },
]

export const diagnosticosEspeciales = {
  headers: ['Diagnóstico', 'Aptitud clase A–B', 'Aptitud C–D–E–G', 'Observación'],
  rows: [
    ['DCL amnésico aislado, ENPS normal', 'Apto — reevaluación anual', 'Condicional', 'Informar al paciente sobre obligación de notificación'],
    ['Demencia leve tipo Alzheimer', 'Condicional — test de manejo', 'No apto', 'CDR 1 con funciones ejecutivas conservadas: evaluar'],
    ['Demencia leve vascular', 'Condicional — mayor riesgo por fluctuaciones', 'No apto', 'Explorar coexistencia de déficit motor o visual'],
    ['DFT — variante conductual', 'No apto (impulsividad, desinhibición)', 'No apto', 'Riesgo de conductas de riesgo al volante'],
    ['Delirium — ya resuelto', 'Apto — evaluar causa subyacente', 'Condicional', 'Confirmar resolución cognitiva completa'],
    ['Delirium no resuelto', 'No apto', 'No apto', 'Reevaluar tras estabilización'],
    ['AGT (amnesia global transitoria)', 'Apto tras período libre de 6 meses', 'Condicional', 'Descartar causa epiléptica subyacente'],
  ],
}

export const abordajeFamiliar = [
  'Hablar con el paciente primero — respetar su autonomía y prepararlo para la conversación',
  'Luego involucrar al familiar/cuidador — dar contexto clínico sin revelar información confidencial sin consentimiento',
  'Explicar que el límite no es una sanción sino una medida de seguridad (del paciente y de terceros)',
  'Ofrecer alternativas de movilidad: remís, transporte adaptado, familiar conductor',
  'Recordar la obligación del paciente de informar el diagnóstico al tramitar o renovar la licencia (según normativa)',
  'Documentar la consejería en la HC con firma del paciente y familiar',
  'Si el paciente se niega a dejar de conducir pese a criterios de inaptitud: consultar con servicio de ética / legal',
]
