import Image from 'next/image'
import { imageLoader } from "../utils/imgLoader"

import { BsTelephone } from 'react-icons/bs'
import { TfiEmail } from 'react-icons/tfi'

//  NB flex-col turns into flex-row at md: for the whole, but for the Description and Contacts in relation to Logo it turns at sm: 


const Footer = () => {
    return (
        <div className="h-fit w-full flex-col p-10 bg-black lg:px-40">


            <div className='flex flex-col justify-center items-center md:flex-row md:justify-center md:items-center gap-5'>
                {/* Logo */}
                <Image
                    className="h-20 w-30 sm:h-28 sm:w-56 "
                    loader={imageLoader}
                    src="/ixora.webp"
                    alt="Ixora Logo"
                    width={979}
                    height={350}
                />
                <div className='flex flex-col sm:flex-row'>

                    {/* Description */}
                    <div className='md:text-center'>
                        <div className='text-orange-500 font-mono text-xl'>Ixora Luxury Residence</div>
                        <div className='p-3 text-white font-mono text-sm'> Ixora Luxury Residence е бутикова сграда със спа център и финтес, ситуирана в подножието на Витоша</div>
                    </div>
                    {/* Contacts */}
                    <div className='md:text-center'>
                        <div className='text-orange-500 font-mono text-xl'>Контакти</div>
                        <div className='p-3'>
                            <div className="py-2 flex space-x-3 items-center">
                                <BsTelephone size={24} className='text-white' />
                                <div className="text-sm text-white font-semibold"><a href={`tel:00359886879993`}>+359886879993</a></div>
                            </div>
                            <div className="py-2 flex space-x-2 items-center">
                                <TfiEmail size={24} className='text-white' />

                                <div className="text-sm text-white font-semibold"><a href="mailto:office@creativestudiobg.com">office@creativestudiobg.com</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Footer;