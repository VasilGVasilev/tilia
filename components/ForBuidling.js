import { lato, noto } from "@/utils/fonts";
import { motion } from "framer-motion"
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
        <div className="flex flex-col gap-5">


            {/* TITLE */}
            <div className="text-white flex flex-row pb-5 gap-5">
                <motion.div
                    className={`${noto.className} text-2xl md:text-5xl lg:text-[80px]`}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.7, delay: 0.3 }}
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
                    transition={{ duration: 0.7, delay: 0.9 }}
                    variants={{
                        hidden: { opacity: 0, translateY: 20, skewX: -80, rotateY: 50 },
                        visible: { opacity: 1, translateY: 0, skewX: 0, rotateY: 0 },
                    }}
                >

                    МАТЕРИАЛИ
                </motion.div>
            </div>

            <div className="flex flex-col md:flex-row md:gap-10">

                <div className="flex flex-col">

                    {/* small intro text 1 */}
                    <div className=" xl:text-xl">
                        Lorem Ipsum is simply dumy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </div>
                    {/* break */}
                    <br />
                    {/* small intro text  */}
                    <div className=" xl:text-xl">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </div>
                </div>

                {/* IMAGE */}
                <div className="flex flex-col justify-center items-center pt-5">
                    <img
                        alt="profile"
                        // filter is not actually necessary, you can go ahead with saturate-200 directly
                        className="z-10 rounded-t-[400px] w-full"
                        src="/tilia/tilia-one.webp"
                    />
                </div>

            </div>
            

            {/* DESCRIPTION */}

            <div className=" w-full h-fit ">

                <motion.ul
                    className="p-5 border-r-2 border-t-2 border-white"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.div
                        variants={rowVariant}
                    >
                        <p className="sm:text-xl text-black font-bold">Фасада</p>
                        <li className="text-sm sm:text-lg text-gray-900 text-justify">Окачена, вентилируема, с каменна облицовка от варовик и декоративни елементи от композитен панел - еталбонд. Топлоизолация от каменна вата. </li>
                        <br />
                    </motion.div>
                    <motion.div
                        variants={rowVariant}
                    >

                        <p className="sm:text-xl text-black font-bold">Фоайе и общи части</p>
                        <li className="text-sm sm:text-lg text-gray-900 text-justify">По специален интериорен проект с каменно оформление от мрамор и оникс.</li>
                        <br />

                    </motion.div>
                    <motion.div
                        variants={rowVariant}
                    >
                        <p className="sm:text-xl text-black font-bold">Дограма</p>
                        <li className="text-sm sm:text-lg text-gray-900 text-justify">Алуминиева дограма от най-висок клас "WEISS PROFIL" THERMO PRO 85 с цвят антрацит. </li>
                        <br />

                    </motion.div>
                    <motion.div
                        variants={rowVariant}
                    >
                        <p className="sm:text-xl text-black font-bold">Асансьор</p>
                        <li className="text-sm sm:text-lg text-gray-900 text-justify">Висок клас асансьор - КОНЕ. </li>
                        <br />

                    </motion.div>
                    <motion.div
                        variants={rowVariant}
                    >

                        <p className="sm:text-xl text-black font-bold">Врати</p>
                        <li className="text-sm sm:text-lg text-gray-900 text-justify">Блиндирани входни врати SOLID с цвят дъб - модел "iDoor 20-22" Серия 50.</li>
                        <br />

                    </motion.div>
                    <motion.div
                        variants={rowVariant}
                    >

                        <p className="sm:text-xl text-black font-bold">ВиК</p>
                        <li className="text-sm sm:text-lg text-gray-900 text-justify">Обезшумяваща канализационна система - Пайплайф MASTER 3</li>
                        <br />

                    </motion.div>
                    <motion.div
                        variants={rowVariant}
                    >

                        <p className="sm:text-xl text-black font-bold">Отопление</p>
                        <li className="text-sm sm:text-lg text-gray-900 text-justify">Централно газоснабдена сграда. Етаж 1 и 2 са заложени с висок клас енергоефективни радиатори тип Jaga. Етаж 3 и 4 са изпълнени с подово отопление със самостоятелен термостат за всяко помещение.  </li>
                        <br />

                    </motion.div>
                    <motion.div
                        variants={rowVariant}
                    >

                        <p className="sm:text-xl text-black font-bold">Гаражи</p>
                        <li className="text-sm sm:text-lg text-gray-900 text-justify">Голям брой гаражи в сутерена и допълнителни паркоместа извън сградата. </li>
                        <br />

                    </motion.div>
                    <motion.div
                        variants={rowVariant}
                    >

                        <p className="sm:text-xl text-black font-bold">Сигурност</p>
                        <li className="text-sm sm:text-lg text-gray-900 text-justify">Ограда. Контролиран достъп с чип и разпознаване на автомобилен номер. 24/7 жива охрана. </li>
                        <br />

                    </motion.div>
                    <motion.div
                        variants={rowVariant}
                    >

                        <p className="sm:text-xl text-black font-bold">Удобства</p>
                        <li className="text-sm sm:text-lg text-gray-900 text-justify">Самостоятелен фитнес с уреди TECHNOGYM. Спа център с джакузи, парна баня и сауна, оборудвани с топли лежанки. </li>
                        <br />

                    </motion.div>
                    <motion.div
                        variants={rowVariant}
                    >

                        <p className="sm:text-xl text-black font-bold">Комуникативна локация</p>
                        <li className="text-sm sm:text-lg text-gray-900 text-justify">🚗 С кола: <br /> ↪ 1 минута ресторант Проя и супермаркет Макс <br /> ↪ 3 минути BRITANICA Park School и няколко детски градини <br /> ↪ 4 минути супермаркет ФАНТАСТИКО <br /> ↪ 7 минути Paradise Center <br /> ↪ 9 минути Sofia Ring Mall </li>
                        <br />


                    </motion.div>
                    <motion.div
                        variants={rowVariant}
                    >
                        <li className="text-sm sm:text-lg text-gray-900 text-justify">🚌 Публичен транспорт: <br /> Автобуси 68 и 98</li>
                        <br />

                    </motion.div>
                    <motion.div
                        variants={rowVariant}
                    >
                        <p className="sm:text-xl text-black font-bold">Озеленяване</p>
                        <li className="text-sm sm:text-lg text-gray-900 text-justify">Вертикалната планировка по специален ландшафтен проект оформя зелен пояс около сградата, който създава усещане за живот в паркова среда. </li>
                    </motion.div>
                </motion.ul>
            </div>

        </div>
    )
}

export default ForBuilding

