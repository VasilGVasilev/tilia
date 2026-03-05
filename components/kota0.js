import { useState } from "react";
import { lato, noto } from "@/utils/fonts";
import { imageLoader } from "@/utils/imgLoader";
import { motion } from "framer-motion";
import Image from "next/image";
import BuildingProcess from "./BuildingProcess";
const images3 = [
    {
        original: "/tilia-05-03/image-4DF0-9723-79-0.jpeg",
        thumbnail: "/tilia-05-03/image-4DF0-9723-79-0.jpeg",
    },
    {
        original: "/tilia-25-01/IMG_2735.JPG",
        thumbnail: "/tilia-25-01/IMG_2735.JPG",
    },
    {
        original: "/tilia-05-11/IMG_8832.jpeg",
        thumbnail: "/tilia-05-11/IMG_8832.jpeg",
    },
    {
        original: "/tilia-05-11/IMG_8427.jpeg",
        thumbnail: "/tilia-05-11/IMG_8427.jpeg",
    },
    {
        original: "/tilia-05-11/IMG_8834.jpeg",
        thumbnail: "/tilia-05-11/IMG_8834.jpeg",
    },
    {
        original: "/tilia-05-11/IMG_8835.jpeg",
        thumbnail: "/tilia-05-11/IMG_8835.jpeg",
    },
    {
        original: "/tilia-05-11/IMG_8845.jpeg",
        thumbnail: "/tilia-05-11/IMG_8845.jpeg",
    },
    {
        original: "/tilia-05-11/IMG_8846.jpeg",
        thumbnail: "/tilia-05-11/IMG_8846.jpeg",
    },
    {
        original: "/tilia-05-11/IMG_8847.jpeg",
        thumbnail: "/tilia-05-11/IMG_8847.jpeg",
    },
    {
        original: "/tilia-05-11/IMG_8848.jpeg",
        thumbnail: "/tilia-05-11/IMG_8848.jpeg",
    },

];
const images2 = [
    {
        original: "/tilia-25-01/IMG_2734.JPG",
        thumbnail: "/tilia-25-01/IMG_2734.JPG",
    },
    {
        original: "/kota0/third/image-421E-BA71-7C-0.jpeg",
        thumbnail: "/kota0/third/image-421E-BA71-7C-0.jpeg",
    },
    {
        original: "/kota0/third/image-00001.JPG",
        thumbnail: "/kota0/third/image-00001.JPG",
    },
    {
        original: "/kota0/third/image-001.webp",
        thumbnail: "/kota0/third/image-001.webp",
    },
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
    }
];

const Kota0 = () => {

    return (
        <div className="flex flex-col gap-5 p-10">
            <BuildingProcess images={images3}></BuildingProcess>
            <BuildingProcess images={images2}></BuildingProcess>
        </div>
    );
};

export default Kota0;
