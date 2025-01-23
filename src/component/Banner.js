import { bannerList } from "../utils/mockData"
import { useState, useRef } from "react";

const Banner = () => {
    const [scrollPos, setScrollPos] = useState(0);
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        const newPos = Math.max(scrollPos - 100, 0); // Decrease scroll position by 100 pixels or to the start
        setScrollPos(newPos);
        scrollContainerRef.current.scrollTo({ left: newPos, behavior: "smooth" });
    };

    const scrollRight = () => {
        const containerWidth = scrollContainerRef.current.scrollWidth;
        const newPos = Math.min(scrollPos + 100, containerWidth); // Increase scroll position by 100 pixels or to the end
        setScrollPos(newPos);
        scrollContainerRef.current.scrollTo({ left: newPos, behavior: "smooth" });
    };
    return (
        <div className="h-[344px] p-3">
            <div className="float-right m-2">
                <button onClick={scrollLeft} className="w-8 h-8 bg-indigo-100 rounded-full ">
                    <img src={require("../assets/svgImages/reshot-icon-arrow-left.svg")} className='h-5 w-5 m-1' alt='letf Button' />
                </button>
                <span>{"  "}</span>
                <button onClick={scrollRight} className="w-8 h-8 bg-indigo-100 rounded-full ">
                    <img src={require("../assets/svgImages/reshot-icon-arrow-right.svg")} className='h-5 w-5 m-1' alt='right Button' />
                </button>
            </div>
            <h1 className="mt-5 font-bold text-2xl mb-2">Best offers for you</h1>
            {/* <div className="scroll-content" ref={scrollRef}> */}
            <div >
                <div className="scroll-content" >
                    <div className="flex overflow-scroll scrollbar-hide" ref={scrollContainerRef}>
                        {bannerList.map((banner) => (
                            <img
                                key={banner.id}
                                src={banner.imgUrl}
                                className="h-full block w-[375px] m-3 first:ml-0 last:mr-0 cursor-pointer"
                                alt="offer-banner"
                                loading="lazy"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
        // </div>
    )
}

export default Banner;