
'use client'

import { useState } from "react";
import { imageLoader } from "@/utils/imgLoader";
import Image from "next/image";
import { motion } from "framer-motion";
import Modal from "@/components/Modal";
import Link from "next/link";
import { noto } from "@/utils/fonts";
import { data } from "@/data";

export const revalidate = 0; // revalidate this page every 60 seconds

// THERE IS A PROBLEM WITH TEMPLATE LITERALS AND CONDITIONS

const red = "hover:bg-red-700 hover:opacity-50";
const green = "hover:bg-green-400 hover:opacity-50 cursor-pointer";
const reserved = "hover:bg-blue-400 hover:opacity-50 cursor-pointer";

export const LinkWrapper = ({status, appLink, appCss}) => {
    if(status){
        return (<Link href={`/apartments/app/${appLink}`} className={`absolute ${appCss} h-full w-full z-10 ${green}`} title='СВОБОДЕН'></Link>)
    } else {
        return (<div className={`absolute ${appCss} h-full w-full z-10 ${red}`} title='ПРОДАДЕН' ></div>)
    }
}

export default function Floor() {

    return (
        <>
            {/* Necessary to lower the Title be visible */}
            <div className="bg-white w-full h-10"></div>

            {/* TITLE */}
            <div className="text-tilia-yellow-text flex flex-row bg-white p-10">
                <motion.div
                    className={`${noto.className} text-2xl md:text-5xl lg:text-[80px]`}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.7, delay: 0.3 }}
                    variants={{
                        hidden: { opacity: 0, translateY: 20, skewX: -80, rotateY: 50 },
                        visible: { opacity: 1, translateY: 0, skewX: 0, rotateY: 0 },
                    }}
                >
                    Първи етаж
                </motion.div>

            </div>



            {/* Container for floor plan */}
            <div className="">

                <div>
                    <div className="relative inline-block">
                        <LinkWrapper status={data.appA1.available} appLink={data.appA1.appLink} appCss={data.appA1.appCss}></LinkWrapper>
                        <LinkWrapper status={data.appA2.available} appLink={data.appA2.appLink} appCss={data.appA2.appCss}></LinkWrapper>
                        <LinkWrapper status={data.appB3.available} appLink={data.appB3.appLink} appCss={data.appB3.appCss}></LinkWrapper>
                        


                        <div className='relative '>
                            <img src="/plans/first-floor.webp" alt="" />
                            {/* <Image
                                loader={imageLoader}
                                src='/plans/third-floor.webp'
                                alt="Ixora Plan"
                                width={3509}
                                height={4967}
                            ></Image> */}
                        </div>

                    </div>
                </div>


            </div>
        </>
    )
}

