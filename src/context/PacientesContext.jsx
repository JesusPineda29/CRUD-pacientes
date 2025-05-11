// src/context/PacientesContext.jsx
import { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';


const PacientesContext = createContext();


const PacientesProvider = ({ children }) => {
  // Estado inicial - cargar desde localStorage si existe, si no, empieza con un arreglo vacio
  const [pacientes, setPacientes] = useState(
    JSON.parse(localStorage.getItem('pacientes')) || []
  );
  

  // Guardar en localStorage cada vez que cambia el estado
  useEffect(() => {
    console.log('[DEBUG] Guardando en localStorage:', pacientes);
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);
  



  // Funciones CRUD
  const agregarPaciente = (paciente) => {
    // Añadir id y fecha de registro
    const nuevoPaciente = {
      ...paciente,
      id: uuidv4(),
      fechaRegistro: new Date().toISOString().split('T')[0]
    };
    setPacientes([...pacientes, nuevoPaciente]);
  };
  




  const obtenerPaciente = (id) => {
    return pacientes.find(paciente => paciente.id === id);
  };
  


  
  const actualizarPaciente = (pacienteActualizado) => {
    setPacientes(
      pacientes.map(paciente => 
        paciente.id === pacienteActualizado.id ? pacienteActualizado : paciente
      )
    );
  };
  



  const eliminarPaciente = (id) => {
    setPacientes(pacientes.filter(paciente => paciente.id !== id));
  };

  return (
    <PacientesContext.Provider value={{
      pacientes,
      agregarPaciente,
      obtenerPaciente,
      actualizarPaciente,
      eliminarPaciente
    }}>
      {children}
    </PacientesContext.Provider>
  );
};

export { PacientesProvider };
export default PacientesContext;