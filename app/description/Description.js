'use client'

import Image from "next/image"
import { imageLoader } from "../../utils/imgLoader";
import Timeline from "@/components/Timeline";
import ForBuilding from "@/components/ForBuidling";
import Maps from "@/components/Location";
import { motion } from "framer-motion";

export const revalidate = 0; // revalidate this page every 60 seconds

const buildingProcessLayout = "pb-10 px-5 h-full w-full lg:h-96 flex justify-center"
export default function Description() {

    return (
        <>


            <ForBuilding></ForBuilding>


            {/* LOCATION*/}
            <Image
                loader={imageLoader}
                src="/tilia/tilia-location-architect.webp"
                alt="location"
                width={9329}
                height={5297}
            ></Image>

        </>
    )
}
