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
                data?.appA9?.available
                    ? <ApartmentTemplate
                        apartmentImgUrl={data.appA9.apartmentImgUrl}
                        floor={data.appA9.floor}
                        beds={data.appA9.beds}
                        direction={data.appA9.direction}
                        size={data.appA9.size}
                        sizeFull={data.appA9.sizeFull}
                        title={data.appA9.title}
                        textOne={data.appA9.textOne}
                        textTwo={data.appA9.textTwo}
                        floorPlan={data.appA9.floorPlan}
                        apartmentW={data.appA9.apartmentW}
                        apartmentH={data.appA9.apartmentH}
                        floorW={data.appA9.floorW}
                        floorH={data.appA9.floorH}
                        priceVat={data.appA9?.price_with_vat}
                        ></ApartmentTemplate>
                    : <AppUnavailable></AppUnavailable>
            }
        </>
    )
}

//  better grid than flex here, because flex spread the the description div throughout the whole width until the right end of the window
