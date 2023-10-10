'use client'
import Image from "next/image"
import { imageLoader } from "../utils/imgLoader"
import Timeline from "@/components/Timeline"
import ForBuilding from "@/components/ForBuidling"
import { motion } from "framer-motion"
import { noto, roboto } from "@/utils/fonts"
import ApartmentTypes from "@/components/ApartmentTypes"
import WalkingDistance from "@/components/WalkingDistance"

export const revalidate = 0; // revalidate this page every 60 seconds

// TODO:
// sitemap update
// when an apartment is sold, set available status to false


export const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export const letterVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

export const wordVariant = {
    hidden: { opacity: 0, translateY: 20, skew: -50 },
    visible: { opacity: 1, translateY: 0, skew: 0 },
};

export default function Home() {
    return (
        <div>
            {/* WELCOME VIDEO */}

            <div className="relative">
                {/* <video className="w-full h-full" autoPlay={true} muted={true} loop={true} playsInline={true} >
                    <source src="/video.MP4" type="video/MP4" />
                    Your browser does not support the video tag.
                </video> */}
                <Image
                    loader={imageLoader}
                    src="/tilia/tilia-dvor.webp"
                    alt="dvor"
                    width={5568}
                    height={3132}
                    priority={true}
                ></Image>

                <div className="absolute top-[10%] left-4 md:top-[10%] md:left-10 w-full h-full flex flex-col items-start justify-center">
                    <div
                        className={`${roboto.className} welcomeTextOnImg md:pb-16 text-white text-center md:text-xl lg:text-3xl xl:text-5xl`}
                    >
                        НА КРАЧКИ ОТ МЕТРОТО
                    </div>
                    <motion.div
                        className={`${roboto.className} welcomeTextOnImg text-white text-center text-2xl md:text-4xl lg:text-6xl xl:text-[80px]`}
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.span variants={letterVariant}>И</motion.span>
                        <motion.span variants={letterVariant}>З</motion.span>
                        <motion.span variants={letterVariant}>Б</motion.span>
                        <motion.span variants={letterVariant}>Е</motion.span>
                        <motion.span variants={letterVariant}>Р</motion.span>
                        <motion.span variants={letterVariant}>И</motion.span>
                        <motion.span variants={letterVariant}> </motion.span>
                        <motion.span variants={letterVariant}>С</motion.span>
                        <motion.span variants={letterVariant}>В</motion.span>
                        <motion.span variants={letterVariant}>О</motion.span>
                        <motion.span variants={letterVariant}>Я</motion.span>
                        <motion.span variants={letterVariant}> </motion.span>
                        <motion.span variants={letterVariant}>Н</motion.span>
                        <motion.span variants={letterVariant}>О</motion.span>
                        <motion.span variants={letterVariant}>В</motion.span>
                        <motion.span variants={letterVariant}> </motion.span>
                        <motion.span variants={letterVariant}>Д</motion.span>
                        <motion.span variants={letterVariant}>О</motion.span>
                        <motion.span variants={letterVariant}>М</motion.span>
                    </motion.div>
                </div>
            </div>


            {/* WELCOME IMG AND TEXT */}


            <div className="flex flex-col justify-center items-center gap-10 px-10 pt-20 md:pt-32 pb-10 bg-white">

                {/* IMG */}
                <div className={`relative text-center`}>
                    <div
                        // before:w-full before:max-w-[400px] md:before:max-w-[600px], biggest width but not more than 400px, 600px
                        className="relative z-0 ml-5 before:absolute before:-top-25 before:-left-5 sm:before:-top-20 sm:before:-left-20  before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px]  before:opacity-20 before:h-full before:border-2 before:border-tilia-yellow-block before:z-[-1]"
                    >
                        <Image
                            className="z-10 w-full rounded-t-[400px] max-w-[400px] md:max-w-[600px]"
                            loader={imageLoader}
                            src="/tilia/tilia-one.webp"
                            alt="tilia one"
                            width={4946}
                            height={3216}
                            priority={true}
                        ></Image>
                    </div>

                    <div className="absolute top-0 left-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center">
                        <div className="text-black text-lg md:text-2xl lg:text-4xl ">
                            ЖИЛИЩНА СГРАДА
                        </div>
                        <motion.div
                            className={`${noto.className} text-black text-center py-5 text-4xl md:text-7xl lg:text-[140px]`}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 0, translateY: 20, skewX: -80, rotateY: 50 },
                                visible: { opacity: 1, translateY: 0, skewX: 0, rotateY: 0 },
                            }}
                        >

                            ТИЛИЯ
                        </motion.div>

                    </div>
                </div>

                {/* TEXT */}
                <motion.span
                    className="font-bold"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, scale: 1.3 },
                        visible: { opacity: 1, scale: 1 },
                    }}
                >
                    Проектът е с осигурено финансиране до акт 16.

                </motion.span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-justify">

                    <motion.span
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, scale: 1.3 },
                            visible: { opacity: 1, scale: 1 },
                        }}
                    >
                        Тилия Резидънс се състои от две подземни нива и девет надземни етажа. Сградата е проектирана с два отделни входа, като всеки от тях разполага с фоайе, асансьор и стълбищна клетка с директен достъп до сутерен и гаражи.

                    </motion.span>
                    <motion.span
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, scale: 1.3 },
                            visible: { opacity: 1, scale: 1 },
                        }}
                    >
                        Подземните нива са проектирани с гаражи, като за някои от гаражите е предвидена и платформа за двойно независимо паркиране, които заедно с надземните паркоместа за посетители осигуряват на живущите общо 35 броя самостоятелни и независими места за паркиране.

                    </motion.span>
                    <motion.span
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, scale: 1.3 },
                            visible: { opacity: 1, scale: 1 },
                        }}
                    >
                        Тилия Резидънс предлага девет жилищни етажа и общо 31 функционално разпределени <span className="font-semibold">едностайни, двустайни и тристайни апартаменти, както и ексклузивни тристайни и четиристайни мезонети,</span> предлагащи самостоятелен двор.

                    </motion.span>
                    <motion.span
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, scale: 1.3 },
                            visible: { opacity: 1, scale: 1 },
                        }}
                    >
                        Липсата на големи индустриални предприятия и близостта до обширния и облагороден Северен Парк създават условия за живот в среда с чист въздух и възможности за спортуване на открито.

                    </motion.span>
                    <motion.span
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, scale: 1.3 },
                            visible: { opacity: 1, scale: 1 },
                        }}
                    >
                        Директен достъп до метромрежата чрез станция Ломско Шосе (на 50 метра от сградата) ,както и до автобуси 85, 285 и трамвай 6.

                    </motion.span>
                    <motion.span
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, scale: 1.3 },
                            visible: { opacity: 1, scale: 1 },
                        }}
                    >
                        В имота се предвижда озеленена зона за ползване от живущите.

                    </motion.span>


                </div>

            </div>



            {/* TIMELINE */}
            <div className="bg-tilia-gray">
                <Timeline></Timeline>
            </div>

            {/* TYPES OF APARTMENTS */}
            <div className="bg-white p-10">
                <ApartmentTypes></ApartmentTypes>
            </div>

            {/* DESCRIPTION */}
            <div className="bg-tilia-yellow-block">
                <ForBuilding></ForBuilding>
            </div>

            {/* PARALLAX TILIA WALKING PEOPLE */}

            <div className="bg-tilia-img-walking-people h-60 bg-center bg-contain bg-no-repeat bg-tilia-yellow-block md:min-h-[28rem] md:grid md:place-items-center md:bg-fixed md:bg-no-repeat md:bg-cover md:bg-center md:opacity-75">
            </div>


            {/* NEXT TO METRO */}
            <div className="bg-white">
                <WalkingDistance></WalkingDistance>
            </div>


        </div>
    )
}
