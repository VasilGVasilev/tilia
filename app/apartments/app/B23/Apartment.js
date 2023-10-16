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
                data?.appB23?.available
                    ? <ApartmentTemplate
                        apartmentImgUrl={data.appB23.apartmentImgUrl}
                        floor={data.appB23.floor}
                        beds={data.appB23.beds}
                        direction={data.appB23.direction}
                        size={data.appB23.size}
                        sizeFull={data.appB23.sizeFull}
                        title={data.appB23.title}
                        textOne={data.appB23.textOne}
                        textTwo={data.appB23.textTwo}
                        floorPlan={data.appB23.floorPlan}
                        apartmentW={data.appB23.apartmentW}
                        apartmentH={data.appB23.apartmentH}
                        floorW={data.appB23.floorW}
                        floorH={data.appB23.floorH}
                        ></ApartmentTemplate>
                    : <AppUnavailable></AppUnavailable>
            }
        </>
    )
}

//  better grid than flex here, because flex spread the the description div throughout the whole width until the right end of the window
