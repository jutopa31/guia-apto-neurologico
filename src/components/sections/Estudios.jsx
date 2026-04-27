import SectionTitle from '../ui/SectionTitle'
import Alert from '../ui/Alert'
import Badge from '../ui/Badge'

const rows = [
  { patologia: 'Epilepsia', estudios: 'EEG (en casos seleccionados), neuroimagen si epilepsia estructural', quien: 'Neurólogo', obs: 'Documentar tipo de crisis, fecha última crisis, FAE y adherencia' },
  { patologia: 'ACV / AIT isquémico', estudios: 'Test de manejo (salvo sin secuelas documentadas), neuroimagen existente', quien: 'Neurólogo', obs: 'Libre de episodios en últimos 6 meses' },
  { patologia: 'ACV hemorrágico', estudios: 'Test de manejo (salvo sin secuelas), neuroimagen existente', quien: 'Neurólogo', obs: 'Libre de episodios en últimos 12 meses' },
  { patologia: 'Parkinson H&Y I-II', estudios: 'UPDRS III en ON (si <27 evita test de manejo), test de manejo si dudas', quien: 'Neurólogo', obs: 'UPDRS III <27 en ON = no requiere test de manejo' },
  { patologia: 'Parkinson H&Y III-IV', estudios: 'UPDRS III en ON', quien: 'Neurólogo', obs: <Badge variant="no-apto">NO APTO</Badge> },
  { patologia: 'Post-DBS / cirugía Parkinson', estudios: 'Test de manejo post cirugía', quien: 'Neurólogo', obs: 'No apto hasta al menos 6 meses postcirugía' },
  { patologia: 'EM (EDSS 0-3)', estudios: 'Certificado neurólogo con EDSS, fecha último brote, déficits residuales', quien: 'Neurólogo', obs: 'Estabilidad clínica 3 meses sin brotes' },
  { patologia: 'EM (EDSS 3.5-5.5)', estudios: 'Test de manejo obligatorio', quien: 'Neurólogo', obs: 'Apto con restricciones A-B / No apto C-D-E-G' },
  { patologia: 'Deterioro cognitivo leve / Demencia leve', estudios: 'ENPS completa (MMSE + fluencia semántica + test del reloj), test de manejo', quien: 'Neurólogo / Psiquiatra', obs: 'Apto 1 año A-B con supervisión; No apto C-D-E-G' },
  { patologia: 'Demencia moderada/severa', estudios: 'ENPS', quien: 'Neurólogo / Psiquiatra', obs: <><Badge variant="no-apto">NO APTO</Badge> todas las clases</> },
  { patologia: 'SAHOS tratado', estudios: 'Polisomnografía nocturna + oximetría + CPAP (adherencia y respuesta)', quien: 'Médico del sueño / Neurólogo', obs: 'Respuesta adecuada al CPAP obligatoria' },
  { patologia: 'Narcolepsia en tratamiento', estudios: 'MSLT o MWT (capacidad de mantenerse despierto), polisomnografía', quien: 'Neurólogo / Médico del sueño', obs: 'No apto C-D-E-G' },
  { patologia: 'Enf. neuromuscular', estudios: 'Escala MRC, Lawton-Brody, Katz; prueba funcional práctica in vivo', quien: 'Neurólogo', obs: 'Fuerza ≥MRC 4 en MMSS/MMII; evaluar adaptaciones' },
]

export default function Estudios() {
  return (
    <div id="estudios">
      <SectionTitle num="2">Estudios Complementarios según Patología</SectionTitle>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Patología</th>
              <th>Estudios requeridos / recomendados</th>
              <th>Quién certifica</th>
              <th>Observaciones</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.patologia}>
                <td><strong>{r.patologia}</strong></td>
                <td>{r.estudios}</td>
                <td>{r.quien}</td>
                <td>{r.obs}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Alert variant="yellow" title="Test de manejo — dónde derivar" className="mt-4">
        Indicar al paciente presentarse ante la autoridad de licencias de su jurisdicción (DHAC en CABA, municipio correspondiente fuera). El test en vía pública lo evalúa el ente emisor. En algunos centros existen simuladores de conducción. Documentar la derivación en la HC.
      </Alert>
    </div>
  )
}
