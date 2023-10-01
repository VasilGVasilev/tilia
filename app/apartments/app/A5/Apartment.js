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
                data?.appA5?.available
                    ? <ApartmentTemplate
                        apartmentImgUrl={data.appA5.apartmentImgUrl}
                        floor={data.appA5.floor}
                        beds={data.appA5.beds}
                        direction={data.appA5.direction}
                        size={data.appA5.size}
                        title={data.appA5.title}
                        textOne={data.appA5.textOne}
                        textTwo={data.appA5.textTwo}
                        floorPlan={data.appA5.floorPlan}
                        apartmentW={data.appA5.apartmentW}
                        apartmentH={data.appA5.apartmentH}
                        floorW={data.appA5.floorW}
                        floorH={data.appA5.floorH}
                        ></ApartmentTemplate>
                    : <AppUnavailable></AppUnavailable>
            }
        </>
    )
}

//  better grid than flex here, because flex spread the the description div throughout the whole width until the right end of the window
