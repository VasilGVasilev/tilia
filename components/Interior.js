import { container } from "@/app/Home";
import { noto } from "@/utils/fonts";
import { imageLoader } from "@/utils/imgLoader";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HiExternalLink } from "react-icons/hi";
import BuildingProcess from "./BuildingProcess";
const images1 = [
    {
        original: "/interior/001.webp",
        thumbnail: "/interior/001.webp",
    },
    {
        original: "/interior/002.webp",
        thumbnail: "/interior/002.webp",
    },
    {
        original: "/interior/003.webp",
        thumbnail: "/interior/003.webp",
    },
    {
        original: "/interior/004.webp",
        thumbnail: "/interior/004.webp",
    },
    {
        original: "/interior/006.webp",
        thumbnail: "/interior/006.webp",
    }
];

const Interior = () => {


    return (
        <div className="flex flex-col gap-5 p-10">
            {/* TITLE */}
            <div
                className={`${noto.className} text-2xl md:text-5xl lg:text-[80px]`}
                // initial="hidden"
                // whileInView="visible"
                // viewport={{ once: true }}
                // transition={{ duration: 0.7, delay: 0.3 }}
                // variants={{
                //     hidden: { opacity: 0, translateY: 20, skewX: -80, rotateY: 50 },
                //     visible: { opacity: 1, translateY: 0, skewX: 0, rotateY: 0 },
                // }}
            >
                ИНТЕРИОР
            </div>

            <div className="relative">
                <BuildingProcess images={images1}></BuildingProcess>
            </div>
        </div>
    );
};

export default Interior;
