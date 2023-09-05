
'use client'

import Image from "next/image"
import { imageLoader } from "../../utils/imgLoader";
import Maps from "@/components/Location";
import Link from "next/link";
import { motion } from "framer-motion";

import { SlLocationPin } from 'react-icons/sl'
import { BsTelephone } from 'react-icons/bs'
import { TfiEmail } from 'react-icons/tfi'
import PicsLightbox from "@/components/Lightbox";
import { useRef, useState } from "react";


export const revalidate = 0; // revalidate this page every 60 seconds


export default function Test() {
    const [dalia, setDalia] = useState(["/dalia/dalia-one.webp", "/dalia/dalia-two.webp", "/dalia/dalia-three.webp"]);
    const [westEnd, setWestEnd] = useState(["/west-end/west-end-one.webp", "/west-end/west-end-two.webp", "/west-end/west-end-three.webp"]);
    const [ixora, setIxora] = useState(["/ixora/ixora-one.webp", "/ixora/ixora-two.webp", "/ixora/ixora-three.webp"]);




    // const [apartment, setApartment] = useState({
    //     ap: null,
    //     plosht: null,
    //     zp: null,
    // });


    // const updateInfo = (ap, plosht, zp) => {
    //     setApartment({
    //         ap,
    //         plosht,
    //         zp,
    //     });
    //     openModal()
    // }



    return (
        <>
                
            <div className="bg-black w-96 h-96 cursor-available relative" >
                <span ref={tooltip} className="hidden hover:block fixed overflow-hidden">
                    <img src="/assets/avail.png" className="w-40 h-40" alt="" />
                </span>
            </div>
        </>
    )
}

