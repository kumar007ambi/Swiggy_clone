import { bannerList } from "../utils/mockData"
import { useState, useRef } from "react";

const Banner = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const scrollRef = useRef(null);

    // Handle scrolling
    const handleScroll = (direction) => {
        console.log("i am scrolled")
        const scrollAmount = 100; // Amount to scroll by (adjust as needed)
        const newScrollPosition =
            direction === 'left' ? scrollPosition - scrollAmount : scrollPosition + scrollAmount;

        setScrollPosition(newScrollPosition);

        scrollRef.current.scrollTo({
            left: newScrollPosition,
            behavior: 'smooth',
        });
    };
    return (
        <div className="h-[344px] p-3">
            <button onClick={() => handleScroll('left')}>
                <img src={require("../assets/svgImages/left.svg")} className='h-6 w-6' alt='letf Button' onClick={() => handleScroll('left')} />
            </button>
            <span>{"  "}</span>
            <button onClick={() => handleScroll('right')}>
                <img src={require("../assets/svgImages/right.svg")} className='h-6 w-6' alt='right Button' onClick={() => handleScroll('right')} />
            </button>

            <h1 className="mt-5 font-bold text-2xl mb-2">Best offers for you</h1>
            {/* <div className="scroll-content" ref={scrollRef}> */}
            <div >
                <div className="scroll-content" ref={scrollRef}>
                    <div className="flex overflow-scroll no-scrollbar" ref={scrollRef}>
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