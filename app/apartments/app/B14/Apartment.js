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
                data?.appB14?.available
                    ? <ApartmentTemplate
                        apartmentImgUrl={data.appB14.apartmentImgUrl}
                        floor={data.appB14.floor}
                        beds={data.appB14.beds}
                        direction={data.appB14.direction}
                        size={data.appB14.size}
                        title={data.appB14.title}
                        textOne={data.appB14.textOne}
                        textTwo={data.appB14.textTwo}
                        floorPlan={data.appB14.floorPlan}
                        apartmentW={data.appB14.apartmentW}
                        apartmentH={data.appB14.apartmentH}
                        floorW={data.appB14.floorW}
                        floorH={data.appB14.floorH}
                        ></ApartmentTemplate>
                    : <AppUnavailable></AppUnavailable>
            }
        </>
    )
}

//  better grid than flex here, because flex spread the the description div throughout the whole width until the right end of the window
