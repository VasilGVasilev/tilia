import { lato } from "@/utils/fonts";
import { motion } from "framer-motion"

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.4,
        },
    },
};

const bubbleVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
};

const Bubble = ({ title, subtitle }) => {
    return (
      <motion.div 
        className=" p-5 m-7 h-36 w-36 lg:m-5 lg:h-52 lg:w-52 bg-gradient-to-r from-tilia-orange from-10% via-orange-500 via-60% to-orange-400 to-100% text-white font-semibold flex justify-center items-center"  
        variants={bubbleVariant}
        >
            <div className={`${lato.className} timelineBubble text-center hover:scale-125 duration-200`} >
                <div className="text-xl lg:text-2xl">
                    {title}
                </div>
                <div className="text-sm lg:text-base">
                    {subtitle}
                </div>
            </div>
      </motion.div>
    );
  };

const Timeline = () => {
    return (
        <motion.div
            className="flex flex-col items-center md:flex-row md:justify-around bg-ixora-yellow p-10"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >

            <Bubble title={'Юни 2021'} subtitle={'Проектиране и регулация'} ></Bubble>
            <Bubble title={'Юни 2022'} subtitle={'РС, строителна площадка и първа копка'} ></Bubble>
            <Bubble title={'Март 2023'} subtitle={'Груб строеж завършен Акт 14'} ></Bubble>
            <Bubble title={'Април 2024'} subtitle={'Въвеждане в експлоатация Акт 16'} ></Bubble>

        </motion.div>

    )
}

export default Timeline
