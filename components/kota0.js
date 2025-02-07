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
                {/* First row: two images -side by side */}
                <div className="flex flex-row">
                    <div className="w-1/2 p-2">
                        <Image
                            loader={imageLoader}
                            src="/kota0/image-001.webp"
                            alt="Image"
                            width={1500}
                            height={1500}
                            className="object-cover cursor-pointer"
                            onClick={() => openModal("/kota0/image-001.webp")}
                        />
                    </div>

                    <div className="w-1/2 p-2">
                        <Image
                            loader={imageLoader}
                            src="/kota0/image-002.webp"
                            alt="Image"
                            width={1500}
                            height={1500}
                            className="object-cover cursor-pointer"
                            onClick={() => openModal("/kota0/image-002.webp")}
                        />
                    </div>
                </div>
                {/* Second row: one image */}
                <div className="flex flex-row">
                    <div className="w-1/2 p-2">
                        <Image
                            loader={imageLoader}
                            src="/kota0/image-003.webp"
                            alt="Image"
                            width={1500}
                            height={1500}
                            className="object-cover cursor-pointer"
                            onClick={() => openModal("/kota0/image-003.webp")}
                        />
                    </div>

                    <div className="w-1/2 p-2"></div>
                </div>
                {/* third row: three images first col long, second col other 2, one under the other */}

                <div className="flex flex-row">
                    <div className="flex flex-col w-1/2 p-2 ">
                        <Image
                            loader={imageLoader}
                            src="/kota0/image-006.webp"
                            alt="Image"
                            width={1500}
                            height={1500}
                            className="object-cover cursor-pointer"
                            onClick={() => openModal("/kota0/image-006.webp")}
                        />
                    </div>
                    <div className="flex flex-col w-1/2 p-2 gap-4">
                        <Image
                            loader={imageLoader}
                            src="/kota0/image-004.webp"
                            alt="Image"
                            width={1500}
                            height={1500}
                            className="object-cover cursor-pointer"
                            onClick={() => openModal("/kota0/image-004.webp")}
                        />
                        <Image
                            loader={imageLoader}
                            src="/kota0/image-005.webp"
                            alt="Image"
                            width={1500}
                            height={1500}
                            className="object-cover cursor-pointer"
                            onClick={() => openModal("/kota0/image-005.webp")}
                        />
                    </div>
                </div>
                {/* Fourth row: two images */}
                <div className="flex flex-row">
                    <div className="w-1/2 p-2">
                        <Image
                            loader={imageLoader}
                            src="/kota0/image-007.webp"
                            alt="Image"
                            width={1500}
                            height={1500}
                            className="object-cover cursor-pointer"
                            onClick={() => openModal("/kota0/image-007.webp")}
                        />
                    </div>

                    <div className="w-1/2 p-2">
                        <Image
                            loader={imageLoader}
                            src="/kota0/image-008.webp"
                            alt="Image"
                            width={1500}
                            height={1500}
                            className="object-cover cursor-pointer"
                            onClick={() => openModal("/kota0/image-008.webp")}
                        />
                    </div>
                </div>

            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                    <div className="relative">
                        <button
                            className="absolute top-0 right-0 m-4 text-white text-4xl"
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
