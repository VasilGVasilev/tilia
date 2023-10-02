
import { imageLoader } from '@/utils/imgLoader';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { AiOutlineClose } from 'react-icons/ai';


const PicsLightbox = ({ isOpen, onClose, url, alt }) => {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <motion.div
                className="h-auto sm:h-screen w-screen bg-white p-5 flex flex-col"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                {/* Add your modal content here */}
                <div className="justify-start items-end">
                    <button onClick={onClose}>
                        <AiOutlineClose size={24} className="text-neutral-600" />
                    </button>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    {/* default w and h for simplicity */}
                    <Image
                        className='h-fit sm:h-[90vh] w-full'
                        loader={imageLoader}
                        src={url}
                        alt={alt}
                        width={5000}
                        height={5000}
                    ></Image>
                </div>

            </motion.div>
        </div >
    )

};


export default PicsLightbox;