'use client'
import Link from "next/link"
import Image from "next/image"
import { imageLoader } from "../utils/imgLoader"
import Maps from "@/components/Location"
import Timeline from "@/components/Timeline"
import ForBuilding from "@/components/ForBuidling"
import { motion } from "framer-motion"
import PromptToPlan from "@/components/PromptToPlan"
import WelcomeText from "@/components/WelcomeText"
import { noto } from "@/utils/fonts"

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


            {/* WELCOME TEXT AND IMG */}
            <div className="lg:flex lg:justify-between lg:items-center lg:p-10 bg-orange-50">
                {/* WELCOME TEXT */}
                <div className="lg:basis-[30%]">
                    <div className={` p-10`}>
                        <motion.div
                            className="py-5 text-tilia-orange text-left text-3xl font-extrabold"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >Ixora Luxury Residence: </motion.div>
                        <WelcomeText></WelcomeText>
                    </div>
                </div>

                {/* WELCOME IMAGE */}
                <motion.div
                    className="lg:basis-[70%] "
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div className="p-5 md:p-10 relative before:absolute before:top-[3%] before:left-[1%]
                    before:w-full before:h-full before:border-l-2 before:border-t-2 before:border-[#f83600] before:z-10">
                        {/* Parallax effect on hover */}
                        <div className="relative w-full h-fit overflow-hidden mx-auto z-20">
                            <Link href={'/apartments'}>
                                <Image
                                    className="transition-transform duration-700 ease-in-out hover:scale-125 "
                                    loader={imageLoader}
                                    src="/ixora-welcome.webp"
                                    width={5000}
                                    height={2813}
                                    alt="Image"
                                />
                            </Link>
                        </div>


                    </div>
                </motion.div>
            </div>



            {/* TIMELINE */}
            <Timeline></Timeline>



            {/* DESCRIPTION */}
            <ForBuilding></ForBuilding>


            {/* PROMPT IMG TO PLAN */}
            <Link href={'/apartments'} className={`flex justify-center items-center text-center py-5 lg:py-0 lg:pt-10 text-white text-lg sm:text-3xl hover:scale-110`}>Изберете Вашия луксозен нов дом сега.</Link>
            <PromptToPlan></PromptToPlan>


            {/* LOCATION */}
            <>
                <Maps></Maps>
            </>

        </div>
    )
}
