import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-wide">Mi Clínica</h1>
        <nav>
          <ul className="flex gap-6 text-sm font-medium">
            <li>
              <Link 
                to="/" 
                className="hover:text-blue-200 transition-colors duration-200"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link 
                to="/nuevo-paciente" 
                className="hover:text-blue-200 transition-colors duration-200"
              >
                Nuevo Paciente
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
