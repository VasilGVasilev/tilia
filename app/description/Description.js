'use client'

import Image from "next/image"
import { imageLoader } from "../../utils/imgLoader";
import ForBuilding from "@/components/ForBuidling";

export const revalidate = 0; // revalidate this page every 60 seconds

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
