"use client"
import React, { useState, useEffect } from 'react'

export default function Smartphones() {
    const [isActive, setIsActive] = useState('recommended')
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
            }
          },
          { threshold: 0.5 } // Trigger when 50% of the element is visible
        );
    
        const element = document.getElementById('fade-in12');
        if (element) observer.observe(element);
    
        return () => {
          if (element) observer.unobserve(element);
        };
      }, []);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible2(true);
            }
          },
          { threshold: 0.5 } // Trigger when 50% of the element is visible
        );
    
        const element = document.getElementById('fade-in13');
        if (element) observer.observe(element);
    
        return () => {
          if (element) observer.unobserve(element);
        };
      }, []);
    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible3(true);
            }
          },
          { threshold: 0.5 } // Trigger when 50% of the element is visible
        );
    
        const element = document.getElementById('fade-in14');
        if (element) observer.observe(element);
    
        return () => {
          if (element) observer.unobserve(element);
        };
      }, []);
    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible4(true);
            }
          },
          { threshold: 0.5 } // Trigger when 50% of the element is visible
        );
    
        const element = document.getElementById('fade-in15');
        if (element) observer.observe(element);
    
        return () => {
          if (element) observer.unobserve(element);
        };
      }, []);
      
  return (
    <section className='bg-[#F5F5F5] py-12 flex flex-col justify-center overflow-hidden xl:px-[120px] lg:px-[70px] sm:px-[30px] px-[20px]'>
        {/* Heading and nav */}
      <div className='flex justify-between items-center mb-7 sm:flex-row sm:gap-0 gap-4 flex-col'>
        <h1 className='sm:text-[32px] text-[25px] font-bold'>Accessories</h1>
        <ul className='flex gap-10'>
            <li onClick={()=>setIsActive('recommended')} className={`cursor-pointer text-[16px] ${isActive==='recommended'?'font-bold':'font-semibold'} `}>A<span className={`${isActive==='recommended'?'border-b-[2px] font-bold':'font-semibold'} pb-1 border-solid border-black`}>udi</span>o</li>
            <li onClick={()=>setIsActive('newlaunches')} className={`cursor-pointer text-[16px] ${isActive==='newlaunches'?'font-bold':'font-semibold'} `}>Smar<span className={`${isActive==='newlaunches'?'border-b-[2px] font-bold':'font-semibold'} pb-1 border-solid border-black`}>t Wea</span>rable</li>
        </ul>
      </div>
      {/* Smaptphons list component Recommended */}
      <div className={`md:h-[350px] h-[700px] relative overflow-hidden `}>
      <div className={`w-full h-fit transition-transform duration-300 absolute top-0 left-0 grid md:grid-cols-2 gap-y-7 gap-x-7 ${isActive==='recommended'?' translate-x-0':'-translate-x-full'}`}>
        {/* Component ---- 01 */}
        <div id="fade-in12" className={`max-w-[646px] transition-opacity duration-700 ease-in-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } h-[350px] pl-[52px] group flex justify-between pr-5 pt-12 pb-10 bg-[#F9F9F9] rounded-2xl`}>
            <div className='w-[260px] h-[220px] flex flex-col justify-between'>
                <div className='h-[116px] flex flex-col justify-between'>
                <p className='bg-[#21B9D3] rounded-full text-white text-[12px] font-semibold px-2 py-[1px] w-11 h-5'>NEW</p>
                <p className='font-bold text-[24px]'>realme Buds T110</p>
                <p className='text-[16px] text-gray-500'>Speed to Victory</p>
                </div>
                <p className='font-bold text-[16px]'>Rs.4,999</p>
            </div>
            <div className='flex justify-center items-center rounded-xl '><img className='rounded-xl group-hover:scale-105 transition-tarnsform duration-500 ease-in-out h-[220px] w-[220px]' src="https://image01.realme.net/general/20240628/1719540050662f1db6cdfd9104e5896203287689d7d2d.png.webp" alt="" /></div>
        </div>
        {/* Component ---- 02 */}
        <div id="fade-in12" className={`max-w-[646px] transition-opacity duration-700 ease-in-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } h-[350px] pl-[52px] group flex justify-between pr-5 pt-12 pb-10 bg-[#F9F9F9] rounded-2xl`}>
            <div className='w-[260px] h-[220px] flex flex-col justify-between'>
                <div className='h-[116px] flex flex-col justify-between'>
                {/* <p className='bg-[#21B9D3] rounded-full text-white text-[12px] font-semibold px-2 py-[1px] w-11 h-5'>NEW</p> */}
                <p className='font-bold text-[24px]'>realme Buds Q</p>
                <p className='text-[16px] text-gray-500'>Speed to Victory</p>
                </div>
                <p className='font-bold text-[16px]'>Rs.7,999</p>
            </div>
            <div className='flex justify-center items-center rounded-xl'><img className='rounded-xl group-hover:scale-105 transition-tarnsform duration-500 ease-in-out h-[220px] w-[220px]' src="https://image01.realme.net/general/20201111/1605080175371.jpg.webp" alt="" /></div>
        </div>

      </div>

      {/* Smaptphons list component New Launches */}
      <div className={`w-full transition-transform duration-300  absolute right-0 top-0 grid  md:grid-cols-2 h-fit gap-y-7 gap-x-7 ${isActive==='newlaunches'?'translate-x-0':' translate-x-full'}`}>
        {/* Component ---- 02 */}
        <div id="fade-in13" className={`max-w-[646px] transition-opacity duration-700 ease-in-out transform ${
        isVisible2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } h-[350px] pl-[52px] group flex justify-between pr-5 pt-12 pb-10 bg-[#F9F9F9] rounded-2xl`}>
            <div className='w-[260px] h-[220px] flex flex-col justify-between'>
                <div className='h-[116px] flex flex-col justify-between'>
                {/* <p className='bg-[#21B9D3] rounded-full text-white text-[12px] font-semibold px-2 py-[1px] w-11 h-5'>NEW</p> */}
                <p className='font-bold text-[24px]'>realme band 2</p>
                <p className='text-[16px] text-gray-500'>Speed to Victory</p>
                </div>
                <p className='font-bold text-[16px]'>Rs.9,499</p>
            </div>
            <div className='flex justify-center items-center rounded-xl'><img className='rounded-xl group-hover:scale-105 transition-tarnsform duration-500 ease-in-out h-[220px] w-[220px]' src="https://image01.realme.net/general/20220427/1651093870587.png.webp" alt="" /></div>
        </div>
        {/* Component ---- 01 */}
        <div id="fade-in13" className={`max-w-[646px] transition-opacity duration-700 ease-in-out transform ${
        isVisible2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } h-[350px] pl-[52px] group flex justify-between pr-5 pt-12 pb-10 bg-[#F9F9F9] rounded-2xl`}>
            <div className='w-[260px] h-[220px] flex flex-col justify-between'>
                <div className='h-[116px] flex flex-col justify-between'>
                {/* <p className='bg-[#21B9D3] rounded-full text-white text-[12px] font-semibold px-2 py-[1px] w-11 h-5'>NEW</p> */}
                <p className='font-bold text-[24px]'>realme Watch S</p>
                <p className='text-[16px] text-gray-500'>Speed to Victory</p>
                </div>
                <p className='font-bold text-[16px]'>Rs.21,999</p>
            </div>
            <div className='flex justify-center items-center rounded-xl'><img className='rounded-xl group-hover:scale-105 transition-tarnsform duration-500 ease-in-out h-[220px] w-[220px]' src="https://image01.realme.net/general/20220427/1651094035552.jpg.webp" alt="" /></div>
        </div>


      </div>
      {/* pics------- */}
      </div>
      <div className='flex gap-3 md:flex-row flex-col'>
        {/* Component ---- 01 */}
        <div id="fade-in14" className={`md:w-[650px] max-w-[650px]  transition-opacity duration-700 ease-in-out transform ${
        isVisible3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } h-[350px] flex justify-center pt-12 rounded-tl-2xl rounded-tr-2xl overflow-hidden`}>
        <div className='hover:scale-105 scale-100 absolute inset-0 bg-center transition-transform duration-300 bg-cover bg-[url(https://image01.realme.net/general/20220718/1658136364941.jpg.webp)] '></div>
            <div className='h-[116px] flex flex-col items-center z-10'>
                <p className='font-bold text-white text-[24px]'>realme 9</p>
                <p className='text-[16px] text-gray-100'>108MP.ALL DAY CLARITY</p>
                </div>
        </div>
        {/* Component ---- 01 */}
        <div id="fade-in15" className={`md:w-[650px] max-w-[650px] transition-opacity duration-700 ease-in-out transform ${
        isVisible4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } h-[380px] flex justify-center pt-12  rounded-2xl overflow-hidden`}>
        <div className='hover:scale-105 scale-100 absolute inset-0 xl:bg-center bg-right  transition-transform duration-300 bg-cover bg-[url(https://image01.realme.net/general/20220526/1653532499773.jpg.webp)] '></div>
        </div>
      </div>
    </section>
  )
}
