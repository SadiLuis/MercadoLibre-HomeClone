import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import ghostIcon from '@iconify/icons-mdi/ghost';

const ghostVariant ={
    hidden: { x: -20 },
    visible: { x: 10, transition:{ yoyo: Infinity, duration: 1.5 }}
}

const Header = () => {
  return (
    <header className="flex items-center justify-between p-6 bg-orange-500 text-white">
        <h1 className=" text-2xl font-bold hover:shadow-black shadow-lg">FreeStore</h1>
        <motion.div variants={ghostVariant} initial="hidden" animate="visible">
            <Icon icon={ghostIcon} className="text-4xl text-black animate-pulse"/>
        </motion.div>
    </header>
  )
}

export default Header