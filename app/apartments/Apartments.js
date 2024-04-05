"use client";

import Plan from "@/components/Plan";
import { noto } from "@/utils/fonts";
import { motion } from "framer-motion";
import { container, letterVariant } from "../Home";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const revalidate = 0; // revalidate this page every 60 seconds

export default function Apartments() {
    const searchParams = useSearchParams();
    const bedrooms = searchParams.get("param");
    // the below works if we have no subsequent setting of the bedroom type, but we have - it is a filter
    // const [selectedBedroomType, setSelectedBedroomType] = useState(bedrooms || "all");
    const [selectedBedroomType, setSelectedBedroomType] = useState("all");

    useEffect(() => {
        if (bedrooms !== null) {
            setSelectedBedroomType(bedrooms);
        }
    }, [bedrooms]);

    return (
        <>
            {/* INTRO */}
            <div>
                {/* Necessary to lower the Title be visible */}
                <div className="bg-white w-full h-10"></div>
                {/* Investor tag */}
                <div className="bg-white">
                    <motion.div
                        className={`flex flex-row justify-center items-center ${noto.className} welcomeTextOnImg text-[#D7D7DF] text-left py-5 text-4xl sm:text-6xl lg:text-8xl`}
                        viewport={{ once: true }}
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                    >
                        <motion.span variants={letterVariant}>Е</motion.span>
                        <motion.span variants={letterVariant}>Т</motion.span>
                        <motion.span variants={letterVariant}>А</motion.span>
                        <motion.span variants={letterVariant}>Ж</motion.span>
                        <motion.span variants={letterVariant}>И</motion.span>
                    </motion.div>
                </div>
            </div>

            {/* FLOOR PLAN */}
            <div className="bg-tilia-gray">
                <Plan></Plan>
            </div>
        </>
    );
}
