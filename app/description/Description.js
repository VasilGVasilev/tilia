'use client'

import Image from "next/image"
import { imageLoader } from "../../utils/imgLoader";
import Timeline from "@/components/Timeline";
import ForBuilding from "@/components/ForBuidling";
import Maps from "@/components/Location";
import { motion } from "framer-motion";

export const revalidate = 0; // revalidate this page every 60 seconds

const buildingProcessLayout ="pb-10 px-5 h-full w-full lg:h-96 flex justify-center"
export default function Description() {

    return (
        <>

            {/* DESCRIPTION */}
            <motion.div
                className="bg-gradient-tilia"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: '100%' }}
                transition={{ delay: 0.3, duration: 1 }}
                >
                    <div className="text-white py-4 text-center text-3xl font-bold truncate">За сградата</div>
            </motion.div>

            <ForBuilding></ForBuilding>

            {/* TIMELINE */}
            <motion.div
                className="bg-gradient-tilia py-4"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: '100%' }}
                transition={{ delay: 0.3, duration: 1 }}
                >
                    <div className="text-white text-center text-3xl font-bold">Етапи</div>
            </motion.div>

            <Timeline></Timeline>

            {/* BUILDING PROGRESS */}
            <div>
                <motion.div
                    className="bg-gradient-tilia py-4"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: '100%' }}
                    transition={{ delay: 0.6, duration: 1 }}
                    >
                        <div className="text-white text-center text-2xl font-bold">Етап на проекта - Акт 14</div>
                </motion.div>
                <div className="p-10 bg-tilia-dark flex flex-col lg:flex-row">
                    <motion.div
                        className={buildingProcessLayout}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: 50},
                            visible: { opacity: 1, x: 0},
                        }}
                    >
                        <Image
                            loader={imageLoader}
                            src="/buildProcessOne.webp"
                            alt="Build Process"
                            width={1310}
                            height={887}
                        >
                        </Image>
                    </motion.div>
                    <motion.div
                        className={buildingProcessLayout}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: 50},
                            visible: { opacity: 1, x: 0},
                        }}
                    >
                        <Image
                            loader={imageLoader}
                            src="/buildProcessTwo.webp"
                            alt="Build Process"
                            width={1310}
                            height={887}
                        >
                        </Image>
                    </motion.div>
                    <motion.div
                        className={buildingProcessLayout}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: 50},
                            visible: { opacity: 1, x: 0},
                        }}
                    >
                        <Image
                            loader={imageLoader}
                            src="/buildProcessThree.webp"
                            alt="Build Process"
                            width={1310}
                            height={887}
                        >
                        </Image>
                    </motion.div>
                </div>
            </div>

            {/* AKT 16 */}
            <>
                <motion.div
                    className="bg-gradient-tilia py-4"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: '100%' }}
                    transition={{ delay: 0.9, duration: 1 }}
                    >
                    <div className="text-white text-center text-2xl font-bold">Изберете Вашия бъдещ дом</div>
                </motion.div>
                <div className="bg-ixora-img-description h-60 bg-center bg-cover bg-no-repeat bg-white md:min-h-[32rem] md:grid md:place-items-center md:bg-fixed md:bg-no-repeat md:bg-cover md:bg-center md:opacity-75">
                </div>
            </>

            {/* LOCATION*/}
            <div>

                <motion.div
                    className="bg-gradient-tilia py-4"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: '100%' }}
                    transition={{ delay: 0.3, duration: 1 }}
                    >
                    <div className="text-white text-center text-2xl font-bold">Местоположение</div>
                </motion.div>
                <Maps></Maps>
            </div>

        </>
    )
}
