import { bannerList } from "../utils/mockData"
import { useState, useRef } from "react";

const Banner = () => {
    // const [scrollPosition, setScrollPosition] = useState(0);
    // const scrollRef = useRef(null);

    // Handle scrolling
    // const handleScroll = (direction) => {
    //     console.log("i am scrolled")
    //     const scrollAmount = 100; // Amount to scroll by (adjust as needed)
    //     const newScrollPosition =
    //         direction === 'left' ? scrollPosition - scrollAmount : scrollPosition + scrollAmount;

    //     setScrollPosition(newScrollPosition);

    //     scrollRef.current.scrollTo({
    //         left: newScrollPosition,
    //         behavior: 'smooth',
    //     });
    // };
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
            <button onClick={scrollLeft}>
                <img src={require("../assets/svgImages/reshot-icon-arrow-left.svg")} className='h-6 w-6' alt='letf Button' />
            </button>
            <span>{"  "}</span>
            <button onClick={scrollRight}>
                <img src={require("../assets/svgImages/reshot-icon-arrow-right.svg")} className='h-6 w-6' alt='right Button' />
            </button>

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