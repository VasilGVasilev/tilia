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
                data?.appB30?.available
                    ? <ApartmentTemplate
                        apartmentImgUrl={data.appB30.apartmentImgUrl}
                        floor={data.appB30.floor}
                        beds={data.appB30.beds}
                        direction={data.appB30.direction}
                        size={data.appB30.size}
                        sizeFull={data.appB30.sizeFull}
                        title={data.appB30.title}
                        textOne={data.appB30.textOne}
                        textTwo={data.appB30.textTwo}
                        floorPlan={data.appB30.floorPlan}
                        apartmentW={data.appB30.apartmentW}
                        apartmentH={data.appB30.apartmentH}
                        floorW={data.appB30.floorW}
                        floorH={data.appB30.floorH}
                        priceVat={data.appB30?.price_no_vat}
                        ></ApartmentTemplate>
                    : <AppUnavailable></AppUnavailable>
            }
        </>
    )
}

//  better grid than flex here, because flex spread the the description div throughout the whole width until the right end of the window
