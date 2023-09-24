
'use client'

import { useState } from "react";
import { imageLoader } from "@/utils/imgLoader";
import Image from "next/image";
import { motion } from "framer-motion";
import Modal from "@/components/Modal";

export const revalidate = 0; // revalidate this page every 60 seconds


const sold = "hover:bg-red-700 hover:opacity-40 active:bg-red-700 active:opacity-40";
const available = "hover:bg-green-400 hover:opacity-40 active:bg-green-400 active:opacity-40 cursor-pointer";
const reserved = "hover:bg-blue-400 hover:opacity-40 active:bg-blue-400 active:opacity-40 cursor-pointer";



export default function SecondFloor() {
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
        zp: null,
    });


    const updateInfo = (ap, plosht, zp) => {
        setApartment({
            ap,
            plosht,
            zp,
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
                <div className="py-4 text-white text-center text-2xl font-extrabold">Втори етаж</div>
            </motion.div>



            {/* Container for floor plan */}
            <div className="p-5 xl:px-40 bg-gradient-to-b from-tilia-white from-10% via-ixorafrom-tilia-white via-70% to-[#2e281f] to-90% ">


                <div className="relative inline-block">

                    <div className={`absolute apartmentEight h-full w-full z-10 ${available}`} onClick={() => updateInfo(8, 200.10, 155.10)}></div>
                    <div className={`absolute apartmentSeven h-full w-full z-10 ${sold}`}></div>
                    <div className={`absolute apartmentSix h-full w-full z-10 ${available} `} onClick={() => updateInfo(6, 154.43, 119.70)}></div>
                    <div className={`absolute apartmentFive h-full w-full z-10 ${available} `} onClick={() => updateInfo(5, 100.76, 78.10)}></div>


                    {/* <img src="/plans/second-floor.webp" alt="Ixora Plan" className="relative" /> */}

                    <div className='relative '>
                        <Image
                            loader={imageLoader}
                            src='/plans/second-floor.webp'
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

