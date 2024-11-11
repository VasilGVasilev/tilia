import { useState } from "react";
import { lato, noto } from "@/utils/fonts";
import { imageLoader } from "@/utils/imgLoader";
import { motion } from "framer-motion";
import Image from "next/image";

const Kota0 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (imageSrc) => {
        setSelectedImage(imageSrc);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setIsModalOpen(false);
    };

    return (
        <div className="relative">
            <div className="flex flex-col">
                <div className="flex flex-row">
                <div className="w-full p-2">
                        <Image
                            loader={imageLoader}
                            src="/kota0/image-1.webp"
                            alt="Image 2"
                            width={1500}
                            height={1500}
                            className="object-cover cursor-pointer"
                            onClick={() => openModal("/kota0/image-1.webp")}
                        />
                    </div>
                </div>

                <div className="flex flex-row">
                    <div className="w-1/2 p-2">
                        <Image
                            loader={imageLoader}
                            src="/kota0/image-2.webp"
                            alt="Image 1"
                            width={1500}
                            height={1500}
                            className="object-cover cursor-pointer"
                            onClick={() => openModal("/kota0/image-2.webp")}
                        />
                    </div>

                    <div className="w-1/2 p-2">
                        <Image
                            loader={imageLoader}
                            src="/kota0/image-3.webp"
                            alt="Image 3"
                            width={1500}
                            height={1500}
                            className="object-cover cursor-pointer"
                            onClick={() => openModal("/kota0/image-3.webp")}
                        />
                    </div>
                </div>
                {/* First row: two images */}

                <div className="flex flex-row">

                    <div className="w-1/2 p-2">
                        <Image
                            loader={imageLoader}
                            src="/kota0/image-4.webp"
                            alt="Image 4"
                            width={1500}
                            height={1500}
                            className="object-cover cursor-pointer"
                            onClick={() => openModal("/kota0/image-4.webp")}
                        />
                    </div>
                    <div className="w-1/2 p-2">
                        <Image
                            loader={imageLoader}
                            src="/kota0/image-5.webp"
                            alt="Image 5"
                            width={1500}
                            height={1500}
                            className="object-cover cursor-pointer"
                            onClick={() => openModal("/kota0/image-5.webp")}
                        />
                    </div>
                </div>
                {/* Second row: three images */}
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                    <div className="relative">
                        <button
                            className="absolute top-0 right-0 m-4 text-white text-2xl"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <Image
                            style={{ maxHeight: "100vh" }}
                            loader={imageLoader}
                            src={selectedImage}
                            alt="Selected Image"
                            width={1500}
                            height={1500}
                            className="object-contain"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Kota0;
