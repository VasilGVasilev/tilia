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
                data?.appA12?.available
                    ? <ApartmentTemplate
                        apartmentImgUrl={data.appA12.apartmentImgUrl}
                        floor={data.appA12.floor}
                        beds={data.appA12.beds}
                        direction={data.appA12.direction}
                        size={data.appA12.size}
                        title={data.appA12.title}
                        textOne={data.appA12.textOne}
                        textTwo={data.appA12.textTwo}
                        floorPlan={data.appA12.floorPlan}
                        apartmentW={data.appA12.apartmentW}
                        apartmentH={data.appA12.apartmentH}
                        floorW={data.appA12.floorW}
                        floorH={data.appA12.floorH}
                        ></ApartmentTemplate>
                    : <AppUnavailable></AppUnavailable>
            }
        </>
    )
}

//  better grid than flex here, because flex spread the the description div throughout the whole width until the right end of the window
