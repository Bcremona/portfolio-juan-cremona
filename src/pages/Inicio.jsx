import { Link } from 'react-router-dom';
import Experiencia from '../components/Experiencia';
import ProyectosDestacados from '../components/ProyectosDestacados';

function Inicio() {
  return (
    <div>
      <section 
          className="min-h-screen w-full flex flex-col items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(https://images.unsplash.com/photo-1761069234555-272f68348b53?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1175)'
          }}
      >
          <h1 className="lg:text-7xl md:text-4xl text-2xl">Juan Martin Cremona</h1>
          <h2 className="text-sky-200 lg:text-5xl md:text-3xl text-xl">Arquitecto</h2>
      </section>
      <section className="min-h-screen w-full flex flex-col bg-teal-50 p-20">
          <h2 className="lg:text-6xl md:text-4xl text-3xl mb-10 text-stone-700">Sobre mí</h2>
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <img className="m-10 lg:mr-10 ml-0" src="https://static.wixstatic.com/media/5d6141_6783cfb51726446c8350e0f907960dad~mv2.jpg/v1/fill/w_246,h_246,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/image0_edited.jpg" alt="Arquitecto Juan Cremona" />
            <p className="text-md md:text-lg lg:text-xl max-w-4xl text-justify text-black/90">
              Soy arquitecto de la Universidad de Buenos Aires, egresado el año 2020. Fui docente de Proyecto Urbano y Proyecto Arquitectónico, materias de tesis en la carrera de arquitectura de la Universidad de Buenos Aires. Actualmente estoy trabajando como arquitecto independiente en obras residenciales.

              Cuento con amplia experiencia en estudios de arquitectura llevando a cabo proyectos de viviendas multifamiliares y edificios de usos mixtos.  Actualmente cursando el posgrado de Gestion de Desarrollos Inmobiliarios en la Universidad de San Andrés.

              Participante premiado en concursos de arquitectura y urbanismo.
            </p>
          </div>
          <div className="lg:p-32 md:p24 p-10">
          <h2 className="lg:text-6xl md:text-4xl text-3xl mb-10 text-stone-700">Experiencia</h2>
            <Experiencia />
          </div>
      </section>
      <section className="min-h-screen w-full flex flex-col bg-white/90 p-20">
        <h2 className="lg:text-6xl md:text-4xl text-3xl mb-10 text-stone-700">Proyectos Destacados</h2>
        <ProyectosDestacados />
      </section>
    </div>
  );
}

export default Inicio;