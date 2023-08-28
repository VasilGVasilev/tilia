'use client'

import Link from "next/link";
import Image from "next/image"
import { imageLoader } from "../../utils/imgLoader";
import { lato } from "@/utils/fonts";
import { motion } from "framer-motion";

import { letterVariant, container } from "../Home";

import { noto } from "@/utils/fonts";


// image slider
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { useState } from "react";


export const revalidate = 0; // revalidate this page every 60 seconds



export default function Investor() {

    // image slider
    const [dalia, setDalia] = useState(["/dalia/dalia-one.webp", "/dalia/dalia-two.webp", "/dalia/dalia-three.webp"]);
    const [westEnd, setWestEnd] = useState(["/west-end/west-end-one.webp", "/west-end/west-end-two.webp", "/west-end/west-end-three.webp"]);
    const [ixora, setIxora] = useState(["/ixora/ixora-one.webp", "/ixora/ixora-two.webp", "/ixora/ixora-three.webp"]);



    return (
        <>

            <div className="pb-10 bg-tilia-yellow-block">

                {/* INTRO */}
                <div className="">
                    <div className="bg-white w-full h-10"></div>
                    {/* Investor tag */}
                    <div className="investorIntroBg">
                        <motion.div
                            className={`flex flex-row justify-center items-center ${noto.className} welcomeTextOnImg text-[#D7D7DF] text-left p-10 text-6xl md:text-7xl lg:text-[120px] xl:text-[180px]`}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            variants={{
                                hidden: { opacity: 0, x: -200 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            ЕКИП
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

                    {/* Title */}
                    <div
                        className="bg-tilia-yellow-block py-14"
                    >
                        <motion.div
                            className={`${noto.className} text-white pl-5 text-left text-6xl xl:text-[100px] `}
                            variants={container}
                            initial="hidden"
                            whileInView="visible"
                        >
                            <motion.span variants={letterVariant}>Н</motion.span>
                            <motion.span variants={letterVariant}>А</motion.span>
                            <motion.span variants={letterVariant}>Ш</motion.span>
                            <motion.span variants={letterVariant}>И</motion.span>
                            <motion.span variants={letterVariant}>Т</motion.span>
                            <motion.span variants={letterVariant}>Е</motion.span>
                            <motion.span variants={letterVariant}> </motion.span>
                            <motion.span variants={letterVariant}>П</motion.span>
                            <motion.span variants={letterVariant}>Р</motion.span>
                            <motion.span variants={letterVariant}>О</motion.span>
                            <motion.span variants={letterVariant}>Е</motion.span>
                            <motion.span variants={letterVariant}>К</motion.span>
                            <motion.span variants={letterVariant}>Т</motion.span>
                            <motion.span variants={letterVariant}>И</motion.span>
                        </motion.div>
                    </div>

                    {/* Container for projects */}
                    <div className="">

                        {/* Container for Dalia*/}
                        <div
                            className="flex flex-col gap-10"
                        >
                            <div className="bg-tilia-white">

                                <motion.div
                                    className={` text-tilia-yellow-text text-center font-mono ${noto.className} welcomeTextOnImg p-10 text-4xl md:text-5xl lg:text-[80px] xl:text-[100px]`}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4, duration: 0.6 }}
                                    variants={{
                                        hidden: { opacity: 0, x: -100, },
                                        visible: { opacity: 1, x: 0, },
                                    }}
                                >

                                    ДАЛИЯ
                                </motion.div>
                            </div>

                            {/* Container for images */}
                            <div className=" px-5 w-full h-full flex-col justify-center space-y-5">

                                {/* Container for image with overflow effect, this template to be used for subsequent pictures */}
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4, duration: 0.6 }}
                                    variants={{
                                        hidden: { opacity: 0, scale: 0 },
                                        visible: { opacity: 1, scale: 1 },
                                    }}
                                >
                                    <Flicking circular={true} >
                                        {dalia.map(panel =>
                                            <Image
                                                loader={imageLoader}
                                                src={`${panel}`}
                                                alt="Dalia"
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                className="flicking-panel w-2/3 h-2/3 px-5 sm:px-10"
                                                key={panel}
                                            />
                                        )}

                                    </Flicking>
                                </motion.div>

                            </div>


                        </div>

                        {/* Container for West End*/}
                        <div
                            className="flex flex-col gap-10"
                        >
                            <div className="bg-tilia-white">

                                <motion.div
                                    className={` text-tilia-yellow-text text-center font-mono ${noto.className} welcomeTextOnImg p-10 text-4xl md:text-5xl lg:text-[80px] xl:text-[100px]`}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4, duration: 0.6 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 100, },
                                        visible: { opacity: 1, x: 0, },
                                    }}
                                >

                                    WEST END LUXURY HOUSES
                                </motion.div>
                            </div>

                            {/* Container for images */}
                            <div className=" px-5 w-full h-full flex-col justify-center space-y-5">

                                {/* Container for image with overflow effect, this template to be used for subsequent pictures */}
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4, duration: 0.6 }}
                                    variants={{
                                        hidden: { opacity: 0, scale: 0 },
                                        visible: { opacity: 1, scale: 1 },
                                    }}
                                >
                                    <Flicking circular={true} >
                                        {westEnd.map(panel =>
                                            <Image
                                                loader={imageLoader}
                                                src={`${panel}`}
                                                alt="westEnd"
                                                height={0}
                                                width={0}
                                                sizes="100vw"
                                                className="flicking-panel w-2/3 h-2/3 px-5 sm:px-10"
                                                key={panel}
                                            />
                                        )}

                                    </Flicking>
                                </motion.div>

                            </div>

                        </div>




                        {/* Container for West End*/}
                        <div
                            className="flex flex-col gap-10"
                        >
                            <div className="bg-tilia-white">

                                <motion.div
                                    className={` text-tilia-yellow-text text-center font-mono ${noto.className} welcomeTextOnImg p-10 text-4xl md:text-5xl lg:text-[80px] xl:text-[100px]`}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4, duration: 0.6 }}
                                    variants={{
                                        hidden: { opacity: 0, x: -100, },
                                        visible: { opacity: 1, x: 0, },
                                    }}
                                >

                                    IXORA LUXURY RESIDENCE
                                </motion.div>
                            </div>

                            {/* Container for images */}
                            <div className=" px-5 w-full h-full flex-col justify-center space-y-5">

                                {/* Container for image with overflow effect, this template to be used for subsequent pictures */}
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4, duration: 0.6 }}
                                    variants={{
                                        hidden: { opacity: 0, scale: 0 },
                                        visible: { opacity: 1, scale: 1 },
                                    }}
                                >
                                    <Flicking circular={true} >
                                        {ixora.map(panel =>
                                            <Image
                                                loader={imageLoader}
                                                src={`${panel}`}
                                                alt="ixora"
                                                width={0}
                                                height={0}
                                                sizes="100vw"

                                                className="flicking-panel w-2/3 h-2/3 px-5 sm:px-10"
                                                key={panel}
                                            />
                                        )}

                                    </Flicking>
                                </motion.div>

                            </div>


                        </div>



                    </div>
                </div>
            </div>
        </>
    )
}
