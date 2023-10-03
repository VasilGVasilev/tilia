import { lato, noto } from "@/utils/fonts";
import { imageLoader } from "@/utils/imgLoader";
import { motion } from "framer-motion"
import Image from "next/image";
const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const rowVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
};
// TODO: motion.div animation apply
const ForBuilding = () => {
    return (
        <div className="flex flex-col bg-tilia-yellow-block pt-10">


            {/* TITLE */}
            <div className="text-white flex flex-row pb-5 gap-5 bg-tilia-yellow-block p-10">
                <motion.div
                    className={`${noto.className} text-2xl md:text-5xl lg:text-[80px]`}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.7, delay: 0.3 }}
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0, translateY: 20, skewX: -80, rotateY: 50 },
                        visible: { opacity: 1, translateY: 0, skewX: 0, rotateY: 0 },
                    }}
                >

                    ВИЗИЯ
                </motion.div>
                <motion.div
                    className={`${noto.className} text-2xl md:text-5xl lg:text-[80px]`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    variants={{
                        hidden: { opacity: 0, translateY: 20, skewX: -80, rotateY: 50 },
                        visible: { opacity: 1, translateY: 0, skewX: 0, rotateY: 0 },
                    }}
                >

                    И
                </motion.div>
                <motion.div
                    className={`${noto.className} text-2xl md:text-5xl lg:text-[80px]`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.9 }}
                    variants={{
                        hidden: { opacity: 0, translateY: 20, skewX: -80, rotateY: 50 },
                        visible: { opacity: 1, translateY: 0, skewX: 0, rotateY: 0 },
                    }}
                >

                    МАТЕРИАЛИ
                </motion.div>
            </div>


            {/* DESCRIPTION */}

            <div className="flex flex-col md:flex-row gap-10 bg-tilia-yellow-block p-10">
                {/* IMAGE */}
                <motion.div
                    className="basis-1/2 relative z-0 ml-5 before:absolute before:-top-10 before:-left-10  before:rounded-t-[400px]
                     before:w-full before:max-w-[400px] md:before:max-w-[600px]  before:opacity-20 before:h-full before:border-4 before:border-white before:z-[-1]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, scale: 0 },
                        visible: { opacity: 1, scale: 1 },
                    }}
                >

                    <Image
                        className="z-10 w-full rounded-t-[400px] max-w-[400px] md:max-w-[600px]"
                        loader={imageLoader}
                        src="/tilia/tilia-one.webp"
                        alt="picture"
                        width={4946}
                        height={3216}
                    ></Image>
                </motion.div>

                <div className="basis-1/2 flex flex-col gap-5">

                    {/* small intro text 1 */}
                    <motion.div
                        className=" xl:text-xl"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, scale: 1.3 },
                            visible: { opacity: 1, scale: 1 },
                        }}
                    >
                        Lorem Ipsum is simply dumy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

                    </motion.div>

                    {/* small intro text  */}
                    <motion.div
                        className=" xl:text-xl"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, scale: 1.3 },
                            visible: { opacity: 1, scale: 1 },
                        }}
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

                    </motion.div>
                </div>



            </div>


            {/* DETAILS */}

            <div className=" flex flex-col gap-10 bg-white p-10">

                <div className="flex flex-col lg:flex-row justify-center items-center ">
                    <motion.div
                        className="h-fit lg:basis-1/2 lg:order-2"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, scale: 0 },
                            visible: { opacity: 1, scale: 1 },
                        }}
                    >

                        <div className="relative rounded-full overflow-hidden ">

                            <Image
                                className="z-0"
                                loader={imageLoader}
                                src="/tilia/tilia-dvor-2.webp"
                                alt="picture"
                                width={5120}
                                height={2880}
                            ></Image>
                            <span className="absolute inset-0 z-10 rounded-full shadow-inner-3xl"></span>

                        </div>

                    </motion.div>

                    <div className="lg:basis-1/2 lg:order-1">
                        <motion.div
                            className="p-10 "
                            variants={container}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >

                            <motion.div
                                variants={rowVariant}
                                viewport={{ once: true }}
                            >
                                <p className="sm:text-xl text-black font-bold">Фасада</p>
                                <p className="text-sm sm:text-lg text-gray-900 text-justify">Окачена, вентилируема, с каменна облицовка от варовик и декоративни елементи от композитен панел - еталбонд. Топлоизолация от каменна вата. </p>
                                <br />
                            </motion.div>
                            <motion.div
                                viewport={{ once: true }}
                                variants={rowVariant}
                            >

                                <p className="sm:text-xl text-black font-bold">Фоайе и общи части</p>
                                <p className="text-sm sm:text-lg text-gray-900 text-justify">По специален интериорен проект с каменно оформление от мрамор и оникс.</p>
                                <br />

                            </motion.div>
                            <motion.div
                                viewport={{ once: true }}
                                variants={rowVariant}
                            >
                                <p className="sm:text-xl text-black font-bold">Дограма</p>
                                <p className="text-sm sm:text-lg text-gray-900 text-justify">Алуминиева дограма от най-висок клас "WEISS PROFIL" THERMO PRO 85 с цвят антрацит. </p>
                                <br />

                            </motion.div>
                            <motion.div
                                viewport={{ once: true }}
                                variants={rowVariant}
                            >
                                <p className="sm:text-xl text-black font-bold">Асансьор</p>
                                <p className="text-sm sm:text-lg text-gray-900 text-justify">Висок клас асансьор - КОНЕ. </p>
                                <br />

                            </motion.div>
                        </motion.div>
                    </div>


                </div>

                <div className="flex flex-col lg:flex-row justify-center items-center">
                    <motion.div
                        className="h-fit lg:basis-1/2"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, scale: 0 },
                            visible: { opacity: 1, scale: 1 },
                        }}
                    >
                        <div className="relative rounded-full overflow-hidden ">

                            <Image
                                className="z-0"
                                loader={imageLoader}
                                src="/tilia/tilia-dvor-3.webp"
                                alt="picture"
                                width={5568}
                                height={3132}
                            ></Image>
                            <span className="absolute inset-0 z-10 rounded-full shadow-inner-3xl"></span>

                        </div>
                    </motion.div>

                    <div className="lg:basis-1/2">
                        <motion.div
                            className="p-10 "
                            variants={container}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <motion.div
                                viewport={{ once: true }}
                                variants={rowVariant}
                            >

                                <p className="sm:text-xl text-black font-bold">Врати</p>
                                <p className="text-sm sm:text-lg text-gray-900 text-justify">Блиндирани входни врати SOLID с цвят дъб - модел "iDoor 20-22" Серия 50.</p>
                                <br />

                            </motion.div>
                            <motion.div
                                viewport={{ once: true }}
                                variants={rowVariant}
                            >

                                <p className="sm:text-xl text-black font-bold">ВиК</p>
                                <p className="text-sm sm:text-lg text-gray-900 text-justify">Обезшумяваща канализационна система - Пайплайф MASTER 3</p>
                                <br />

                            </motion.div>
                            <motion.div
                                viewport={{ once: true }}
                                variants={rowVariant}
                            >

                                <p className="sm:text-xl text-black font-bold">Отопление</p>
                                <p className="text-sm sm:text-lg text-gray-900 text-justify">Централно газоснабдена сграда. Етаж 1 и 2 са заложени с висок клас енергоефективни радиатори тип Jaga. Етаж 3 и 4 са изпълнени с подово отопление със самостоятелен термостат за всяко помещение.  </p>
                                <br />

                            </motion.div>
                            <motion.div
                                viewport={{ once: true }}
                                variants={rowVariant}
                            >

                                <p className="sm:text-xl text-black font-bold">Гаражи</p>
                                <p className="text-sm sm:text-lg text-gray-900 text-justify">Голям брой гаражи в сутерена и допълнителни паркоместа извън сградата. </p>
                                <br />

                            </motion.div>
                        </motion.div>
                    </div>


                </div>

                <div className="flex flex-col lg:flex-row justify-center items-center">

                    <motion.div
                        className="h-fit lg:basis-1/2 lg:order-2"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, scale: 0 },
                            visible: { opacity: 1, scale: 1 },
                        }}
                    >
                        <div className="relative rounded-full overflow-hidden ">

                            <Image
                                className="z-0"
                                loader={imageLoader}
                                src="/tilia/tilia-three.webp"
                                alt="picture"
                                width={4946}
                                height={3341}
                            ></Image>
                            <span className="absolute inset-0 z-10 rounded-full shadow-inner-3xl"></span>

                        </div>
                    </motion.div>

                    <div className="lg:basis-1/2 lg:order-1">
                        <motion.div
                            className="p-10 "
                            variants={container}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <motion.div
                                viewport={{ once: true }}
                                variants={rowVariant}
                            >

                                <p className="sm:text-xl text-black font-bold">Сигурност</p>
                                <p className="text-sm sm:text-lg text-gray-900 text-justify">Ограда. Контролиран достъп с чип и разпознаване на автомобилен номер. 24/7 жива охрана. </p>
                                <br />

                            </motion.div>
                            <motion.div
                                viewport={{ once: true }}
                                variants={rowVariant}
                            >

                                <p className="sm:text-xl text-black font-bold">Удобства</p>
                                <p className="text-sm sm:text-lg text-gray-900 text-justify">Самостоятелен фитнес с уреди TECHNOGYM. Спа център с джакузи, парна баня и сауна, оборудвани с топли лежанки. </p>
                                <br />

                            </motion.div>
                            <motion.div
                                viewport={{ once: true }}
                                variants={rowVariant}
                            >
                                <p className="sm:text-xl text-black font-bold">Озеленяване</p>
                                <p className="text-sm sm:text-lg text-gray-900 text-justify">Вертикалната планировка по специален ландшафтен проект оформя зелен пояс около сградата, който създава усещане за живот в паркова среда. </p>
                            </motion.div>
                        </motion.div>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default ForBuilding

