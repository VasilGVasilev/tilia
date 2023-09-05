
const ApartmentTemplate = ({ apartmentImgUrl, floor, beds, direction, size, price, title, textOne, textTwo, floorPlan }) => {
    return (
        <>
            {/* Necessary to lower the Title be visible */}
            <div className="bg-white w-full h-10"></div>

            <div className="p-5 flex flex-col gap-10">
                {/* IMG APARTMENT */}
                <div className="mx-auto grid grid-cols-1 py-10">
                    <img src={apartmentImgUrl} alt="" />
                </div>

                {/* APARTMENT DESCRIPTION */}
                <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-10 lg:gap-16 mb-12 md:mb-20 sm:px-16 md:px-32">
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
                            <span className="text-tilia-yellow-text">{size} ㎡</span>
                        </li>
                        <li className="flex justify-between border-tilia-yellow-text border-b md:pt-1 py-2">
                            <span>статус</span>
                            <span className="text-green-500">свободен</span>
                        </li>
                        <li className="flex justify-between border-tilia-yellow-text border-b md:pt-1 py-2">
                            <span>цена</span>
                            <span className="text-tilia-yellow-text">{price} €</span>
                        </li>
                    </ul>
                    {/* DETAILS */}
                    <div >
                        <h2 className="md:text-5xl text-3xl text-tilia-yellow-text font-normal md:mb-8 mb-4">
                            {title}
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
                    <div className="mx-auto h-fit w-fit lg:px-72">
                        <img src={floorPlan} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ApartmentTemplate
