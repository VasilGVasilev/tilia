
'use client'

import { useState } from "react";
import { imageLoader } from "@/utils/imgLoader";
import Image from "next/image";
import { motion } from "framer-motion";
import Modal from "@/components/Modal";
import Link from "next/link";
import { noto } from "@/utils/fonts";


export const revalidate = 0; // revalidate this page every 60 seconds


const sold = "hover:bg-red-700 hover:opacity-40 active:bg-red-700 active:opacity-40";
const available = "hover:bg-green-400 hover:opacity-40 active:bg-green-400 active:opacity-40 cursor-pointer";
const reserved = "hover:bg-blue-400 hover:opacity-40 active:bg-blue-400 active:opacity-40 cursor-pointer";



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
                    Трети етаж
                </motion.div>

            </div>



            {/* Container for floor plan */}
            <div className="">

                <div>
                    <div className="relative inline-block">
                        <Link href={'/apartments/app/A1'}>
                            <div className={`absolute apartmentTwelve h-full w-full z-10 ${available}`} title="СВОБОДЕН"></div>
                        </Link>

                        <div className={`absolute apartmentEleven h-full w-full z-10 ${sold}`} title="ПРОДАДЕН"></div>

                        <Link href={'/apartments/app/A1'}>
                            <div className={`absolute apartmentTen h-full w-full z-10 ${available}`} title="СВОБОДЕН" ></div>

                        </Link>
                        <Link href={'/apartments/app/A1'}>
                            <div className={`absolute apartmentNine h-full w-full z-10 ${available} `} title="СВОБОДЕН"></div>

                        </Link>


                        {/* <img src="/plans/third-floor.webp" alt="Ixora Plan" className="relative" /> */}

                        <div className='relative '>
                            <img src="/plans/third-to-seventh-floor.webp" alt="" />
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

