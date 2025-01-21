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
                data?.appB18?.available
                    ? <ApartmentTemplate
                        apartmentImgUrl={data.appB18.apartmentImgUrl}
                        floor={data.appB18.floor}
                        beds={data.appB18.beds}
                        direction={data.appB18.direction}
                        size={data.appB18.size}
                        sizeFull={data.appB18.sizeFull}
                        title={data.appB18.title}
                        textOne={data.appB18.textOne}
                        textTwo={data.appB18.textTwo}
                        floorPlan={data.appB18.floorPlan}
                        apartmentW={data.appB18.apartmentW}
                        apartmentH={data.appB18.apartmentH}
                        floorW={data.appB18.floorW}
                        floorH={data.appB18.floorH}
                        priceVat={data.appB18?.price_with_vat}
                        ></ApartmentTemplate>
                    : <AppUnavailable></AppUnavailable>
            }
        </>
    )
}

//  better grid than flex here, because flex spread the the description div throughout the whole width until the right end of the window
