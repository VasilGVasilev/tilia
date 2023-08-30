import { useState } from 'react';

import { motion } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';

const images = [

    {

        src:

            'https://timellenberger.com/static/blog-content/dark-mode/win10-dark-mode.jpg',

        alt: 'Windows 10 Dark Mode Setting'

    },

    {

        src:

            'https://timellenberger.com/static/blog-content/dark-mode/macos-dark-mode.png',

        alt: 'macOS Mojave Dark Mode Setting'

    },

    {

        src:

            'https://timellenberger.com/static/blog-content/dark-mode/android-9-dark-mode.jpg',

        alt: 'Android 9.0 Dark Mode Setting'

    }

];


const PicsLightbox = ({ isOpen, onClose, url, alt }) => {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <motion.div
                className="h-fit sm:h-screen w-screen bg-white p-4 flex flex-col"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1.0 }}
                transition={{ duration: 0.4 }}
            >
                {/* Add your modal content here */}
                <div className="justify-start items-end">
                    <button onClick={onClose}>
                        <AiOutlineClose size={24} className="text-neutral-600" />
                    </button>
                </div>
                <img src={url} alt={alt} className='h-fit sm:h-full w-fit'/>



            </motion.div>
        </div >
    )

};


export default PicsLightbox;