import Image from 'next/image'
import { imageLoader } from "../utils/imgLoader"

import { BsTelephone } from 'react-icons/bs'
import { TfiEmail } from 'react-icons/tfi'

//  NB flex-col turns into flex-row at md: for the whole, but for the Description and Contacts in relation to Logo it turns at sm: 


const Footer = () => {
    return (
        <div className="h-fit w-full flex-col p-10 bg-tilia-yellow-block lg:px-40">


            <div className='flex flex-col justify-center items-center md:flex-row md:justify-center md:items-center gap-5'>
                {/* Logo */}
                {/* <Image
                    className="h-auto w-auto sm:h-20 sm:w-30"
                    loader={imageLoader}
                    src="/assets/tilia-logo.webp"
                    alt="Ixora Logo"
                    width={979}
                    height={350}
                /> */}
                <img src="/assets/tilia-logo.webp" className="h-auto w-auto sm:h-32 sm:w-48 shadow-lg" alt="" />
                <div className='flex flex-col sm:flex-row'>

                    {/* Description */}
                    <div className='md:text-center'>
                        <div className='text-black font-mono text-xl'>Tilia Residence</div>
                        <div className='p-3 text-neutral-700 font-mono text-sm'> Tilia Residence е бутикова сграда със спа център и финтес, ситуирана в подножието на Витоша</div>
                    </div>
                    {/* Contacts */}
                    <div className='md:text-center'>
                        <div className='text-black font-mono text-xl'>Контакти</div>
                        <div className='p-3'>
                            <div className="py-2 flex space-x-3 items-center">
                                <BsTelephone size={24} className='text-black' />
                                <div className="text-sm text-neutral-700 font-semibold"><a href={`tel:00359886879993`}>+359886879993</a></div>
                            </div>
                            <div className="py-2 flex space-x-2 items-center">
                                <TfiEmail size={24} className='text-black' />

                                <div className="text-sm text-neutral-700 font-semibold"><a href="mailto:office@creativestudiobg.com">office@creativestudiobg.com</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Footer;