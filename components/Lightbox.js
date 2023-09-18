
import { motion } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';


const PicsLightbox = ({ isOpen, onClose, url, alt }) => {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <motion.div
                className="h-auto sm:h-screen w-screen bg-white p-4 flex flex-col"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* Add your modal content here */}
                <div className="justify-start items-end">
                    <button onClick={onClose}>
                        <AiOutlineClose size={24} className="text-neutral-600" />
                    </button>
                </div>
                <img src={url} alt={alt} className='h-auto sm:h-full w-fit'/>



            </motion.div>
        </div >
    )

};


export default PicsLightbox;