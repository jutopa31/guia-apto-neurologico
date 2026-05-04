// Fuente: Tabla 7 — Alet MJ et al. Protocolos de apto neurológico para la conducción vehicular.
// Neurología Argentina 2026. DOI 10.1016/j.neuarg.2026.100732

export const tablaAcv = {
  headers: ['Diagnóstico', 'Clases A–B', 'Clases C–D–E–G', 'Libre de episodios', 'Vigencia', 'Estudios'],
  rows: [
    [
      'ACV isquémico / AIT',
      'Apto si no posee inaptitud por secuelas de áreas funcionales',
      'Apto si no posee inaptitud por secuelas de áreas funcionales',
      '≥ 6 meses sin ACV ni AIT',
      '1 año (primeros 5 años post-evento)',
      'Test de manejo (salvo sin secuelas documentadas)',
    ],
    [
      'ACV hemorrágico / HIP / HSA',
      'Apto si no posee inaptitud por secuelas de áreas funcionales',
      'Apto si no posee inaptitud por secuelas de áreas funcionales',
      '≥ 12 meses sin episodios',
      '1 año (primeros 5 años post-evento)',
      'Test de manejo (salvo sin secuelas documentadas)',
    ],
  ],
}

export const notasTablaAcv = [
  'Certificado emitido por neurólogo tratante en todos los casos.',
  'Luego de los primeros 5 años post-evento: se aplica el tiempo de renovación habitual de la licencia.',
  'La aptitud queda supeditada a la ausencia de déficits en áreas funcionales consignadas abajo.',
  'El AIT se encuadra bajo los mismos criterios que el ACV isquémico.',
]

export const areasFuncionales = [
  {
    num: '1',
    area: 'Compromiso motriz',
    detalle: 'Evaluar fuerza (escala MRC) en MMSS y MMII, tono, destreza manual y reflejos. Registrar asimetrías. Clonus aquíleo persistente puede ser limitación funcional relevante.',
  },
  {
    num: '2',
    area: 'Alteración de la coordinación',
    detalle: 'Ataxia, dismetría o temblor de intención que interfiera con el control del vehículo. Pruebas: dedo-nariz, talón-rodilla.',
  },
  {
    num: '3',
    area: 'Alteración sensorial — visión y audición',
    detalle: 'Evaluar motilidad ocular y palpebral, campo visual por confrontación, visión binocular. Déficit campimétricamente relevante (hemianopsia, cuadrantanopsia): derivar a oftalmología.',
  },
  {
    num: '4',
    area: 'Alteración del lenguaje',
    detalle: 'Afasia que comprometa comprensión de señales de tránsito. Afasia de Wernicke o global: contraindica por compromiso de comprensión. Broca leve: evaluar caso a caso.',
  },
  {
    num: '5',
    area: 'Compromiso cognitivo',
    detalle: 'Atención, funciones ejecutivas, habilidades visuoperceptivas y visuoespaciales. Ante déficit o duda: derivar a evaluación neuropsicológica completa.',
  },
  {
    num: '6',
    area: 'Epilepsia post-ACV',
    detalle: 'Aplicar criterios específicos de epilepsia y conducción — Tabla 5 del protocolo SNA 2026.',
  },
  {
    num: '7',
    area: 'Dolor crónico',
    detalle: 'Dolor con impacto funcional que limite la atención o el control del vehículo. Considerar medicación analgésica con potencial sedante (opioides, anticonvulsivantes).',
  },
]

export const criterioAptitud = 'Más allá de los períodos mínimos, la decisión final depende de que no existan déficits significativos — motores, sensitivos, sensoriales/visuales, cognitivos/ejecutivos o de coordinación — que interfieran con el control seguro del vehículo. Cuando existe duda, puede complementarse con test de manejo y evaluación funcional específica según disponibilidad local. (Fuente: Protocolo SNA 2026)'

export const derivaciones = {
  headers: ['Derivación', 'Indicación', 'Quién solicita'],
  rows: [
    ['Test de manejo en vía pública', 'ACV con secuelas, aptitud incierta, dudas clínicas', 'Neurólogo → autoridad de licencias (DHAC/municipio)'],
    ['Evaluación neuropsicológica', 'Déficit cognitivo post-ACV, MoCA o TMT alterados', 'Neurólogo'],
    ['Oftalmología (campo visual)', 'Sospecha de hemianopsia, ACV occipital', 'Neurólogo'],
    ['Simulador de conducción', 'Secuelas moderadas, alternativa cuando test en vía pública no está disponible', 'Neurólogo / T. Ocupacional'],
    ['SDSA (Stroke Driving Screening Assessment)', 'Cribado validado post-ACV: Dot Cancellation, Square Matrices, Compass, Road Sign Recognition', 'Neuropsicólogo / T. Ocupacional'],
    ['Terapia ocupacional', 'Evaluación de adaptaciones vehiculares ante déficit motor parcial', 'Neurólogo'],
  ],
}

export const aptitudes = {
  headers: ['Conclusión', 'Condición'],
  rows: [
    ['APTO', 'Sin déficits en áreas funcionales · libre de episodios ≥ 6 m (isquémico) / ≥ 12 m (hemorrágico) · vigencia 1 año'],
    ['APTITUD CONDICIONAL', 'Supeditada a test de manejo y/o neuropsicología · hasta definición: no conducir'],
    ['NO APTO TEMPORARIO', 'Dentro del período mínimo libre de episodios · reevaluación con fecha explícita'],
    ['NO APTO', 'Déficits en áreas funcionales que contraindican conducción en el momento actual'],
  ],
}
