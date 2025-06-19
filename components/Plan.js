import Link from "next/link";
import Image from "next/image";
import { imageLoader } from "@/utils/imgLoader";
import { motion } from "framer-motion";
import { container, letterVariant } from "@/app/Home";
import { noto } from "@/utils/fonts";

const Plan = () => {
    return (
        <div className="relative shadow-2xl">
            <div
                className={`${noto.className} text-2xl md:text-5xl lg:text-[80px] absolute left-10 top-10`}
                // initial="hidden"
                // whileInView="visible"
                // viewport={{ once: true }}
                // transition={{ duration: 0.7, delay: 0.3 }}
                // variants={{
                //     hidden: { opacity: 0, translateY: 20, skewX: -80, rotateY: 50 },
                //     visible: { opacity: 1, translateY: 0, skewX: 0, rotateY: 0 },
                // }}
            >
                ЕТАЖИ
            </div>
            {/* <div className="absolute z-10 left-5 top-3 w-10 h-4 rounded-r-2xl bg-yellow-500 opacity-40">Етаж 7</div> */}

            {/* Hover Building Floor Buttons */}
            <Link href={`/apartments/floor/ninth-floor/`}>
                <div
                    className="absolute ninth-floor cursor-pointer  h-full w-full z-20 bg-tilia-yellow-block opacity-0 hover:opacity-80 duration-150 ease-in"
                    title="Девети Етаж"
                ></div>
            </Link>
            <Link href={`/apartments/floor/eight-floor/`}>
                <div
                    className="absolute eight-floor cursor-pointer  h-full w-full z-20 bg-tilia-yellow-block opacity-0 hover:opacity-80 duration-150 ease-in"
                    title="Осми Етаж"
                ></div>
            </Link>
            <Link href={`/apartments/floor/seventh-floor/`}>
                <div
                    className="absolute seventh-floor cursor-pointer h-full w-full z-20 bg-tilia-yellow-block opacity-0 hover:opacity-80 duration-150 ease-in"
                    title="Седми Етаж"
                ></div>
            </Link>
            <Link href={`/apartments/floor/sixth-floor/`}>
                <div
                    className="absolute sixth-floor cursor-pointer h-full w-full z-20 bg-tilia-yellow-block opacity-0 hover:opacity-80 duration-150 ease-in"
                    title="Шести Етаж"
                ></div>
            </Link>
            <Link href={`/apartments/floor/fifth-floor/`}>
                <div
                    className="absolute fifth-floor cursor-pointer h-full w-full z-20 bg-tilia-yellow-block opacity-0 hover:opacity-80 duration-150 ease-in"
                    title="Пети Етаж"
                ></div>
            </Link>
            <Link href={`/apartments/floor/fourth-floor/`}>
                <div
                    className="absolute fourth-floor cursor-pointer h-full w-full z-20 bg-tilia-yellow-block opacity-0 hover:opacity-80 duration-150 ease-in"
                    title="Четвърти Етаж"
                ></div>
            </Link>
            <Link href={`/apartments/floor/third-floor/`}>
                <div
                    className="absolute third-floor cursor-pointer h-full w-full z-20 bg-tilia-yellow-block opacity-0 hover:opacity-80 duration-150 ease-in"
                    title="Трети Етаж"
                ></div>
            </Link>
            <Link href={`/apartments/floor/second-floor/`}>
                <div
                    className="absolute second-floor cursor-pointer  h-full w-full z-20 bg-tilia-yellow-block opacity-0 hover:opacity-80 duration-150 ease-in"
                    title="Втори Етаж"
                ></div>
            </Link>
            <Link href={`/apartments/floor/first-floor/`}>
                <div
                    className="absolute first-floor cursor-pointer  h-full w-full z-20 bg-tilia-yellow-block opacity-0 hover:opacity-80 duration-150 ease-in"
                    title="Първи Етаж"
                ></div>
            </Link>
            <Link href={`/apartments/floor/garage-1/`}>
                <div
                    className="absolute garage-1 cursor-pointer h-full w-full z-20 bg-tilia-yellow-block opacity-0 hover:opacity-80 duration-150 ease-in"
                    title="Първи Подземен Етаж"
                ></div>
            </Link>
            <Link href={`/apartments/floor/garage-2/`}>
                <div
                    className="absolute garage-2 cursor-pointer h-full w-full z-20 bg-tilia-yellow-block opacity-0 hover:opacity-80 duration-150 ease-in"
                    title="Втори Подземен Етаж"
                ></div>
            </Link>
            {/* <div className='absolute outside cursor-pointer h-full w-full bg-white opacity-50 z-10'  ></div> */}
            {/* <img src="/ixora-apartments-plan.webp" alt="Tilia Plan" className="relative" /> */}

            <div>
                {/* <img src="/tilia/tilia-plan.webp" alt="" /> */}
                <Image
                    loader={imageLoader}
                    src="/tilia/tilia-plan.webp"
                    alt="plan"
                    width={9600}
                    height={6900}
                ></Image>
            </div>
        </div>
    );
};
export default Plan;
