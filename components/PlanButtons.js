import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation";

const container = {
  hidden: {},
  visible: {
      transition: {
          staggerChildren: 0.2,
      },
  },
};

const btnVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};
const PlanButtons = () => {
  const pathname = usePathname();
  let parking = '';
  let firstF = '';
  let secondF = '';
  let thirdF = '';
  let penthouseF = '';


  if(pathname === '/apartments/parking/'){
    parking = 'bg-orange-700 scale-110';
  }
  if(pathname === '/apartments/first-floor/'){
    firstF = 'bg-orange-700 scale-110';
  }
  if(pathname === '/apartments/second-floor/'){
    secondF = 'bg-orange-700 scale-110';
  }
  if(pathname === '/apartments/third-floor/'){
    thirdF = 'bg-orange-700 scale-110';
  }
  if(pathname === '/apartments/penthouse/'){
    penthouseF = 'bg-orange-700 scale-110';
  }

  return (
    <motion.div 
      className={'p-5 flex justify-around bg-tilia-white'}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
        <motion.div
            variants={btnVariant}
        >
          <Link href={'/apartments/parking'}><div className={`${parking} text-white text-xs p-7 md:text-base md:p-10 text-center font-bold flex justify-center items-center bg-orange-400 cursor-pointer h-10 w-10 hover:scale-125 hover:opacity-100 active:scale-125 duration-100 active:opacity-100`}  >Паркинг</div></Link>
        </motion.div>
        <motion.div
            variants={btnVariant}
        >
          <Link href={'/apartments/first-floor'}><div className={`${firstF} text-white text-xs p-7 md:text-base md:p-10 text-center font-bold flex justify-center items-center bg-orange-400 cursor-pointer h-10 w-10 hover:scale-125 hover:opacity-100 active:scale-125 duration-100 active:opacity-100`} >Етаж  1</div></Link>
        </motion.div>
        <motion.div
            variants={btnVariant}
        >
          <Link href={'/apartments/second-floor'}><div className={`${secondF} text-white text-xs p-7 md:text-base md:p-10 text-center font-bold flex justify-center items-center bg-orange-400 cursor-pointer h-10 w-10 hover:scale-125 hover:opacity-100 active:scale-125 duration-100 active:opacity-100`}>Етаж  2</div></Link>
        </motion.div>
        <motion.div
            variants={btnVariant}
        >
          <Link href={'/apartments/third-floor'}><div className={`${thirdF} text-white text-xs p-7 md:text-base md:p-10 text-center font-bold flex justify-center items-center bg-orange-400 cursor-pointer h-10 w-10 hover:scale-125 hover:opacity-100 active:scale-125 duration-100 active:opacity-100`} >Етаж  3</div></Link>
        </motion.div>
        <motion.div
            variants={btnVariant}
        >
          <Link href={'/apartments/penthouse'}><div className={`${penthouseF} text-white text-xs p-7 md:text-base md:p-10 text-center font-bold flex justify-center items-center bg-orange-400 cursor-pointer h-10 w-10 hover:scale-125 hover:opacity-100 active:scale-125 duration-100 active:opacity-100`} >Етаж 4</div></Link>
        </motion.div>
    </motion.div>
  )
}

export default PlanButtons
