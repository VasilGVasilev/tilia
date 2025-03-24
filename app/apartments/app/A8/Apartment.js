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
                data?.appA8?.available
                    ? <ApartmentTemplate
                        apartmentImgUrl={data.appA8.apartmentImgUrl}
                        floor={data.appA8.floor}
                        beds={data.appA8.beds}
                        direction={data.appA8.direction}
                        size={data.appA8.size}
                        sizeFull={data.appA8.sizeFull}
                        title={data.appA8.title}
                        textOne={data.appA8.textOne}
                        textTwo={data.appA8.textTwo}
                        floorPlan={data.appA8.floorPlan}
                        apartmentW={data.appA8.apartmentW}
                        apartmentH={data.appA8.apartmentH}
                        floorW={data.appA8.floorW}
                        floorH={data.appA8.floorH}
                        priceVat={data.appA8?.price_no_vat}
                        ></ApartmentTemplate>
                    : <AppUnavailable></AppUnavailable>
            }
        </>
    )
}

//  better grid than flex here, because flex spread the the description div throughout the whole width until the right end of the window
