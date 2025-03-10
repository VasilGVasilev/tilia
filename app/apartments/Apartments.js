"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { data } from "@/data";
import { dataGarage } from "@/data-garage";
import Link from "next/link";
import Floors from "@/components/Floors";
import { noto } from "@/utils/fonts";

export const revalidate = 0; // revalidate this page every 60 seconds

export default function Apartments() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const bedrooms = searchParams.get("param");
    const [selectedBedroomType, setSelectedBedroomType] = useState(
        bedrooms || "all"
    );

    return (
        <>
            <div className=" flex flex-col">
                {/* Apartments Title */}
                <div className="text-black bg-tilia-yellow-block flex flex-row p-10">
                    <div
                        className={`${noto.className} text-2xl md:text-5xl lg:text-[80px]`}
                        // initial="hidden"
                        // whileInView="visible"
                        // viewport={{ once: true }}
                        // transition={{ duration: 0.7, delay: 0.3 }}
                        // variants={{
                        //     hidden: { opacity: 0, translateY: 20, skewX: -80, rotateY: 50 },
                        //     visible: { opacity: 1, translateY: 0, skewX: 0, rotateY: 0 },
                        // }}
                    >
                        Апартаменти
                    </div>
                </div>
                {/* Apartments Filter */}
                <div className="bg-tilia-yellow-text  sm:p-5 flex flex-row justify-center items-center">
                    <div className="flex flex-row text-xs sm:text-xl font-bold">
                        <Link
                            href={`/apartments?param=all`}
                            className={`p-1 sm:p-2 sm:m-2  ${
                                selectedBedroomType === "all"
                                    ? "text-white border-2 border-white"
                                    : "text-black"
                            }`}
                            onClick={() => setSelectedBedroomType("all")}
                        >
                            Всички
                        </Link>
                        <Link
                            href={`/apartments?param=0`}
                            className={`p-1 sm:p-2 sm:m-2 ${
                                selectedBedroomType === "0"
                                    ? "text-white border-2 border-white"
                                    : "text-black"
                            }`}
                            onClick={() => setSelectedBedroomType("0")}
                        >
                            Едностаен
                        </Link>
                        <Link
                            href={`/apartments?param=1`}
                            className={`p-1 sm:p-2 sm:m-2 ${
                                selectedBedroomType === "1"
                                    ? "text-white border-2 border-white"
                                    : "text-black"
                            }`}
                            onClick={() => setSelectedBedroomType("1")}
                        >
                            Двустаен
                        </Link>
                        <Link
                            href={`/apartments?param=2`}
                            className={`p-1 sm:p-2 sm:m-2 ${
                                selectedBedroomType === "2"
                                    ? "text-white border-2 border-white"
                                    : "text-black"
                            }`}
                            onClick={() => setSelectedBedroomType("2")}
                        >
                            Тристаен
                        </Link>
                        <Link
                            href={`/apartments?param=3`}
                            className={`p-1 sm:p-2 sm:m-2 ${
                                selectedBedroomType === "3"
                                    ? "text-white border-2 border-white"
                                    : "text-black"
                            }`}
                            onClick={() => setSelectedBedroomType("3")}
                        >
                            Четиристаен
                        </Link>
                    </div>
                </div>

                {/* Table Apartments*/}
                <div className="flex flex-col my-5 justify-center items-center w-full text-xxs sm:text-base">
                    <table className="h-full w-[35%]">
                        <thead className="relative z-20">
                            <tr className="bg-tilia-yellow-block border-b-2 border-black ">
                                <th className="p-1 sm:p-2 text-center">№</th>
                                <th className="p-1 sm:p-2 text-center">Етаж</th>
                                <th className="p-1 sm:p-2 text-center">Стаи</th>
                                <th className="p-1 sm:p-2 text-center">Площ</th>
                                <th className="p-1 sm:p-2 text-center">
                                    Обща площ
                                </th>
                                <th className="p-1 sm:p-2 text-center">
                                    Цена* без ДДС
                                </th>
                            </tr>
                        </thead>
                        <tbody key={selectedBedroomType}>
                            {" "}
                            {/* key is used to re-render the table when the selectedBedroomType changes */}
                            {selectedBedroomType === "all"
                                ? Object.entries(data).map(
                                      ([index, apartment]) => {
                                          return (
                                              <tr
                                                  className={`${
                                                      apartment.available
                                                          ? "bg-green-400 cursor-pointer"
                                                          : "bg-red-400 pointer-events-none"
                                                  } animateApartmentFilterResults border-b-2 border-white z-0 whitespace-nowrap`}
                                                  key={index}
                                                  onClick={() =>
                                                      router.push(
                                                          `/apartments/app/${apartment.appLink}`
                                                      )
                                                  }
                                              >
                                                  <td className="p-3 text-center">
                                                      {apartment.title}
                                                  </td>
                                                  <td className="p-3 text-center">
                                                      {apartment.floor}
                                                  </td>
                                                  <td className="p-3 text-center">
                                                      {Number(apartment.beds) +
                                                          1}
                                                  </td>
                                                  <td className="p-3 text-center">
                                                      {apartment.size}
                                                  </td>
                                                  <td className="p-3 text-center">
                                                      {apartment.sizeFull}
                                                  </td>
                                                  <td className="p-3 text-center">
                                                      {apartment.available
                                                          ? apartment.price_no_vat
                                                          : "ПРОДАДЕН"}
                                                  </td>
                                              </tr>
                                          );
                                      }
                                  )
                                : Object.entries(data)
                                      .filter(
                                          ([index, apartment]) =>
                                              apartment.beds ===
                                              selectedBedroomType
                                      )
                                      .map(([index, apartment]) => {
                                          return (
                                              <tr
                                                  className={`${
                                                      apartment.available
                                                          ? "bg-green-400 cursor-pointer"
                                                          : "bg-red-400 pointer-events-none"
                                                  } animateApartmentFilterResults border-b-2 border-white z-0 whitespace-nowrap`}
                                                  key={index}
                                                  onClick={() =>
                                                      router.push(
                                                          `/apartments/app/${apartment.appLink}`
                                                      )
                                                  }
                                              >
                                                  <td className="p-3 text-center">
                                                      {apartment.title}
                                                  </td>
                                                  <td className="p-3 text-center">
                                                      {apartment.floor}
                                                  </td>
                                                  <td className="p-3 text-center">
                                                      {Number(apartment.beds) +
                                                          1}
                                                  </td>
                                                  <td className="p-3 text-center">
                                                      {apartment.size}
                                                  </td>
                                                  <td className="p-3 text-center">
                                                      {apartment.sizeFull}
                                                  </td>
                                                  <td className="p-3 text-center">
                                                      {
                                                          apartment?.price_no_vat
                                                      }
                                                  </td>
                                              </tr>
                                          );
                                      })}
                        </tbody>
                    </table>
                </div>

                {/* Note */}
                <div className="bg-white p-5 flex flex-row justify-center items-center shadow-2xl">
                    <div className="flex flex-col justify-center items-center text-xxxs sm:text-base gap-1">
                        <div>
                            * От дата 01.08.2025
                            цената се изчислява на база 1800 евро/м2 с ДДС.
                        </div>
                        <div> </div>
                        <div className="flex flex-col">
                            ** Посочените цени са валидни при схема на плащане:
                            <span>
                                A) Преди достигане на етап Акт 14 - 30 процента
                                при подписване на предварителен договор, 30
                                процента при етап Акт 14, 30 процента при етап
                                Акт 15 и 10 процента при въвеждане в
                                експлоатация.{" "}
                            </span>
                            <span>
                                {" "}
                                Б) След достигане на етап Акт 14 – схемата на
                                плащане е 60 процента при подписване, 30
                                процента при достигане на етап Акт 15 и 10
                                процента при въвеждане в експлоатация{" "}
                            </span>
                            <span>
                                В) След достигане на етап Акт 15 – плащане на 90
                                процента при подписване на предварителен договор
                                и 10 процента при въвеждане в експлоатация{" "}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Garage Title */}
                <div className="text-black bg-tilia-yellow-block flex flex-row p-10">
                    <div
                        className={`${noto.className} text-2xl md:text-5xl lg:text-[80px]`}
                        // initial="hidden"
                        // whileInView="visible"
                        // viewport={{ once: true }}
                        // transition={{ duration: 0.7, delay: 0.3 }}
                        // variants={{
                        //     hidden: { opacity: 0, translateY: 20, skewX: -80, rotateY: 50 },
                        //     visible: { opacity: 1, translateY: 0, skewX: 0, rotateY: 0 },
                        // }}
                    >
                        Гаражи
                    </div>
                </div>

                {/* Table Garages*/}
                <div className="flex flex-col my-5 justify-center items-center w-full text-xxs sm:text-base">
                    <table className="h-full w-[35%]">
                        <thead className="relative z-20">
                            <tr className="bg-tilia-yellow-block border-b-2 border-black">
                                <th className="p-1 sm:p-2 text-center">№</th>
                                <th className="p-1 sm:p-2 text-center">Ниво</th>
                                <th className="p-1 sm:p-2 text-center">Площ</th>
                                <th className="p-1 sm:p-2 text-center">Система за двойно паркиране</th>
                                <th className="p-1 sm:p-2 text-center">Цена</th>
                            </tr>
                        </thead>
                        <tbody key={selectedBedroomType}>
                            {" "}
                            {/* key is used to re-render the table when the selectedBedroomType changes */}
                            {Object.entries(dataGarage).map(([index, garage]) => {
                                return (
                                    <tr
                                        className={`${
                                            garage.available
                                                ? "bg-green-400"
                                                : "bg-red-400"
                                        } animateApartmentFilterResults border-b-2 border-white z-0 whitespace-nowrap`}
                                        key={index}
                                    >
                                        <td className="p-3 text-center">
                                            {garage.title}
                                        </td>
                                        <td className="p-3 text-center">
                                            {garage.floor}
                                        </td>
                                        <td className="p-3 text-center">
                                            {garage.size}
                                        </td>
                                        <td className="p-3 text-center">
                                            {garage.extra}
                                        </td>
                                        <td className="p-3 text-center">
                                            {garage.available
                                                ? garage.price
                                                : "ПРОДАДЕН"}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <Floors></Floors>
        </>
    );
}
