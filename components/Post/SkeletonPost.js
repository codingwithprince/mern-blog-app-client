import React from 'react'

const SkeletonPost = () => {
  return (
  <div role="status" className="p-4 rounded shadow-md animate-pulse bg-white md:p-6 dark:border-gray-700">
    <div className="h-10 bg-gray-200  rounded-md dark:bg-gray-500  mb-4"></div>
    <div className="h-[300px] bg-gray-200  rounded-md dark:bg-gray-500 mb-2.5"></div>
    <div className="h-2 bg-gray-200  rounded-md dark:bg-gray-500 mb-2.5"></div>
    <div className="h-2 bg-gray-200  rounded-md dark:bg-gray-500"></div>
    <div className="flex items-center mt-4 space-x-3">
        <svg className="w-14 h-14 text-gray-200 dark:text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
        <div>
            <div className="h-2.5 bg-gray-200  rounded-md dark:bg-gray-500 w-32 mb-2"></div>
            <div className="w-48 h-2 bg-gray-200 rounded-md dark:bg-gray-500"></div>
        </div>
    </div>
    <span className="sr-only">Loading...</span>
</div>

  )
}

export default SkeletonPost