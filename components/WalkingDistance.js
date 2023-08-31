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

const WalkingDistance = () => {
    return (
        <motion.div
            className="flex flex-wrap items-center justify-center bg-ixora-yellow gap-20"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >

            <Tree title={'Метро Ломско шосе'} subtitle={'1 мин пеша'} ></Tree>
            <Tree title={'61 ОУ “Св. св. Кирил и Методий”'} subtitle={'2 мин пеша'} ></Tree>
            <Tree title={'супермаркет БИЛА'} subtitle={'5 мин пеша'} ></Tree>
            <Tree title={'супермаркет Т-MARKET'} subtitle={'5 мин пеша'} ></Tree>
            <Tree title={'супермаркет Кауфланд'} subtitle={'1 км'} ></Tree>
            <Tree title={'Софийски Университет'} subtitle={'6 метро спирки'} ></Tree>




        </motion.div>

    )
}

export default WalkingDistance
