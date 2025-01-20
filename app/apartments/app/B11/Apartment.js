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
                data?.appB11?.available
                    ? <ApartmentTemplate
                        apartmentImgUrl={data.appB11.apartmentImgUrl}
                        floor={data.appB11.floor}
                        beds={data.appB11.beds}
                        direction={data.appB11.direction}
                        size={data.appB11.size}
                        sizeFull={data.appB11.sizeFull}
                        title={data.appB11.title}
                        textOne={data.appB11.textOne}
                        textTwo={data.appB11.textTwo}
                        floorPlan={data.appB11.floorPlan}
                        apartmentW={data.appB11.apartmentW}
                        apartmentH={data.appB11.apartmentH}
                        priceVat={data.appB11?.price_with_vat}
                        ></ApartmentTemplate>
                    : <AppUnavailable></AppUnavailable>
            }
        </>
    )
}

//  better grid than flex here, because flex spread the the description div throughout the whole width until the right end of the window
