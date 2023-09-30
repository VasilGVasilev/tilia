
'use client'

import { useState } from "react";
import { imageLoader } from "@/utils/imgLoader";
import Image from "next/image";
import { motion } from "framer-motion";
import Modal from "@/components/Modal";
import Link from "next/link";
import { noto } from "@/utils/fonts";


export const revalidate = 0; // revalidate this page every 60 seconds


const red = "hover:bg-red-700 hover:opacity-50";
const green = "hover:bg-green-400 hover:opacity-50 cursor-pointer";



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
                    Пети етаж
                </motion.div>

            </div>



            {/* Container for floor plan */}
            <div className="">

                <div>
                    <div className="relative inline-block">
                        <Link href={`/apartments/app/A16`}><div className={`absolute app-A16 h-full w-full z-10 ${green}`} title='СВОБОДЕН'></div></Link>
                        <Link href={`/apartments/app/A17`}><div className={`absolute app-A17 h-full w-full z-10 ${green}`} title='СВОБОДЕН'></div></Link>
                        <Link href={`/apartments/app/B18`}><div className={`absolute app-B18 h-full w-full z-10 ${green}`} title='СВОБОДЕН'></div></Link>
                        <Link href={`/apartments/app/B19`}><div className={`absolute app-B19 h-full w-full z-10 ${green}`} title='СВОБОДЕН'></div></Link>




                        {/* <img src="/plans/third-floor.webp" alt="Ixora Plan" className="relative" /> */}

                        <div className='relative '>
                            <img src="/plans/fourth-to-seventh-floor.webp" alt="" />
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

