'use client'

import ApartmentTemplate from "@/components/ApartmentTemplate";
import { data } from '@/data';


export const revalidate = 0; // revalidate this page every 60 seconds


export default function Apartament() {

    return (
        <ApartmentTemplate
            apartmentImgUrl={data.apartmentTest.apartmentImgUrl}
            floor={data.apartmentTest.floor}
            beds={data.apartmentTest.beds}
            direction={data.apartmentTest.direction}
            size={data.apartmentTest.size}
            price={data.apartmentTest.price}
            title={data.apartmentTest.title}
            textOne={data.apartmentTest.textOne}
            textTwo={data.apartmentTest.textTwo}
            floorPlan={data.apartmentTest.floorPlan}
            apartmentW={data.apartmentTest.apartmentW}
            apartmentH={data.apartmentTest.apartmentH}
            floorW={data.apartmentTest.floorW}
            floorH={data.apartmentTest.floorH}
        ></ApartmentTemplate>
    )
}

//  better grid than flex here, because flex spread the the description div throughout the whole width until the right end of the window
