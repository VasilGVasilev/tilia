'use client'

import Link from "next/link";
import Image from "next/image"
import { imageLoader } from "../../utils/imgLoader";
import { lato } from "@/utils/fonts";
import { motion } from "framer-motion";

// export const metadata = {
//   title: 'Инвеститор - Ixora Residence',
// };

export const revalidate = 0; // revalidate this page every 60 seconds



export default function Investor() {



    return (
        <>

            <div>
                <motion.div
                    className="bg-gradient-tilia py-4"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: '100%' }}
                    transition={{ delay: 0.3, duration: 1 }}
                    >
                      <div className="text-white text-center pl-4 text-3xl font-bold">Инвеститор</div>
                </motion.div>
                {/* Container for Investor Intro */}
                <div className="p-10 lg:px-64 space-y-10 bg-tilia-deep-blue">
                    {/* Container for Investor Logo and Name */}
                    <motion.div
                        animate={{
                            scale: [0.5, 1.2,  1],
                        }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                            times: [0, 0.4, 0.8],
                            repeatDelay: 1
                          }}
                    >
                        <div className="flex">
                            <img src="/investor-logo.webp" alt="" className="h-20 w-50 rounded-lg" />
                        </div>
                    </motion.div>
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
                            <div className="text-gray-200 text-justify font-bold">
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
                        <div className="text-gray-300 text-justify">
                            Мотото на компанията при изпълнение на инвестиционните проекти гласи - "Creating Excellence" или "Създаване на съвършенство".
                        </div>
                        </motion.div>
                    </div>

                </div>

                {/* Container for Recent Projects */}
                <div className="bg-tilia-dark">
                    <motion.div
                        className="bg-gradient-tilia py-4"
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: '100%' }}
                        transition={{ duration: 1 }}
                        >
                        <div className=" text-white text-center pl-4 text-2xl font-bold">Текущи проекти</div>
                    </motion.div>

                    {/* Container for projects */}
                    <div className="">

                        {/* Container for Dalia*/}
                        <div className="p-5">
                            
                            <motion.div 
                                className="py-5"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.5, },
                                    visible: { opacity: 1, scale: 1, borderTop: '2px solid #ea580c', borderRight: '2px solid #ea580c',},
                                }}
                                
                            >         
                                <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4, duration: 0.6 }}
                                        variants={{
                                            hidden: { opacity: 0, scale: 0.5, },
                                            visible: { opacity: 1, scale: 1, },
                                        }}
                                >
                                    {/* Conatiner for name and description */}
                                    <div className="px-10 lg:pb-10">
                                        <Link href={'http://creativestudiobg.com/dahlia-house'}><div className="py-5 bg-tilia-dark text-tilia-orange text-center text-2xl font-mono hover:scale-105 duration-200">
                                            Еднофамилна къща Далия
                                        </div></Link>
                                        <div className="pb-5 bg-tilia-dark text-gray-300 text-justify font-medium font-mono lg:px-80 ">Едно бижу в полите на Витоша с уникални гледки към София. Луксозен имот с над 700 кв.м. РЗП и двор от 750 кв.м. в престижния кв. Драгалевци. </div>
                                    </div>
                                </motion.div>

                                {/* Container for images */}
                                <div className="bg-tilia-dark px-5 w-full h-full flex-col justify-center space-y-5">
                                    {/* Container for image with overflow effect, this template to be used for subsequent pictures */}
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4, duration: 0.6 }}
                                        variants={{
                                            hidden: { opacity: 0, x: -200 },
                                            visible: { opacity: 1, x: 0 },
                                        }}
                                    >
                                        <div className="w-[100%] h-[100%] lg:w-5/6 lg:h-5/6 overflow-hidden mx-auto ">
                                            {/* The CSS OVERFLOW property controls what happens to content that is too big to fit into an area. */}
                                            <Image
                                                loader={imageLoader}
                                                src="/dalia/dalia-one.webp"
                                                alt="Dalia"
                                                className=" transition-transform duration-500 ease-in-out hover:scale-125 active:scale-125"
                                                width={4242}
                                                height={2828}
                                            />
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4, duration: 0.6 }}
                                        variants={{
                                            hidden: { opacity: 0, x: 200 },
                                            visible: { opacity: 1, x: 0 },
                                        }}
                                    >
                                        <div className="w-[100%] h-[100%] lg:w-5/6 lg:h-5/6 overflow-hidden mx-auto ">
                                            <Image
                                                loader={imageLoader}
                                                src="/dalia/dalia-two.webp"
                                                alt="Dalia"
                                                className=" transition-transform duration-500 ease-in-out hover:scale-125 active:scale-125"
                                                width={2313}
                                                height={1542}
                                            />
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4, duration: 0.6 }}
                                        variants={{
                                            hidden: { opacity: 0, x: -200 },
                                            visible: { opacity: 1, x: 0 },
                                        }}
                                    >
                                        <div className="w-[100%] h-[100%] lg:w-5/6 lg:h-5/6 overflow-hidden mx-auto ">
                                            <Image
                                                loader={imageLoader}
                                                src="/dalia/dalia-three.webp"
                                                alt="Dalia"
                                                className=" transition-transform duration-500 ease-in-out hover:scale-125 active:scale-125"
                                                width={4242}
                                                height={2828}
                                            />
                                        </div>
                                    </motion.div>

                                </div>
                            </motion.div>
                        </div>

                        {/* Container for West End Luxury Houses*/}
                        <div className="p-5">
                            <motion.div 
                                className="py-5"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.5, },
                                    visible: { opacity: 1, scale: 1, borderTop: '2px solid #ea580c', borderLeft: '2px solid #ea580c',},
                                }}
                                
                            >    
                                <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4, duration: 0.6 }}
                                        variants={{
                                            hidden: { opacity: 0, scale: 0.5 },
                                            visible: { opacity: 1, scale: 1 },
                                        }}
                                >
                                    {/* Conatiner for name and description */}
                                    <div className="px-10  lg:pb-10">
                                        <div className="py-5 bg-tilia-dark text-tilia-orange text-center text-xl font-mono">
                                            Комплекс от къщи West End Luxury Houses
                                        </div>
                                        <div className="pb-5 bg-tilia-dark text-gray-300 text-justify font-medium font-mono lg:px-80">В процес на изграждане е луксозен комплекс от 18 самостоятелни еднофамилни къщи със собствени басейни в непосредствена близост до София -  само на 20 минути от центъра. Напълно автономно вилно селище със собствен водоизточник и допълнително соларно захранване.</div>
                                    </div>
                                </motion.div>

                                <div className="bg-tilia-dark px-5 w-full h-full flex-col justify-center space-y-5">
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4, duration: 0.6 }}
                                        variants={{
                                            hidden: { opacity: 0, x: -200 },
                                            visible: { opacity: 1, x: 0 },
                                        }}
                                    >
                                        <div className="w-[100%] h-[100%] lg:w-5/6 lg:h-5/6 overflow-hidden mx-auto ">
                                            <Image
                                                loader={imageLoader}
                                                src="/west-end/west-end-one.webp"
                                                alt="West-end"
                                                className=" transition-transform duration-500 ease-in-out hover:scale-125 active:scale-125"
                                                width={2400}
                                                height={2400}
                                            />
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4, duration: 0.6 }}
                                        variants={{
                                            hidden: { opacity: 0, x: 200 },
                                            visible: { opacity: 1, x: 0 },
                                        }}
                                    >
                                    <div className="w-[100%] h-[100%] lg:w-5/6 lg:h-5/6 overflow-hidden mx-auto ">
                                        <Image
                                            loader={imageLoader}
                                            src="/west-end/west-end-two.webp"
                                            alt="West-end"
                                            className=" transition-transform duration-500 ease-in-out hover:scale-125 active:scale-125"
                                            width={2400}
                                            height={1700}
                                        />
                                    </div>
                                    </motion.div>
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4, duration: 0.6 }}
                                        variants={{
                                            hidden: { opacity: 0, x: -200 },
                                            visible: { opacity: 1, x: 0 },
                                        }}
                                    >
                                        <div className="w-[100%] h-[100%] lg:w-5/6 lg:h-5/6 overflow-hidden mx-auto ">
                                            <Image
                                                loader={imageLoader}
                                                src="/west-end/west-end-three.webp"
                                                alt="West-end"
                                                className=" transition-transform duration-500 ease-in-out hover:scale-125 active:scale-125"
                                                width={4000}
                                                height={2000}
                                            />
                                        </div>
                                    </motion.div>

                                </div>
                            </motion.div>
                        </div>

                        {/* Container for Tilia Residence */}
                        <div className="p-5">
                            <motion.div 
                                className="py-5"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.5, },
                                    visible: { opacity: 1, scale: 1, borderTop: '2px solid #ea580c', borderRight: '2px solid #ea580c',},
                                }}
                                
                                >  
                                    <motion.div
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.4, duration: 0.6 }}
                                            variants={{
                                                hidden: { opacity: 0, scale: 0.5 },
                                                visible: { opacity: 1, scale: 1 },
                                            }}
                                    >
                                    {/* Conatiner for name and description */}
                                        <div className="px-10 lg:pb-10">
                                            <div className="py-5 bg-tilia-dark text-tilia-orange text-center text-xl font-mono">
                                                Жилищна сграда Tilia Residence
                                            </div>
                                            <div className="pb-5 bg-tilia-dark text-gray-300 text-justify font-medium font-mono lg:px-80">Модерна жилищна сграда в квартал Връбница с южно изложение в непосредствена близост до метростанция.</div>
                                        </div>
                                    </motion.div>

                                    <div className="bg-tilia-dark px-5 w-full h-full flex-col justify-center space-y-5">
                                        <motion.div
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.4, duration: 0.6 }}
                                            variants={{
                                                hidden: { opacity: 0, x: -200 },
                                                visible: { opacity: 1, x: 0 },
                                            }}
                                        >
                                            <div className="w-[100%] h-[100%] lg:w-5/6 lg:h-5/6 overflow-hidden mx-auto ">
                                                <Image
                                                    loader={imageLoader}
                                                    src="/tilia/tilia-one.webp"
                                                    alt="Tilia"
                                                    className=" transition-transform duration-500 ease-in-out hover:scale-125 active:scale-125"
                                                    width={4946}
                                                    height={3216}
                                                />
                                            </div>
                                        </motion.div>
                                        <motion.div
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.4, duration: 0.6 }}
                                            variants={{
                                                hidden: { opacity: 0, x: 200 },
                                                visible: { opacity: 1, x: 0 },
                                            }}
                                        >
                                            <div className="w-[100%] h-[100%] lg:w-5/6 lg:h-5/6 overflow-hidden mx-auto ">
                                                <Image
                                                    loader={imageLoader}
                                                    src="/tilia/tilia-two.webp"
                                                    alt="Tilia"
                                                    className=" transition-transform duration-500 ease-in-out hover:scale-125 active:scale-125"
                                                    width={4946}
                                                    height={3342}
                                                />
                                            </div>
                                        </motion.div>
                                        <motion.div
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.4, duration: 0.6 }}
                                            variants={{
                                                hidden: { opacity: 0, x: -200 },
                                                visible: { opacity: 1, x: 0 },
                                            }}
                                        >
                                            <div className="w-[100%] h-[100%] lg:w-5/6 lg:h-5/6 overflow-hidden mx-auto ">
                                                <Image
                                                    loader={imageLoader}
                                                    src="/tilia/tilia-three.webp"
                                                    alt="Tilia"
                                                    className=" transition-transform duration-500 ease-in-out hover:scale-125 active:scale-125"
                                                    width={4946}
                                                    height={3341}
                                                />
                                            </div>
                                        </motion.div>
                                    </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
