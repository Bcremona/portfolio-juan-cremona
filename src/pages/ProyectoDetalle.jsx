import { useParams, useNavigate } from 'react-router-dom';
import { obtenerProyectoPorId } from '../assets/proyectosData';

function ProyectoDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Aquí obtienes los datos del proyecto según el ID
  // Puedes tener un archivo de datos o hacer una petición


const proyecto = obtenerProyectoPorId(id);

  if (!proyecto) {
    return <div className='flex flex-col justify-center align-center'>Proyecto no encontrado</div>;
  }
  
  return (
    <div className="min-h-screen p-20 bg-white/90 text-black">
      <button 
        onClick={() => navigate('/proyectos')}
        className="mb-6 text-blue-600 hover:underline"
      >
        ← Volver a Proyectos
      </button>
      
      <h1 className="text-4xl font-bold mb-4">{proyecto.nombre}</h1>
      <img src={proyecto.imagen} alt={proyecto.nombre} className="w-full max-w-4xl mb-6" />
      <p className="text-lg">{proyecto.descripcion}</p>
      {/* Más detalles del proyecto */}
    </div>
  );
}

export default ProyectoDetalle;