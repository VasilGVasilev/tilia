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
                data?.appB31?.available
                    ? <ApartmentTemplate
                        apartmentImgUrl={data.appB31.apartmentImgUrl}
                        floor={data.appB31.floor}
                        beds={data.appB31.beds}
                        direction={data.appB31.direction}
                        size={data.appB31.size}
                        sizeFull={data.appB31.sizeFull}
                        title={data.appB31.title}
                        textOne={data.appB31.textOne}
                        textTwo={data.appB31.textTwo}
                        floorPlan={data.appB31.floorPlan}
                        apartmentW={data.appB31.apartmentW}
                        apartmentH={data.appB31.apartmentH}
                        floorW={data.appB31.floorW}
                        floorH={data.appB31.floorH}
                        priceVat={data.appB31?.price_no_vat}
                        ></ApartmentTemplate>
                    : <AppUnavailable></AppUnavailable>
            }
        </>
    )
}

//  better grid than flex here, because flex spread the the description div throughout the whole width until the right end of the window
