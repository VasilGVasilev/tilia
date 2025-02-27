'use client'

import { noto } from "@/utils/fonts"
import Plan from "./Plan"


const Floors = () => {
    return (
        <div>
            {/* Investor tag */}
                <div className="text-black bg-tilia-yellow-block flex flex-row p-10">
                    <div
                        className={`${noto.className} text-2xl md:text-5xl lg:text-[80px]`}
                        // initial="hidden"
                        // whileInView="visible"
                        // viewport={{ once: true }}
                        // transition={{ duration: 0.7, delay: 0.3 }}
                        // variants={{
                        //     hidden: { opacity: 0, translateY: 20, skewX: -80, rotateY: 50 },
                        //     visible: { opacity: 1, translateY: 0, skewX: 0, rotateY: 0 },
                        // }}
                    >
                        Етажи
                    </div>
                </div>
            {/* FLOOR PLAN */}
            <div className="bg-tilia-gray">
                <Plan></Plan>
            </div>

        </div>
    )
}

export default Floors
