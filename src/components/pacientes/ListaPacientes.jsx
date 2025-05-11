// src/components/pacientes/ListaPacientes.jsx
import { useState } from 'react';
import usePacientes from '../../hooks/usePacientes';
import PacienteItem from './PacienteItem';
import FiltrosPaciente from './FiltrosPaciente';

const ListaPacientes = () => {
  const { pacientes } = usePacientes();
  const [filtro, setFiltro] = useState('');
  
  // Filtrar pacientes según el texto de búsqueda
  const pacientesFiltrados = pacientes.filter(paciente => 
    paciente.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
    paciente.email.toLowerCase().includes(filtro.toLowerCase())
  );
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Pacientes</h2>
        <FiltrosPaciente 
          filtro={filtro}
          setFiltro={setFiltro}
        />
      </div>
      
      {pacientesFiltrados.length === 0 ? (
        <p className="text-center text-gray-500">No hay pacientes registrados</p>
      ) : (
        <div className="grid gap-4">
          {pacientesFiltrados.map(paciente => (
            <PacienteItem 
              key={paciente.id}
              paciente={paciente}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ListaPacientes;