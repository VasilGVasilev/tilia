import { imageLoader } from "@/utils/imgLoader"
import Image from "next/image"

const ApartmentTemplate = ({ apartmentImgUrl, floor, beds, direction, size, sizeFull, title, textOne, textTwo, floorPlan, apartmentW, apartmentH, floorW, floorH, priceVat }) => {
    return (
        <>
            {/* Necessary to lower the Title be visible */}
            <div className="bg-white w-full h-10"></div>

            <div className="p-5 flex flex-col gap-10">
                
                <h2 className="mx-auto md:text-5xl text-3xl text-tilia-yellow-text font-normal md:mb-8 mb-4">
                    {title}
                </h2>

                {/* IMG APARTMENT */}
                <div className="mx-auto grid grid-cols-1 py-5">
                    <div className="grid md:h-1/2 md:w-1/2 mx-auto">
                        {/* <img src={apartmentImgUrl} alt="" /> */}
                        <Image
                            loader={imageLoader}
                            src={apartmentImgUrl}
                            alt="apartment"
                            width={apartmentW}
                            height={apartmentH}
                        ></Image>
                    </div>

                </div>

                {/* APARTMENT DESCRIPTION */}
                <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-10 lg:gap-16 md:mb-14 sm:px-16 md:px-32">
                    {/* TABLE */}
                    <ul className="text-xl font-thin sm:text-2xl md:text-3xl text-green-900 border-tilia-yellow-text border-t">
                        <li className="flex justify-between border-tilia-yellow-text border-b md:pt-1 py-2">
                            <span>Етаж</span>
                            <span className="text-tilia-yellow-text">{floor}</span>
                        </li>
                        <li className="flex justify-between border-tilia-yellow-text border-b md:pt-1 py-2">
                            <span>Спални</span>
                            <span className="text-tilia-yellow-text">{beds}</span>
                        </li>
                        <li className="flex justify-between border-tilia-yellow-text border-b md:pt-1 py-2">
                            <span>Изложение</span>
                            <span className="text-tilia-yellow-text">{direction}</span>
                        </li>
                        <li className="flex justify-between border-tilia-yellow-text border-b md:pt-1 py-2">
                            <span>ЗП</span>
                            <span className="text-tilia-yellow-text">{size} кв. м.</span>
                        </li>
                        <li className="flex justify-between border-tilia-yellow-text border-b md:pt-1 py-2">
                            <span>Общо</span>
                            <span className="text-tilia-yellow-text">{sizeFull} кв. м.</span>
                        </li>
                        <li className="flex justify-between border-tilia-yellow-text border-b md:pt-1 py-2">
                            <span>Статус</span>
                            <span className="text-green-500 font-semibold">свободен</span>
                        </li>
                        <li className="flex justify-between border-tilia-yellow-text border-b md:pt-1 py-2">
                            <span>Телефон</span>
                            <span className="text-tilia-yellow-text"><a href={`tel:00359886879993`} className="font-semibold">+359886879993</a></span>
                        </li>
                        <li className="flex justify-between border-tilia-yellow-text border-b md:pt-1 py-2">
                            <span>Цена* без ДДС</span>
                            <span className="text-tilia-yellow-text">{priceVat}</span>
                        </li>
                        <div className="text-base">* От дата 01.08.2025 цената се изчислява на база 1800 евро/м2 с ДДС.</div>
                    </ul>
                    {/* DETAILS */}
                    <div className="grid gap-5">
                        <h2 className="md:text-3xl text-xl text-tilia-yellow-text font-normal ">
                            Описание
                        </h2>
                        <div className="flex flex-col gap-5 text-neutral-700">
                            <p>
                                {textOne}
                            </p>
                            <p>
                                {textTwo}
                            </p>
                        </div>
                    </div>
                </div>

                {/* FLOOR PLAN AGAIN */}
                <div className="grid grid-cols-1 py-10">
                    <div className="sm:ml-10 font-bold">
                        Схема на етажа:
                    </div>
                    <div className="mx-auto h-fit w-fit">
                        <Image
                            loader={imageLoader}
                            src={floorPlan}
                            alt="floor"
                            width={floorW}
                            height={floorH}
                        ></Image>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ApartmentTemplate
