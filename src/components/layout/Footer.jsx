const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} ClínicaApp - Administrador de Pacientes
        </p>
        <p className="text-gray-300 text-sm mt-2">
          Desarrollado por <span className="font-semibold">Jesús Pineda</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
