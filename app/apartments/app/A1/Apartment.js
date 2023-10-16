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
                data?.appA1?.available
                    ? <ApartmentTemplate
                        apartmentImgUrl={data.appA1.apartmentImgUrl}
                        floor={data.appA1.floor}
                        beds={data.appA1.beds}
                        direction={data.appA1.direction}
                        size={data.appA1.size}
                        sizeFull={data.appA1.sizeFull}
                        title={data.appA1.title}
                        textOne={data.appA1.textOne}
                        textTwo={data.appA1.textTwo}
                        floorPlan={data.appA1.floorPlan}
                        apartmentW={data.appA1.apartmentW}
                        apartmentH={data.appA1.apartmentH}
                        floorW={data.appA1.floorW}
                        floorH={data.appA1.floorH}
                        ></ApartmentTemplate>
                    : <AppUnavailable></AppUnavailable>
            }
        </>
    )
}

//  better grid than flex here, because flex spread the the description div throughout the whole width until the right end of the window
