"use client";
import React, { useState } from "react";
import Submenu from "./Submenu";
import Submenu2 from "./Submenu2";
import Submenu3 from "./Submenu3";
import Submenu4 from "./Submenu4";

export default function Navbar() {
  const [navVisibility, setNavVisibility] = useState("");

  return (
    <header className=" text-black sticky top-0 z-50 opacity-[0.98] ">
      <div className=" bg-[#ffffff] opacity-100 h-[60px] border-b border-solid border-slate-100">
        <div className="xl:mx-[135.5px] md:mx-[100px] mx-[50px] flex h-full items-center justify-between">
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
            <div className="ml-[28px] md:block hidden">
              <nav>
                <ul className="flex">
                  {/* nav 1 */}
                  <div>
                    <li className="hover:text-slate-700 mx-3 group text-[14px] leading-[60px]  font-semibold cursor-pointer  w-fit" onMouseEnter={()=>setNavVisibility('realmesmartphone')} onMouseLeave={()=>setNavVisibility('')}>
                      <div className="h-[60px] group-hover:animate-widthExpand100  group-hover:border-b-[2px] group-hover:border-solid group-hover:border-black" >
                        realme&nbsp;smartphone
                      </div>
                    </li>
                    {/* sub menu */}
                    <div id="realmesmartphone" onMouseEnter={()=>setNavVisibility('realmesmartphone')} onMouseLeave={()=>setNavVisibility('')}
                      className={`w-full absolute bg-white top-[60px] ${navVisibility==='realmesmartphone'?' opacity-100 visible ':' opacity-0 invisible'}  ease-in-out transition-all duration-500 left-0 flex  flex-col items-center py-5 `}
                    >
                      {/* sub menu tabs */}
                      <Submenu/>
                    </div>
                  </div>

                  {/* nav 2 */}
                  <div>
                    <li className="hover:text-slate-700 mx-3 group text-[14px] leading-[60px] font-semibold cursor-pointer  hover:widthExpand100  w-fit" onMouseEnter={()=>setNavVisibility('narzosmartphone')} onMouseLeave={()=>setNavVisibility('')}>
                      <div className="h-[60px] group-hover:animate-widthExpand100  group-hover:border-b-[2px] group-hover:border-solid group-hover:border-black">
                        narzo&nbsp;smartphone
                      </div>
                    </li>
                    {/* sub menu */}
                    <div id="realmesmartphone" onMouseOver={()=>setNavVisibility('narzosmartphone')} onMouseLeave={()=>setNavVisibility('')}
                      className={`w-full absolute bg-white top-[60px] ${navVisibility==='narzosmartphone'?' opacity-100 visible ':' opacity-0 invisible'}  ease-in-out transition-all duration-500 left-0 flex  flex-col items-center py-5 `}
                    >
                      {/* sub menu tabs */}
                      <Submenu2/>
                    </div>
                  </div>
                  {/* nav 3 */}
                  <div>
                    <li className="hover:text-slate-700 mx-3 group text-[14px] leading-[60px] font-semibold cursor-pointer  hover:widthExpand100  w-fit" onMouseEnter={()=>setNavVisibility('Audio')} onMouseLeave={()=>setNavVisibility('')}>
                      <div className="h-[60px] group-hover:animate-widthExpand100  group-hover:border-b-[2px] group-hover:border-solid group-hover:border-black">
                        Audio
                      </div>
                    </li>
                    <div id="realmesmartphone" onMouseOver={()=>setNavVisibility('Audio')} onMouseLeave={()=>setNavVisibility('')}
                      className={`w-full absolute bg-white top-[60px] ${navVisibility==='Audio'?' opacity-100 visible ':' opacity-0 invisible'}  ease-in-out transition-all duration-500 left-0 flex  flex-col items-center py-5 `}
                    >
                      {/* sub menu tabs */}
                      <Submenu3/>
                    </div>
                  </div>
                  {/* nav 4 */}
                  <div>
                    <li className="hover:text-slate-700 mx-3 group text-[14px] leading-[60px] font-semibold cursor-pointer  hover:widthExpand100  w-fit" onMouseEnter={()=>setNavVisibility('Accessories')} onMouseLeave={()=>setNavVisibility('')}>
                      <div className="h-[60px] group-hover:animate-widthExpand100  group-hover:border-b-[2px] group-hover:border-solid group-hover:border-black">
                        Accessories
                      </div>
                    </li>
                    <div id="realmesmartphone" onMouseEnter={()=>setNavVisibility('Accessories')} onMouseLeave={()=>setNavVisibility('')}
                      className={`w-full absolute bg-white top-[60px] ${navVisibility==='Accessories'?' opacity-100 visible ':' opacity-0 invisible'}  ease-in-out transition-all duration-500 left-0 flex  flex-col items-center py-5 `}
                    >
                      {/* sub menu tabs */}
                      <Submenu4/>
                    </div>
                  </div>
                </ul>
              </nav>
            </div>
          </div>
          {/* nav right */}
          <div className="md:hidden block">
              <img className="h-6" src="https://img.icons8.com/?size=100&id=8113&format=png&color=000000" alt="" />
          </div>
          <div className="h-[60px] lg:flex items-center hidden">
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
