"use client";
import React, { useState } from "react";

export default function Navbar() {
  const [visibility, setVisibility] = useState("NoteSeries");
  const [navVisibility, setNavVisibility] = useState("");
//   setTimeout(() => {
//     if(navVisibility!=='realmesmartphone'){
//     document.getElementById('realmesmartphone')?.classList.add('hidden')
//     }
//   }, 700);
  return (
    <header className="h-[1200px] text-black bg-slate-400">
      <div className=" bg-[#ffffff] opacity-90 h-[60px] border-b-2 border-solid border-slate-100">
        <div className="mx-[135.5px] flex h-full items-center justify-between">
          {/* nav left */}
          <div className="flex">
            {/* logo */}
            <div className="h-[60px] flex items-center">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA4MCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik04LjgzMTU2IDcuMzk2NjFIMi40MDI3NEgwVjkuODAwNzJWMjAuNTg5MUgyLjQwMjc0VjkuODAwNzJIOC44MzE1NlY3LjM5NjYxWiIgZmlsbD0iYmxhY2siLz4NCjxwYXRoIGQ9Ik00My4yMTcyIDNINDAuODE0NVYyMC41ODlINDMuMjE3MlYzWiIgZmlsbD0iYmxhY2siLz4NCjxwYXRoIGQ9Ik0zNi4wMDg2IDcuMzk2NThWOS4wMDM0NEMzNi4wMDg2IDkuMDAzNDQgMzUuMjQ3IDcuOTg1MjYgMzMuNzM2MiA3LjQzNTAxQzMzLjAyNjggNy4xOTA3NSAzMi4yNjc5IDcuMDU2MjcgMzEuNDc2MiA3LjA1NjI3QzI3LjY0NjMgNy4wNTYyNyAyNC41NDEgMTAuMTYxNiAyNC41NDEgMTMuOTkxNEMyNC41NDEgMTcuODIxMyAyNy42NDYzIDIwLjkyNjYgMzEuNDc2MiAyMC45MjY2QzMyLjI2NzkgMjAuOTI2NiAzMy4wMjgyIDIwLjc5MjEgMzMuNzM2MiAyMC41NDc5QzM1LjI0NyAxOS45OTkgMzYuMDA3MiAxOC45ODA4IDM2LjAwODYgMTguOTc5NFYyMC41ODYzSDM4LjQxMTNWNy4zOTY1OEgzNi4wMDg2Wk0zMS40NzYyIDE4LjU4NTZDMjguOTM5IDE4LjU4NTYgMjYuODgyIDE2LjUyODcgMjYuODgyIDEzLjk5MTRDMjYuODgyIDExLjQ1NDIgMjguOTM5IDkuMzk3MjcgMzEuNDc2MiA5LjM5NzI3QzM0LjAxMzQgOS4zOTcyNyAzNi4wNzAzIDExLjQ1NDIgMzYuMDcwMyAxMy45OTE0QzM2LjA3MDMgMTYuNTI4NyAzNC4wMTM0IDE4LjU4NTYgMzEuNDc2MiAxOC41ODU2WiIgZmlsbD0iYmxhY2siLz4NCjxwYXRoIGQ9Ik02NC4xOTU0IDEwLjE0MzdDNjMuNDI1NiA4LjMyMDA1IDYxLjcyOTUgNy4wNTc2MiA1OS41ODM0IDcuMDU3NjJDNTcuNzYxMSA3LjA1NzYyIDU2LjIwNSA3Ljk3MDE0IDU1LjI3NzQgOS4zNjAxOUM1NC40OTUyIDcuOTY4NzcgNTMuMTI4NSA3LjA1NzYyIDUxLjMwNDggNy4wNTc2MkM0OS45MDc5IDcuMDU3NjIgNDguODA0NiA3LjY0MjE4IDQ4LjAyMzggOC41NjU2OFY3LjM5NzkzSDQ1LjYyMTFWMjAuNTg5SDQ4LjAyMzhWMTIuNjQ1M0M0OC4wMjM4IDEyLjAzNDYgNDguMTA2MiAxMS41NTcxIDQ4LjI1NTcgMTEuMjAzMUM0OC43MDQ1IDEwLjE0MjQgNDkuNzU0MiA5LjM5ODYxIDUwLjk3NjggOS4zOTg2MUM1Mi4xOTk1IDkuMzk4NjEgNTMuMjUwNiAxMC4xNDI0IDUzLjY5NzkgMTEuMjAzMUM1My44NDc1IDExLjU1NzEgNTMuOTI5OCAxMi4wMzQ2IDUzLjkyOTggMTIuNjQ1M1YyMC41ODlINTYuMzMyNlYxMi42NDUzQzU2LjMzMjYgMTIuMDM0NiA1Ni40MTQ5IDExLjU1NzEgNTYuNTY0NSAxMS4yMDMxQzU3LjAxMzIgMTAuMTQyNCA1OC4wNjI5IDkuMzk4NjEgNTkuMjg1NiA5LjM5ODYxQzYwLjUwODIgOS4zOTg2MSA2MS41NTkzIDEwLjE0MjQgNjIuMDA2NyAxMS4yMDMxQzYyLjE1NjMgMTEuNTU3MSA2Mi4yMzg2IDEyLjAzNDYgNjIuMjM4NiAxMi42NDUzVjIwLjU4OUg2NC42NDEzVjEzLjAyMjZDNjQuNjQxMyAxMS44NTQ5IDY0LjQ4MzUgMTAuODMzOSA2NC4xOTI2IDEwLjE0MzdINjQuMTk1NFoiIGZpbGw9ImJsYWNrIi8+DQo8cGF0aCBkPSJNMjEuMjY4NiA5LjA0MTg5QzE4LjU5OTYgNi4zOTQ4OSAxNC4wMzU2IDYuMzk0ODkgMTEuMzY4MSA5LjA0MTg5QzguNzIxMDYgMTEuNzEwOCA4LjcyMTA2IDE2LjI3NDggMTEuMzY4MSAxOC45NDI0QzEyLjcwMTkgMjAuMjY1MiAxNC41MTA0IDIwLjkyOCAxNi4zMTkgMjAuOTI4QzE4LjI3MTcgMjAuOTI4IDIwLjIyNDMgMjAuMjY2NiAyMS42NjUxIDE4Ljk0MjRDMjIuMDc1NCAxOC41NTk2IDIyLjQyNCAxOC4xMzU1IDIyLjcxNDkgMTcuNjg0MUwyMC41NTUgMTYuNDM2N0MyMC4zNjI5IDE2LjczNTkgMjAuMTMyNCAxNy4wMTU4IDE5Ljg2MDcgMTcuMjcxQzE4LjkwNTYgMTguMTQ3OSAxNy42MTMgMTguNTg1NiAxNi4zMjA0IDE4LjU4NTZDMTUuMTIyNCAxOC41ODU2IDEzLjkyNDUgMTguMTQ3OSAxMy4wNDA4IDE3LjI3MUMxMi40Mjg4IDE2LjY1NDkgMTIuMDM2MyAxNS44ODM3IDExLjg1MTEgMTUuMDY4NkgyMy4xNjkxQzIzLjQ4NDcgMTIuOTIyNSAyMi44NTc2IDEwLjY0MTkgMjEuMjY5OSA5LjA0MTg5SDIxLjI2ODZaTTExLjg0OTcgMTIuOTE3QzEyLjAzNSAxMi4xMDE5IDEyLjQyNzQgMTEuMzMwNyAxMy4wMzk0IDEwLjcxNDZDMTQuODA2OCA4Ljk2MDkzIDE3LjgyOTggOC45NjIzIDE5LjU5NzIgMTAuNzE0NkMyMC4yMDkyIDExLjMzMjEgMjAuNjA0NCAxMi4xMDE5IDIwLjc4NjkgMTIuOTE3SDExLjg0OTdaIiBmaWxsPSJibGFjayIvPg0KPHBhdGggZD0iTTc4LjAyMDUgOS4wNDE4OUM3NS4zNTE2IDYuMzk0ODkgNzAuNzg3NiA2LjM5NDg5IDY4LjEyIDkuMDQxODlDNjUuNDczIDExLjcxMDggNjUuNDczIDE2LjI3NDggNjguMTIgMTguOTQyNEM2OS40NTM4IDIwLjI2NTIgNzEuMjYyNCAyMC45MjggNzMuMDcxIDIwLjkyOEM3NS4wMjM2IDIwLjkyOCA3Ni45NzYzIDIwLjI2NjYgNzguNDE3MSAxOC45NDI0Qzc4LjgyNzQgMTguNTU5NiA3OS4xNzU5IDE4LjEzNTUgNzkuNDY2OCAxNy42ODQxTDc3LjMwNyAxNi40MzY3Qzc3LjExNDkgMTYuNzM1OSA3Ni44ODQzIDE3LjAxNTggNzYuNjEyNiAxNy4yNzFDNzUuNjU3NiAxOC4xNDc5IDc0LjM2NSAxOC41ODU2IDczLjA3MjMgMTguNTg1NkM3MS44NzQ0IDE4LjU4NTYgNzAuNjc2NCAxOC4xNDc5IDY5Ljc5MjcgMTcuMjcxQzY5LjE4MDcgMTYuNjU0OSA2OC43ODgzIDE1Ljg4MzcgNjguNjAzIDE1LjA2ODZINzkuOTIxQzgwLjIzNjcgMTIuOTIyNSA3OS42MDk2IDEwLjY0MTkgNzguMDIxOSA5LjA0MTg5SDc4LjAyMDVaTTY4LjYwMTcgMTIuOTE3QzY4Ljc4NjkgMTIuMTAxOSA2OS4xNzk0IDExLjMzMDcgNjkuNzkxNCAxMC43MTQ2QzcxLjU1ODggOC45NjA5MyA3NC41ODE4IDguOTYyMyA3Ni4zNDkyIDEwLjcxNDZDNzYuOTYxMiAxMS4zMzIxIDc3LjM1NjQgMTIuMTAxOSA3Ny41Mzg5IDEyLjkxN0g2OC42MDE3WiIgZmlsbD0iYmxhY2siLz4NCjwvc3ZnPg0K"
                alt=""
              />
            </div>
            {/* nav menu */}
            <div className="ml-[28px]">
              <nav>
                <ul className="flex">
                  {/* nav 1 */}
                  <div>
                    <li className="hover:text-slate-700 mx-3 group text-[14px] leading-[60px]  font-semibold cursor-pointer hover:widthExpand100  w-fit" onMouseEnter={()=>setNavVisibility('realmesmartphone')} onMouseLeave={()=>setNavVisibility('')}>
                      <div className="h-[60px] group-hover:animate-widthExpand100  group-hover:border-b-[2px] group-hover:border-solid group-hover:border-black" >
                        realme&nbsp;smartphone
                      </div>
                    </li>
                    {/* sub menu */}
                    <div id="realmesmartphone" onMouseOver={()=>setNavVisibility('realmesmartphone')} onMouseLeave={()=>setNavVisibility('')}
                      className={`w-full absolute bg-white top-[60px] ${navVisibility==='realmesmartphone'?' opacity-100 visible':' opacity-0 invisible'}  ease-in-out transition-all duration-500 left-0 flex  flex-col items-center py-5 `}
                    >
                      {/* sub menu tabs */}
                      <ul className="flex text-[14px] font-semibold gap-10 my-2">
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
                            } transition-all duration-500 absolute ${navVisibility==='realmesmartphone'?'scale-y-[0px]':'scale-y-[10px]'}`}
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
                            className={`grid grid-cols-6 justify-items-center gap-x-16 ${
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
                            <div className=""></div>
                            <div className=""></div>
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
                              className={`grid grid-cols-6 justify-items-center gap-x-16 ${
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
                                    src="https://image01.realme.net/general/20240626/1719397869413cbbca575a07a43f3a345386b6914efe0.png.webp"
                                    alt=""
                                  />
                                </div>
                                <div className=" flex flex-col gap-2">
                                  <div className="flex gap-2 items-center justify-center">
                                    <p className="bg-black text-white px-1 h-fit text-[12px] font-semibold rounded-[4px]">
                                      NEW
                                    </p>
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
                              <div className=""></div>
                              <div className=""></div>
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
                                      src="https://image01.realme.net/general/20211020/1634712100567.png.webp"
                                      alt=""
                                    />
                                  </div>
                                  <div className=" flex flex-col gap-2">
                                    <div className="flex gap-2 items-center justify-center">
                                      <p className="bg-black text-white px-1 h-fit text-[12px] font-semibold rounded-[4px]">
                                        NEW
                                      </p>
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
                                      src="https://image01.realme.net/general/20201111/1605082606635.jpg.webp"
                                      alt=""
                                    />
                                  </div>
                                  <div className=" flex flex-col gap-2">
                                    <div className="flex gap-2 items-center justify-center">
                                      <p className="bg-black text-white px-1 h-fit text-[12px] font-semibold rounded-[4px]">
                                        NEW
                                      </p>
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
                                      src="https://image01.realme.net/general/20220420/1650433679888.png.webp"
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
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* nav 2 */}
                  <div>
                    <li className="hover:text-slate-700 mx-3 group text-[14px] leading-[60px] font-semibold cursor-pointer  hover:widthExpand100  w-fit">
                      <div className="h-[60px] group-hover:animate-widthExpand100  group-hover:border-b-[2px] group-hover:border-solid group-hover:border-black">
                        narzo&nbsp;smartphone
                      </div>
                    </li>
                  </div>
                  {/* nav 3 */}
                  <div>
                    <li className="hover:text-slate-700 mx-3 group text-[14px] leading-[60px] font-semibold cursor-pointer  hover:widthExpand100  w-fit">
                      <div className="h-[60px] group-hover:animate-widthExpand100  group-hover:border-b-[2px] group-hover:border-solid group-hover:border-black">
                        Audio
                      </div>
                    </li>
                  </div>
                  {/* nav 4 */}
                  <div>
                    <li className="hover:text-slate-700 mx-3 group text-[14px] leading-[60px] font-semibold cursor-pointer  hover:widthExpand100  w-fit">
                      <div className="h-[60px] group-hover:animate-widthExpand100  group-hover:border-b-[2px] group-hover:border-solid group-hover:border-black">
                        Accessories
                      </div>
                    </li>
                  </div>
                </ul>
              </nav>
            </div>
          </div>
          {/* nav right */}
          <div className="h-[60px] flex items-center">
            <ul className="flex">
              <li className="hover:text-slate-700 text-[14px] px-3">
                <a href="">Brand</a>
              </li>
              <li className="hover:text-slate-700 text-[14px] px-3">
                <a href="">Support</a>
              </li>
              <li className="hover:text-slate-700 text-[14px] px-3">
                <a href="">Community</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
