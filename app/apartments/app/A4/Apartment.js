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
                data?.appA4?.available
                    ? <ApartmentTemplate
                        apartmentImgUrl={data.appA4.apartmentImgUrl}
                        floor={data.appA4.floor}
                        beds={data.appA4.beds}
                        direction={data.appA4.direction}
                        size={data.appA4.size}
                        sizeFull={data.appA4.sizeFull}
                        title={data.appA4.title}
                        textOne={data.appA4.textOne}
                        textTwo={data.appA4.textTwo}
                        floorPlan={data.appA4.floorPlan}
                        apartmentW={data.appA4.apartmentW}
                        apartmentH={data.appA4.apartmentH}
                        floorW={data.appA4.floorW}
                        floorH={data.appA4.floorH}
                        ></ApartmentTemplate>
                    : <AppUnavailable></AppUnavailable>
            }
        </>
    )
}

//  better grid than flex here, because flex spread the the description div throughout the whole width until the right end of the window
