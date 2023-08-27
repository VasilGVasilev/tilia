
'use client'

import { useState } from "react";
import Image from 'next/image';
import { imageLoader } from "../../../utils/imgLoader";
import { motion } from "framer-motion";
import PlanButtons from "@/components/PlanButtons";

import Modal from "@/components/Modal";


export const revalidate = 0; // revalidate this page every 60 seconds

const sold = "hover:bg-red-700 hover:opacity-40 active:bg-red-700 active:opacity-40";
const available = "hover:bg-green-400 hover:opacity-40 active:bg-green-400 active:opacity-40 cursor-pointer";
const reserved = "hover:bg-blue-400 hover:opacity-40 active:bg-blue-400 active:opacity-40 cursor-pointer";

// TODO: add modals for ploshtoobrazuvane

export default function FirstFloor() {

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const [apartment, setApartment] = useState({
        ap: null,
        plosht: null,
        dvor: null,
        total: null,
    });


    const updateInfo = (ap, plosht, dvor, total) => {
        setApartment({
            ap,
            plosht,
            dvor,
            total,
        });
        openModal()

    }

    return (
        <>
            <Modal isOpen={modalOpen} onClose={closeModal} apartment={apartment} />
            <motion.div
                className='bg-gradient-tilia'
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: '100%' }}
                transition={{ duration: 1 }}
            >
                <div className="py-4 text-white text-center text-2xl font-extrabold">Първи етаж</div>
            </motion.div>

            {/* Container for buttons */}

            <PlanButtons></PlanButtons>

            {/* Container for floor plan */}
            <div className="p-5 xl:px-40 bg-gradient-to-b from-tilia-dark from-10% via-ixorafrom-tilia-dark via-70% to-[#2e281f] to-90% ">

                <div className="relative">

                    <div
                        className={`absolute apartmentFour h-full w-full z-10 ${available}`} onClick={() => updateInfo(4, 82.96, 22.20, 105.16)}></div>
                    <div className={`absolute apartmentThree h-full w-full z-10 ${available}`} onClick={() => updateInfo(3, 146.04, 45.70, 191.74)}></div>
                    <div className={`absolute apartmentTwo h-full w-full z-10 ${available} `} onClick={() => updateInfo(2, 93.02, 69.00, 162.02)}></div>
                    <div className={`absolute apartmentOne h-full w-full z-10 ${available} `} onClick={() => updateInfo(1, 182.43, 73.90, 256.33)}></div>

                    {/* <img src="/plans/first-floor.webp" alt="Ixora Plan" className="relative" /> */}

                    <div className="relative">
                        <Image
                            loader={imageLoader}
                            src='/plans/first-floor.webp'
                            alt="Ixora Plan"
                            width={3509}
                            height={4967}
                        ></Image>
                    </div>

                </div>


            </div>
        </>
    )
}

