import { motion } from "framer-motion";

const imageVariant = {
    hidden: { opacity: 0, scale: 0.2 },
    visible: { opacity: 1, scale: 1 },
};

export const ImageSquare = ({ alt, url, openModal, setSelectedPic, selectedPic}) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-100 transition duration-700
      bg-deep-blue z-30 flex flex-col justify-center items-center text-center p-10 text-white`;

    return (
        <motion.div variants={imageVariant} className="relative">

            <div
                onClick={()=>{
                    setSelectedPic(url);
                    openModal();
                }}
                className="flex flex-col justify-center items-center w-full h-fit p-5"
            >
                <img src={url} alt={alt} className="shadow-2xl hover:scale-110 transition duration-300" />
            </div>
        </motion.div>
    );
};