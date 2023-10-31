// src/components/Slice.jsx
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

const Slice = () => {
  const products = useSelector(state => state.products);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((currentImage + 1) % 3);
    }, 10000); // Cambia la imagen cada 10 segundos
    return () => clearInterval(timer);
  }, [currentImage]);

  return (
    <div className="relative h-[60vh]"> {/* Contenedor con altura fija */}
      <AnimatePresence>
        <motion.img
          key={products[currentImage].id}
          src={products[currentImage].image}
          alt={products[currentImage].title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute w-full h-full object-cover" // Posiciona absolutamente la imagen dentro del contenedor
        />
      </AnimatePresence>
    </div>
  );
};

export default Slice;