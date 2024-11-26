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
                data?.appA16?.available
                    ? <ApartmentTemplate
                        apartmentImgUrl={data.appA16.apartmentImgUrl}
                        floor={data.appA16.floor}
                        beds={data.appA16.beds}
                        direction={data.appA16.direction}
                        size={data.appA16.size}
                        sizeFull={data.appA16.sizeFull}
                        title={data.appA16.title}
                        textOne={data.appA16.textOne}
                        textTwo={data.appA16.textTwo}
                        floorPlan={data.appA16.floorPlan}
                        apartmentW={data.appA16.apartmentW}
                        apartmentH={data.appA16.apartmentH}
                        floorW={data.appA16.floorW}
                        floorH={data.appA16.floorH}
                        priceVat={data.appA16?.price_with_vat}
                        ></ApartmentTemplate>
                    : <AppUnavailable></AppUnavailable>
            }
        </>
    )
}

//  better grid than flex here, because flex spread the the description div throughout the whole width until the right end of the window
