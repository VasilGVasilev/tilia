
'use client'

import Image from "next/image"
import { imageLoader } from "../../utils/imgLoader";
import Maps from "@/components/Location";
import Link from "next/link";
import { motion } from "framer-motion";

import { SlLocationPin } from 'react-icons/sl'
import { BsTelephone } from 'react-icons/bs'
import { TfiEmail } from 'react-icons/tfi'
import { noto, playfair, roboto } from "@/utils/fonts";
import { container, letterVariant } from "../Home";


export const revalidate = 0; // revalidate this page every 60 seconds

// todo: remove /test

export default function Contacts() {


    return (
        <div>
            <div className="">
                <div className="bg-white w-full h-10"></div>
                {/* Investor tag */}
                <div className="investorIntroBg pb-10">
                    <motion.div
                        className={`flex flex-row justify-center items-center ${noto.className} welcomeTextOnImg text-[#D7D7DF] text-left py-5 text-6xl md:text-8xl lg:text-[150px] xl:text-[200px]`}

                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                    >
                        <motion.span variants={letterVariant}>К</motion.span>
                        <motion.span variants={letterVariant}>О</motion.span>
                        <motion.span variants={letterVariant}>Н</motion.span>
                        <motion.span variants={letterVariant}>Т</motion.span>
                        <motion.span variants={letterVariant}>А</motion.span>
                        <motion.span variants={letterVariant}>К</motion.span>
                        <motion.span variants={letterVariant}>Т</motion.span>
                        <motion.span variants={letterVariant}>И</motion.span>

                    </motion.div>

                </div>


            </div>

            <div className="flex flex-col justify-center items-center gap-10 bg-tilia-gray p-12 md:p-20">
                <img src="/tilia/tilia-location-architect.webp" className="h-fit w-fit lg:h-1/2 lg:w-1/2 rounded-lg" alt="" />
                <div className={`${roboto.className} flex flex-col justify-center items-center text-xl text-center gap-5`}>
                    <h3 className="text-2xl font-bold">
                        Офис "Продажби"
                    </h3>
                    <div>
                        <div className="text-neutral-600">
                            "Върбница 2", Район Връбница, гр. София
                        </div>
                        <div className="text-neutral-600">
                            <a href={`tel:00359886879993`} className="text-green-700">+359886879993</a>
                        </div>
                    </div>
                    <div>
                        <div className="text-neutral-600">
                            понеделник – петък: 8:30 до 17:30
                        </div>
                        <div className="text-neutral-600">
                            <a href="mailto:office@creativestudiobg.com" className="text-green-700">office@creativestudiobg.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

