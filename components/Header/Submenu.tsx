import React,{ useState } from 'react'

export default function Submenu(props:any) {
    const [visibility, setVisibility] = useState("NoteSeries");
  return (
    <> <ul className="flex text-[14px] font-semibold gap-10 my-2">
    <li
      className={`${
        visibility === "NoteSeries"
          ? "text-black"
          : "text-slate-700"
      }  cursor-pointer `}
      id="NoteSeries"
      onMouseEnter={() => setVisibility("NoteSeries")}
    >
      Note Series
    </li>
    <li
      className={`${
        visibility === "Cseries"
          ? "text-black"
          : "text-slate-700"
      }  cursor-pointer `}
      id="Cseries"
      onMouseEnter={() => setVisibility("Cseries")}
    >
      C series
    </li>
    <li
      className={`${
        visibility === "Numberseries"
          ? "text-black"
          : "text-slate-700"
      }  cursor-pointer `}
      id="Numberseries"
      onMouseEnter={() => setVisibility("Numberseries")}
    >
      Number series
    </li>
    <li
      className={`${
        visibility === "GTseries"
          ? "text-black"
          : "text-slate-700"
      }  cursor-pointer `}
      id="GTseries"
      onMouseEnter={() => setVisibility("GTseries")}
    >
      GT series
    </li>
    <li
      className={`${
        visibility === "Xseries"
          ? "text-black"
          : "text-slate-700"
      }  cursor-pointer `}
      id="Xseries"
      onMouseEnter={() => setVisibility("Xseries")}
    >
      X series
    </li>
    <li
      className={`${
        visibility === "9series"
          ? "text-black"
          : "text-slate-700"
      }  cursor-pointer `}
      id="9series"
      onMouseEnter={() => setVisibility("9series")}
    >
      9 series
    </li>
  </ul>
  <div className="h-full bg-white">
    {/* sud menu list items 1*/}
    <div
      className={`w-full  bg-white flex justify-center ${
        visibility === "NoteSeries" ? "h-[230px]" : ""
      }`}
    >
      <div
        className={`flex gap-16 ${
          visibility === "NoteSeries"
            ? "opacity-100"
            : "opacity-0"
        } transition-all duration-500 absolute `}
      >
        {/* item 1 */}
        <div className="my-5">
          <div className="h-[155px] w-[155px] flex justify-center items-center">
            <img
              className="h-auto w-[150px] transition-all duration-200  hover:w-[155px]"
              src="https://image01.realme.net/general/20240919/1726727360877317107e81a38435b84521b9aac3aa030.png.webp"
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
              src="https://image01.realme.net/general/20240221/1708501473325f9abd74c238e45c6af425e214247f95d.png.webp"
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
        visibility === "Cseries" ? "h-[470px]" : ""
      }`}
    >
      <div
        className={`grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 justify-items-center gap-x-16 ${
          visibility === "Cseries"
            ? "opacity-100"
            : "opacity-0"
        } transition-opacity duration-500 absolute top-[60px]`}
      >
        {/* item 1 */}
        <div className="my-5">
          <div className="h-[155px] w-[155px] flex justify-center items-center">
            <img
              className="h-auto w-[150px] transition-all duration-200  hover:w-[155px]"
              src="https://image01.realme.net/general/20240827/172475175521363dcd2d1ff16418fb46a73344b9de331.png.webp"
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
              src="https://image01.realme.net/general/20240726/172198821952086d3dbdaddec419d9dc6e361d52cfda0.png.webp"
              alt=""
            />
          </div>
          <div className=" flex flex-col gap-2">
            <div className="flex gap-2 items-center justify-center">
              <p className="bg-black text-white px-1 h-fit text-[12px] font-semibold rounded-[4px]">
                NEW
              </p>
              <p className="text-[14px] font-semibold">
                realme C65
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
              src="https://image01.realme.net/general/20240607/171774230180240a508913bc2411a9025f038f0d23f45.png.webp"
              alt=""
            />
          </div>
          <div className=" flex flex-col gap-2">
            <div className="flex gap-2 items-center justify-center">
              <p className="bg-black text-white px-1 h-fit text-[12px] font-semibold rounded-[4px]">
                NEW
              </p>
              <p className="text-[14px] font-semibold">
                realme C63
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
              src="https://image01.realme.net/general/20240105/170441972951582959cad99bb4530980ac630f7dbf2b8.png.webp"
              alt=""
            />
          </div>
          <div className=" flex flex-col gap-2">
            <div className="flex gap-2 items-center justify-center">
              <p className="bg-black text-white px-1 h-fit text-[12px] font-semibold rounded-[4px]">
                NEW
              </p>
              <p className="text-[14px] font-semibold">
                realme C67
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
              src="https://image01.realme.net/general/20231201/170139559470160980addb1014d2f811d23bc2b464d45.png.webp"
              alt=""
            />
          </div>
          <div className=" flex flex-col gap-2">
            <div className="flex gap-2 items-center justify-center">
              <p className="bg-black text-white px-1 h-fit text-[12px] font-semibold rounded-[4px]">
                NEW
              </p>
              <p className="text-[14px] font-semibold">
                realme C53
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
              src="https://image01.realme.net/general/20231110/16995972277593c1ef5ef58904165a855bc2e88de5536.png.webp"
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
              src="https://image01.realme.net/general/20220517/1652791764279.png.webp"
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
              src="https://image01.realme.net/general/20211125/1637834492321.png.webp"
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
      {/* sud menu list items 3*/}
      <div
        className={`w-full  bg-white flex justify-center ${
          visibility === "Numberseries" ? "h-[470px]" : ""
        }`}
      >
        <div
          className={`grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 justify-items-center gap-x-16 ${
            visibility === "Numberseries"
              ? "opacity-100"
              : "opacity-0"
          } transition-opacity duration-500 absolute top-[60px]`}
        >
          {/* item 1 */}
          <div className="my-5">
            <div className="h-[155px] w-[155px] flex justify-center items-center">
            <img
              className="h-auto w-[150px] transition-all duration-200  hover:w-[155px]"
                src="https://image01.realme.net/general/20241108/1731062120301ba50a9920ff648fab4fe7a1a1aae6bdf.png.webp"
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
                src="https://image01.realme.net/general/20240626/1719397869413cbbca575a07a43f3a345386b6914efe0.png.webp"
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
          {/* item 3 */}
          <div className="my-5">
          <div className="h-[155px] w-[155px] flex justify-center items-center">
            <img
              className="h-auto w-[150px] transition-all duration-200  hover:w-[155px]"
                src="https://image01.realme.net/general/20240620/1718869535854fb321b237d524c4e9c6e3e905ca5cde2.png.webp  "
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
                src="https://image01.realme.net/general/20210416/1618564714877.png.webp"
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
                src="https://image01.realme.net/general/20201111/1605081066169.jpg.webp"
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
          {/* item 6 */}
          <div className="my-5">
          <div className="h-[155px] w-[155px] flex justify-center items-center">
            <img
              className="h-auto w-[150px] transition-all duration-200  hover:w-[155px]"
                src="https://image01.realme.net/general/20201130/1606706939489.jpg.webp"
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
          <div className="lg:block hidden"></div>
          <div className="lg:block hidden"></div>
          {/* item 7 */}
          <div className="my-5">
          <div className="h-[155px] w-[155px] flex justify-center items-center">
            <img
              className="h-auto w-[150px] transition-all duration-200  hover:w-[155px]"
                src="https://image01.realme.net/general/20201111/1605081070033.jpg.webp"
                alt=""
              />
            </div>
            <div className=" flex flex-col gap-2">
              <div className="flex gap-2 items-center justify-center">
                {/* <p className='bg-black text-white px-1 h-fit text-[12px] font-semibold rounded-[4px]'>NEW</p> */}
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
          {/* item 8 */}
          <div className="my-5">
          <div className="h-[155px] w-[155px] flex justify-center items-center">
            <img
              className="h-auto w-[150px] transition-all duration-200  hover:w-[155px]"
                src="https://image01.realme.net/general/20201111/1605081075723.jpg.webp"
                alt=""
              />
            </div>
            <div className=" flex flex-col gap-2">
              <div className="flex gap-2 items-center justify-center">
                {/* <p className='bg-black text-white px-1 h-fit text-[12px] font-semibold rounded-[4px]'>NEW</p> */}
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
        </div>
        {/* sud menu list items 4*/}
        <div
          className={`w-full   bg-white flex justify-center ${
            visibility === "GTseries" ? "h-[230px]" : ""
          }`}
        >
          <div
            className={`flex justify-center gap-16 ${
              visibility === "GTseries"
                ? "opacity-100"
                : "opacity-0"
            }  transition-opacity duration-500 absolute top-[60px]`}
          >
            {/* item 1 */}
            <div className="my-5">
            <div className="h-[155px] w-[155px] flex justify-center items-center">
            <img
              className="h-auto w-[150px] transition-all duration-200  hover:w-[155px]"
                  src="https://image01.realme.net/general/20240930/17276900542087384988e264e48b28f06e74590b36c55.png.webp"
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
                  src="https://image01.realme.net/general/20211020/1634712100567.png.webp"
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
        {/* sud menu list items 5*/}
        <div
          className={`w-full   bg-white flex justify-center ${
            visibility === "Xseries" ? "h-[230px]" : ""
          }`}
        >
          <div
            className={`flex justify-center gap-16 ${
              visibility === "Xseries"
                ? "opacity-100"
                : "opacity-0"
            }  transition-opacity duration-500 absolute top-[60px]`}
          >
            {/* item 1 */}
            <div className="my-5">
            <div className="h-[155px] w-[155px] flex justify-center items-center">
            <img
              className="h-auto w-[150px] transition-all duration-200  hover:w-[155px]"
                  src="https://image01.realme.net/general/20201111/1605082602683.jpg.webp"
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
                  src="https://image01.realme.net/general/20201111/1605082606635.jpg.webp"
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
        {/* sud menu list items 6*/}
        <div
          className={`w-full   bg-white flex justify-center ${
            visibility === "9series" ? "h-[230px]" : ""
          }`}
        >
          <div
            className={`flex justify-center gap-16 ${
              visibility === "9series"
                ? "opacity-100"
                : "opacity-0"
            }  transition-opacity duration-500 absolute top-[60px]`}
          >
            {/* item 1 */}
            <div className="my-5">
            <div className="h-[155px] w-[155px] flex justify-center items-center">
            <img
              className="h-auto w-[150px] transition-all duration-200  hover:w-[155px]"
                  src="https://image01.realme.net/general/20220715/1657854010270.png.webp"
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
                  src="https://image01.realme.net/general/20220420/1650433679888.png.webp"
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
          </div>
        </div>
      </div>
    </div>
  </div></>
  )
}
