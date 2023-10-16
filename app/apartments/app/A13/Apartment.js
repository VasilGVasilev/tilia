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
                data?.appA13?.available
                    ? <ApartmentTemplate
                        apartmentImgUrl={data.appA13.apartmentImgUrl}
                        floor={data.appA13.floor}
                        beds={data.appA13.beds}
                        direction={data.appA13.direction}
                        size={data.appA13.size}
                        sizeFull={data.appA13.sizeFull}
                        title={data.appA13.title}
                        textOne={data.appA13.textOne}
                        textTwo={data.appA13.textTwo}
                        floorPlan={data.appA13.floorPlan}
                        apartmentW={data.appA13.apartmentW}
                        apartmentH={data.appA13.apartmentH}
                        floorW={data.appA13.floorW}
                        floorH={data.appA13.floorH}
                        ></ApartmentTemplate>
                    : <AppUnavailable></AppUnavailable>
            }
        </>
    )
}

//  better grid than flex here, because flex spread the the description div throughout the whole width until the right end of the window
