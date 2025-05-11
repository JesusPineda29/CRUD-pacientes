// src/components/pacientes/FiltrosPaciente.jsx

const FiltrosPaciente = ({ filtro, setFiltro }) => {
    return (
      <div className="relative">
        <input
          type="text"
          placeholder="Buscar paciente..."
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    );
  };
  
  export default FiltrosPaciente;