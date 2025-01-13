import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className="flex flex-row justify-center min-h-[104px] max-h-[136px] items-center bg-[#f0f0f5]">
                <div className="w-[458px] max-h-[64px] my-auto mr-24 ">
                    <div className="text-[26px] leading-8 text-[#02060cbf] font-extrabold">
                        For better experience,download the Swiggy app
                        now
                    </div>
                </div>
                <div className="flex flex-row justify-center h-16 my-auto mx-3">
                    <img
                        className="h-[64px] my-auto mx-[12px] "
                        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
                        alt=""
                    />
                    <img
                        className="h-[64px] my-auto mx-[12px] "
                        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
                        alt=""
                    />
                </div>
            </div>
            <div className="flex items-center justify-between bg-[#02060c] px-[17.5%] py-[4rem]">
                <div className="text-white flex items-center">
                    <span className="ml-3 text-lg font-semibold">Swiggy Clone @2025</span>
                </div>
                <div className="text-white">Made By
                    <a href="https://www.linkedin.com/in/connect-with-ambika/" className="text-[#fc8019]" target="_blank"> Ambika Kumar Kewat</a>
                </div>
            </div>
        </div>
    )
}

export default Footer