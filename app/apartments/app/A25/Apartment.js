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
                data?.appA25?.available
                    ? <ApartmentTemplate
                        apartmentImgUrl={data.appA25.apartmentImgUrl}
                        floor={data.appA25.floor}
                        beds={data.appA25.beds}
                        direction={data.appA25.direction}
                        size={data.appA25.size}
                        sizeFull={data.appA25.sizeFull}
                        title={data.appA25.title}
                        textOne={data.appA25.textOne}
                        textTwo={data.appA25.textTwo}
                        floorPlan={data.appA25.floorPlan}
                        apartmentW={data.appA25.apartmentW}
                        apartmentH={data.appA25.apartmentH}
                        floorW={data.appA25.floorW}
                        floorH={data.appA25.floorH}
                        priceVat={data.appA25?.price_with_vat}
                        ></ApartmentTemplate>
                    : <AppUnavailable></AppUnavailable>
            }
        </>
    )
}

//  better grid than flex here, because flex spread the the description div throughout the whole width until the right end of the window
