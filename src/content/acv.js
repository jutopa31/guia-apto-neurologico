export const tiemposMinimos = {
  headers: ['Tipo de evento', 'Clase A–B (particular)', 'Clase C–D–E–G (profesional)'],
  rows: [
    ['AIT sin secuelas', '4 semanas', '3 meses'],
    ['ACV isquémico sin secuelas funcionales', '4 semanas', '3 meses'],
    ['ACV isquémico con secuelas estables', '3 meses', '6 meses'],
    ['ACV / AIT recurrente', '6 meses desde último episodio', '12 meses'],
    ['ACV hemorrágico / HSA', '6 meses', '12 meses'],
  ],
}

export const dominios = [
  {
    id: 'motor',
    color: 'blue',
    titulo: 'Motor y coordinación',
    items: [
      'Fuerza MRC ≥ 4/5 en MMSS y MMII — necesaria para operar el volante, frenos y acelerador',
      'Destreza manual: capacidad de girar volante rápidamente',
      'Coordinación: sin dismetría que comprometa maniobras finas',
      'Sin temblor de intención relevante para la conducción',
    ],
    alerta: null,
  },
  {
    id: 'visual',
    color: 'orange',
    titulo: 'Visión y oculomotricidad',
    items: [
      'Agudeza visual ≥ 0,5 en el ojo de mayor visión (exigencia legal básica)',
      'Campo visual: sin hemianopsia homónima ni cuadrantanopsia superior',
      'Sin diplopía no corregida',
      'Motilidad ocular: sin oftalmoplejía que afecte visión binocular dinámica',
    ],
    alerta: 'La hemianopsia homónima es contraindicación absoluta para conducir — incluso con compensación subjetiva.',
  },
  {
    id: 'cognitivo',
    color: 'red',
    titulo: 'Cognición — dominios críticos',
    items: [
      'Atención sostenida y dividida: evaluar con TMT-A y TMT-B',
      'Funciones ejecutivas: planificación, flexibilidad cognitiva (TMT-B, fluencia)',
      'Velocidad de procesamiento: test del reloj (Freedman ≥ 5/7)',
      'Visuoespacial: capacidad de estimar distancias y orientarse en el espacio',
      'MoCA ≥ 24/30 como referencia orientativa (no es criterio excluyente aislado)',
    ],
    alerta: null,
  },
  {
    id: 'lenguaje',
    color: 'gray',
    titulo: 'Lenguaje y comunicación',
    items: [
      'Afasia global o de Wernicke: contraindicación — compromete comprensión de señales',
      'Afasia de Broca leve: evaluar caso a caso — puede conservar comprensión',
      'Disartria aislada sin déficit de comprensión: no contraindica por sí misma',
    ],
    alerta: null,
  },
  {
    id: 'negligencia',
    color: 'red',
    titulo: 'Negligencia / hemi-inatención',
    items: [
      'Exploración: line bisection, figure cancellation, descripción de escena',
      'Hemi-inatención izquierda leve: evaluar con test de manejo en simulador',
      'Negligencia visuoespacial franca: contraindicación absoluta para conducir',
    ],
    alerta: 'La negligencia es una de las secuelas post-ACV con mayor impacto en seguridad vial, frecuentemente subestimada en consulta.',
  },
]

export const contraindicacionesAbsolutas = [
  'Epilepsia post-ACV sin período libre de crisis (ver criterios por clase)',
  'Hemianopsia homónima o cuadrantanopsia superior sin adaptación compensatoria documentada',
  'Negligencia visuoespacial franca',
  'Déficit cognitivo moderado a severo (MoCA < 18, CDR ≥ 2)',
  'Afasia global o de comprensión severa',
  'Hemiparesia que impide operar volante y pedales de forma segura',
  'Fase aguda o subaguda del ACV (< 4 semanas)',
]

export const derivaciones = {
  headers: ['Derivación', 'Indicación', 'Quién solicita'],
  rows: [
    ['Test de manejo en vía pública', 'ACV con secuelas motoras o cognitivas leves, aptitud condicional', 'Neurólogo → DHAC/municipio'],
    ['Evaluación neuropsicológica', 'Déficit cognitivo post-ACV, dudas en MoCA o TMT', 'Neurólogo'],
    ['Simulador de conducción', 'Secuelas moderadas, evaluación objetiva pre-test', 'Neurólogo / T. Ocupacional'],
    ['Oftalmología (campo visual)', 'Sospecha de déficit de campo, ACV occipital', 'Neurólogo'],
    ['Terapia ocupacional', 'Secuelas motoras que puedan compensarse con adaptaciones', 'Neurólogo'],
    ['SDSA (Stroke Driving Screening)', 'Evaluación estructurada de aptitud para conducir', 'Neuropsicólogo / T. Ocupacional'],
  ],
}

export const aptitudes = {
  headers: ['Impresión clínica', 'Condición'],
  rows: [
    ['APTO — clase A–B', 'Sin déficits neurológicos que comprometan conducción · vigencia 1 año'],
    ['APTO — todas las clases', 'Igual condición, profesional certificado por neurólogo'],
    ['CONDICIONAL', 'Supeditado a test de manejo y/o neuropsicología · hasta entonces: no conducir'],
    ['NO APTO TEMPORARIO', 'Dentro de período mínimo post-evento · reevaluación programada'],
    ['NO APTO', 'Déficits que contraindican conducción segura en el momento actual'],
  ],
}
