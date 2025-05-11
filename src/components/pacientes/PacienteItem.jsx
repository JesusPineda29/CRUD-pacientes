// src/components/pacientes/PacienteItem.jsx
import { Link } from 'react-router-dom';
import usePacientes from '../../hooks/usePacientes';

const PacienteItem = ({ paciente }) => {
  const { eliminarPaciente } = usePacientes();
  const { id, nombre, telefono, estado, proximaCita } = paciente;
  
  // Formato de fecha más amigable
  const formatearFecha = (fecha) => {
    if (!fecha) return '';
    const nuevaFecha = new Date(fecha);
    return new Intl.DateTimeFormat('es-ES', {
      dateStyle: 'long',
      timeStyle: 'short'
    }).format(nuevaFecha);
  };
  
  return (
    <div className="bg-white shadow-md rounded-lg p-5 flex flex-col md:flex-row justify-between items-center">
      <div>
        <h3 className="text-xl font-bold">{nombre}</h3>
        <p className="text-gray-700">Tel: {telefono}</p>
        <p className="text-gray-700">
          Próxima cita: {formatearFecha(proximaCita)}
        </p>
        
        <span className={`inline-block px-3 py-1 rounded-full text-sm ${
          estado === 'activo' ? 'bg-green-100 text-green-800' : 
          estado === 'atendido' ? 'bg-blue-100 text-blue-800' : 
          'bg-red-100 text-red-800'
        }`}>
          {estado}
        </span>
      </div>
      
      <div className="flex gap-2 mt-4 md:mt-0">
        <Link
          to={`/editar-paciente/${id}`}
          className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded"
        >
          Editar
        </Link>
        
        <button
          onClick={() => {
            if (confirm('¿Estás seguro de eliminar este paciente?')) {
              eliminarPaciente(id);
            }
          }}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default PacienteItem;