import { useState } from "react";
import { lato, noto } from "@/utils/fonts";
import { imageLoader } from "@/utils/imgLoader";
import { motion } from "framer-motion";
import Image from "next/image";
import BuildingProcess from "./BuildingProcess";
const images3 = [
    {
        original: "/tilia-30-05/IMG_4821.JPG",
        thumbnail: "/tilia-30-05/IMG_4821.JPG",
    },
    {
        original: "/tilia-30-05/IMG_4822.JPG",
        thumbnail: "/tilia-30-05/IMG_4822.JPG",
    },
    {
        original: "/tilia-30-05/IMG_4823.JPG",
        thumbnail: "/tilia-30-05/IMG_4823.JPG",
    },
    {
        original: "/tilia-30-05/IMG_4824.JPG",
        thumbnail: "/tilia-30-05/IMG_4824.JPG",
    },
    {
        original: "/tilia-30-05/IMG_4825.JPG",
        thumbnail: "/tilia-30-05/IMG_4825.JPG",
    },
    {
        original: "/tilia-30-05/IMG_4826.JPG",
        thumbnail: "/tilia-30-05/IMG_4826.JPG",
    },
    {
        original: "/tilia-30-05/IMG_4827.JPG",
        thumbnail: "/tilia-30-05/IMG_4827.JPG",
    },
    {
        original: "/tilia-30-05/IMG_4828.JPG",
        thumbnail: "/tilia-30-05/IMG_4828.JPG",
    },
    {
        original: "/tilia-30-05/IMG_4829.JPG",
        thumbnail: "/tilia-30-05/IMG_4829.JPG",
    },
];
const images2 = [
    {
        original: "/kota0/third/image-00001.JPG",
        thumbnail: "/kota0/third/image-00001.JPG",
    },
    {
        original: "/kota0/third/image-001.webp",
        thumbnail: "/kota0/third/image-001.webp",
    },
    {
        original: "/kota0/image-0001.webp",
        thumbnail: "/kota0/image-0001.webp",
    },
    {
        original: "/kota0/image-0002.webp",
        thumbnail: "/kota0/image-0002.webp",
    },
    {
        original: "/kota0/image-001.webp",
        thumbnail: "/kota0/image-001.webp",
    },
    {
        original: "/kota0/image-002.webp",
        thumbnail: "/kota0/image-002.webp",
    },
    {
        original: "/kota0/image-003.webp",
        thumbnail: "/kota0/image-003.webp",
    }
];
const images1 = [
    {
        original: "/kota0/image-006.webp",
        thumbnail: "/kota0/image-006.webp",
    },
    {
        original: "/kota0/image-004.webp",
        thumbnail: "/kota0/image-004.webp",
    },
    {
        original: "/kota0/image-005.webp",
        thumbnail: "/kota0/image-005.webp",
    },
    {
        original: "/kota0/image-007.webp",
        thumbnail: "/kota0/image-007.webp",
    },
    {
        original: "/kota0/image-008.webp",
        thumbnail: "/kota0/image-008.webp",
    }
];
const Kota0 = () => {

    return (
        <div className="flex flex-col gap-5 p-10">
            <BuildingProcess images={images3}></BuildingProcess>
            <BuildingProcess images={images2}></BuildingProcess>
            <BuildingProcess images={images1}></BuildingProcess>
        </div>
    );
};

export default Kota0;
