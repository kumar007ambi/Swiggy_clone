import React, { useState } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { SUBHEADERURLLINK } from '../utils/constant';
import { foodCategoryMap } from '../utils/mockData';
import { useRef } from "react";
import leftArrow from "../assets/svgImages/reshot-icon-arrow-left.svg";
import rightArrow from "../assets/svgImages/reshot-icon-arrow-right.svg";
const SecondHeader = (allData) => {
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
            <div className="h-[254px]">
                <div className='float-right m-2'>
                    <button onClick={scrollLeft} className="w-8 h-8 bg-indigo-100 rounded-full ">
                        <img src={leftArrow} className='h-5 w-5 m-1' alt='left Button' />
                    </button>
                    <span>{"  "}</span>
                    <button onClick={scrollRight} className="w-8 h-8 bg-indigo-100 rounded-full ">
                        <img src={rightArrow} className='h-5 w-5 m-1' alt='right Button' />
                    </button>
                </div>
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

