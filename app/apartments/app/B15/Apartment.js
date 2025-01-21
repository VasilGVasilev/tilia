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
                data?.appB15?.available
                    ? <ApartmentTemplate
                        apartmentImgUrl={data.appB15.apartmentImgUrl}
                        floor={data.appB15.floor}
                        beds={data.appB15.beds}
                        direction={data.appB15.direction}
                        size={data.appB15.size}
                        sizeFull={data.appB15.sizeFull}
                        title={data.appB15.title}
                        textOne={data.appB15.textOne}
                        textTwo={data.appB15.textTwo}
                        floorPlan={data.appB15.floorPlan}
                        apartmentW={data.appB15.apartmentW}
                        apartmentH={data.appB15.apartmentH}
                        floorW={data.appB15.floorW}
                        floorH={data.appB15.floorH}
                        priceVat={data.appB15?.price_with_vat}
                        ></ApartmentTemplate>
                    : <AppUnavailable></AppUnavailable>
            }
        </>
    )
}

//  better grid than flex here, because flex spread the the description div throughout the whole width until the right end of the window
