import { imageLoader } from "@/utils/imgLoader";
import { motion } from "framer-motion";
import Image from "next/image";

const imageVariant = {
    hidden: { opacity: 0, scale: 0.2 },
    visible: { opacity: 1, scale: 1 },
};

export const ImageSquare = ({ alt, url, openModal, setSelectedPic, urlW, urlH }) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-100 transition duration-700
      bg-deep-blue z-30 flex flex-col justify-center items-center text-center p-10 text-white`;

    return (
        <motion.div variants={imageVariant} className="relative">

            <div
                onClick={() => {
                    setSelectedPic(url);
                    openModal();
                }}
                className="flex flex-col justify-center items-center w-full h-fit p-5"
            >

                <Image
                    className="shadow-2xl hover:scale-110 transition duration-300"
                    loader={imageLoader}
                    src={url}
                    alt={alt}
                    width={urlW}
                    height={urlH}
                ></Image>
            </div>
        </motion.div>
    );
};