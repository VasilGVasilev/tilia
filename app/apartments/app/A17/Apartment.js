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
                data?.appA17?.available
                    ? <ApartmentTemplate
                        apartmentImgUrl={data.appA17.apartmentImgUrl}
                        floor={data.appA17.floor}
                        beds={data.appA17.beds}
                        direction={data.appA17.direction}
                        size={data.appA17.size}
                        sizeFull={data.appA17.sizeFull}
                        title={data.appA17.title}
                        textOne={data.appA17.textOne}
                        textTwo={data.appA17.textTwo}
                        floorPlan={data.appA17.floorPlan}
                        apartmentW={data.appA17.apartmentW}
                        apartmentH={data.appA17.apartmentH}
                        floorW={data.appA17.floorW}
                        floorH={data.appA17.floorH}
                        ></ApartmentTemplate>
                    : <AppUnavailable></AppUnavailable>
            }
        </>
    )
}

//  better grid than flex here, because flex spread the the description div throughout the whole width until the right end of the window
