'use client'

import ApartmentTemplate from "@/components/ApartmentTemplate";
import { data } from '@/data';
import AppUnavailable from "./AppUnavailable";


export const revalidate = 0; // revalidate this page every 60 seconds


export default function Apartament() {

    return (
        <>
        {/* no need for ?. since data is local, but future proofing */}
            {
                data?.appB26?.available
                    ? <ApartmentTemplate
                        apartmentImgUrl={data.appB26.apartmentImgUrl}
                        floor={data.appB26.floor}
                        beds={data.appB26.beds}
                        direction={data.appB26.direction}
                        size={data.appB26.size}
                        title={data.appB26.title}
                        textOne={data.appB26.textOne}
                        textTwo={data.appB26.textTwo}
                        floorPlan={data.appB26.floorPlan}
                        apartmentW={data.appB26.apartmentW}
                        apartmentH={data.appB26.apartmentH}
                        floorW={data.appB26.floorW}
                        floorH={data.appB26.floorH}
                        ></ApartmentTemplate>
                    : <AppUnavailable></AppUnavailable>
            }
        </>
    )
}

//  better grid than flex here, because flex spread the the description div throughout the whole width until the right end of the window
