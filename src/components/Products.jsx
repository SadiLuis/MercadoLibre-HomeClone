import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const Products = () => {
  const products = useSelector(state => state.products);

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <motion.div
          key={product.id}
          className="p-4 border rounded-lg bg-black shadow hover:shadow-lg transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
          <h2 className="text-xl text-white font-bold mb-2">{product.title}</h2>
          <div className='k rounded-md hover:shadow-gray-600 shadow-lg'>
            <p className="text-gray-400 mb-2">{product.description}</p>
            <p className="text-lg text-white font-bold">${product.price}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Products;
