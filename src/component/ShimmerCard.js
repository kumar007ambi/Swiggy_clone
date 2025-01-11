import React from 'react'

const ShimmerCard = () => {
 return Array(12)
    .fill(0)
    .map((n, i) => (
      <div key={i} className="h-full p-4">
      {/* Horizontal scroll container */}
      <div className="flex flex-wrap gap-2">
        {/* Generate 5 shimmer cards */}
        {[...Array(12)].map((_, index) => (
          <div 
            key={index}
            className="flex-none w-64 bg-white rounded-lg shadow-md overflow-hidden"
          >
            {/* Image shimmer */}
            <div className="w-full h-40 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-[shimmer_1.5s_infinite]" />
            
            {/* Content area */}
            <div className="p-4 space-y-3">
              {/* Restaurant name shimmer */}
              <div className="h-6 w-3/4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded animate-[shimmer_1.5s_infinite]" />
              
              {/* Rating and time shimmer */}
              <div className="flex gap-2">
                <div className="h-4 w-16 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded animate-[shimmer_1.5s_infinite]" />
                <div className="h-4 w-24 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded animate-[shimmer_1.5s_infinite]" />
              </div>
              
              {/* Cuisine type shimmer */}
              <div className="h-4 w-5/6 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded animate-[shimmer_1.5s_infinite]" />
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -468px 0;
          }
          100% {
            background-position: 468px 0;
          }
        }
      `}</style>
    </div>
    ))
}

export default ShimmerCard