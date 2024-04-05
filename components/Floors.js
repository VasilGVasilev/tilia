'use client'

import Plan from "./Plan"


const Floors = () => {
    return (
        <div>
            {/* Investor tag */}
            <div className="bg-white">
                <div
                    className={`flex flex-row justify-start welcomeTextOnImg text-black py-5 ml-10 text-2xl md:text-5xl lg:text-[80px]`}
                >
                    ЕТАЖИ
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
