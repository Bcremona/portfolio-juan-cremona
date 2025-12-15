/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function ProyectosDestacados() {
  // Variantes para la animación de entrada
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {[
        "image.jpg",
        "image-1.jpg",
        "image-2.jpg",
        "image-3.jpg",
        "image-4.jpg",
        "image-5.jpg",
      ].map((img, i) => (
        <motion.div
          key={i}
          className="block relative group"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
          variants={itemVariants}
        >
          <img
            className="h-auto max-w-full rounded-lg group-hover:scale-102 group-hover:opacity-60 transition-transform duration-300 ease-in-out"
            src={`https://flowbite.s3.amazonaws.com/docs/gallery/square/${img}`}
            alt=""
          />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-x-2 rounded-full text-sm py-2 px-4 bg-white/90 text-black font-medium shadow-lg">
            Ver proyecto
          </span>
        </motion.div>
      ))}
    </div>
  );
}
