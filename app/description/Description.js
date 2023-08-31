'use client'

import Image from "next/image"
import { imageLoader } from "../../utils/imgLoader";
import Timeline from "@/components/Timeline";
import ForBuilding from "@/components/ForBuidling";
import Maps from "@/components/Location";
import { motion } from "framer-motion";

export const revalidate = 0; // revalidate this page every 60 seconds

const buildingProcessLayout = "pb-10 px-5 h-full w-full lg:h-96 flex justify-center"
export default function Description() {

    return (
        <>


            <div className="bg-tilia-yellow-block p-10">
                <ForBuilding></ForBuilding>
            </div>


            {/* LOCATION*/}
            <div className="">
                <div className="investorIntroBg">
                    <motion.div
                        className={` text-tilia-yellow-text text-left p-5 text-2xl md:text-5xl lg:text-[80px]`}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        variants={{
                            hidden: { opacity: 0, translateY: 20, skewX: -80, rotateY: 50 },
                            visible: { opacity: 1, translateY: 0, skewX: 0, rotateY: 0 },
                        }}
                    >

                        МЕСТОПОЛОЖЕНИЕ
                    </motion.div>

                </div>

                <Maps></Maps>
            </div>

        </>
    )
}
