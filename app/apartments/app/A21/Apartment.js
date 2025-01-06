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
                data?.appA21?.available
                    ? <ApartmentTemplate
                        apartmentImgUrl={data.appA21.apartmentImgUrl}
                        floor={data.appA21.floor}
                        beds={data.appA21.beds}
                        direction={data.appA21.direction}
                        size={data.appA21.size}
                        sizeFull={data.appA21.sizeFull}
                        title={data.appA21.title}
                        textOne={data.appA21.textOne}
                        textTwo={data.appA21.textTwo}
                        floorPlan={data.appA21.floorPlan}
                        apartmentW={data.appA21.apartmentW}
                        apartmentH={data.appA21.apartmentH}
                        floorW={data.appA21.floorW}
                        floorH={data.appA21.floorH}
                        priceVat={data.appA21?.price_with_vat}
                        ></ApartmentTemplate>
                    : <AppUnavailable></AppUnavailable>
            }
        </>
    )
}

//  better grid than flex here, because flex spread the the description div throughout the whole width until the right end of the window
