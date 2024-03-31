
'use client'

import { imageLoader } from "@/utils/imgLoader";
import Image from "next/image";
import { motion } from "framer-motion";


import { noto } from "@/utils/fonts";


export const revalidate = 0; // revalidate this page every 60 seconds


const red = "hover:bg-red-700 hover:opacity-50";
const blue = "hover:bg-blue-700 hover:opacity-50";
const green = "hover:bg-green-400 hover:opacity-50";



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
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    variants={{
                        hidden: { opacity: 0, translateY: 20, skewX: -80, rotateY: 50 },
                        visible: { opacity: 1, translateY: 0, skewX: 0, rotateY: 0 },
                    }}
                >
                    Гараж ниво -2
                </motion.div>

            </div>



            {/* Container for floor plan */}
            <div className="">

                <div>
                    <div className="relative inline-block">

                        <div className={`absolute parking-12 h-full w-full z-10 ${green}`} title='СВОБОДЕН'></div>
                        <div className={`absolute parking-13 h-full w-full z-10 ${green}`} title='СВОБОДЕН'></div>
                        <div className={`absolute parking-14 h-full w-full z-10 ${red}`} title='СВОБОДЕН'></div>
                        <div className={`absolute parking-15 h-full w-full z-10 ${green}`} title='СВОБОДЕН'></div>
                        <div className={`absolute parking-16 h-full w-full z-10 ${green}`} title='СВОБОДЕН'></div>
                        <div className={`absolute parking-17 h-full w-full z-10 ${green}`} title='СВОБОДЕН'></div>
                        <div className={`absolute parking-18 h-full w-full z-10 ${green}`} title='СВОБОДЕН'></div>
                        <div className={`absolute parking-19 h-full w-full z-10 ${green}`} title='СВОБОДЕН'></div>
                        <div className={`absolute parking-20 h-full w-full z-10 ${green}`} title='СВОБОДЕН'></div>
                        <div className={`absolute parking-21 h-full w-full z-10 ${green}`} title='СВОБОДЕН'></div>
                        <div className={`absolute parking-22 h-full w-full z-10 ${green}`} title='СВОБОДЕН'></div>


                        <div className={`absolute maze-4 h-full w-full z-10 ${green}`} title='СВОБОДЕН'></div>
                        <div className={`absolute maze-5 h-full w-full z-10 ${green}`} title='СВОБОДЕН'></div>
                        <div className={`absolute maze-6 h-full w-full z-10 ${green}`} title='СВОБОДЕН'></div>
                        <div className={`absolute maze-7 h-full w-full z-10 ${green}`} title='СВОБОДЕН'></div>
                        <div className={`absolute maze-8 h-full w-full z-10 ${green}`} title='СВОБОДЕН'></div>


                        {/* <img src="/plans/third-floor.webp" alt="Tilia Plan" className="relative" /> */}

                        <div className='relative '>
                            {/* <img src="/plans/parking-2.webp" alt="" /> */}
                            <Image
                                loader={imageLoader}
                                src='/plans/parking-2.webp'
                                alt="Tilia Plan"
                                width={9850}
                                height={6200}
                            ></Image>
                        </div>

                    </div>
                </div>


            </div>
        </>
    )
}

