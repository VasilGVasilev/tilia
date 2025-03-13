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
                data?.appA20?.available
                    ? <ApartmentTemplate
                        apartmentImgUrl={data.appA20.apartmentImgUrl}
                        floor={data.appA20.floor}
                        beds={data.appA20.beds}
                        direction={data.appA20.direction}
                        size={data.appA20.size}
                        sizeFull={data.appA20.sizeFull}
                        title={data.appA20.title}
                        textOne={data.appA20.textOne}
                        textTwo={data.appA20.textTwo}
                        floorPlan={data.appA20.floorPlan}
                        apartmentW={data.appA20.apartmentW}
                        apartmentH={data.appA20.apartmentH}
                        floorW={data.appA20.floorW}
                        floorH={data.appA20.floorH}
                        priceVat={data.appA20?.price_no_vat}
                        ></ApartmentTemplate>
                    : <AppUnavailable></AppUnavailable>
            }
        </>
    )
}

//  better grid than flex here, because flex spread the the description div throughout the whole width until the right end of the window
