"use client";
import Image from "next/image";
import { imageLoader } from "../utils/imgLoader";
import Timeline from "@/components/Timeline";
import ForBuilding from "@/components/ForBuidling";
import { motion } from "framer-motion";
import { noto, roboto } from "@/utils/fonts";
import ApartmentTypes from "@/components/ApartmentTypes";
import WalkingDistance from "@/components/WalkingDistance";
import Floors from "@/components/Floors";
import dynamic from "next/dynamic";
import Kota0 from "@/components/kota0";
import Interior from "@/components/Interior";

export const revalidate = 0; // revalidate this page every 60 seconds

// TODO:
// sitemap update
// when an apartment is sold, set available status to false

const ParalaxWalking = dynamic(() => import("../components/ParalaxWalking"));

export const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.3,
        },
    },
};

export const containerAIText = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: 0.7,
            staggerChildren: 0.2,
        },
    },
};

export const containerWalking = {
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

const rowVariant = {
    hidden: { opacity: 0, scale: 1.3 },
    visible: { opacity: 1, scale: 1 },
};

export default function Home() {
    return (
        <div>
            {/* WELCOME IMG AND TEXT */}

            <div className="flex flex-col justify-center items-center gap-10 px-10 pt-6 md:pt-20 mt-7 pb-10">
                {/* IMG */}
                <div className={`relative text-center`}>
                    <div
                        // before:w-full before:max-w-[400px] md:before:max-w-[600px], biggest width but not more than 400px, 600px
                        className="relative z-0 ml-5 before:absolute before:-top-25 before:-left-5 sm:before:-top-20 sm:before:-left-20  before:rounded-t-[1200px]
            before:w-full before:max-w-[1200px] md:before:max-w-[1400px]  before:opacity-20 before:h-full before:border-2 before:border-tilia-yellow-block before:z-[-1]"
                    >
                        <Image
                            className="z-10 w-full rounded-t-[1200px] max-w-[1200px] md:max-w-[1400px]"
                            loader={imageLoader}
                            src="/interior/006.webp"
                            alt="tilia one"
                            width={4946}
                            height={3216}
                        ></Image>
                    </div>

                    <div className="absolute top-10 left-1/3 translate-x-[-50%] translate-y-[-50%] flex flex-col justify-end items-center">
                        <div className="text-black text-lg md:text-2xl lg:text-4xl ">
                            ЖИЛИЩНА СГРАДА
                        </div>
                        <div
                            className={`${noto.className} text-tilia-yellow-block py-5 text-7xl md:text-[140px] welcomeTextOnImgBlc`}
                            // initial="hidden"
                            // whileInView="visible"
                            // transition={{ duration: 0.3 }}
                            // variants={{
                            //     hidden: { opacity: 0, translateY: 20, skewX: -80, rotateY: 50 },
                            //     visible: { opacity: 1, translateY: 0, skewX: 0, rotateY: 0 },
                            // }}
                        >
                            ТИЛИЯ
                        </div>
                    </div>
                </div>

                {/* TEXT */}
                <span
                    className="font-bold"
                    // initial="hidden"
                    // whileInView="visible"
                    // viewport={{ once: true }}
                    // variants={{
                    //     hidden: { opacity: 0, scale: 1.3 },
                    //     visible: { opacity: 1, scale: 1 },
                    // }}
                >
                    Проектът е с осигурено банково финансиране до акт 16.
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-justify">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={rowVariant}
                        viewport={{ once: true }}
                    >
                        В сърцето на квартал Връбница, в близост до Северен
                        парк, се развива новият жилищен проект "Тилия Резидънс".
                        Тук жителите могат да се насладят на спокойствието на
                        квартала, без да се отказват от лесния достъп до
                        търговски центрове, ресторанти и обществен транспорт.
                        Идеално място за хора, които търсят съчетание от
                        съвременен стил, удобства и близост до градските
                        удоволствия.
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={rowVariant}
                        viewport={{ once: true }}
                    >
                        Този обект в процес на строителство представлява
                        комбинация от модерен дизайн, функционални
                        разпределения, качествени материали и перфектна локация,
                        която обещава уникално жилищно изживяване.
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={rowVariant}
                        viewport={{ once: true }}
                    >
                        Сградата разполага с различни по площ апартаменти,
                        предлагащи разнообразни възможности за клиентите. Светли
                        стаи, големи прозорци и балкони с прекрасни изгледи
                        създават уютна атмосфера във всеки от тях.
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={rowVariant}
                        viewport={{ once: true }}
                    >
                        Съчетавайки съвременен стил и комфорт с идеалната
                        локация, "Тилия Резидънс" обещава да бъде вашият дом, в
                        който ще създавате спомени и усещания за комфорт и уют.
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={rowVariant}
                        viewport={{ once: true }}
                    >
                        Независимо дали търсите първия си собствен дом или
                        идеалната инвестиция в недвижими имоти, "Тилия Резидънс"
                        предоставя всичко, от което се нуждаете.
                    </motion.div>
                </div>
            </div>

            {/* WELCOME IMG WALKING AND METRO CLOSE */}

            <div className="relative">
                {/* <video className="w-full h-full" autoPlay={true} muted={true} loop={true} playsInline={true} >
                    <source src="/video.MP4" type="video/MP4" />
                    Your browser does not support the video tag.
                </video> */}
                <img
                    src="/tilia/tilia-walking-people.webp"
                    alt="dvor"
                    width={5568}
                    height={3132}
                />

                {/* <Image
                    loader={imageLoader}
                    src="/tilia/tilia-walking-people.webp"
                    alt="dvor"
                    width={5568}
                    height={3132}
                ></Image> */}

                <div className="absolute bottom-[5%] left-4 md:left-10 w-full h-full flex flex-col items-start justify-center">
                    <div
                        className={`${roboto.className} welcomeTextOnImgBlc md:pb-16 text-[#F0D5CA] text-center md:text-xl lg:text-3xl `}
                    >
                        НА КРАЧКИ ОТ МЕТРОТО
                    </div>
                    <motion.div
                        className={`${roboto.className} welcomeTextOnImgBlc text-[#F0D5CA] text-center text-xl md:text-3xl lg:text-5xl `}
                        variants={containerWalking}
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

            {/* INTERIOR */}
            <div className="bg-tilia-yellow-block">
                <Interior></Interior>
            </div>

            {/* TIMELINE */}
            <div className="bg-tilia-gray">
                <Timeline></Timeline>
            </div>

            {/* kota 0 */}
            <div className="bg-tilia-gray">
                <Kota0></Kota0>
            </div>

            {/* TYPES OF APARTMENTS */}
            <div className="bg-tilia-yellow-block">
                <ApartmentTypes></ApartmentTypes>
            </div>

            {/* Floors */}
            <div className="bg-tilia-gray">
                <Floors></Floors>
            </div>

            {/* DESCRIPTION */}
            <div className="bg-tilia-yellow-block">
                <ForBuilding></ForBuilding>
            </div>

            {/* PARALLAX TILIA WALKING PEOPLE */}

            <ParalaxWalking />

            {/* NEXT TO METRO */}
            <div className="bg-white">
                <WalkingDistance></WalkingDistance>
            </div>
        </div>
    );
}
