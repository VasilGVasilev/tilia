import Link from "next/link";
import Image from "next/image";
import { imageLoader } from "@/utils/imgLoader";
import { motion } from "framer-motion";
import { container, letterVariant } from "@/app/Home";

export const FloorLayout = () => {
    return (
        <div>
            <Link href={'/apartments/floor/third-floor'}><div className="absolute z-10 text-xxs top-4 left-0 rounded-l-none rounded-r-2xl w-20 h-3 sm:top-8 sm:text-base sm:left-5 sm:w-28 sm:h-5 bg-tilia-yellow-block opacity-75 sm:rounded-2xl flex flex-col justify-center items-center hover:opacity-100 hover:text-white hover:shadow-inner-3xl ">Мансарден</div></Link>

            <Link href={'/apartments/floor/third-floor'}><div className="absolute z-10 text-xxs top-8 left-0 rounded-l-none rounded-r-2xl w-20 h-3 sm:top-16 sm:text-base sm:left-5 sm:w-28 sm:h-5 bg-tilia-yellow-block opacity-75 sm:rounded-2xl flex flex-col justify-center items-center hover:opacity-100 hover:text-white hover:shadow-inner-3xl ">Подпокривен</div></Link>

            <Link href={'/apartments/floor/third-floor'}><div className="absolute z-10 text-xxs top-12 left-0 rounded-l-none rounded-r-2xl w-20 h-3 sm:top-24 sm:text-base sm:left-5 sm:w-28 sm:h-5 bg-tilia-yellow-block opacity-75 sm:rounded-2xl flex flex-col justify-center items-center hover:opacity-100 hover:text-white hover:shadow-inner-3xl ">Етаж 7</div></Link>

            <Link href={'/apartments/floor/third-floor'}><div className="absolute z-10 text-xxs top-16 left-0 rounded-l-none rounded-r-2xl w-20 h-3 sm:top-32 sm:text-base sm:left-5 sm:w-28 sm:h-5 bg-tilia-yellow-block opacity-75 sm:rounded-2xl flex flex-col justify-center items-center hover:opacity-100 hover:text-white hover:shadow-inner-3xl ">Етаж 6</div></Link>

            <Link href={'/apartments/floor/third-floor'}><div className="absolute z-10 text-xxs top-20 left-0 rounded-l-none rounded-r-2xl w-20 h-3 sm:top-40 sm:text-base sm:left-5 sm:w-28 sm:h-5 bg-tilia-yellow-block opacity-75 sm:rounded-2xl flex flex-col justify-center items-center hover:opacity-100 hover:text-white hover:shadow-inner-3xl ">Етаж 5</div></Link>

            <Link href={'/apartments/floor/third-floor'}><div className="absolute z-10 text-xxs top-24 left-0 rounded-l-none rounded-r-2xl w-20 h-3 sm:top-48 sm:text-base sm:left-5 sm:w-28 sm:h-5 bg-tilia-yellow-block opacity-75 sm:rounded-2xl flex flex-col justify-center items-center hover:opacity-100 hover:text-white hover:shadow-inner-3xl ">Етаж 4</div></Link>

            <Link href={'/apartments/floor/third-floor'}><div className="absolute z-10 text-xxs top-28 left-0 rounded-l-none rounded-r-2xl w-20 h-3 sm:top-56 sm:text-base sm:left-5 sm:w-28 sm:h-5 bg-tilia-yellow-block opacity-75 sm:rounded-2xl flex flex-col justify-center items-center hover:opacity-100 hover:text-white hover:shadow-inner-3xl ">Етаж 3</div></Link>

            <Link href={'/apartments/floor/third-floor'}><div className="absolute z-10 text-xxs top-32 left-0 rounded-l-none rounded-r-2xl w-20 h-3 sm:top-64 sm:text-base sm:left-5 sm:w-28 sm:h-5 bg-tilia-yellow-block opacity-75 sm:rounded-2xl flex flex-col justify-center items-center hover:opacity-100 hover:text-white hover:shadow-inner-3xl ">Етаж 2</div></Link>

            <Link href={'/apartments/floor/third-floor'}><div className="absolute z-10 text-xxs top-36 left-0 rounded-l-none rounded-r-2xl w-20 h-3 sm:top-72 sm:text-base sm:left-5 sm:w-28 sm:h-5 bg-tilia-yellow-block opacity-75 sm:rounded-2xl flex flex-col justify-center items-center hover:opacity-100 hover:text-white hover:shadow-inner-3xl ">Етаж 1</div></Link>

            <Link href={'/apartments/floor/third-floor'}><div className="absolute z-10 text-xxs top-40 left-0 rounded-l-none rounded-r-2xl w-20 h-3 sm:top-80 sm:text-base sm:left-5 sm:w-28 sm:h-5 bg-tilia-yellow-block opacity-75 sm:rounded-2xl flex flex-col justify-center items-center hover:opacity-100 hover:text-white hover:shadow-inner-3xl ">Паркинг -1</div></Link>

            <Link href={'/apartments/floor/third-floor'}><div className="absolute z-10 text-xxs top-44 left-0 rounded-l-none rounded-r-2xl w-20 h-3 sm:top-[390px] sm:text-base sm:left-5 sm:w-28 sm:h-5 bg-tilia-yellow-block opacity-75 sm:rounded-2xl flex flex-col justify-center items-center hover:opacity-100 hover:text-white hover:shadow-inner-3xl ">Пaркинг -2</div></Link>

        </div>
    )
}

const Plan = () => {

    return (
        <motion.div
            className="relative shadow-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: { opacity: 1, scale: 1 },
            }}
        >
            <FloorLayout />
            {/* LeftSide Floor Buttons */}


            {/* <div className="absolute z-10 left-5 top-3 w-10 h-4 rounded-r-2xl bg-yellow-500 opacity-40">Етаж 7</div> */}

            {/* Hover Building Floor Buttons */}

            <Link href={`/apartments/floor/third-floor/`}><div className="absolute penthouse cursor-pointer h-full w-full z-20 hover:bg-tilia-orange opacity-60" ></div></Link>
            <Link href={`/apartments/floor/third-floor/`}><div className="absolute thirdFloor cursor-pointer h-full w-full z-20 hover:bg-tilia-orange opacity-60" ></div></Link>
            <Link href={`/apartments/floor/third-floor/`}><div className="absolute secondFloor cursor-pointer  h-full w-full z-20 hover:bg-tilia-orange opacity-60"></div></Link>
            <Link href={`/apartments/floor/third-floor/`}><div className="absolute firstFloor cursor-pointer h-full w-full z-20 hover:bg-tilia-orange opacity-60" ></div></Link>
            <Link href={`/apartments/floor/third-floor/`}><div className="absolute parking cursor-pointer h-full w-full z-20 hover:bg-tilia-orange opacity-60" ></div></Link>
            {/* <div className='absolute outside cursor-pointer h-full w-full bg-white opacity-50 z-10'  ></div> */}
            {/* <img src="/ixora-apartments-plan.webp" alt="Ixora Plan" className="relative" /> */}

            <div>

                <Image
                    loader={imageLoader}
                    src="/tilia/tilia-plan.webp"
                    alt='plan'
                    width={5000}
                    height={2813}
                ></Image>
            </div>


        </motion.div>
    )
}
export default Plan;