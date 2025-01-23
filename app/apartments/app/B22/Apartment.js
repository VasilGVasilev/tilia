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
                data?.appB22?.available
                    ? <ApartmentTemplate
                        apartmentImgUrl={data.appB22.apartmentImgUrl}
                        floor={data.appB22.floor}
                        beds={data.appB22.beds}
                        direction={data.appB22.direction}
                        size={data.appB22.size}
                        sizeFull={data.appB22.sizeFull}
                        title={data.appB22.title}
                        textOne={data.appB22.textOne}
                        textTwo={data.appB22.textTwo}
                        floorPlan={data.appB22.floorPlan}
                        apartmentW={data.appB22.apartmentW}
                        apartmentH={data.appB22.apartmentH}
                        floorW={data.appB22.floorW}
                        floorH={data.appB22.floorH}
                        priceVat={data.appB22?.price_with_vat}
                        ></ApartmentTemplate>
                    : <AppUnavailable></AppUnavailable>
            }
        </>
    )
}

//  better grid than flex here, because flex spread the the description div throughout the whole width until the right end of the window
