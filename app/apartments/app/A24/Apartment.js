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
                data?.appA24?.available
                    ? <ApartmentTemplate
                        apartmentImgUrl={data.appA24.apartmentImgUrl}
                        floor={data.appA24.floor}
                        beds={data.appA24.beds}
                        direction={data.appA24.direction}
                        size={data.appA24.size}
                        sizeFull={data.appA24.sizeFull}
                        title={data.appA24.title}
                        textOne={data.appA24.textOne}
                        textTwo={data.appA24.textTwo}
                        floorPlan={data.appA24.floorPlan}
                        apartmentW={data.appA24.apartmentW}
                        apartmentH={data.appA24.apartmentH}
                        floorW={data.appA24.floorW}
                        floorH={data.appA24.floorH}
                        priceVat={data.appA24?.price_with_vat}
                        ></ApartmentTemplate>
                    : <AppUnavailable></AppUnavailable>
            }
        </>
    )
}

//  better grid than flex here, because flex spread the the description div throughout the whole width until the right end of the window
