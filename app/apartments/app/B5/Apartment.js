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
                data?.app1A?.available
                    ? <ApartmentTemplate
                        apartmentImgUrl={data.app1A.apartmentImgUrl}
                        floor={data.app1A.floor}
                        beds={data.app1A.beds}
                        direction={data.app1A.direction}
                        size={data.app1A.size}
                        title={data.app1A.title}
                        textOne={data.app1A.textOne}
                        textTwo={data.app1A.textTwo}
                        floorPlan={data.app1A.floorPlan}
                        apartmentW={data.app1A.apartmentW}
                        apartmentH={data.app1A.apartmentH}
                        floorW={data.app1A.floorW}
                        floorH={data.app1A.floorH}
                        ></ApartmentTemplate>
                    : <AppUnavailable></AppUnavailable>
            }
        </>
    )
}

//  better grid than flex here, because flex spread the the description div throughout the whole width until the right end of the window
