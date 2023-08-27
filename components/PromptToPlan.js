import { imageLoader } from "@/utils/imgLoader"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

const PromptToPlan = () => {
  return (
    <div className="flex justify-center items-center p-5 lg:p-20 relative before:absolute before:top-[3%] before:left-[1%]
        before:w-full before:h-full before:border-r-2 before:border-b-2 before:border-tilia-orange before:z-[-1]">
    {/* Parallax effect on hover */}
    <div className="w-full h-fit overflow-hidden mx-auto ">
        <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1.0 }}
                transition={{ delay: 0.4, duration: 1.5 }}
        >
            <Link href={'/apartments'}><Image 
                className="transition-transform duration-700 ease-in-out hover:scale-125"
                loader={imageLoader}
                src='/ixora-apartments.webp'
                alt="Ixora Plan"
                width={5000}
                height={2813} 
            ></Image></Link>
        </motion.div>
        </div>
    <div className='relative'>

    </div>
</div>
  )
}

export default PromptToPlan
