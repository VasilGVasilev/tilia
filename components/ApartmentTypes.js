import { noto } from "@/utils/fonts"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { HiExternalLink } from 'react-icons/hi'

const TypeApp = ({ title, img }) => {
    return (
        <div className="bg-tilia-gray p-7 flex flex-col justify-center items-center gap-7 sm:h-[500px] sm:w-[500px]">
            <div className="font-semibold md:text-xl lg:text-2xl">{title}</div>
            <img src={img} alt="" className="hover:scale-110 transition duration-300 sm:w-[300px] sm:h-[300px]" />
        </div>
    )
}

const ApartmentTypes = () => {
    const [typeAparts, setTypeAparts] = useState([
        {
            title: 'ДВУСТАЙНИ АПАРТМЕНТИ',
            imgUrl: '/assets/apartment-type-one.jpg'
        },
        {
            title: 'ТРИСТАЙНИ АПАРТМЕНТИ',
            imgUrl: '/assets/apartment-type-two.png'
        },
        {
            title: 'ЧЕТИРИТСТАЙНИ АПАРТМЕНТИ',
            imgUrl: '/assets/apartment-type-three.png'
        },
    ])

    return (
        <div className="flex flex-col gap-5">
            <div className="text-black text-left flex flex-col">
                <motion.div
                    className={`${noto.className} text-2xl md:text-5xl lg:text-[80px]`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    variants={{
                        hidden: { opacity: 0, translateY: 20, skewX: -80, rotateY: 50 },
                        visible: { opacity: 1, translateY: 0, skewX: 0, rotateY: 0 },
                    }}
                >

                    ТИПОВЕ
                </motion.div>
                <motion.div
                    className={`${noto.className} text-2xl md:text-5xl lg:text-[80px]`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    variants={{
                        hidden: { opacity: 0, translateY: 20, skewX: -80, rotateY: 50 },
                        visible: { opacity: 1, translateY: 0, skewX: 0, rotateY: 0 },
                    }}
                >

                    ИМОТИ
                </motion.div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
                {typeAparts.map(t => <TypeApp key={t.title} title={t.title} img={t.imgUrl} />)}
            </div>
            <Link href={'/apartments'} >
                <div className="flex flex-row gap-1 rounded-full bg-tilia-yellow-block w-fit h-fit p-2 font-semibold sm:text-xl hover:bg-black hover:text-white transition">
                    <div>
                        Разгледай имотите
                    </div>
                    <HiExternalLink size={16} />
                </div>
            </Link>
        </div>
    )
}

export default ApartmentTypes