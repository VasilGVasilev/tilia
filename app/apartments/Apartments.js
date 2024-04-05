"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { data } from "@/data";

export const revalidate = 0; // revalidate this page every 60 seconds

export default function Apartments() {
    const searchParams = useSearchParams();
    const bedrooms = searchParams.get("param");
    const [selectedBedroomType, setSelectedBedroomType] = useState(bedrooms || "all");
    const [filterApplied, setFilterApplied] = useState(bedrooms || "all");

    console.log(selectedBedroomType);
    useEffect(() => {
        if (bedrooms !== null) {
            setSelectedBedroomType(bedrooms);
        }
    }, [bedrooms]);

    return (
        <>
            <div className="m-5 flex flex-col gap-5 justify-center items-center">

                {/* filter */}
                <div className="bg-tilia-white w-fit sm:p-5 flex flex-row justify-center items-center shadow-2xl">
                    <div className="flex flex-row justify-center items-center text-sm sm:text-xl font-bold">
                        <button
                            onClick={() => setSelectedBedroomType("all")}
                            className={`p-1 sm:p-2 sm:m-2 ${selectedBedroomType === "all" ? "text-tilia-yellow-text" : "text-black"}`}
                        >
                            Всички
                        </button>
                        <button
                            onClick={() => setSelectedBedroomType("none")}
                            className={`p-1 sm:p-2 sm:m-2 ${selectedBedroomType === "none" ? "text-tilia-yellow-text" : "text-black"}`}
                        >
                            Едностаен
                        </button>
                        <button
                            onClick={() => setSelectedBedroomType("one")}
                            className={`p-1 sm:p-2 sm:m-2 ${selectedBedroomType === "one" ? "text-tilia-yellow-text" : "text-black"}`}
                        >
                            Двустаен
                        </button>
                        <button
                            onClick={() => setSelectedBedroomType("two")}
                            className={`p-1 sm:p-2 sm:m-2 ${selectedBedroomType === "two" ? "text-tilia-yellow-text" : "text-black"}`}
                        >
                            Тристаен
                        </button>
                        <button
                            onClick={() => setSelectedBedroomType("three")}
                            className={`p-1 sm:p-2 sm:m-2 ${selectedBedroomType === "three" ? "text-tilia-yellow-text" : "text-black"}`}
                        >
                            Четиристаен
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="flex flex-col justify-center items-center text-xxs sm:text-base">


                    <table className="h-full w-[35%]">
                        <thead>
                            <tr className="bg-tilia-yellow-block border-b-2 border-black">
                                <th className="px-5 text-left">Номер</th>
                                <th className="px-5 text-left ">Етаж</th>
                                <th className="px-5 text-ledt ">Стаи</th>
                                <th className="px-5 text-left ">Площ</th>
                                <th className="px-5 text-left ">Обща площ</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {
                                Object.entries(data).map(([index, apartament]) => {
                                    return (
                                        <tr className={`${apartament.available ? 'bg-green-400' : 'bg-red-400'} border-b-2 border-white`} key={index}>
                                            <td className="p-3 text-left">{apartament.title}</td>
                                            <td className="p-3 text-center">{apartament.floor}</td>
                                            <td className="p-3 text-center">{Number(apartament.beds) + 1}</td>
                                            <td className="p-3 text-center">{apartament.size}</td>
                                            <td className="p-3 text-center">{apartament.sizeFull}</td>
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
