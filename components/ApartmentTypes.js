import { container } from "@/app/Home";
import { noto } from "@/utils/fonts";
import { imageLoader } from "@/utils/imgLoader";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HiExternalLink } from "react-icons/hi";

const TypeApp = ({ title, img, imgW, imgH, bedrooms }) => {
    return (
        <div
            className=" p-3 sm:p-10 mx-auto"
        // viewport={{ once: true }}
        // variants={{
        //     hidden: { opacity: 0, scale: 1.3 },
        //     visible: { opacity: 1, scale: 1 },
        // }}
        >
            <Link href={`/apartments?param=${bedrooms}`}>
                <Image
                    className="hover:scale-105 transition duration-300 md:w-[300px] md:h-[300px]"
                    loader={imageLoader}
                    src={img}
                    alt="type"
                    width={imgW}
                    height={imgH}
                ></Image>
                <div className="font-semibold md:text-2xl lg:text-3xl text-start">{title}</div>

            </Link>
        </div>
    );
};

const ApartmentTypes = () => {
    const apartmentTypes = [
        {
            title: "ЕДНОСТАЙНИ АПАРТАМЕНТИ",
            imgUrl: "/assets/no-beds-v2.webp",
            imgW: "3000",
            imgH: "3000",
            bedrooms: "0",
        },
        {
            title: "ДВУСТАЙНИ АПАРТАМЕНТИ",
            imgUrl: "/assets/one-bed-v2.webp",
            imgW: "3000",
            imgH: "3000",
            bedrooms: "1",
        },
        {
            title: "ТРИСТАЙНИ АПАРТАМЕНТИ",
            imgUrl: "/assets/two-beds-v2.webp",
            imgW: "3000",
            imgH: "3000",
            bedrooms: "2",
        },
        {
            title: "ЧЕТИРИСТАЙНИ АПАРТАЙНИ",
            imgUrl: "/assets/penthouse-v2.webp",
            imgW: "3000",
            imgH: "3000",
            bedrooms: "3",
        },
    ];

    return (
        <div className="flex flex-col gap-5 p-10">
            <div className="text-black text-left flex flex-col">
                <div
                    className={`${noto.className} text-2xl md:text-5xl lg:text-[80px]`}
                // initial="hidden"
                // whileInView="visible"
                // viewport={{ once: true }}
                // transition={{ duration: 0.7 }}
                // variants={{
                //     hidden: { opacity: 0, translateY: 20, skewX: -80, rotateY: 50 },
                //     visible: { opacity: 1, translateY: 0, skewX: 0, rotateY: 0 },
                // }}
                >
                    ИЗБЕРИ
                </div>
                <div
                    className={`${noto.className} text-2xl md:text-5xl lg:text-[80px]`}
                // initial="hidden"
                // whileInView="visible"
                // viewport={{ once: true }}
                // transition={{ duration: 0.7 }}
                // variants={{
                //     hidden: { opacity: 0, translateY: 20, skewX: -80, rotateY: 50 },
                //     visible: { opacity: 1, translateY: 0, skewX: 0, rotateY: 0 },
                // }}
                >
                    ТИП АПАРТАМЕНТ
                </div>
            </div>
            <div
                className="grid grid-cols-2 sm:grid-cols-4 gap-5 "
            // viewport={{ once: true }}
            // variants={{
            //     hidden: {},
            //     visible: {
            //         transition: {
            //             staggerChildren: 0.3,
            //         },
            //     },
            // }}
            // initial="hidden"
            // whileInView="visible"
            >
                {apartmentTypes.map((t) => (
                    <TypeApp
                        key={t.title}
                        title={t.title}
                        img={t.imgUrl}
                        imgW={t.imgW}
                        imgH={t.imgH}
                        bedrooms={t.bedrooms}
                    />
                ))}
            </div>

            <Link href={`/apartments?param=all`}>
                <div className="flex flex-row gap-1 rounded-full text-white bg-black w-fit h-fit p-3 font-semibold sm:text-xl hover:bg-white hover:text-black transition">
                    <div>Разгледай всички</div>
                    <HiExternalLink size={16} />
                </div>
            </Link>
        </div>
    );
};

export default ApartmentTypes;
