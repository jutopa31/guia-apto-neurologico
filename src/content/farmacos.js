// Fuente: Sección de fármacos — Protocolo SNA 2026 · Neurología Argentina DOI 10.1016/j.neuarg.2026.100732
// Complementado con EMA guidelines on driving and medicinal products; AAAM categorization

export const farmacosAltoRiesgo = [
  {
    grupo: 'Benzodiacepinas y análogos',
    ejemplos: 'Alprazolam, Clonazepam, Diazepam, Lorazepam, Bromazepam, Clobazam',
    efecto: 'Sedación, ↓ reflejos, ataxia, amnesia anterógrada',
    nota: 'Dosis-dependiente; semividas largas (diazepam, clonazepam) son más problemáticas. Tolerancia parcial con uso crónico. En adultos mayores: riesgo aumentado incluso a dosis bajas.',
  },
  {
    grupo: 'Hipnóticos Z',
    ejemplos: 'Zolpidem, Zopiclona, Eszopiclona',
    efecto: 'Efecto residual diurno, sedación, amnesia',
    nota: 'Zolpidem: no manejar hasta al menos 8 h post-dosis. Conducción nocturna y al amanecer: riesgo particularmente elevado. La FDA redujo la dosis aprobada en mujeres por este motivo.',
  },
  {
    grupo: 'Antidepresivos tricíclicos (ATC)',
    ejemplos: 'Amitriptilina, Clomipramina, Nortriptilina, Imipramina',
    efecto: 'Sedación intensa, visión borrosa (anticolinérgico), hipotensión ortostática',
    nota: 'Amitriptilina especialmente problemática. Efecto sedante puede persistir a las dosis bajas usadas para dolor crónico o insomnio.',
  },
  {
    grupo: 'Antipsicóticos',
    ejemplos: 'Quetiapina, Olanzapina, Clozapina, Risperidona, Haloperidol',
    efecto: 'Sedación (predomina en quetiapina y clozapina), hipotensión, efectos extrapiramidales',
    nota: 'Quetiapina y clozapina: mayor sedación. Haloperidol: menor sedación pero mayor riesgo extrapiramidal. Evaluar individualmente según respuesta al tratamiento.',
  },
  {
    grupo: 'Antihistamínicos H1 de 1.ª generación',
    ejemplos: 'Difenhidramina, Prometazina, Hidroxizina, Doxilamina, Clorfeniramina',
    efecto: 'Sedación severa incluso a dosis bajas, visión borrosa, confusión',
    nota: 'Contraindicados para conducción en muchos países europeos. Frecuentemente subestimados por ser fármacos de venta libre. El efecto sedante es comparable al de una BAC de 0.10 g/dL.',
  },
  {
    grupo: 'Opioides',
    ejemplos: 'Tramadol, Morfina, Codeína, Oxicodona, Fentanilo, Tapentadol',
    efecto: 'Sedación, confusión, deterioro cognitivo agudo, ↓ tiempo de reacción',
    nota: 'Mayor riesgo al inicio del tratamiento o al aumentar la dosis. Tramadol tiene menor potencia sedante que morfina, pero mayor en combinación con otros sedantes.',
  },
  {
    grupo: 'Antiepilépticos sedantes',
    ejemplos: 'Gabapentina, Pregabalina, Carbamazepina, Fenobarbital, Fenitoína, Valproato (dosis altas)',
    efecto: 'Mareos, ataxia, somnolencia, diplopía',
    nota: 'Gabapentina y pregabalina: alta potencia sedante dosis-dependiente; habitualmente subestimados. Carbamazepina: ataxia al inicio o con toxicidad. Levetiracetam y lamotrigina tienen perfil más favorable.',
  },
  {
    grupo: 'Agonistas dopaminérgicos',
    ejemplos: 'Pramipexol, Ropinirol, Rotigotina (parche), Cabergolina',
    efecto: 'Ataques de sueño súbitos (sleep attacks) sin pródromos',
    nota: '⚠ RIESGO ESPECÍFICO: episodios de sueño repentino e irresistible durante la conducción, sin aviso previo. Obligatoria la advertencia explícita al paciente. Evaluar individualmente antes de autorizar conducción.',
  },
  {
    grupo: 'Cannabis medicinal / THC',
    ejemplos: 'Cannabidiol + THC (Sativex), dronabinol, preparados con THC',
    efecto: 'Deterioro de atención, tiempo de reacción, coordinación y percepción espacial',
    nota: 'El CBD puro tiene menor impacto que los preparados con THC. El efecto persiste varias horas post-dosis. Productos con THC: generalmente contraindicados para conducción.',
  },
]

export const farmacosPrecaucion = [
  {
    grupo: 'ISRS / IRSN',
    ejemplos: 'Escitalopram, Sertralina, Paroxetina, Venlafaxina, Duloxetina',
    nota: 'Precaución especialmente en las primeras 2–4 semanas del tratamiento o al aumentar la dosis. Paroxetina: mayor efecto sedante del grupo por su perfil anticolinérgico.',
  },
  {
    grupo: 'Topiramato',
    ejemplos: 'Topiramato (antiepiléptico / migraña)',
    nota: 'Deterioro de memoria, enlentecimiento cognitivo ("brain fog"), dificultad para encontrar palabras. El efecto es dosis-dependiente y puede no ser percibido por el paciente.',
  },
  {
    grupo: 'Relajantes musculares',
    ejemplos: 'Carisoprodol, Ciclobenzaprina, Metocarbamol',
    nota: 'Sedación variable según la dosis e individuo. Carisoprodol tiene metabolito activo (meprobamato) con efecto sedante prolongado.',
  },
  {
    grupo: 'Anticolinérgicos urinarios',
    ejemplos: 'Oxibutinina, Solifenacina, Tolterodina, Fesoterodina',
    nota: 'Visión borrosa, somnolencia. Oxibutinina: mayor penetración en SNC que los congéneres más modernos.',
  },
  {
    grupo: 'Antieméticos',
    ejemplos: 'Metoclopramida, Domperidona, Prometazina',
    nota: 'Metoclopramida: somnolencia, reacciones extrapiramidales. Prometazina: sedación severa — ver "alto riesgo".',
  },
  {
    grupo: 'Triptanes / antimigrañosos',
    ejemplos: 'Sumatriptán, Zolmitriptán, Rizatriptán',
    nota: 'Mareos, astenia transitoria post-dosis. Evaluar estado post-crisis (la propia migraña deteriora la conducción).',
  },
  {
    grupo: 'Antihipertensivos',
    ejemplos: 'Beta-bloqueantes (especialmente propranolol), alfa-bloqueantes, doxazosina',
    nota: 'Hipotensión ortostática especialmente al inicio del tratamiento o con ajuste de dosis. Propranolol: mayor fatiga y menor alertness que beta-1 selectivos.',
  },
  {
    grupo: 'Antidiabéticos hipoglucemiantes',
    ejemplos: 'Insulina, Sulfonilureas (glibenclamida, glimepirida)',
    nota: '⚠ Hipoglucemia → deterioro cognitivo agudo con impacto inmediato en la conducción. Riesgo menor con iSGLT2, GLP-1 y metformina. Instruir al paciente a medir glucemia antes de conducir.',
  },
  {
    grupo: 'Corticoides sistémicos (dosis altas)',
    ejemplos: 'Prednisona ≥ 40 mg/d, metilprednisolona',
    nota: 'Mareos, alteraciones del sueño, cambios del estado de ánimo. Evaluar individualmente según dosis y duración del tratamiento.',
  },
]

export const combinacionesPeligrosas = [
  'Cualquier sedante + alcohol — potenciación sinérgica del deterioro',
  'Benzodiacepinas + opioides — riesgo de depresión respiratoria y accidente; combinación de alto riesgo documentada',
  'Benzodiacepinas + hipnóticos Z — efecto sedante aditivo',
  'Polifarmacia sedante — 3 o más fármacos con efecto SNC simultáneo',
  'Antihistamínico H1 de 1.ª gen. + cualquier sedante — sedación severa',
  'Inicio o cambio de dosis reciente de cualquier fármaco con efecto SNC',
  'Antidiabéticos hipoglucemiantes en paciente con hipoglucemias no percibidas',
]

export const principiosClinicos = [
  'La prescripción de un fármaco no implica inaptitud automática — el impacto real debe evaluarse individualmente.',
  'Considerar siempre: dosis, semivida, tolerancia individual, edad, función renal/hepática y polifarmacia.',
  'Informar explícitamente al paciente cuando se indica no conducir o conducir con precaución, y registrar en la historia clínica.',
  'El período de mayor riesgo es el inicio del tratamiento, los aumentos de dosis y los cambios de formulación.',
  'En agonistas dopaminérgicos (pramipexol, ropinirol): advertir sobre ataques de sueño súbitos — riesgo específico de esta clase.',
  'Evaluar el impacto real sobre el desempeño antes de autorizar conducción en pacientes con epilepsia en tratamiento (distinguir entre el efecto del fármaco y el efecto de la epilepsia no controlada).',
  'Cuando exista duda, diferir la autorización hasta estabilización clínica o solicitar evaluación neuropsicológica.',
]
