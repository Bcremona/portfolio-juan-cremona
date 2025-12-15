import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// Datos de ejemplo - después reemplaza con los proyectos reales
const proyectosData = [
  {
    id: 1,
    titulo: 'Casa Moderna Minimalista',
    categoria: 'Residencial',
    imagen: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg',
    anio: '2024'
  },
  {
    id: 2,
    titulo: 'Edificio Corporativo',
    categoria: 'Comercial',
    imagen: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg',
    anio: '2023'
  },
  {
    id: 3,
    titulo: 'Vivienda Sustentable',
    categoria: 'Residencial',
    imagen: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg',
    anio: '2024'
  },
  {
    id: 4,
    titulo: 'Restaurante Urbano',
    categoria: 'Comercial',
    imagen: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg',
    anio: '2023'
  },
  {
    id: 5,
    titulo: 'Loft Contemporáneo',
    categoria: 'Residencial',
    imagen: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg',
    anio: '2024'
  },
  {
    id: 6,
    titulo: 'Oficinas Tech',
    categoria: 'Comercial',
    imagen: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
    anio: '2023'
  },
  {
    id: 7,
    titulo: 'Casa de Playa',
    categoria: 'Residencial',
    imagen: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg',
    anio: '2024'
  },
  {
    id: 8,
    titulo: 'Centro Comercial',
    categoria: 'Comercial',
    imagen: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg',
    anio: '2023'
  },
  {
    id: 9,
    titulo: 'Edificio Industrial',
    categoria: 'Residencial',
    imagen: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg',
    anio: '2024'
  }
];

function Proyectos() {

  const [proyectos, setProyectos] = useState([]);
  
  useEffect(() => {
    // Simula la carga de datos
    setProyectos(proyectosData);
  }, []);

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center py-20 px-10 bg-white/90">
      {proyectos.map(( proyecto, i ) => (
        <motion.div
          key={proyecto.id}
          className="block relative group mb-4 shadow-lg rounded-lg overflow-hidden hover:scale-103 transition-transform duration-200 ease-in-out"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
          variants={itemVariants}
        >
          <Link
            to={`/proyectos/${proyecto.id}`}
            key={proyecto.id}
          >
            <img
              src={proyecto.imagen}
              alt={proyecto.titulo}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </Link>
        </motion.div>
      ))}
    </div>
  );

}

export default Proyectos;