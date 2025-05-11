// src/pages/EditarPaciente.jsx
import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import usePacientes from '../hooks/usePacientes';
import FormularioPaciente from '../components/pacientes/FormularioPaciente';
import { Header } from '../components/layout/header';
import Footer from '../components/layout/Footer';

const EditarPaciente = () => {
  const [paciente, setPaciente] = useState(null);
  const [cargando, setCargando] = useState(true);
  const { obtenerPaciente } = usePacientes();
  const { id } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    const cargarPaciente = () => {
      const pacienteEncontrado = obtenerPaciente(id);
      if (pacienteEncontrado) {
        setPaciente(pacienteEncontrado);
      } else {
        navigate('/');
      }
      setCargando(false);
    };
    
    cargarPaciente();
  }, [id, navigate, obtenerPaciente]);
  
  if (cargando) return <p className="text-center">Cargando...</p>;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="mb-6">
          <Link to="/" className="text-blue-500 hover:underline">
            &larr; Volver
          </Link>
        </div>
        
        <FormularioPaciente pacienteEditar={paciente} />
      </main>
      
      <Footer />
    </div>
  );
};

export default EditarPaciente;