"use client";

import Link from "next/link";
import { lato } from "@/utils/fonts";
import { motion } from "framer-motion";

import { letterVariant, container } from "../Home";

import { noto } from "@/utils/fonts";

import { useState } from "react";
import { ImageSquare } from "@/components/InvestorImage";
import PicsLightbox from "@/components/Lightbox";
import {
    DaliaDescription,
    IxoraDescription,
    WestEndDescription,
} from "@/components/OtherProjectDescriptions";
import { HiExternalLink } from "react-icons/hi";

export const revalidate = 0; // revalidate this page every 60 seconds

export default function Investor() {
    // picture click modal states
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedPic, setSelectedPic] = useState(null);

    // image info
    const [dalia, setDalia] = useState([
        "/dalia/dalia-one.webp",
        "/dalia/dalia-two.webp",
        "/dalia/dalia-three.webp",
    ]);
    const [westEnd, setWestEnd] = useState([
        "/west-end/west-end-one.webp",
        "/west-end/west-end-two.webp",
        "/west-end/west-end-three.webp",
    ]);
    const [ixora, setIxora] = useState([
        "/ixora/ixora-one.webp",
        "/ixora/ixora-two.webp",
        "/ixora/ixora-three.webp",
    ]);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <PicsLightbox
                isOpen={modalOpen}
                onClose={closeModal}
                url={selectedPic}
                alt={selectedPic}
            ></PicsLightbox>

            <div className="pb-10 bg-tilia-yellow-block">
                {/* INTRO */}
                <div className="">
                    {/* Necessary to lower the Title be visible */}
                    <div className="bg-white w-full h-10"></div>

                    {/* Investor tag */}
                    <div className="investorIntroBg">
                        <motion.div
                            className={`flex flex-row justify-center items-center ${noto.className} welcomeTextOnImg text-[#D7D7DF] text-left py-5 text-6xl md:text-8xl lg:text-[150px] xl:text-[200px]`}
                            viewport={{ once: true }}
                            variants={container}
                            initial="hidden"
                            whileInView="visible"
                        >
                            <motion.span variants={letterVariant}>
                                П
                            </motion.span>
                            <motion.span variants={letterVariant}>
                                Р
                            </motion.span>
                            <motion.span variants={letterVariant}>
                                О
                            </motion.span>
                            <motion.span variants={letterVariant}>
                                Е
                            </motion.span>
                            <motion.span variants={letterVariant}>
                                К
                            </motion.span>
                            <motion.span variants={letterVariant}>
                                Т
                            </motion.span>
                            <motion.span variants={letterVariant}>
                                И
                            </motion.span>
                        </motion.div>
                    </div>

                    {/* Container for Investor Intro */}
                    <div className="bg-tilia-gray p-10 lg:px-32  flex flex-col sm:flex-row justify-center items-center gap-10">
                        {/* Container for Investor Logo and Name */}
                        <div className="w-1/4">
                            <Link href={`https://creativestudiobg.com/`}>
                                <motion.img
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    variants={{
                                        hidden: { opacity: 0, x: -100 },
                                        visible: { opacity: 1, x: 0 },
                                    }}
                                    transition={{ delay: 1, duration: 0.5 }}
                                    src="/investor-logo.webp"
                                    alt="investor-logo"
                                    className="h-20 w-50 md:h-32 md:w-60"
                                ></motion.img>
                            </Link>
                        </div>

                        {/* Container for Description of Investor */}
                        <div className={`${lato.className} w-3/4 space-y-3`}>
                            <motion.div
                                className="text-black text-justify font-black"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, scale: 1.3 },
                                    visible: { opacity: 1, scale: 1 },
                                }}
                            >
                                <Link href={`https://creativestudiobg.com/`} className="flex text-3xl">
                                    Creative Studio{" "}
                                    <HiExternalLink size={20} className="" />
                                </Link>

                            </motion.div>
                            <motion.div
                                className="text-black text-justify font-bold"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, scale: 1.3 },
                                    visible: { opacity: 1, scale: 1 },
                                }}
                            >
                                е строително-инвестиционно холдингово дружество,
                                което финансира, проектира и изгражда луксозни
                                многофамилни и еднофамилни жилищни сгради и ги
                                реализира на пазара.
                            </motion.div>
                            <motion.div
                                className="text-black text-justify "
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay: 0.9, duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, scale: 1.3 },
                                    visible: { opacity: 1, scale: 1 },
                                }}
                            >
                                Мотото на компанията при изпълнение на
                                инвестиционните проекти гласи - "Creating
                                Excellence" или "Създаване на съвършенство".
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Container for Recent Projects */}
                <div className="bg-tilia-yellow-block">
                    {/* Container for projects */}
                    <div className="">
                        {/* Container for Ixora*/}
                        <div className="flex flex-col gap-10">
                            <Link href={`https://ixorabg.com/`}>
                                <div className="bg-tilia-white hover:bg-black text-tilia-yellow-text hover:text-white shadow-2xl flex flex-row gap-3 justify-center items-top">
                                    <div className="flex flex-row gap-2 sm:gap-5 justify-center items-center ">
                                        <motion.div
                                            className={`  text-center font-mono  welcomeTextOnImg py-5 text-2xl md:text-5xl lg:text-[80px]`}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.7 }}
                                            variants={{
                                                hidden: {
                                                    opacity: 0,
                                                    translateY: 20,
                                                    skewX: -80,
                                                    rotateY: 50,
                                                },
                                                visible: {
                                                    opacity: 1,
                                                    translateY: 0,
                                                    skewX: 0,
                                                    rotateY: 0,
                                                },
                                            }}
                                        >
                                            IXORA
                                        </motion.div>
                                        <motion.div
                                            className={`  text-center font-mono  welcomeTextOnImg py-5 text-2xl md:text-5xl lg:text-[80px]`}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.7 }}
                                            variants={{
                                                hidden: {
                                                    opacity: 0,
                                                    translateY: 20,
                                                    skewX: -80,
                                                    rotateY: 50,
                                                },
                                                visible: {
                                                    opacity: 1,
                                                    translateY: 0,
                                                    skewX: 0,
                                                    rotateY: 0,
                                                },
                                            }}
                                        >
                                            LUXURY
                                        </motion.div>
                                        <motion.div
                                            className={`  text-center font-mono  welcomeTextOnImg py-5 text-2xl md:text-5xl lg:text-[80px]`}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.7 }}
                                            variants={{
                                                hidden: {
                                                    opacity: 0,
                                                    translateY: 20,
                                                    skewX: -80,
                                                    rotateY: 50,
                                                },
                                                visible: {
                                                    opacity: 1,
                                                    translateY: 0,
                                                    skewX: 0,
                                                    rotateY: 0,
                                                },
                                            }}
                                        >
                                            RESIDENCE
                                        </motion.div>
                                    </div>
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.7 }}
                                        variants={{
                                            hidden: {
                                                opacity: 0,
                                                translateY: 20,
                                                skewX: -80,
                                                rotateY: 50,
                                            },
                                            visible: {
                                                opacity: 1,
                                                translateY: 0,
                                                skewX: 0,
                                                rotateY: 0,
                                            },
                                        }}
                                    >
                                        <HiExternalLink
                                            size={24}
                                            className=""
                                        />
                                    </motion.div>
                                </div>
                            </Link>
                            {/* Container for images */}
                            <div className=" px-5 xl:px-24 w-full h-full flex-col justify-center space-y-5">
                                <div className="flex justify-center">
                                    <motion.div
                                        className="sm:grid sm:grid-cols-2 "
                                        variants={{
                                            hidden: {},
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.7,
                                                },
                                            },
                                        }}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.2 }}
                                    >
                                        <IxoraDescription />

                                        {ixora.map((panel) => (
                                            <ImageSquare
                                                alt="ixora"
                                                url={panel}
                                                key={panel}
                                                openModal={openModal}
                                                setSelectedPic={setSelectedPic}
                                                selectedPic={selectedPic}
                                                urlW={5000}
                                                urlH={2813}
                                            />
                                        ))}
                                    </motion.div>
                                </div>
                            </div>
                        </div>

                        {/* Container for Dalia*/}
                        <div className="flex flex-col gap-10">
                            <Link href={`https://creativestudiobg.com/dalia/`}>
                                <div className="bg-tilia-white hover:bg-black text-tilia-yellow-text hover:text-white shadow-2xl flex flex-row gap-3 justify-center items-top">
                                    <div className="flex flex-row gap-2 sm:gap-5 justify-center items-center ">
                                        <motion.div
                                            className={`  text-center font-mono  welcomeTextOnImg py-5 text-2xl md:text-5xl lg:text-[80px]`}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.7 }}
                                            variants={{
                                                hidden: {
                                                    opacity: 0,
                                                    translateY: 20,
                                                    skewX: -80,
                                                    rotateY: 50,
                                                },
                                                visible: {
                                                    opacity: 1,
                                                    translateY: 0,
                                                    skewX: 0,
                                                    rotateY: 0,
                                                },
                                            }}
                                        >
                                            DAHLIA
                                        </motion.div>
                                    </div>
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.7 }}
                                        variants={{
                                            hidden: {
                                                opacity: 0,
                                                translateY: 20,
                                                skewX: -80,
                                                rotateY: 50,
                                            },
                                            visible: {
                                                opacity: 1,
                                                translateY: 0,
                                                skewX: 0,
                                                rotateY: 0,
                                            },
                                        }}
                                    >
                                        <HiExternalLink
                                            size={24}
                                            className=""
                                        />
                                    </motion.div>
                                </div>
                            </Link>

                            {/* Container for images */}
                            <div className=" px-5 xl:px-24 w-full h-full flex-col justify-center space-y-5">
                                <div className="flex justify-center">
                                    <motion.div
                                        className="sm:grid sm:grid-cols-2 "
                                        variants={{
                                            hidden: {},
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.7,
                                                },
                                            },
                                        }}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.2 }}
                                    >
                                        <DaliaDescription />

                                        {dalia.map((panel) => (
                                            <ImageSquare
                                                alt="dalia"
                                                url={panel}
                                                key={panel}
                                                openModal={openModal}
                                                setSelectedPic={setSelectedPic}
                                                selectedPic={selectedPic}
                                                urlW={5000}
                                                urlH={3000}
                                            />
                                        ))}
                                    </motion.div>
                                </div>
                            </div>
                        </div>

                        {/* Container for West End*/}
                        <div className="flex flex-col gap-10">
                            <div className="bg-tilia-white shadow-2xl">
                                <div className="flex flex-row gap-2 sm:gap-5 justify-center items-center">
                                    <motion.div
                                        className={` text-tilia-yellow-text text-center font-mono  welcomeTextOnImg py-5 text-2xl md:text-5xl lg:text-[80px]`}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.7 }}
                                        variants={{
                                            hidden: {
                                                opacity: 0,
                                                translateY: 20,
                                                skewX: -80,
                                                rotateY: 50,
                                            },
                                            visible: {
                                                opacity: 1,
                                                translateY: 0,
                                                skewX: 0,
                                                rotateY: 0,
                                            },
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
                                            hidden: {
                                                opacity: 0,
                                                translateY: 20,
                                                skewX: -80,
                                                rotateY: 50,
                                            },
                                            visible: {
                                                opacity: 1,
                                                translateY: 0,
                                                skewX: 0,
                                                rotateY: 0,
                                            },
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
                                            hidden: {
                                                opacity: 0,
                                                translateY: 20,
                                                skewX: -80,
                                                rotateY: 50,
                                            },
                                            visible: {
                                                opacity: 1,
                                                translateY: 0,
                                                skewX: 0,
                                                rotateY: 0,
                                            },
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
                                            hidden: {
                                                opacity: 0,
                                                translateY: 20,
                                                skewX: -80,
                                                rotateY: 50,
                                            },
                                            visible: {
                                                opacity: 1,
                                                translateY: 0,
                                                skewX: 0,
                                                rotateY: 0,
                                            },
                                        }}
                                    >
                                        HOUSES
                                    </motion.div>
                                </div>
                            </div>

                            {/* Container for images */}
                            <div className="px-5 xl:px-24 w-full h-full flex-col justify-center space-y-5">
                                <div className="flex justify-center">
                                    <motion.div
                                        className="sm:grid sm:grid-cols-2 "
                                        variants={{
                                            hidden: {},
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.7,
                                                },
                                            },
                                        }}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.2 }}
                                    >
                                        <WestEndDescription />

                                        {westEnd.map((panel) => (
                                            <ImageSquare
                                                alt="westEnd"
                                                url={panel}
                                                key={panel}
                                                openModal={openModal}
                                                setSelectedPic={setSelectedPic}
                                                selectedPic={selectedPic}
                                                urlW={4000}
                                                urlH={3000}
                                            />
                                        ))}
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
