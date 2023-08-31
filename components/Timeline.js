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
        className="flex flex-col justify-center items-center h-36 w-36 lg:m-5 lg:h-52 lg:w-52 "  
        variants={bubbleVariant}
        >
            <div className={`flex flex-col gap-3`} >
                <div className="text-xl lg:text-2xl">
                    {title}
                </div>
                <img src="/assets/tilia-basic-tree-nobg.png" alt="" />
                <div className="text-sm lg:text-base text-tilia-yellow-text font-extrabold">
                    {subtitle}
                </div>
            </div>
      </motion.div>
    );
  };

const Timeline = () => {
    return (
        <motion.div
            className="flex flex-wrap items-center justify-center bg-ixora-yellow gap-20"
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
