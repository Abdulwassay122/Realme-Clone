import React,{useState} from 'react'

export default function Submenu4() {
    const [visibility, setVisibility] = useState("SmartLife");

  return (
    <>
      <ul className="flex text-[14px] font-semibold gap-10 my-2">
    <li
      className={`${
        visibility === "SmartLife"
          ? "text-black"
          : "text-slate-700"
      }  cursor-pointer `}
      id="NoteSeries"
      onMouseEnter={() => setVisibility("SmartLife")}
    >
      Smart Life
    </li>
    <li
      className={`${
        visibility === "PhoneAccessories"
          ? "text-black"
          : "text-slate-700"
      }  cursor-pointer `}
      id="Cseries"
      onMouseEnter={() => setVisibility("PhoneAccessories")}
    >
      Phone Accessories
    </li>
    <li
      className={`${
        visibility === "LifeStyle"
          ? "text-black"
          : "text-slate-700"
      }  cursor-pointer `}
      id="Numberseries"
      onMouseEnter={() => setVisibility("LifeStyle")}
    >
      Life Style
    </li>
    
  </ul>
  <div className="h-full bg-white">
    {/* sud menu list items 1*/}
    <div
      className={`w-full  bg-white flex justify-center ${
        visibility === "PhoneAccessories" ? "h-[230px]" : ""
      }`}
    >
      <div
        className={`flex gap-16 ${
          visibility === "PhoneAccessories"
            ? "opacity-100"
            : "opacity-0"
        } transition-all duration-500 absolute `}
      >
        {/* item 1 */}
        <div className="my-5">
          <div className="h-[155px] w-[155px] flex justify-center items-center">
            <img
              className="h-auto w-[150px] transition-all duration-200  hover:w-[155px]"
              src="https://image01.realme.net/general/20210428/1619574637904.png.webp"
              alt=""
            />
          </div>
          <div className=" flex flex-col gap-2">
            <div className="flex gap-2 items-center justify-center">
              <p className="bg-black text-white px-1 h-fit text-[12px] font-semibold rounded-[4px]">
                NEW
              </p>
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
              src="https://image01.realme.net/general/20210428/1619574653024.png.webp"
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
    {/* sud menu list items 2*/}
    <div
      className={`w-full  bg-white flex justify-center ${
        visibility === "SmartLife" ? "h-[470px]" : ""
      }`}
    >
      <div
        className={`grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 justify-items-center gap-x-16 ${
          visibility === "SmartLife"
            ? "opacity-100"
            : "opacity-0"
        } transition-opacity duration-500 absolute top-[60px]`}
      >
        {/* item 1 */}
        <div className="my-5">
          <div className="h-[155px] w-[155px] flex justify-center items-center">
            <img
              className="h-auto w-[150px] transition-all duration-200  hover:w-[155px]"
              src="https://image01.realme.net/general/20211022/1634875824076.png.webp"
              alt=""
            />
          </div>
          <div className=" flex flex-col gap-2">
            <div className="flex gap-2 items-center justify-center">
              <p className="bg-black text-white px-1 h-fit text-[12px] font-semibold rounded-[4px]">
                NEW
              </p>
              <p className="text-[14px] font-semibold">
                realme C61
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
              src="https://image01.realme.net/general/20201111/1605084977416.jpg.webp"
              alt=""
            />
          </div>
          <div className=" flex flex-col gap-2">
            <div className="flex gap-2 items-center justify-center">
              <p className="bg-black text-white px-1 h-fit text-[12px] font-semibold rounded-[4px]">
                NEW
              </p>
              <p className="text-[14px] font-semibold">
                realme C61
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
        {/* item 3 */}
        <div className="my-5">
          <div className="h-[155px] w-[155px] flex justify-center items-center">
            <img
              className="h-auto w-[150px] transition-all duration-200  hover:w-[155px]"
              src="https://image01.realme.net/general/20201111/1605084988448.jpg.webp"
              alt=""
            />
          </div>
          <div className=" flex flex-col gap-2">
            <div className="flex gap-2 items-center justify-center">
              <p className="bg-black text-white px-1 h-fit text-[12px] font-semibold rounded-[4px]">
                NEW
              </p>
              <p className="text-[14px] font-semibold">
                realme C61
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
        {/* item 4 */}
        <div className="my-5">
          <div className="h-[155px] w-[155px] flex justify-center items-center">
            <img
              className="h-auto w-[150px] transition-all duration-200  hover:w-[155px]"
              src="https://image01.realme.net/general/20201111/1605084985425.jpg.webp"
              alt=""
            />
          </div>
          <div className=" flex flex-col gap-2">
            <div className="flex gap-2 items-center justify-center">
              <p className="bg-black text-white px-1 h-fit text-[12px] font-semibold rounded-[4px]">
                NEW
              </p>
              <p className="text-[14px] font-semibold">
                realme C61
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
        {/* item 5 */}
        <div className="my-5">
          <div className="h-[155px] w-[155px] flex justify-center items-center">
            <img
              className="h-auto w-[150px] transition-all duration-200  hover:w-[155px]"
              src="https://image01.realme.net/general/20210428/1619575990267.jpg.webp"
              alt=""
            />
          </div>
          <div className=" flex flex-col gap-2">
            <div className="flex gap-2 items-center justify-center">
              <p className="bg-black text-white px-1 h-fit text-[12px] font-semibold rounded-[4px]">
                NEW
              </p>
              <p className="text-[14px] font-semibold">
                realme C61
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
        
        {/* item 6 */}
        <div className="my-5">
          <div className="h-[155px] w-[155px] flex justify-center items-center">
            <img
              className="h-auto w-[150px] transition-all duration-200  hover:w-[155px]"
              src="https://image01.realme.net/general/20201215/1608025227164.jpg.webp"
              alt=""
            />
          </div>
          <div className=" flex flex-col gap-2">
            <div className="flex gap-2 items-center justify-center">
              <p className="bg-black text-white px-1 h-fit text-[12px] font-semibold rounded-[4px]">
                NEW
              </p>
              <p className="text-[14px] font-semibold">
                realme C51
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
        <div className="lg:block hidden"></div>
        <div className="lg:block hidden"></div>
        {/* item 7 */}
        <div className="my-5">
          <div className="h-[155px] w-[155px] flex justify-center items-center">
            <img
              className="h-auto w-[150px] transition-all duration-200  hover:w-[155px]"
              src="https://image01.realme.net/general/20201111/1605084960607.jpg.webp"
              alt=""
            />
          </div>
          <div className=" flex flex-col gap-2">
            <div className="flex gap-2 items-center justify-center">
              {/* <p className='bg-black text-white px-1 h-fit text-[12px] font-semibold rounded-[4px]'>NEW</p> */}
              <p className="text-[14px] font-semibold">
                realme C35
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
        {/* item 8 */}
        <div className="my-5">
          <div className="h-[155px] w-[155px] flex justify-center items-center">
            <img
              className="h-auto w-[150px] transition-all duration-200  hover:w-[155px]"
              src="https://image01.realme.net/general/20201111/1605084969748.jpg.webp"
              alt=""
            />
          </div>
          <div className=" flex flex-col gap-2">
            <div className="flex gap-2 items-center justify-center">
              {/* <p className='bg-black text-white px-1 h-fit text-[12px] font-semibold rounded-[4px]'>NEW</p> */}
              <p className="text-[14px] font-semibold">
                realme C21Y
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
      </div>     
        
        {/* sud menu list items 4*/}
        <div
          className={`w-full   bg-white flex justify-center ${
            visibility === "LifeStyle" ? "lg:h-[230px] h-[470px]" : ""
          }`}
        >
          <div
            className={`grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 justify-center gap-x-16 ${
              visibility === "LifeStyle"
                ? "opacity-100"
                : "opacity-0"
            }  transition-opacity duration-500 absolute top-[60px]`}
          >
            {/* item 1 */}
            <div className="my-5">
            <div className="h-[155px] w-[155px] flex justify-center items-center">
            <img
              className="h-auto w-[150px] transition-all duration-200  hover:w-[155px]"
                  src="https://image01.realme.net/general/20201111/1605085214403.jpg.webp"
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
                  src="https://image01.realme.net/general/20201111/1605085220076.jpg.webp"
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
            {/* item 3 */}
            <div className="my-5">
            <div className="h-[155px] w-[155px] flex justify-center items-center">
            <img
              className="h-auto w-[150px] transition-all duration-200  hover:w-[155px]"
                  src="https://image01.realme.net/general/20220617/1655461752173.jpg.webp"
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
            {/* item 4 */}
            <div className="my-5">
            <div className="h-[155px] w-[155px] flex justify-center items-center">
            <img
              className="h-auto w-[150px] transition-all duration-200  hover:w-[155px]"
                  src="https://image01.realme.net/general/20201111/1605085441526.jpg.webp"
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
            {/* item 5 */}
            <div className="my-5">
            <div className="h-[155px] w-[155px] flex justify-center items-center">
            <img
              className="h-auto w-[150px] transition-all duration-200  hover:w-[155px]"
                  src="https://image01.realme.net/general/20210120/1611123075703.jpg.webp"
                  alt=""
                />
              </div>
              <div className=" flex flex-col gap-2">
                <div className="flex gap-2 items-center justify-center">
                  {/* <p className="bg-black text-white px-1 h-fit text-[12px] font-semibold rounded-[4px]">
                    NEW
                  </p> */}
                  <p className="text-[14px] font-semibold">
                    rrrrealme Note 60
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
          </div>
        </div>
        
        
      </div>
    </div>
  
    </>
  )
}
