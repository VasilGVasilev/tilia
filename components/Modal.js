import { motion } from "framer-motion";
import { usePathname } from "next/navigation";


const Modal = ({ isOpen, onClose, apartment, unit }) => {
    if (!isOpen) return null;
    const pathname = usePathname();
    const firstOrLastFloor = pathname === '/apartments/first-floor/' || pathname === '/apartments/penthouse/'
    const secondOrThirdFloor = pathname === '/apartments/second-floor/' || pathname === '/apartments/third-floor/'

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <motion.div 
                className="flex flex-col bg-white p-4 rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1.0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
            >
                {/* Add your modal content here */}
                <>

                    {firstOrLastFloor &&
                    <>
                    
                        <div className='mb-8 bg-tilia-orange'>
                            <div className="p-4 text-white text-center text-2xl font-extrabold">Площообразуване <br /> ап. {apartment?.ap}</div>
                        </div>
                        <div className="mb-5 border-r-2 border-l-2 border-tilia-orange text-center" >
                            <div className="flex justify-center space-x-3 ">
                                <div>Площ</div>
                                <div className="font-bold text-tilia-orange">{apartment?.plosht} м²</div>
                            </div>
                            <div className="font-bold"> + </div>
                            <div className="flex justify-center space-x-3 ">
                                <div>Двор</div>
                                <div className="font-bold text-tilia-orange">{apartment?.dvor} м²</div>
                            </div>
                            <div className="font-bold"> = </div>
                            <div className="flex justify-center space-x-3 ">
                                <div>Обща площ</div>
                                <div className="font-bold text-tilia-orange">{apartment?.total} м²</div>
                            </div>
                        </div>
                    </>
                    }
                    {pathname === '/apartments/parking/' &&
                        <>
                            <div className='mb-8 bg-tilia-orange'>
                                <div className="p-4 text-white text-center text-2xl font-extrabold">Площообразуване <br /> {unit?.mqsto}</div>
                            </div>
                            <div className="mb-5 border-r-2 border-l-2 border-tilia-orange text-center" >
                                <div className="flex justify-center space-x-3 ">
                                    <div>Площ</div>
                                    <div className="font-bold text-tilia-orange">{unit?.plosht} м²</div>
                                </div>
                            </div>
                        </>
                    }
                    {secondOrThirdFloor &&
                        <>
                            <div className='mb-8 bg-tilia-orange'>
                                <div className="p-4 text-white text-center text-2xl font-extrabold">Площообразуване <br /> ап. {apartment?.ap}</div>
                            </div>
                            <div className="mb-5 border-r-2 border-l-2 border-tilia-orange text-center" >
                                <div className="flex justify-center space-x-3 ">
                                    <div>Площ</div>
                                    <div className="font-bold text-tilia-orange">{apartment?.plosht} м²</div>
                                </div>
                                <div className="font-bold"> + </div>
                                <div className="flex justify-center space-x-3 ">
                                    <div>( ЗП</div>
                                    <div className="font-bold text-tilia-orange">{apartment?.zp} м²)</div>
                                </div>
                            </div>
                        </>
                    }

                </>
                <button
                    className="mt-4 px-4 py-2 bg-tilia-orange text-white rounded"
                    onClick={onClose}
                >
                    X
                </button>
            </motion.div>
        </div >
    )
}

export default Modal

