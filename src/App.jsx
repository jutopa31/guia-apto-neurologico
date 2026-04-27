import { useState } from 'react'
import Header from './components/layout/Header'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import Evaluacion from './components/sections/Evaluacion'
import Estudios from './components/sections/Estudios'
import Patologias from './components/sections/Patologias'
import Farmacos from './components/sections/Farmacos'
import Certificado from './components/sections/Certificado'
import Banderas from './components/sections/Banderas'
import ModalACV from './components/modals/ModalACV'
import ModalCognitivo from './components/modals/ModalCognitivo'

export default function App() {
  const [modalACV, setModalACV] = useState(false)
  const [modalCognitivo, setModalCognitivo] = useState(false)

  return (
    <>
      <Header />
      <Nav />
      <main className="max-w-[1100px] mx-auto px-4 md:px-6 pb-16 pt-8">
        <Evaluacion />
        <Estudios />
        <Patologias
          onOpenACV={() => setModalACV(true)}
          onOpenCognitivo={() => setModalCognitivo(true)}
        />
        <Farmacos />
        <Certificado />
        <Banderas />
      </main>
      <Footer />
      <ModalACV open={modalACV} onClose={() => setModalACV(false)} />
      <ModalCognitivo open={modalCognitivo} onClose={() => setModalCognitivo(false)} />
    </>
  )
}
