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
                data?.appB3?.available
                    ? <ApartmentTemplate
                        apartmentImgUrl={data.appB3.apartmentImgUrl}
                        floor={data.appB3.floor}
                        beds={data.appB3.beds}
                        direction={data.appB3.direction}
                        size={data.appB3.size}
                        sizeFull={data.appB3.sizeFull}
                        title={data.appB3.title}
                        textOne={data.appB3.textOne}
                        textTwo={data.appB3.textTwo}
                        floorPlan={data.appB3.floorPlan}
                        apartmentW={data.appB3.apartmentW}
                        apartmentH={data.appB3.apartmentH}
                        floorW={data.appB3.floorW}
                        floorH={data.appB3.floorH}
                        ></ApartmentTemplate>
                    : <AppUnavailable></AppUnavailable>
            }
        </>
    )
}

//  better grid than flex here, because flex spread the the description div throughout the whole width until the right end of the window
