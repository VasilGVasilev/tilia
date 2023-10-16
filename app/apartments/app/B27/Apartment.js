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
                data?.appB27?.available
                    ? <ApartmentTemplate
                        apartmentImgUrl={data.appB27.apartmentImgUrl}
                        floor={data.appB27.floor}
                        beds={data.appB27.beds}
                        direction={data.appB27.direction}
                        size={data.appB27.size}
                        sizeFull={data.appB27.sizeFull}
                        title={data.appB27.title}
                        textOne={data.appB27.textOne}
                        textTwo={data.appB27.textTwo}
                        floorPlan={data.appB27.floorPlan}
                        apartmentW={data.appB27.apartmentW}
                        apartmentH={data.appB27.apartmentH}
                        floorW={data.appB27.floorW}
                        floorH={data.appB27.floorH}
                        ></ApartmentTemplate>
                    : <AppUnavailable></AppUnavailable>
            }
        </>
    )
}

//  better grid than flex here, because flex spread the the description div throughout the whole width until the right end of the window
