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
                data?.appB10?.available
                    ? <ApartmentTemplate
                        apartmentImgUrl={data.appB10.apartmentImgUrl}
                        floor={data.appB10.floor}
                        beds={data.appB10.beds}
                        direction={data.appB10.direction}
                        size={data.appB10.size}
                        sizeFull={data.appB10.sizeFull}
                        title={data.appB10.title}
                        textOne={data.appB10.textOne}
                        textTwo={data.appB10.textTwo}
                        floorPlan={data.appB10.floorPlan}
                        apartmentW={data.appB10.apartmentW}
                        apartmentH={data.appB10.apartmentH}
                        floorW={data.appB10.floorW}
                        floorH={data.appB10.floorH}
                        priceVat={data.appB10?.price_no_vat}
                        ></ApartmentTemplate>
                    : <AppUnavailable></AppUnavailable>
            }
        </>
    )
}

//  better grid than flex here, because flex spread the the description div throughout the whole width until the right end of the window
