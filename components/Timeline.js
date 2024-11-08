import { lato, noto } from "@/utils/fonts";
import { imageLoader } from "@/utils/imgLoader";
import { motion } from "framer-motion"
import Image from "next/image";

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
            className="flex flex-col justify-center items-center whitespace-nowrap  h-20 w-20 m-5 lg:h-32 lg:w-32 xl:h-40 xl:w-40 gap-3"
            variants={treeVariant}
            viewport={{ once: true }}
        >
            <div className="text-sm lg:text-xl">
                {title}
            </div>
            <Image
                loader={imageLoader}
                src="/assets/tilia-basic-tree-nobg.png"
                alt='plan'
                width={612}
                height={407}
            ></Image>
            <div className="text-sm lg:text-base text-tilia-yellow-text font-extrabold">
                {subtitle}
            </div>
        </motion.div>
    );
};




const Timeline = () => {
    return (

        <div className="flex flex-col">
            {/* TITLE */}
            <div className="text-black flex flex-row p-10">
                <div
                    className={`${noto.className} text-2xl md:text-5xl lg:text-[80px]`}
                    // initial="hidden"
                    // whileInView="visible"
                    // viewport={{ once: true }}
                    // transition={{ duration: 0.7, delay: 0.3 }}
                    // variants={{
                    //     hidden: { opacity: 0, translateY: 20, skewX: -80, rotateY: 50 },
                    //     visible: { opacity: 1, translateY: 0, skewX: 0, rotateY: 0 },
                    // }}
                >

                    ЕТАПИ
                </div>

            </div>


            {/* TREES */}
            <motion.div
                className="flex flex-wrap items-center justify-center bg-tilia-gray py-10 gap-10 lg:gap-20"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <Tree title={'2023'} subtitle={'Проектиране '} ></Tree>
                <Tree title={'Февруари 2024'} subtitle={'Първа копка'} ></Tree>
                <Tree title={'Март 2025'} subtitle={'Акт 14'} ></Tree>
                <Tree title={'Декември 2025'} subtitle={'Акт 16'} ></Tree>

            </motion.div>
        </div>

    )
}

export default Timeline
