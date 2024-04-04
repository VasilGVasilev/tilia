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
            className="bg-tilia-gray p-7 flex flex-col justify-center items-center gap-5 "
            // viewport={{ once: true }}
            // variants={{
            //     hidden: { opacity: 0, scale: 1.3 },
            //     visible: { opacity: 1, scale: 1 },
            // }}
        >
            <div className="font-semibold md:text-xl lg:text-2xl">{title}</div>
            <Link href={`/apartments?param=${bedrooms}`}>
                <Image
                    className="hover:scale-110 transition duration-300 md:w-[300px] md:h-[300px]"
                    loader={imageLoader}
                    src={img}
                    alt="type"
                    width={imgW}
                    height={imgH}
                ></Image>
            </Link>
        </div>
    );
};

const ApartmentTypes = () => {
    const apartmentTypes = [
        {
            title: "ЕДНОСТАЙНИ АПАРТАМЕНТИ",
            imgUrl: "/assets/no-beds.webp",
            imgW: "3000",
            imgH: "3000",
            bedrooms: "none",
        },
        {
            title: "ДВУСТАЙНИ АПАРТАМЕНТИ",
            imgUrl: "/assets/one-bed.webp",
            imgW: "3000",
            imgH: "3000",
            bedrooms: "one",
        },
        {
            title: "ТРИСТАЙНИ АПАРТАМЕНТИ",
            imgUrl: "/assets/two-beds.webp",
            imgW: "3000",
            imgH: "3000",
            bedrooms: "two",
        },
        {
            title: "ЧЕТИРИСТАЙНИ АПАРТАЙНИ",
            imgUrl: "/assets/penthouse.webp",
            imgW: "3000",
            imgH: "3000",
            bedrooms: "three",
        },
    ];

    return (
        <div className="flex flex-col gap-5">
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
                    ТИПОВЕ
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
                    ИМОТИ
                </div>
            </div>
            <div
                className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center gap-5"
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
                <div className="flex flex-row gap-1 rounded-full bg-tilia-yellow-block w-fit h-fit p-3 font-semibold sm:text-xl hover:bg-black hover:text-white transition">
                    <div>Разгледай всички</div>
                    <HiExternalLink size={16} />
                </div>
            </Link>
        </div>
    );
};

export default ApartmentTypes;
