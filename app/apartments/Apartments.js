"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { data } from "@/data";
import Link from "next/link";

export const revalidate = 0; // revalidate this page every 60 seconds

export default function Apartments() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const bedrooms = searchParams.get("param");
    const [selectedBedroomType, setSelectedBedroomType] = useState(bedrooms || "all");


    return (
        <>
            <div className="m-5 flex flex-col gap-5 justify-center items-center">

                {/* filter */}
                <div className="bg-white w-fit sm:p-5 flex flex-row justify-center items-center shadow-2xl">
                    <div className="flex flex-row justify-center items-center text-xs sm:text-xl font-bold">
                        <Link 
                            href={`/apartments?param=all`}
                            className={`p-1 sm:p-2 sm:m-2  ${selectedBedroomType === "all" ? "text-tilia-yellow-text border-2 border-tilia-yellow-text" : "text-black"}`}
                            onClick={() => setSelectedBedroomType('all')}
                        >
                            Всички
                        </Link>
                        <Link
                            href={`/apartments?param=0`}
                            className={`p-1 sm:p-2 sm:m-2 ${selectedBedroomType === "0" ? "text-tilia-yellow-text border-2 border-tilia-yellow-text" : "text-black"}`}
                            onClick={() => setSelectedBedroomType('0')}
                        >
                            Едностаен
                        </Link>
                        <Link
                            href={`/apartments?param=1`}
                            className={`p-1 sm:p-2 sm:m-2 ${selectedBedroomType === "1" ? "text-tilia-yellow-text border-2 border-tilia-yellow-text" : "text-black"}`}
                            onClick={() => setSelectedBedroomType('1')}
                        >
                            Двустаен
                        </Link>
                        <Link
                            href={`/apartments?param=2`}
                            className={`p-1 sm:p-2 sm:m-2 ${selectedBedroomType === "2" ? "text-tilia-yellow-text border-2 border-tilia-yellow-text" : "text-black"}`}
                            onClick={() => setSelectedBedroomType('2')}
                        >
                            Тристаен
                        </Link>
                        <Link
                            href={`/apartments?param=3`}
                            className={`p-1 sm:p-2 sm:m-2 ${selectedBedroomType === "3" ? "text-tilia-yellow-text border-2 border-tilia-yellow-text" : "text-black"}`}
                            onClick={() => setSelectedBedroomType('3')}
                        >
                            Четиристаен
                        </Link>
                    </div>
                </div>

                {/* Table */}
                <div className="flex flex-col justify-center items-center text-xxs sm:text-base">


                    <table className="h-full w-[35%]">
                        <thead className="relative z-20">
                            <tr className="bg-tilia-yellow-block border-b-2 border-black">
                                <th className="px-5 text-left">Номер</th>
                                <th className="px-5 text-left ">Етаж</th>
                                <th className="px-5 text-ledt ">Стаи</th>
                                <th className="px-5 text-left ">Площ</th>
                                <th className="px-5 text-left ">Обща площ</th>
                            </tr>
                        </thead>
                        <tbody key={selectedBedroomType}> {/* key is used to re-render the table when the selectedBedroomType changes */}
                            {
                                selectedBedroomType === "all" ?
                                    Object.entries(data).map(([index, apartment]) => {
                                        return (
                                            <tr className={`${apartment.available ? 'bg-green-400 cursor-pointer' : 'bg-red-400 pointer-events-none'} animateApartmentFilterResults border-b-2 border-white z-0`} key={index} onClick={() => router.push(`/apartments/app/${apartment.appLink}`)}>
                                                <td className="p-3 text-left">{apartment.title}</td>
                                                <td className="p-3 text-center">{apartment.floor}</td>
                                                <td className="p-3 text-center">{Number(apartment.beds) + 1}</td>
                                                <td className="p-3 text-center">{apartment.size}</td>
                                                <td className="p-3 text-center">{apartment.sizeFull}</td>
                                            </tr>
                                        )
                                    }) :
                                    Object.entries(data)
                                        .filter(([index, apartment]) => apartment.beds === selectedBedroomType)
                                        .map(([index, apartment]) => {
                                            return (
                                                <tr className={`${apartment.available ? 'bg-green-400 cursor-pointer' : 'bg-red-400 pointer-events-none'} animateApartmentFilterResults border-b-2 border-white z-0`} key={index} onClick={() => router.push(`/apartments/app/${apartment.appLink}`)}>
                                                    <td className="p-3 text-left">{apartment.title}</td>
                                                    <td className="p-3 text-center">{apartment.floor}</td>
                                                    <td className="p-3 text-center">{Number(apartment.beds) + 1}</td>
                                                    <td className="p-3 text-center">{apartment.size}</td>
                                                    <td className="p-3 text-center">{apartment.sizeFull}</td>
                                                </tr>
                                            )
                                        })
                            }
                        </tbody>

                    </table>

                </div>
            </div>

        </>
    );
}
