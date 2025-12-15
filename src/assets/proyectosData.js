export const proyectos = [
  {
    id: 1,
    nombre: "Casa Moderna",
    imagen: "https://images.unsplash.com/photo-1761069234555-272f68348b53?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1175",
    descripcion: "Descripción completa del proyecto...",
    año: 2023,
    ubicacion: "Buenos Aires",
    galeria: ["img1.jpg", "img2.jpg", "img3.jpg"]
  },
  // más proyectos...
];

export const obtenerProyectoPorId = (id) => {
  return proyectos.find(p => p.id === parseInt(id));
};