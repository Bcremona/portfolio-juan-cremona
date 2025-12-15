function Footer() {
  return (
    <footer className="text-white p-6">
      <ul className="flex flex-col md:flex-row justify-between items-center lg:text-lg md:text-md text-sm gap-y-4">
        <li>© 2024 Juan Martin Cremona. Todos los derechos reservados.</li>
        <li>Instagram</li> {/* PONER LOS LOGOS!!!!! <---------------------*/}
        <li>WhatsApp</li>
        <li>Behance</li>
      </ul>
    </footer>
  );
}

export default Footer;