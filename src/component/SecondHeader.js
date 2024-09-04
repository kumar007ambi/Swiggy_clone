import React, { useState } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { SUBHEADERURLLINK } from '../utils/constant';
import { foodCategoryMap } from '../utils/mockData';
import { useState, useRef } from "react";
const SecondHeader = (allData) => {
    console.log("second header", allData)
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
        <>
            <div className="h-[256px]">
            <button onClick={scrollLeft}>
                <img src={require("../assets/svgImages/left.svg")} className='h-6 w-6' alt='letf Button' />
            </button>
            <span>{"  "}</span>
            <button onClick={scrollRight}>
                <img src={require("../assets/svgImages/right.svg")} className='h-6 w-6' alt='right Button' />
            </button>
                <h1 className="font-bold text-2xl mb-2">What's on your mind?</h1>

                <div>
                    <div className="w-full overflow-x-auto flex  scrollbar-hide" ref={scrollContainerRef}>
                        {Object.keys(foodCategoryMap).map((key) => (
                            <div key={key} className="flex-[0_0_auto] cursor-pointer h-[180px] w-[144px] mx-[12px]">
                                <img
                                    src={foodCategoryMap[key]?.imgUrl}
                                    className=" object-cover last:pr-0"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecondHeader

