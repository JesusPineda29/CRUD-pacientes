import { Link } from 'react-router-dom';
import { Header } from '../components/layout/header';
import Footer from '../components/layout/Footer';
import ListaPacientes from '../components/pacientes/ListaPacientes';

export const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Administrador de Pacientes</h1>
          {/* <Link 
            to="/nuevo-paciente"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Nuevo Paciente
          </Link> */}
        </div>
        
        <ListaPacientes />
      </main>
      
      <Footer />
    </div>
  )
}
