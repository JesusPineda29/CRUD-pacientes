import { Link } from 'react-router-dom';
import { Header } from '../components/layout/header';
import Footer from '../components/layout/Footer';
import FormularioPaciente from '../components/pacientes/FormularioPaciente';

export const NuevoPaciente = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="container mx-auto px-4 py-8 flex-grow">
      <h1 className="text-3xl font-bold">Nuevo Paciente</h1>
        <div className="mb-6">
          <Link to="/" className="text-blue-500 hover:underline">
            &larr; Volver
          </Link>
        </div>
        
        <FormularioPaciente />
      </main>
      
      <Footer />
    </div>
  )
}
