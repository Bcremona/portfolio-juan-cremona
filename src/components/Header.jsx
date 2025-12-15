import { Link } from 'react-router-dom';

function Header() {

  return (
    <header className="fixed drop-shadow-md bg-gray-400/30 backdrop-blur-[2px] lg:px-30 md:px-20 px-10 w-full top-0 z-50 py-3">
        <ul className="flex flex-row justify-between lg:text-2xl md:text-xl text-lg font-medium">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/proyectos">Proyectos</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
    </header>
  );
}

export default Header;