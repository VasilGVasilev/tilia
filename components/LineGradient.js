import { motion } from "framer-motion";


const LineGradient = () => {
    return (
        <motion.div 
          className={`h-2 bg-gradient-tilia z-20`} 
          transition={{ duration: 1 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { width: 0 },
            visible: { width: '100%' },
          }}
        />
    )
  };
  
export default LineGradient;