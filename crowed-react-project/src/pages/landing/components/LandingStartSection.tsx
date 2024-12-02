import { Button } from '@mui/material';
import { motion } from 'framer-motion';

const LandingStartSection = () => {
  return (
    <>
      <div className="flex flex-col items-center  justify-center min-h-screen px-8 text-center bg-main" >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
          className="text-5xl font-bold mb-4 text-main"
        >
          Welcome to the Future
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.4 }}
          className="text-5xl text-white mb-8"
        >
          Discover the power of our cutting-edge technology.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.6 }}
        >
          <Button variant="outlined" sx={{color: '#fff', borderColor: "white", fontSize: "1.2rem", ":hover":{bgcolor: "#fff", color: "primary.main"}}} className="px-8 py-4 text-lg">
            Get Started
          </Button>
        </motion.div>
      </div>

      
    </>
  );
};

export default LandingStartSection;
