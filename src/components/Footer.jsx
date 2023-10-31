import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import facebookIcon from '@iconify/icons-mdi/facebook';
import twitterIcon from '@iconify/icons-mdi/twitter';
import instagramIcon from '@iconify/icons-mdi/instagram';
import ghostIcon from '@iconify/icons-mdi/ghost';


const ghostVariant ={
  hidden: { x: -50 },
  visible: { x: -300, transition:{ yoyo: Infinity, duration: 2.5 }}
}

const Footer = () => {
  return (
    <footer className="flex items-center justify-between p-6 bg-orange-500 text-white">
      <div className="flex items-center space-x-4">
        <Icon icon={facebookIcon} className="text-2xl" />
        <Icon icon={twitterIcon} className="text-2xl" />
        <Icon icon={instagramIcon} className="text-2xl" />
      </div>
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold">FreeStore</h1>
        <motion.div variants={ghostVariant} initial="hidden" animate="visible">
            <Icon icon={ghostIcon} className="text-4xl text-black hover:animate-bounce"/>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
