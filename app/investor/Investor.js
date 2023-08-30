'use client'

import Link from "next/link";
import Image from "next/image"
import { imageLoader } from "../../utils/imgLoader";
import { lato, tenor } from "@/utils/fonts";
import { motion } from "framer-motion";

import { letterVariant, container } from "../Home";

import { noto } from "@/utils/fonts";



import { useState } from "react";
import { ImageSquare } from "@/components/InvestorImage";


export const revalidate = 0; // revalidate this page every 60 seconds



export default function Investor() {

    // image slider
    const [dalia, setDalia] = useState(["/dalia/dalia-one.webp", "/dalia/dalia-two.webp", "/dalia/dalia-three.webp"]);
    const [westEnd, setWestEnd] = useState(["/west-end/west-end-one.webp", "/west-end/west-end-two.webp", "/west-end/west-end-three.webp"]);
    const [ixora, setIxora] = useState(["/ixora/ixora-one.webp", "/ixora/ixora-two.webp", "/ixora/ixora-three.webp"]);



    return (
        <>
            <div className="h-50 w-50 bg-black"></div>


            <div className="pb-10 bg-tilia-yellow-block">

                {/* INTRO */}
                <div className="">
                    <div className="bg-white w-full h-10"></div>
                    {/* Investor tag */}
                    <div className="investorIntroBg">
                        <motion.div
                            className={`flex flex-row justify-center items-center ${noto.className} welcomeTextOnImg text-[#D7D7DF] text-left py-5 text-6xl md:text-8xl lg:text-[150px] xl:text-[200px]`}

                            variants={container}
                            initial="hidden"
                            whileInView="visible"
                        >
                            <motion.span variants={letterVariant}>П</motion.span>
                            <motion.span variants={letterVariant}>Р</motion.span>
                            <motion.span variants={letterVariant}>О</motion.span>
                            <motion.span variants={letterVariant}>Е</motion.span>
                            <motion.span variants={letterVariant}>К</motion.span>
                            <motion.span variants={letterVariant}>Т</motion.span>
                            <motion.span variants={letterVariant}>И</motion.span>

                        </motion.div>

                    </div>

                    {/* Container for Investor Intro */}
                    <div className="bg-[#F6F6F6] p-10 lg:px-32  flex flex-col sm:flex-row justify-center items-center gap-10">
                        {/* Container for Investor Logo and Name */}
                        <motion.img
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, scale: 0.5 },
                                visible: { opacity: 1, scale: 1 },
                            }}
                            transition={{
                                duration: 0.6,
                                ease: "easeInOut",
                                times: [0, 0.4, 0.6],
                                repeatDelay: 1
                            }}
                            src="/investor-logo.webp"
                            alt="investor-logo"
                            className="h-20 w-50 xl:h-32 xl:w-60"

                        >
                        </motion.img>
                        {/* Container for Description of Investor */}
                        <div className={`${lato.className}`}>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.5 },
                                    visible: { opacity: 1, scale: 1 },
                                }}
                            >
                                <div className="text-black text-justify font-bold">
                                    Creative Studio е строително-инвестиционно холдингово дружество, което финансира, проектира и изгражда луксозни многофамилни и еднофамилни жилищни сгради и ги реализира на пазара.
                                </div>
                            </motion.div>
                            <br />
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.5 },
                                    visible: { opacity: 1, scale: 1 },
                                }}
                            >
                                <div className="text-black text-justify ">
                                    Мотото на компанията при изпълнение на инвестиционните проекти гласи - "Creating Excellence" или "Създаване на съвършенство".
                                </div>
                            </motion.div>

                        </div>

                    </div>
                </div>

                {/* Container for Recent Projects */}
                <div className="bg-tilia-yellow-block">


                    {/* Container for projects */}
                    <div className="">


                        {/* Container for Ixora*/}
                        <div
                            className="flex flex-col gap-10"
                        >
                            <Link href={`https://ixorabg.com/`}>
                                <div className="bg-tilia-white shadow-2xl">
                                    <div className="flex flex-row gap-2 sm:gap-5 justify-center items-center">
                                        <motion.div
                                            className={` text-tilia-yellow-text text-center font-mono  welcomeTextOnImg py-5 text-2xl md:text-5xl lg:text-[80px]`}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.7 }}
                                            variants={{
                                                hidden: { opacity: 0, translateY: 40, skewX: -80, rotateY: 50 },
                                                visible: { opacity: 1, translateY: 0, skewX: 0, rotateY: 0 },
                                            }}
                                        >

                                            IXORA
                                        </motion.div>
                                        <motion.div
                                            className={` text-tilia-yellow-text text-center font-mono  welcomeTextOnImg py-5 text-2xl md:text-5xl lg:text-[80px]`}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.7 }}
                                            variants={{
                                                hidden: { opacity: 0, translateY: 40, skewX: -80, rotateY: 50 },
                                                visible: { opacity: 1, translateY: 0, skewX: 0, rotateY: 0 },
                                            }}
                                        >

                                            LUXURY
                                        </motion.div>
                                        <motion.div
                                            className={` text-tilia-yellow-text text-center font-mono  welcomeTextOnImg py-5 text-2xl md:text-5xl lg:text-[80px]`}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.7 }}
                                            variants={{
                                                hidden: { opacity: 0, translateY: 40, skewX: -80, rotateY: 50 },
                                                visible: { opacity: 1, translateY: 0, skewX: 0, rotateY: 0 },
                                            }}
                                        >

                                            RESIDENCE
                                        </motion.div>
                                    </div>
                                </div>
                            </Link>
                            {/* Container for images */}
                            <div className=" px-5 w-full h-full flex-col justify-center space-y-5">

                                <div className="flex justify-center">
                                    <motion.div
                                        className="sm:grid sm:grid-cols-2 "
                                        variants={container}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.2 }}
                                    >
                                        <div
                                            className={`m-auto w-full h-fit p-5`}
                                        >
                                            <div className="text-left text-black md:text-xl">
                                                Ixora Luxury Residence е бутикова сграда със спа център и финтес, ситуирана в подножието на Витоша. Изпълнението и всички довършителни работи са заложени в изключително висок - бутиков клас. Вертикалната планировка по специален ландшафтен проект оформя зелен пояс около сградата, който създава усещане за живот в паркова среда.
                                            </div>
                                        </div>
                                        {ixora.map(panel =>
                                            <ImageSquare
                                                alt="westEnd"
                                                url={panel}
                                                key={panel}
                                            />
                                        )}
                                    </motion.div>
                                </div>

                            </div>



                        </div>

                        {/* Container for Dalia*/}
                        <div
                            className="flex flex-col gap-10"
                        >
                            <div className="bg-tilia-white shadow-2xl">

                                <motion.div
                                    className={` text-tilia-yellow-text text-center font-mono  welcomeTextOnImg py-5 text-2xl md:text-5xl lg:text-[80px]`}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7 }}
                                    variants={{
                                        hidden: { opacity: 0, translateY: 40, skewX: -80, rotateY: 50 },
                                        visible: { opacity: 1, translateY: 0, skewX: 0, rotateY: 0 },
                                    }}
                                >

                                    DALIA
                                </motion.div>
                            </div>

                            {/* Container for images */}
                            <div className=" px-5 w-full h-full flex-col justify-center space-y-5">

                                <div className="flex justify-center">
                                    <motion.div
                                        className="sm:grid sm:grid-cols-2 "
                                        variants={container}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.2 }}
                                    >
                                        <div
                                            className={`m-auto w-full h-fit p-5`}
                                        >
                                            <div className="text-left text-black md:text-xl">
                                                Едно бижу в полите на Витоша с уникални гледки към София. Луксозен имот с над 700 кв.м. РЗП и двор от 750 кв.м. в престижния кв. Драгалевци.
                                            </div>
                                        </div>
                                        {dalia.map(panel =>
                                            <ImageSquare
                                                alt="westEnd"
                                                url={panel}
                                                key={panel}
                                            />
                                        )}
                                    </motion.div>
                                </div>

                            </div>


                        </div>

                        {/* Container for West End*/}
                        <div
                            className="flex flex-col gap-10"
                        >
                            <div className="bg-tilia-white shadow-2xl">
                                <div className="flex flex-row gap-2 sm:gap-5 justify-center items-center">
                                    <motion.div
                                        className={` text-tilia-yellow-text text-center font-mono  welcomeTextOnImg py-5 text-2xl md:text-5xl lg:text-[80px]`}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.7 }}
                                        variants={{
                                            hidden: { opacity: 0, translateY: 40, skewX: -80, rotateY: 50 },
                                            visible: { opacity: 1, translateY: 0, skewX: 0, rotateY: 0 },
                                        }}
                                    >
                                        WEST
                                    </motion.div>
                                    <motion.div
                                        className={` text-tilia-yellow-text text-center font-mono  welcomeTextOnImg py-5 text-2xl md:text-5xl lg:text-[80px]`}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.7 }}
                                        variants={{
                                            hidden: { opacity: 0, translateY: 40, skewX: -80, rotateY: 50 },
                                            visible: { opacity: 1, translateY: 0, skewX: 0, rotateY: 0 },
                                        }}
                                    >
                                        END
                                    </motion.div>
                                    <motion.div
                                        className={` text-tilia-yellow-text text-center font-mono  welcomeTextOnImg py-5 text-2xl md:text-5xl lg:text-[80px]`}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.7 }}
                                        variants={{
                                            hidden: { opacity: 0, translateY: 40, skewX: -80, rotateY: 50 },
                                            visible: { opacity: 1, translateY: 0, skewX: 0, rotateY: 0 },
                                        }}
                                    >
                                        LUXURY
                                    </motion.div>
                                    <motion.div
                                        className={` text-tilia-yellow-text text-center font-mono  welcomeTextOnImg py-5 text-2xl md:text-5xl lg:text-[80px]`}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.7 }}
                                        variants={{
                                            hidden: { opacity: 0, translateY: 40, skewX: -80, rotateY: 50 },
                                            visible: { opacity: 1, translateY: 0, skewX: 0, rotateY: 0 },
                                        }}
                                    >
                                        HOUSES
                                    </motion.div>
                                </div>
                            </div>



                            {/* Container for images */}
                            <div className=" px-5 w-full h-full flex-col justify-center space-y-5">

                                <div className="flex justify-center">
                                    <motion.div
                                        className="sm:grid sm:grid-cols-2 "
                                        variants={container}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.2 }}
                                    >
                                        <div
                                            className={`m-auto w-full h-fit p-5`}
                                        >
                                            <div className="text-left text-black md:text-xl">
                                                В процес на изграждане е луксозен комплекс от 18 самостоятелни еднофамилни къщи със собствени басейни в непосредствена близост до София - само на 20 минути от центъра. Напълно автономно вилно селище със собствен водоизточник и допълнително соларно захранване.
                                            </div>
                                        </div>
                                        {westEnd.map(panel =>
                                            <ImageSquare
                                                alt="westEnd"
                                                url={panel}
                                                key={panel}
                                            />
                                        )}
                                    </motion.div>
                                </div>

                            </div>



                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
