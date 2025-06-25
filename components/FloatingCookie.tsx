
import { motion } from "framer-motion";
import { Cookie } from "lucide-react";

const FloatingCookie = () => {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ 
        scale: 1, 
        rotate: 0,
        y: [0, -10, 0],
      }}
      transition={{
        scale: { duration: 0.5, ease: "easeOut" },
        rotate: { duration: 0.5, ease: "easeOut" },
        y: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.div
        whileHover={{ 
          scale: 1.1, 
          rotate: 15,
          boxShadow: "0 10px 30px rgba(122, 255, 87, 0.4)"
        }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-br from-[#7AFF57] to-[#5BCC3A] p-4 rounded-full shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
      >
        <Cookie className="w-8 h-8 text-white" />
      </motion.div>
    </motion.div>
  );
};

export default FloatingCookie;
