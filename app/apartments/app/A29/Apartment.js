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
                data?.appA29?.available
                    ? <ApartmentTemplate
                        apartmentImgUrl={data.appA29.apartmentImgUrl}
                        floor={data.appA29.floor}
                        beds={data.appA29.beds}
                        direction={data.appA29.direction}
                        size={data.appA29.size}
                        sizeFull={data.appA29.sizeFull}
                        title={data.appA29.title}
                        textOne={data.appA29.textOne}
                        textTwo={data.appA29.textTwo}
                        floorPlan={data.appA29.floorPlan}
                        apartmentW={data.appA29.apartmentW}
                        apartmentH={data.appA29.apartmentH}
                        floorW={data.appA29.floorW}
                        floorH={data.appA29.floorH}
                        ></ApartmentTemplate>
                    : <AppUnavailable></AppUnavailable>
            }
        </>
    )
}

//  better grid than flex here, because flex spread the the description div throughout the whole width until the right end of the window
