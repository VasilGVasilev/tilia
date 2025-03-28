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
                data?.appB19?.available
                    ? <ApartmentTemplate
                        apartmentImgUrl={data.appB19.apartmentImgUrl}
                        floor={data.appB19.floor}
                        beds={data.appB19.beds}
                        direction={data.appB19.direction}
                        size={data.appB19.size}
                        sizeFull={data.appB19.sizeFull}
                        title={data.appB19.title}
                        textOne={data.appB19.textOne}
                        textTwo={data.appB19.textTwo}
                        floorPlan={data.appB19.floorPlan}
                        apartmentW={data.appB19.apartmentW}
                        apartmentH={data.appB19.apartmentH}
                        floorW={data.appB19.floorW}
                        floorH={data.appB19.floorH}
                        priceVat={data.appB19?.price_no_vat}
                        ></ApartmentTemplate>
                    : <AppUnavailable></AppUnavailable>
            }
        </>
    )
}

//  better grid than flex here, because flex spread the the description div throughout the whole width until the right end of the window
