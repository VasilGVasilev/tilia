import { lato, noto } from "@/utils/fonts";
import { imageLoader } from "@/utils/imgLoader";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HiExternalLink } from "react-icons/hi";

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
            className="flex flex-col justify-center items-center h-20 w-20 m-5 lg:h-32 lg:w-32"
            variants={treeVariant}
            viewport={{ once: true }}
        >
            <div className="text-sm lg:text-xl">{title}</div>
            <Image
                loader={imageLoader}
                src="/assets/tilia-basic-tree-nobg.webp"
                alt="plan"
                width={612}
                height={407}
            ></Image>
            <div className="text-sm lg:text-base text-tilia-yellow-text font-extrabold">
                {subtitle}
            </div>
        </motion.div>
    );
};

const WalkingDistance = () => {
    return (
        <div className="flex flex-col">
            {/* TITLE */}
            <div className="text-black flex flex-row p-5">
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
                    ЛОКАЦИЯ
                </div>
            </div>

            {/* BIG MAP */}
            <div className=" flex flex-col justify-center items-center gap-5">
                <Link href={"https://maps.app.goo.gl/FASw8QWZRoibVTqd9"}>
                    <div className="flex flex-row gap-1 rounded-full bg-tilia-yellow-block w-fit h-fit p-5 font-semibold sm:text-2xl hover:bg-black hover:text-white transition">
                        <div>📍 Връбница, бул. „Ломско шосе“ 202</div>
                        <HiExternalLink size={16} />
                    </div>
                </Link>
                <Link href={"https://maps.app.goo.gl/FASw8QWZRoibVTqd9"}>
                    <Image
                        className=""
                        loader={imageLoader}
                        src="/maps-google.webp"
                        alt="maps"
                        width={1669}
                        height={1213}
                    ></Image>
                </Link>
            </div>

            {/* TREES */}
            <motion.div
                className="flex flex-wrap items-center justify-center bg-tilia-gray py-10 gap-10 lg:gap-20"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <Tree
                    title={"Метростанция Ломско шосе"}
                    subtitle={"50 м"}
                ></Tree>
                <Tree
                    title={"61 ОУ “Св. св. Кирил и Методий”"}
                    subtitle={"200 м"}
                ></Tree>
                <Tree title={"74 ОУ “Гоце Делчев”"} subtitle={"500 м"}></Tree>
                <Tree title={"супермаркет БИЛА"} subtitle={"500 м"}></Tree>

                <Tree title={"супермаркет Т-MARKET"} subtitle={"700 м"}></Tree>
                <Tree title={"Северен парк"} subtitle={"900 м"}></Tree>
                <Tree title={"супермаркет ЛИДЛ"} subtitle={"1 км"}></Tree>
                <Tree
                    title={"Софийски Университет"}
                    subtitle={"6 метро спирки"}
                ></Tree>
            </motion.div>
        </div>
    );
};

export default WalkingDistance;
