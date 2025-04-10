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
                data?.appB7?.available
                    ? <ApartmentTemplate
                        apartmentImgUrl={data.appB7.apartmentImgUrl}
                        floor={data.appB7.floor}
                        beds={data.appB7.beds}
                        direction={data.appB7.direction}
                        size={data.appB7.size}
                        sizeFull={data.appB7.sizeFull}
                        title={data.appB7.title}
                        textOne={data.appB7.textOne}
                        textTwo={data.appB7.textTwo}
                        floorPlan={data.appB7.floorPlan}
                        apartmentW={data.appB7.apartmentW}
                        apartmentH={data.appB7.apartmentH}
                        floorW={data.appB7.floorW}
                        floorH={data.appB7.floorH}
                        priceVat={data.appB7?.price_no_vat}
                        ></ApartmentTemplate>
                    : <AppUnavailable></AppUnavailable>
            }
        </>
    )
}

//  better grid than flex here, because flex spread the the description div throughout the whole width until the right end of the window
