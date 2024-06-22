import React from 'react'

const SecondHeader = () => {
  return (
    <div>
      <div>
        <div className='float-right m-2'>
          <button>
            <img src={require("../assets/svgImages/left.svg")} className='h-6 w-6' alt='letf Button' />
          </button>
          <span>{"  "}</span>
        
          <button>
            <img src={require("../assets/svgImages/right.svg")} className='h-6 w-6' alt='letf Button' />
          </button>
        </div>
        <div><h2 className='text-[24px] font-bold te'>What's on your mind?</h2></div>
      </div>
      
    </div>
  )
}

export default SecondHeader