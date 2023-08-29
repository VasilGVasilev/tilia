
'use client'

import Image from "next/image"
import { imageLoader } from "../../utils/imgLoader";
import Maps from "@/components/Location";
import Link from "next/link";
import { motion } from "framer-motion";

import { SlLocationPin } from 'react-icons/sl'
import { BsTelephone } from 'react-icons/bs'
import { TfiEmail } from 'react-icons/tfi'


export const revalidate = 0; // revalidate this page every 60 seconds

// todo: small icons dont show

export default function Contacts() {


    return (
        <>


            {/* div for maps */}
            <motion.div
                className='bg-gradient-tilia'
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: '100%' }}
                transition={{ duration: 1 }}
            >
                <div className="text-center py-4 text-3xl text-white font-bold">Местоположение</div>
            </motion.div>

            <Maps></Maps>
            {/* Desktop res makes Contact Card and Form flex */}
            <div className="lg:flex">
                {/* div for Contact Card */}
                <div className="lg:w-1/2 bg-white">


                    {/* Container to flex on Desktop */}
                    <div className="flex-col w-full h-fit lg:w-full">

                        <div className="bg-white">
                            <div className="flex justify-center text-tilia-orange py-4 pt-10 text-center text-3xl font-bold hover:scale-105 duration-200">Sales офис</div>
                        </div>

                        <div className="flex justify-center p-8 lg:p-20">
                            <div className="flex justify-center h-56 w-96 p-5 shadow-xl bg-gradient-to-b from-gray-50 to-white lg:hover:scale-105 duration-200 lg:hover:shadow-none lg:w-full lg:h-96">
                                <div className="space-y-10 flex flex-col justify-center">

                                    <div className="flex flex-row items-center space-x-3 lg:p-5">
                                        <SlLocationPin size={24}  />

                                        <div className="text-sm sm:text-base font-bold text-gray-500 ">ул. „Пирински еделвайс“ 3, 1415 в.з. Симеоново - Драгалевци</div>

                                    </div>

                                    <div className="flex flex-row items-center space-x-3 lg:p-5">

                                        <BsTelephone size={24}  />

                                        <div className="text-sm sm:text-base font-bold text-gray-500"><a href={`tel:00359886879993`}>00359886879993</a></div>

                                    </div>

                                    <div className="flex flex-row items-center space-x-3 lg:p-5">

                                        <TfiEmail size={24}  />


                                        <div className="text-sm sm:text-base font-bold text-gray-500"><a href="mailto:office@creativestudiobg.com">office@creativestudiobg.com</a></div>

                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* div for Picture */}
                <div className="flex-col justify-center py-10 lg:p-10 bg-white lg:bg-black lg:w-1/2">
                    <Link href={'/apartments'}><div className="text-center font-bold text-xl text-orange-400  lg:text-white lg:py-4 mb-10 lg:text-3xl lg:font-bold hover:scale-105 duration-200">Вашият бъдещ дом</div></Link>
                    <Link href={'/apartments'}>
                        <Image
                            loader={imageLoader}
                            src="/ixora-apartments.webp"
                            className="shadow-3xl lg:hover:scale-105 duration-200 lg:hover:shadow-none"
                            width={5000}
                            height={2813}
                            alt="Description">
                        </Image>
                    </Link>
                </div>
            </div>
        </>
    )
}

