import { imageLoader } from "@/utils/imgLoader"
import Image from "next/image"

const ApartmentTemplate = ({ apartmentImgUrl, floor, beds, direction, size, title, textOne, textTwo, floorPlan, apartmentW, apartmentH, floorW, floorH }) => {
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
                            <span>етаж</span>
                            <span className="text-tilia-yellow-text">{floor}</span>
                        </li>
                        <li className="flex justify-between border-tilia-yellow-text border-b md:pt-1 py-2">
                            <span>спални</span>
                            <span className="text-tilia-yellow-text">{beds}</span>
                        </li>
                        <li className="flex justify-between border-tilia-yellow-text border-b md:pt-1 py-2">
                            <span>изложение</span>
                            <span className="text-tilia-yellow-text">{direction}</span>
                        </li>
                        <li className="flex justify-between border-tilia-yellow-text border-b md:pt-1 py-2">
                            <span>площ</span>
                            <span className="text-tilia-yellow-text">{size} кв. м.</span>
                        </li>
                        <li className="flex justify-between border-tilia-yellow-text border-b md:pt-1 py-2">
                            <span>статус</span>
                            <span className="text-green-500 font-semibold">свободен</span>
                        </li>
                        <li className="flex justify-between border-tilia-yellow-text border-b md:pt-1 py-2">
                            <span>цена</span>
                            <span className="text-tilia-yellow-text">По запитване</span>
                        </li>
                        <li className="flex justify-between border-tilia-yellow-text border-b md:pt-1 py-2">
                            <span>телефон</span>
                            <span className="text-tilia-yellow-text"><a href={`tel:00359886879993`} className="font-semibold">+359886879993</a></span>
                        </li>
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
