
'use client'


import { useRef, useState } from "react";


export const revalidate = 0; // revalidate this page every 60 seconds


export default function Apartament() {
    const [dalia, setDalia] = useState(["/dalia/dalia-one.webp", "/dalia/dalia-two.webp", "/dalia/dalia-three.webp"]);
    const [westEnd, setWestEnd] = useState(["/west-end/west-end-one.webp", "/west-end/west-end-two.webp", "/west-end/west-end-three.webp"]);
    const [ixora, setIxora] = useState(["/ixora/ixora-one.webp", "/ixora/ixora-two.webp", "/ixora/ixora-three.webp"]);




    // const [apartment, setApartment] = useState({
    //     ap: null,
    //     plosht: null,
    //     zp: null,
    // });


    // const updateInfo = (ap, plosht, zp) => {
    //     setApartment({
    //         ap,
    //         plosht,
    //         zp,
    //     });
    //     openModal()
    // }



    return (
        <div className="p-5 flex flex-col">
            {/* IMG APARTMENT */}
            <div className="mx-auto grid grid-cols-1 py-10">
                <img src="/assets/apartment-type-one.jpg" alt="" />
            </div>

            {/* APARTMENT DESCRIPTION */}
            <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-6 mb-12 md:mb-20 sm:px-16 md:px-32">
                <ul className="text-xl font-thin sm:text-2xl md:text-3xl text-green-900 border-tilia-yellow-text border-t">
                    <li className="flex justify-between border-tilia-yellow-text border-b md:pt-1 py-2">
                        <span>етаж</span>
                        <span className="text-tilia-yellow-text">1</span>
                    </li>
                    <li className="flex justify-between border-tilia-yellow-text border-b md:pt-1 py-2">
                        <span>спални</span>
                        <span className="text-tilia-yellow-text">3</span>
                    </li>
                    <li className="flex justify-between border-tilia-yellow-text border-b md:pt-1 py-2">
                        <span>изложение</span>
                        <span className="text-tilia-yellow-text">югозапад</span>
                    </li>
                    <li className="flex justify-between border-tilia-yellow-text border-b md:pt-1 py-2">
                        <span>площ</span>
                        <span className="text-tilia-yellow-text">100 кв. м</span>
                    </li>
                    <li className="flex justify-between border-tilia-yellow-text border-b md:pt-1 py-2">
                        <span>статус</span>
                        <span className="text-green-500">свободен</span>
                    </li>
                    <li className="flex justify-between border-tilia-yellow-text border-b md:pt-1 py-2">
                        <span>цена</span>
                        <span className="text-tilia-yellow-text">хххх</span>
                    </li>
                </ul>
                <div>
                    <h2 className="md:text-5xl text-3xl text-tilia-yellow-text font-normal md:mb-8 mb-4">
                        Апартамент 12
                    </h2>
                    <div className="flex flex-col gap-5 text-neutral-700">
                        <p>
                            Апартаментът се състои от входно антре, дневна зона с кухненски бокс, три спални, две бани с тоалет, тоалет, перално помещение, три тераси и прилежащ самостоятелен двор от 126,65 кв.м. Всички помещения в имота са със светла височина 3.05 м.
                        </p>
                        <p>
                            В стойността на жилището са включени мазе и паркомясто в подземен гараж. Възможност за закупуване на второ паркомясто.
                        </p>
                    </div>
                </div>
            </div>
            
            {/* FLOOR PLAN AGAIN */}
            <div className="grid grid-cols-1 py-10">
                <div className="sm:ml-10 font-bold">
                    Схема на етажа:
                </div>
                <div className="mx-auto h-fit w-fit lg:px-60">
                    <img src="/plans/third-floor.webp" alt="" />
                </div>
            </div>
        </div>
    )
}

//  better grid than flex here, because flex spread the the description div throughout the whole width until the right end of the window
