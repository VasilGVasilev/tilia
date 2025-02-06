import { lato, noto } from "@/utils/fonts";
import { imageLoader } from "@/utils/imgLoader";
import { motion } from "framer-motion"
import Image from "next/image";

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.3,
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
        <div className="flex flex-col bg-tilia-yellow-block">


            {/* TITLE CONCEPT */}
            <div className="text-black flex flex-col sm:flex-row p-10 sm:gap-5 bg-tilia-yellow-block">
                <div
                    className={`${noto.className} text-xl md:text-4xl xl:text-[70px]`}
                    // initial="hidden"
                    // whileInView="visible"
                    // transition={{ duration: 0.7, delay: 0.3 }}
                    // viewport={{ once: true }}
                    // variants={{
                    //     hidden: { opacity: 0, translateY: 20, skewX: -80, rotateY: 50 },
                    //     visible: { opacity: 1, translateY: 0, skewX: 0, rotateY: 0 },
                    // }}
                >
                    КОНЦЕПЦИЯ
                </div>
            </div>


            {/* CONCEPT */}

            <div className="flex flex-col md:flex-row gap-10 bg-tilia-yellow-block p-10">
                {/* IMAGE */}
                <div
                    className="basis-1/2 relative z-0 ml-5 before:absolute before:-top-10 before:-left-10  before:rounded-t-[400px]
                     before:w-full before:max-w-[400px] md:before:max-w-[600px]  before:opacity-20 before:h-full before:border-4 before:border-white before:z-[-1]"
                    // initial="hidden"
                    // whileInView="visible"
                    // viewport={{ once: true }}
                    // transition={{ duration: 0.5 }}
                    // variants={{
                    //     hidden: { opacity: 0, scale: 0 },
                    //     visible: { opacity: 1, scale: 1 },
                    // }}
                >

                    <Image
                        className="z-10 w-full rounded-t-[400px] max-w-[400px] md:max-w-[600px]"
                        loader={imageLoader}
                        src="/tilia/tilia-one.webp"
                        alt="picture"
                        width={4946}
                        height={3216}
                    ></Image>
                </div>

                <div className="basis-1/2 flex flex-col gap-5">

                    {/* small intro text 1 */}
                    <motion.div
                        className=" xl:text-xl text-justify"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, scale: 1.3 },
                            visible: { opacity: 1, scale: 1 },
                        }}
                    >
                        Всяка сграда носи свето послание и въздейства върху ползвателите й и минувачите около нея със своята визия, обем и посока. Името на сградата е избрано преднамерено - за нас зелените площи и високата дървесна растителност са част от архитектурата.

                    </motion.div>

                    {/* small intro text  */}
                    <motion.div
                        className=" xl:text-xl text-justify"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, scale: 1.3 },
                            visible: { opacity: 1, scale: 1 },
                        }}
                    >
                        Пространството около сградата ще бъде богато озеленено и ще бъдат посадени множество дървета Липа. Ароматът на липа събужда още едно от сетивата, с които човек може да усети и запомни една сграда и пространството около нея.

                    </motion.div>
                </div>



            </div>

            {/* TITLE DESCRIPTION*/}
            <div className="text-black flex flex-col sm:flex-row p-10 sm:gap-5 bg-white">
                <div
                    className={`${noto.className} text-xl md:text-4xl xl:text-[70px]`}
                    // initial="hidden"
                    // whileInView="visible"
                    // transition={{ duration: 0.7, delay: 0.3 }}
                    // viewport={{ once: true }}
                    // variants={{
                    //     hidden: { opacity: 0, translateY: 20, skewX: -80, rotateY: 50 },
                    //     visible: { opacity: 1, translateY: 0, skewX: 0, rotateY: 0 },
                    // }}
                >
                    ОПИСАНИЕ
                </div>
            </div>


            {/* DESCRIPTION */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-justify bg-white px-10 pb-10">

                <motion.span
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, scale: 1.3 },
                        visible: { opacity: 1, scale: 1 },
                    }}
                >
                    Тилия Резидънс се състои от две подземни нива и девет надземни етажа. Сградата е проектирана с два отделни входа, като всеки от тях разполага с фоайе, асансьор и стълбищна клетка с директен достъп до сутерен и гаражи.
                </motion.span>
                <motion.span
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, scale: 1.3 },
                        visible: { opacity: 1, scale: 1 },
                    }}
                >
                    Подземните нива са проектирани с гаражи, като за някои от гаражите е предвидена и платформа за двойно независимо паркиране, които заедно с надземните паркоместа за посетители осигуряват на живущите общо 35 броя самостоятелни и независими места за паркиране.
                </motion.span>
                <motion.span
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, scale: 1.3 },
                        visible: { opacity: 1, scale: 1 },
                    }}
                >
                    Тилия Резидънс предлага девет жилищни етажа и общо 31 функционално разпределени едностайни, двустайни и тристайни апартаменти, както и ексклузивни тристайни и четиристайни мезонети, предлагащи самостоятелен двор.
                </motion.span>
                <motion.span
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, scale: 1.3 },
                        visible: { opacity: 1, scale: 1 },
                    }}
                >
                    Липсата на големи индустриални предприятия и близостта до обширния и облагороден Северен Парк създават условия за живот в среда с чист въздух и възможности за спортуване на открито.
                </motion.span>
                <motion.span
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, scale: 1.3 },
                        visible: { opacity: 1, scale: 1 },
                    }}
                >
                    Директен достъп до метромрежата чрез станция Ломско Шосе (на 50 метра от сградата) ,както и до автобуси 85, 285 и трамвай 6.
                </motion.span>
                <motion.span
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, scale: 1.3 },
                        visible: { opacity: 1, scale: 1 },
                    }}
                >
                    В имота се предвижда озеленена зона за ползване от живущите.

                </motion.span>


            </div>


            {/* DETAILS */}

            <div className=" flex flex-col gap-5 bg-tilia-yellow-block p-5 text-justify">

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
                                <p className="text-sm sm:text-lg text-gray-900 text-justify">Фасадата предстои да бъде изпълнена от силикатна мазилка Caparol или San Marco и декоративна рамка от еталбонд и HPL- опасваща сградата.</p>
                                <br />
                            </motion.div>
                            <motion.div
                                viewport={{ once: true }}
                                variants={rowVariant}
                            >

                                <p className="sm:text-xl text-black font-bold">Хидроизолация</p>
                                <p className="text-sm sm:text-lg text-gray-900 text-justify">Цялостна допълнителна хидроизолация на сутерена и водоплътен бетон.</p>
                                <br />

                            </motion.div>
                            <motion.div
                                viewport={{ once: true }}
                                variants={rowVariant}
                            >
                                <p className="sm:text-xl text-black font-bold">Дограма</p>
                                <p className="text-sm sm:text-lg text-gray-900 text-justify">Най-висок клас алуминиева система за врати и прозорци с прекъснат термомост - Thermo Smart WP78 с троен стъклопакет 44мм/ цвят антрацит - Ral 7016</p>
                                <br />

                            </motion.div>
                            <motion.div
                                viewport={{ once: true }}
                                variants={rowVariant}
                            >
                                <p className="sm:text-xl text-black font-bold">Отопление</p>
                                <p className="text-sm sm:text-lg text-gray-900 text-justify">Отоплението е решено с електрически конвектори и климатици.</p>
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
                                src="/tilia/tilia-three.webp"
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

                                <p className="sm:text-xl text-black font-bold">Материали и асансьор</p>
                                <p className="text-sm sm:text-lg text-gray-900 text-justify">Тухли Винербергер за зидарии. Асансьори КОНЕ.</p>
                                <br />

                            </motion.div>
                            <motion.div
                                viewport={{ once: true }}
                                variants={rowVariant}
                            >

                                <p className="sm:text-xl text-black font-bold">Врати</p>
                                <p className="text-sm sm:text-lg text-gray-900 text-justify">Блиндирани входни врати SOLID idoor, обърнати с мрамор.</p>
                                <br />

                            </motion.div>
                            <motion.div
                                viewport={{ once: true }}
                                variants={rowVariant}
                            >

                                <p className="sm:text-xl text-black font-bold">Фоайе и общи части</p>
                                <p className="text-sm sm:text-lg text-gray-900 text-justify">Фоайе и общи части по специален интериорен проект - с вътрешно оформление от мрамор, съчетан с декоративни елементи ламинам.</p>
                                <br />

                            </motion.div>
                            <motion.div
                                viewport={{ once: true }}
                                variants={rowVariant}
                            >

                                <p className="sm:text-xl text-black font-bold">Гаражи</p>
                                <p className="text-sm sm:text-lg text-gray-900 text-justify">Предвидени са достатъчен брой гаражи в сутерена, разпределени на две нива и допълнителни паркоместа извън сградата.</p>
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
                                src="/tilia/tilia-dvor-3.webp"
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
                                <p className="text-sm sm:text-lg text-gray-900 text-justify">Ограда и контролиран достъп с чип до двора и сградата.</p>
                                <br />

                            </motion.div>
                            <motion.div
                                viewport={{ once: true }}
                                variants={rowVariant}
                            >

                                <p className="sm:text-xl text-black font-bold">Мезонети и пентхауси</p>
                                <p className="text-sm sm:text-lg text-gray-900 text-justify">Партерни апартаменти - мезонети с озеленен двор. Просторни пентхауси на последен етаж, притежаващи голяма прилежаща тераса.</p>
                                <br />

                            </motion.div>
                            <motion.div
                                viewport={{ once: true }}
                                variants={rowVariant}
                            >
                                <p className="sm:text-xl text-black font-bold">Изложение</p>
                                <p className="text-sm sm:text-lg text-gray-900 text-justify">Функционални вътрешни разпределения на апартаментите с необезпокоявани гледки към София и Витоша.</p>
                            </motion.div>
                            <motion.div
                                viewport={{ once: true }}
                                variants={rowVariant}
                            >
                                <p className="sm:text-xl text-black font-bold">Озеленяване</p>
                                <p className="text-sm sm:text-lg text-gray-900 text-justify">Озеленяването и вертикалната планировка са друг акцент на сградата - с голям процент паркова зеленина и различни алпинеуми с екзотична растителност.</p>
                            </motion.div>
                        </motion.div>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default ForBuilding

