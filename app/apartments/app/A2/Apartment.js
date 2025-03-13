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
                data?.appA2?.available
                    ? <ApartmentTemplate
                        apartmentImgUrl={data.appA2.apartmentImgUrl}
                        floor={data.appA2.floor}
                        beds={data.appA2.beds}
                        direction={data.appA2.direction}
                        size={data.appA2.size}
                        sizeFull={data.appA2.sizeFull}
                        title={data.appA2.title}
                        textOne={data.appA2.textOne}
                        textTwo={data.appA2.textTwo}
                        floorPlan={data.appA2.floorPlan}
                        apartmentW={data.appA2.apartmentW}
                        apartmentH={data.appA2.apartmentH}
                        floorW={data.appA2.floorW}
                        floorH={data.appA2.floorH}
                        priceVat={data.appA2?.price_no_vat}
                        ></ApartmentTemplate>
                    : <AppUnavailable></AppUnavailable>
            }
        </>
    )
}

//  better grid than flex here, because flex spread the the description div throughout the whole width until the right end of the window
