import Link from "next/link";
import Image from "next/image";
import { imageLoader } from "@/utils/imgLoader";
import { motion } from "framer-motion";
import { container, letterVariant } from "@/app/Home";

export const FloorLayout = () => {
    return (
        <div>
            <Link href={'/apartments/floor/third-floor'}><div className="absolute z-10 text-xxs top-4 right-0 rounded-l-none rounded-r-2xl w-20 h-3 sm:top-8 sm:text-base sm:right-5 sm:w-28 sm:h-5 bg-tilia-yellow-block opacity-75 sm:rounded-2xl flex flex-col justify-center items-center hover:opacity-100 hover:text-white hover:shadow-inner-3xl ">Мансарден</div></Link>

            <Link href={'/apartments/floor/third-floor'}><div className="absolute z-10 text-xxs top-8 right-0 rounded-l-none rounded-r-2xl w-20 h-3 sm:top-16 sm:text-base sm:right-5 sm:w-28 sm:h-5 bg-tilia-yellow-block opacity-75 sm:rounded-2xl flex flex-col justify-center items-center hover:opacity-100 hover:text-white hover:shadow-inner-3xl ">Подпокривен</div></Link>

            <Link href={'/apartments/floor/third-floor'}><div className="absolute z-10 text-xxs top-12 right-0 rounded-l-none rounded-r-2xl w-20 h-3 sm:top-24 sm:text-base sm:right-5 sm:w-28 sm:h-5 bg-tilia-yellow-block opacity-75 sm:rounded-2xl flex flex-col justify-center items-center hover:opacity-100 hover:text-white hover:shadow-inner-3xl ">Етаж 7</div></Link>

            <Link href={'/apartments/floor/third-floor'}><div className="absolute z-10 text-xxs top-16 right-0 rounded-l-none rounded-r-2xl w-20 h-3 sm:top-32 sm:text-base sm:right-5 sm:w-28 sm:h-5 bg-tilia-yellow-block opacity-75 sm:rounded-2xl flex flex-col justify-center items-center hover:opacity-100 hover:text-white hover:shadow-inner-3xl ">Етаж 6</div></Link>

            <Link href={'/apartments/floor/third-floor'}><div className="absolute z-10 text-xxs top-20 right-0 rounded-l-none rounded-r-2xl w-20 h-3 sm:top-40 sm:text-base sm:right-5 sm:w-28 sm:h-5 bg-tilia-yellow-block opacity-75 sm:rounded-2xl flex flex-col justify-center items-center hover:opacity-100 hover:text-white hover:shadow-inner-3xl ">Етаж 5</div></Link>

            <Link href={'/apartments/floor/third-floor'}><div className="absolute z-10 text-xxs top-24 right-0 rounded-l-none rounded-r-2xl w-20 h-3 sm:top-48 sm:text-base sm:right-5 sm:w-28 sm:h-5 bg-tilia-yellow-block opacity-75 sm:rounded-2xl flex flex-col justify-center items-center hover:opacity-100 hover:text-white hover:shadow-inner-3xl ">Етаж 4</div></Link>

            <Link href={'/apartments/floor/third-floor'}><div className="absolute z-10 text-xxs top-28 right-0 rounded-l-none rounded-r-2xl w-20 h-3 sm:top-56 sm:text-base sm:right-5 sm:w-28 sm:h-5 bg-tilia-yellow-block opacity-75 sm:rounded-2xl flex flex-col justify-center items-center hover:opacity-100 hover:text-white hover:shadow-inner-3xl ">Етаж 3</div></Link>

            <Link href={'/apartments/floor/third-floor'}><div className="absolute z-10 text-xxs top-32 right-0 rounded-l-none rounded-r-2xl w-20 h-3 sm:top-64 sm:text-base sm:right-5 sm:w-28 sm:h-5 bg-tilia-yellow-block opacity-75 sm:rounded-2xl flex flex-col justify-center items-center hover:opacity-100 hover:text-white hover:shadow-inner-3xl ">Етаж 2</div></Link>

            <Link href={'/apartments/floor/third-floor'}><div className="absolute z-10 text-xxs top-36 right-0 rounded-l-none rounded-r-2xl w-20 h-3 sm:top-72 sm:text-base sm:right-5 sm:w-28 sm:h-5 bg-tilia-yellow-block opacity-75 sm:rounded-2xl flex flex-col justify-center items-center hover:opacity-100 hover:text-white hover:shadow-inner-3xl ">Етаж 1</div></Link>

            <Link href={'/apartments/floor/third-floor'}><div className="absolute z-10 text-xxs top-40 right-0 rounded-l-none rounded-r-2xl w-20 h-3 sm:top-80 sm:text-base sm:right-5 sm:w-28 sm:h-5 bg-tilia-yellow-block opacity-75 sm:rounded-2xl flex flex-col justify-center items-center hover:opacity-100 hover:text-white hover:shadow-inner-3xl ">Паркинг -1</div></Link>

            <Link href={'/apartments/floor/third-floor'}><div className="absolute z-10 text-xxs top-44 right-0 rounded-l-none rounded-r-2xl w-20 h-3 sm:top-[390px] sm:text-base sm:right-5 sm:w-28 sm:h-5 bg-tilia-yellow-block opacity-75 sm:rounded-2xl flex flex-col justify-center items-center hover:opacity-100 hover:text-white hover:shadow-inner-3xl ">Пaркинг -2</div></Link>

        </div>
    )
}

const Plan = () => {

    return (
        <div
            className="relative shadow-2xl"
        >
            <FloorLayout />
            {/* LeftSide Floor Buttons */}


            {/* <div className="absolute z-10 left-5 top-3 w-10 h-4 rounded-r-2xl bg-yellow-500 opacity-40">Етаж 7</div> */}

            {/* Hover Building Floor Buttons */}
            <Link href={`/apartments/floor/ninth-floor/`}><div className="absolute ninth-floor cursor-pointer  h-full w-full z-20 bg-tilia-yellow-block opacity-0 hover:opacity-80 duration-150 ease-in" title="Девети Етаж"></div></Link>
            <Link href={`/apartments/floor/eight-floor/`}><div className="absolute eight-floor cursor-pointer  h-full w-full z-20 bg-tilia-yellow-block opacity-0 hover:opacity-80 duration-150 ease-in" title="Осми Етаж" ></div></Link>
            <Link href={`/apartments/floor/seventh-floor/`}><div className="absolute seventh-floor cursor-pointer h-full w-full z-20 bg-tilia-yellow-block opacity-0 hover:opacity-80 duration-150 ease-in" title="Седми Етаж" ></div></Link>
            <Link href={`/apartments/floor/sixth-floor/`}><div className="absolute sixth-floor cursor-pointer h-full w-full z-20 bg-tilia-yellow-block opacity-0 hover:opacity-80 duration-150 ease-in" title="Шести Етаж" ></div></Link>
            <Link href={`/apartments/floor/fifth-floor/`}><div className="absolute fifth-floor cursor-pointer h-full w-full z-20 bg-tilia-yellow-block opacity-0 hover:opacity-80 duration-150 ease-in" title="Пети Етаж" ></div></Link>
            <Link href={`/apartments/floor/fourth-floor/`}><div className="absolute fourth-floor cursor-pointer h-full w-full z-20 bg-tilia-yellow-block opacity-0 hover:opacity-80 duration-150 ease-in" title="Четвърти Етаж" ></div></Link>
            <Link href={`/apartments/floor/third-floor/`}><div className="absolute third-floor cursor-pointer h-full w-full z-20 bg-tilia-yellow-block opacity-0 hover:opacity-80 duration-150 ease-in" title="Трети Етаж" ></div></Link>
            <Link href={`/apartments/floor/second-floor/`}><div className="absolute second-floor cursor-pointer  h-full w-full z-20 bg-tilia-yellow-block opacity-0 hover:opacity-80 duration-150 ease-in" title="Втори Етаж" ></div></Link>
            <Link href={`/apartments/floor/first-floor/`}><div className="absolute first-floor cursor-pointer  h-full w-full z-20 bg-tilia-yellow-block opacity-0 hover:opacity-80 duration-150 ease-in" title="Първи Етаж" ></div></Link>
            <Link href={`/apartments/floor/garage-1/`}><div className="absolute garage-1 cursor-pointer h-full w-full z-20 bg-tilia-yellow-block opacity-0 hover:opacity-80 duration-150 ease-in" title="Първи Подземен Етаж" ></div></Link>
            <Link href={`/apartments/floor/garage-2/`}><div className="absolute garage-2 cursor-pointer h-full w-full z-20 bg-tilia-yellow-block opacity-0 hover:opacity-80 duration-150 ease-in" title="Втори Подземен Етаж" ></div></Link>
            {/* <div className='absolute outside cursor-pointer h-full w-full bg-white opacity-50 z-10'  ></div> */}
            {/* <img src="/ixora-apartments-plan.webp" alt="Ixora Plan" className="relative" /> */}

            <div>
                <img src="/tilia/tilia-plan.webp" alt="" />
                {/* <Image
                    loader={imageLoader}
                    src="/tilia/tilia-plan.webp"
                    alt='plan'
                    width={5000}
                    height={2813}
                ></Image> */}
            </div>


        </div>
    )
}
export default Plan;