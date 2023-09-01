'use client'
import Link from "next/link"
import Image from "next/image"
import { imageLoader } from "../utils/imgLoader"
import Maps from "@/components/Location"
import Timeline from "@/components/Timeline"
import ForBuilding from "@/components/ForBuidling"
import { motion } from "framer-motion"
import { noto } from "@/utils/fonts"
import ApartmentTypes from "@/components/ApartmentTypes"
import WalkingDistance from "@/components/WalkingDistance"

export const revalidate = 0; // revalidate this page every 60 seconds

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
                <video className="w-full h-full" autoPlay={true} muted={true} loop={true} playsInline={true} >
                    <source src="/video.MP4" type="video/MP4" />
                    Your browser does not support the video tag.
                </video>

                <div className="absolute top-[10%] left-4 md:top-[10%] md:left-10 w-full h-full flex flex-col items-start justify-center ">
                    <div
                        className={`${noto.className} md:pb-16 welcomeTextOnImg text-white text-center md:text-2xl lg:text-4xl xl:text-6xl`}
                    >
                        НА КРАЧКИ ОТ МЕТРОТО
                    </div>
                    <motion.div
                        className={`${noto.className} welcomeTextOnImg text-white text-center text-2xl md:text-4xl lg:text-6xl xl:text-[80px]`}
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
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
                        <img
                            alt="profile"
                            // filter is not actually necessary, you can go ahead with saturate-200 directly
                            className="z-10 w-full rounded-t-[400px] max-w-[400px] md:max-w-[600px]"
                            src="/tilia/tilia-yellow.webp"
                        />
                    </div>
                    {/* <img  alt="" className="relative" /> */}

                    <div className="absolute top-0 left-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center">
                        <div className="text-black text-lg md:text-2xl lg:text-4xl ">
                            ЖИЛИЩНА СГРАДА
                        </div>
                        <motion.div
                            className={`${noto.className} text-black text-center py-5 text-4xl md:text-7xl lg:text-[140px]`}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.5 }}
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
                <div className="text-left flex flex-col gap-5">
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
                        Изпълнението и всички довършителни работи са заложени в изключително висок - бутиков клас. Ixora Residence се състои от 13 просторни апартамента и 17 гаража.

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
                        Апартаментите разкриват чудесна панорамна гледка към София и Витоша, а сградата разполага с напълно оборудвани спа център и фитнес зала за ексклузивно ползване от бъдещите обитатели. Вертикалната планировка по специален ландшафтен проект оформя зелен пояс около сградата, който създава усещане за живот в паркова среда.

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
            <div className="bg-tilia-yellow-block p-10">
                <ForBuilding></ForBuilding>
            </div>


            {/* NEXT TO METRO */}
            <div className="bg-white">
                <WalkingDistance></WalkingDistance>
            </div>


        </div>
    )
}
