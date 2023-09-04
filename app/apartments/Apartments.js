'use client'

import Plan from '@/components/Plan';
import { noto } from '@/utils/fonts';
import { motion } from 'framer-motion';

export const revalidate = 0; // revalidate this page every 60 seconds


export default function Apartments() {



    return (
        <>


            {/* TITLE */}
            <div className="text-tilia-yellow-text flex flex-row pb-5 gap-5 bg-white p-10 ">
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

                    АПАРТАМЕНТИ
                </motion.div>

            </div>


            {/* FLOOR PLAN */}
            <div className='lg:p-40'>
                <Plan></Plan>
            </div>
        </>
    )
}

