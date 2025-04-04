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
                data?.appB6?.available
                    ? <ApartmentTemplate
                        apartmentImgUrl={data.appB6.apartmentImgUrl}
                        floor={data.appB6.floor}
                        beds={data.appB6.beds}
                        direction={data.appB6.direction}
                        size={data.appB6.size}
                        sizeFull={data.appB6.sizeFull}
                        title={data.appB6.title}
                        textOne={data.appB6.textOne}
                        textTwo={data.appB6.textTwo}
                        floorPlan={data.appB6.floorPlan}
                        apartmentW={data.appB6.apartmentW}
                        apartmentH={data.appB6.apartmentH}
                        floorW={data.appB6.floorW}
                        floorH={data.appB6.floorH}
                        priceVat={data.appB6?.price_no_vat}
                        ></ApartmentTemplate>
                    : <AppUnavailable></AppUnavailable>
            }
        </>
    )
}

//  better grid than flex here, because flex spread the the description div throughout the whole width until the right end of the window
