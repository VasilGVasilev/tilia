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
                data?.appA28?.available
                    ? <ApartmentTemplate
                        apartmentImgUrl={data.appA28.apartmentImgUrl}
                        floor={data.appA28.floor}
                        beds={data.appA28.beds}
                        direction={data.appA28.direction}
                        size={data.appA28.size}
                        title={data.appA28.title}
                        textOne={data.appA28.textOne}
                        textTwo={data.appA28.textTwo}
                        floorPlan={data.appA28.floorPlan}
                        apartmentW={data.appA28.apartmentW}
                        apartmentH={data.appA28.apartmentH}
                        floorW={data.appA28.floorW}
                        floorH={data.appA28.floorH}
                        ></ApartmentTemplate>
                    : <AppUnavailable></AppUnavailable>
            }
        </>
    )
}

//  better grid than flex here, because flex spread the the description div throughout the whole width until the right end of the window
