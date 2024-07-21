import React, { useState } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { SUBHEADERURLLINK } from '../utils/constant';

const SecondHeader = (allData) => {
    console.log("second header", allData)
    return (
        <>
            <div>
                <div className='float-right m-3'>
                    <button>
                        <img src={require("../assets/svgImages/left.svg")} className='h-6 w-6' alt='letf Button' />
                    </button>
                    <span>{"  "}</span>

                    <button>
                        <img src={require("../assets/svgImages/right.svg")} className='h-6 w-6' alt='letf Button' />
                    </button>
                </div>
                <div>
                    <h2 className='text-[24px] font-bold te'>What's on your mind?</h2>
                </div>
            </div>
            <div>
                <div className="container mx-auto">
                    <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
                        {/* Carousel for desktop and large size devices */}
                        <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={4} step={1} infinite={true}>
                            <div className="w-full relative flex items-center justify-center">
                                <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                                    {allData?.data?.map((item,index) => {
                                        // return (
                                            // <Slider key={index}>
                                            //     <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                            //         <Slide index={0}>
                                            //             <div className="flex flex-shrink-0 relative w-[180px] h-[184px] sm:w-auto">
                                            //                 <div className="  absolute w-[144px] h-[180px] p-6">
                                                                 <>
                                                                <img src={SUBHEADERURLLINK+item?.imageId} alt="Banner Pic" className="object-cover object-center w-full" /> 
                                                                 {/* <p>{item?.description}</p>  */}
                                                                 </>
                                            //                 </div>
                                            //             </div>
                                            //         </Slide>
                                            //     </div>
                                            // </Slider>
                                    
                                     })} 
                                   
                                </div>

                            </div>
                        </CarouselProvider>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SecondHeader

{/* <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext> */}

{/* <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack> */}

                         {/* {allData?.data?.map((item, index) => (
                                        <>
                                            <img src={SUBHEADERURLLINK+item?.imageId} alt='Banner pic'/>
                                           
                                           </>
                                        
                                    ))} */}