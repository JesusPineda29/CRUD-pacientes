

import { useState, useEffect } from 'react';
import usePacientes from '../../hooks/usePacientes';

const FormularioPaciente = ({ pacienteEditar }) => {

  const { agregarPaciente, actualizarPaciente } = usePacientes();
  
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    sintomas: '',
    proximaCita: '',
    estado: 'activo'
  });
  
  const [error, setError] = useState('');
  
  // Si hay un paciente para editar, llenar el formulario
  useEffect(() => {
    if (pacienteEditar) {
      setFormData(pacienteEditar);
    }
  }, [pacienteEditar]);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación básica
    if (Object.values(formData).includes('')) {
      setError('Todos los campos son obligatorios');
      return;
    }
    
    // Email válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('El email no es válido');
      return;
    }
    
    setError('');
    
    // Actualizar o agregar según corresponda
    if (pacienteEditar) {
      actualizarPaciente(formData);
    } else {
      agregarPaciente(formData);
      // Limpiar formulario
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        sintomas: '',
        proximaCita: '',
        estado: 'activo'
      });
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">
        {pacienteEditar ? 'Editar Paciente' : 'Agregar Paciente'}
      </h2>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
          Nombre
        </label>
        <input 
          type="text" 
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
          email
        </label>
        <input 
          type="text" 
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
          Telefono
        </label>
        <input 
          type="text" 
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
          sintomas
        </label>
        <input 
          type="text" 
          id="sintomas"
          name="sintomas"
          value={formData.sintomas}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
          ProximaCita
        </label>
        <input 
          type="date" 
          id="proximaCita"
          name="proximaCita"
          value={formData.proximaCita}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      
      {/* Repite el patrón para email, teléfono, etc... */}
      
      <div className="flex items-center justify-between">
        <button 
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {pacienteEditar ? 'Guardar Cambios' : 'Agregar Paciente'}
        </button>
      </div>
    </form>
  );
};

export default FormularioPaciente;