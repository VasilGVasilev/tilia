import { lato, noto } from "@/utils/fonts";
import { motion } from "framer-motion"

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.4,
        },
    },
};

const treeVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
};

const Tree = ({ title, subtitle }) => {
    return (
        <motion.div
            className="flex flex-col justify-center items-center h-32 w-32 lg:m-5 lg:h-48 lg:w-48 "
            variants={treeVariant}
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
        <div className="flex flex-col gap-5">
            {/* TITLE */}
            <div className="text-black flex flex-row p-5 md:p-10">
                <motion.div
                    className={`${noto.className} text-2xl md:text-5xl lg:text-[80px]`}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.7, delay: 0.3 }}
                    variants={{
                        hidden: { opacity: 0, translateY: 20, skewX: -80, rotateY: 50 },
                        visible: { opacity: 1, translateY: 0, skewX: 0, rotateY: 0 },
                    }}
                >

                    ЕТАПИ
                </motion.div>

            </div>
            <motion.div
                className="flex flex-wrap items-center justify-center bg-ixora-yellow gap-20 p-10"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >

                <Tree title={'Юни 2021'} subtitle={'Проектиране и регулация'} ></Tree>
                <Tree title={'Юни 2022'} subtitle={'РС, строителна площадка и първа копка'} ></Tree>
                <Tree title={'Март 2023'} subtitle={'Груб строеж завършен Акт 14'} ></Tree>
                <Tree title={'Април 2024'} subtitle={'Въвеждане в експлоатация Акт 16'} ></Tree>

            </motion.div>
        </div>

    )
}

export default Timeline
