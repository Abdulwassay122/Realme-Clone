import React from 'react'

export default function Submenu2() {

  return (
    <>
    {/* sud menu list items 1*/}
    <div
      className={`w-full  bg-white flex justify-center h-[230px] `}
    >
      <div
        className={`flex gap-16 
           absolute `}
      >
        {/* item 1 */}
        <div className="my-5">
          <div className="h-[155px] w-[155px] flex justify-center items-center">
            <img
              className="h-auto w-[150px] transition-all duration-200  hover:w-[155px]"
              src="https://image01.realme.net/general/20220419/1650340322453.png.webp"
              alt=""
            />
          </div>
          <div className=" flex flex-col gap-2">
            <div className="flex gap-2 items-center justify-center">
              {/* <p className="bg-black text-white px-1 h-fit text-[12px] font-semibold rounded-[4px]">
                NEW
              </p> */}
              <p className="text-[14px] font-semibold">
                realme Note 60
              </p>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <p className="text-[12px] text-[#666]">
                From
              </p>
              <p className="text-[14px] font-semibold">
                Rs.26,999
              </p>
            </div>
          </div>
        </div>
        {/* item 2 */}
        <div className="my-5">
          <div className="h-[155px] w-[155px] flex justify-center items-center">
            <img
              className="h-auto w-[150px] transition-all duration-200  hover:w-[155px]"
              src="https://image01.realme.net/general/20220419/1650340347147.png.webp"
              alt=""
            />
          </div>
          <div className=" flex flex-col gap-2">
            <div className="flex gap-2 items-center justify-center">
              {/* <p className='bg-black text-white px-1 h-fit text-[12px] font-semibold rounded-[4px]'>NEW</p> */}
              <p className="text-[14px] font-semibold">
                realme Note 50
              </p>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <p className="text-[12px] text-[#666]">
                From
              </p>
              <p className="text-[14px] font-semibold">
                Rs.24,999
              </p>
            </div>
          </div>
        </div>
        {/* item 2 */}
        <div className="my-5">
          <div className="h-[155px] w-[155px] flex justify-center items-center">
            <img
              className="h-auto w-[150px] transition-all duration-200  hover:w-[155px]"
              src="https://image01.realme.net/general/20220419/1650340358967.png.webp"
              alt=""
            />
          </div>
          <div className=" flex flex-col gap-2">
            <div className="flex gap-2 items-center justify-center">
              {/* <p className='bg-black text-white px-1 h-fit text-[12px] font-semibold rounded-[4px]'>NEW</p> */}
              <p className="text-[14px] font-semibold">
                realme Note 50
              </p>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <p className="text-[12px] text-[#666]">
                From
              </p>
              <p className="text-[14px] font-semibold">
                Rs.24,999
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
