import Link from "next/link";
import Image from "next/image";
import { imageLoader } from "@/utils/imgLoader";
import { motion } from "framer-motion";

const Plan = () => {

    return(
        <motion.div 
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: { opacity: 1, scale: 1 },
            }}
        >

            <Link href={`/apartments/penthouse/`}><div className="absolute penthouse cursor-pointer h-full w-full z-10 hover:bg-tilia-orange opacity-60" ></div></Link>
            <Link href={`/apartments/third-floor/`}><div className="absolute thirdFloor cursor-pointer h-full w-full z-10 hover:bg-tilia-orange opacity-60" ></div></Link>
            <Link href={`/apartments/second-floor/`}><div className="absolute secondFloor cursor-pointer  h-full w-full z-10 hover:bg-tilia-orange opacity-60"></div></Link>
            <Link href={`/apartments/first-floor/`}><div className="absolute firstFloor cursor-pointer h-full w-full z-10 hover:bg-tilia-orange opacity-60" ></div></Link>
            <Link href={`/apartments/parking/`}><div className="absolute parking cursor-pointer h-full w-full z-10 hover:bg-tilia-orange opacity-60" ></div></Link>
            {/* <div className='absolute outside cursor-pointer h-full w-full bg-white opacity-50 z-10'  ></div> */}
            {/* <img src="/ixora-apartments-plan.webp" alt="Ixora Plan" className="relative" /> */}
                
            <div className='relative'>
            <Image 
                loader={imageLoader}
                src='/ixora-apartments.webp'
                alt="Ixora Plan"
                width={5000}
                height={2813} 
            ></Image>
            </div>
        

        </motion.div>
    )
}
export default Plan;