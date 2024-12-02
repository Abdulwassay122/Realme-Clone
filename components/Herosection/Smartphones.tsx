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
    
        const element = document.getElementById('fade-in');
        if (element) observer.observe(element);
    
        return () => {
          if (element) observer.unobserve(element);
        };
      }, []);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);
    const [isVisible5, setIsVisible5] = useState(false);
    const [isVisible6, setIsVisible6] = useState(false);
    const [isVisible7, setIsVisible7] = useState(false);
    const [isVisible8, setIsVisible8] = useState(false);
    const [isVisible9, setIsVisible9] = useState(false);
    const [isVisible10, setIsVisible10] = useState(false);
    const [isVisible11, setIsVisible11] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible2(true);
            }
          },
          { threshold: 0.5 } // Trigger when 50% of the element is visible
        );
    
        const element = document.getElementById('fade-in2');
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
    
        const element = document.getElementById('fade-in3');
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
    
        const element = document.getElementById('fade-in4');
        if (element) observer.observe(element);
    
        return () => {
          if (element) observer.unobserve(element);
        };
      }, []);
    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible5(true);
            }
          },
          { threshold: 0.5 } // Trigger when 50% of the element is visible
        );
    
        const element = document.getElementById('fade-in5');
        if (element) observer.observe(element);
    
        return () => {
          if (element) observer.unobserve(element);
        };
      }, []);
    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible6(true);
            }
          },
          { threshold: 0.5 } // Trigger when 50% of the element is visible
        );
    
        const element = document.getElementById('fade-in6');
        if (element) observer.observe(element);
    
        return () => {
          if (element) observer.unobserve(element);
        };
      }, []);
    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible7(true);
            }
          },
          { threshold: 0.5 } // Trigger when 50% of the element is visible
        );
    
        const element = document.getElementById('fade-in7');
        if (element) observer.observe(element);
    
        return () => {
          if (element) observer.unobserve(element);
        };
      }, []);
    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible8(true);
            }
          },
          { threshold: 0.5 } // Trigger when 50% of the element is visible
        );
    
        const element = document.getElementById('fade-in8');
        if (element) observer.observe(element);
    
        return () => {
          if (element) observer.unobserve(element);
        };
      }, []);
    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible9(true);
            }
          },
          { threshold: 0.5 } // Trigger when 50% of the element is visible
        );
    
        const element = document.getElementById('fade-in9');
        if (element) observer.observe(element);
    
        return () => {
          if (element) observer.unobserve(element);
        };
      }, []);
    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible10(true);
            }
          },
          { threshold: 0.5 } // Trigger when 50% of the element is visible
        );
    
        const element = document.getElementById('fade-in10');
        if (element) observer.observe(element);
    
        return () => {
          if (element) observer.unobserve(element);
        };
      }, []);
    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible11(true);
            }
          },
          { threshold: 0.5 } // Trigger when 50% of the element is visible
        );
    
        const element = document.getElementById('fade-in11');
        if (element) observer.observe(element);
    
        return () => {
          if (element) observer.unobserve(element);
        };
      }, []);
      
  return (
    <section className='bg-[#F5F5F5] py-12 px[120px] flex flex-col gap-7 xl:px-[120px] lg:px-[70px] sm:px-[30px] px-[20px] overflow-hidden '>
        {/* Heading and nav */}
      <div className='flex justify-between items-center sm:flex-row sm:gap-0 gap-4 flex-col'>
        <h1 className='sm:text-[32px] text-[25px] font-bold'>SmartPhones</h1>
        <ul className='flex gap-10'>
            <li onClick={()=>setIsActive('recommended')} className={`cursor-pointer text-[16px] ${isActive==='recommended'?'font-bold':'font-semibold'} `}>Reco<span className={`${isActive==='recommended'?'border-b-[2px] font-bold':'font-semibold'} pb-1 border-solid border-black`}>mme</span>nded</li>
            <li onClick={()=>setIsActive('newlaunches')} className={`cursor-pointer text-[16px] ${isActive==='newlaunches'?'font-bold':'font-semibold'} `}>New <span className={`${isActive==='newlaunches'?'border-b-[2px] font-bold':'font-semibold'} pb-1 border-solid border-black`}>Lau</span>nches</li>
        </ul>
      </div>

      <div className={`${isActive==='recommended'?'md:h-[2240px] h-[4480px]':'md:h-[1862px] h-[3374px]'} relative overflow-hidden`}>
      {/* Smaptphons list component Recommended */}
      <div className={`w-full h-fit transition-transform duration-300 absolute top-0 left-0 grid md:grid-cols-2 gap-y-7 gap-x-7 ${isActive==='recommended'?' translate-x-0':'-translate-x-full'}`}>
        {/* Component ---- 01 */}
        <div id="fade-in" className={`max-w-[646px] transition-opacity duration-700 ease-in-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } h-[350px] pl-[52px] group flex justify-between items-center pr-5 pt-12 pb-10 bg-[#F9F9F9] rounded-2xl`}>
            <div className='w-[200px] h-[220px] flex flex-col justify-between'>
                <div className='h-[116px] flex flex-col justify-between'>
                <p className='bg-[#21B9D3] rounded-full text-white text-[12px] font-semibold px-2 py-[1px] w-11 h-5'>NEW</p>
                <p className='font-bold text-[24px]'>realme 13+ 5G</p>
                <p className='text-[16px] text-gray-500'>Speed to Victory</p>
                </div>
                <p className='font-bold text-[16px]'>Rs.89,999</p>
            </div>
            <div className='flex justify-center items-center rounded-xl '><img className='rounded-xl group-hover:scale-105 transition-tarnsform duration-500 ease-in-out h-[220px] w-[220px]' src="https://image01.realme.net/general/20241108/1731062061605d960daec82634da8ae53a2b5bba2b081.png.webp" alt="" /></div>
        </div>
        {/* Component ---- 02 */}
        <div id="fade-in" className={`max-w-[646px] transition-opacity duration-700 ease-in-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } h-[350px] pl-[52px] group flex justify-between items-center  pr-5 pt-12 pb-10 bg-[#F9F9F9] rounded-2xl`}>
            <div className='w-[200px] h-[220px] flex flex-col justify-between'>
                <div className='h-[116px] flex flex-col justify-between'>
                <p className='bg-[#21B9D3] rounded-full text-white text-[12px] font-semibold px-2 py-[1px] w-11 h-5'>NEW</p>
                <p className='font-bold text-[24px]'>realme 13+ 5G</p>
                <p className='text-[16px] text-gray-500'>Speed to Victory</p>
                </div>
                <p className='font-bold text-[16px]'>Rs.89,999</p>
            </div>
            <div className='flex justify-center items-center rounded-xl'><img className='rounded-xl group-hover:scale-105 transition-tarnsform duration-500 ease-in-out h-[220px] w-[220px]' src="https://image01.realme.net/general/20240930/1727689953962fe5890a00bc349ef8b4deafa584911a9.png.webp" alt="" /></div>
        </div>
        {/* Component ---- 03 */}
        <div id="fade-in2" className={`max-w-[646px] transition-opacity duration-700 ease-in-out transform ${
        isVisible2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } h-[350px] pl-[52px] group flex justify-between items-center pr-5 pt-12 pb-10 bg-[#F9F9F9] rounded-2xl`}>
            <div className='w-[200px] h-[220px] flex flex-col justify-between'>
                <div className='h-[116px] flex flex-col justify-between'>
                <p className='bg-[#21B9D3] rounded-full text-white text-[12px] font-semibold px-2 py-[1px] w-11 h-5'>NEW</p>
                <p className='font-bold text-[24px]'>realme 13+ 5G</p>
                <p className='text-[16px] text-gray-500'>Speed to Victory</p>
                </div>
                <p className='font-bold text-[16px]'>Rs.89,999</p>
            </div>
            <div className='flex justify-center items-center rounded-xl'><img className='rounded-xl group-hover:scale-105 transition-tarnsform duration-500 ease-in-out h-[220px] w-[220px]' src="https://image01.realme.net/general/20240919/17267273214814cc35277c25042d580c622fec0dad738.png.webp" alt="" /></div>
        </div>
        {/* Component ---- 04 */}
        <div id="fade-in2" className={`max-w-[646px] transition-opacity duration-700 ease-in-out transform ${
        isVisible2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } h-[350px] pl-[52px] group flex justify-between items-center pr-5 pt-12 pb-10 bg-[#F9F9F9] rounded-2xl`}>
            <div className='w-[200px] h-[220px] flex flex-col justify-between'>
                <div className='h-[116px] flex flex-col justify-between'>
                <p className='bg-[#21B9D3] rounded-full text-white text-[12px] font-semibold px-2 py-[1px] w-11 h-5'>NEW</p>
                <p className='font-bold text-[24px]'>realme 13+ 5G</p>
                <p className='text-[16px] text-gray-500'>Speed to Victory</p>
                </div>
                <p className='font-bold text-[16px]'>Rs.89,999</p>
            </div>
            <div className='flex justify-center items-center rounded-xl'><img className='rounded-xl group-hover:scale-105 transition-tarnsform duration-500 ease-in-out h-[220px] w-[220px]' src="https://image01.realme.net/general/20240827/17247517057780f136750f9ab445193022ca17ab4b885.png.webp" alt="" /></div>
        </div>
        {/* Component ---- 05 */}
        <div id="fade-in3" className={`max-w-[646px] transition-opacity duration-700 ease-in-out transform ${
        isVisible3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } h-[350px] pl-[52px] group flex justify-between items-center pr-5 pt-12 pb-10 bg-[#F9F9F9] rounded-2xl`}>
            <div className='w-[200px] h-[220px] flex flex-col justify-between'>
                <div className='h-[116px] flex flex-col justify-between'>
                <p className='bg-[#21B9D3] rounded-full text-white text-[12px] font-semibold px-2 py-[1px] w-11 h-5'>NEW</p>
                <p className='font-bold text-[24px]'>realme 13+ 5G</p>
                <p className='text-[16px] text-gray-500'>Speed to Victory</p>
                </div>
                <p className='font-bold text-[16px]'>Rs.89,999</p>
            </div>
            <div className='flex justify-center items-center rounded-xl'><img className='rounded-xl group-hover:scale-105 transition-tarnsform duration-500 ease-in-out h-[220px] w-[220px]' src="https://image01.realme.net/general/20240726/17219881569684931245943754b279da88be96c1ba769.png.webp" alt="" /></div>
        </div>
        {/* Component ---- 06 */}
        <div id="fade-in3" className={`max-w-[646px] transition-opacity duration-700 ease-in-out transform ${
        isVisible3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } h-[350px] pl-[52px] group flex justify-between items-center pr-5 pt-12 pb-10 bg-[#F9F9F9] rounded-2xl`}>
            <div className='w-[200px] h-[220px] flex flex-col justify-between'>
                <div className='h-[116px] flex flex-col justify-between'>
                <p className='bg-[#21B9D3] rounded-full text-white text-[12px] font-semibold px-2 py-[1px] w-11 h-5'>NEW</p>
                <p className='font-bold text-[24px]'>realme 13+ 5G</p>
                <p className='text-[16px] text-gray-500'>Speed to Victory</p>
                </div>
                <p className='font-bold text-[16px]'>Rs.89,999</p>
            </div>
            <div className='flex justify-center items-center rounded-xl'><img className='rounded-xl group-hover:scale-105 transition-tarnsform duration-500 ease-in-out h-[220px] w-[220px]' src="https://image01.realme.net/general/20240624/171922460925609665c170ea145d0a40db9866d4a1d51.png.webp" alt="" /></div>
        </div>
        {/* Component ---- 07 */}
        <div id="fade-in4" className={`max-w-[646px] transition-opacity duration-700 ease-in-out transform ${
        isVisible4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } h-[350px] pl-[52px] group flex justify-between items-center pr-5 pt-12 pb-10 bg-[#F9F9F9] rounded-2xl`}>
            <div className='w-[200px] h-[220px] flex flex-col justify-between'>
                <div className='h-[116px] flex flex-col justify-between'>
                <p className='bg-[#21B9D3] rounded-full text-white text-[12px] font-semibold px-2 py-[1px] w-11 h-5'>NEW</p>
                <p className='font-bold text-[24px]'>realme 13+ 5G</p>
                <p className='text-[16px] text-gray-500'>Speed to Victory</p>
                </div>
                <p className='font-bold text-[16px]'>Rs.89,999</p>
            </div>
            <div className='flex justify-center items-center rounded-xl'><img className='rounded-xl group-hover:scale-105 transition-tarnsform duration-500 ease-in-out h-[220px] w-[220px]' src="https://image01.realme.net/general/20240620/1718869504893402543bcb87c4708aedfe7ce612e8725.png.webp" alt="" /></div>
        </div>
        {/* Component ---- 08 */}
        <div id="fade-in4" className={`max-w-[646px] transition-opacity duration-700 ease-in-out transform ${
        isVisible4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } h-[350px] pl-[52px] group flex justify-between items-center pr-5 pt-12 pb-10 bg-[#F9F9F9] rounded-2xl`}>
            <div className='w-[200px] h-[220px] flex flex-col justify-between'>
                <div className='h-[116px] flex flex-col justify-between'>
                <p className='bg-[#21B9D3] rounded-full text-white text-[12px] font-semibold px-2 py-[1px] w-11 h-5'>NEW</p>
                <p className='font-bold text-[24px]'>realme 13+ 5G</p>
                <p className='text-[16px] text-gray-500'>Speed to Victory</p>
                </div>
                <p className='font-bold text-[16px]'>Rs.89,999</p>
            </div>
            <div className='flex justify-center items-center rounded-xl'><img className='rounded-xl group-hover:scale-105 transition-tarnsform duration-500 ease-in-out h-[220px] w-[220px]' src="https://image01.realme.net/general/20240607/1717742184050e38a613e33f146b49dfa47720aea45cf.png.webp" alt="" /></div>
        </div>
        {/* Component ---- 09 */}
        <div id="fade-in5" className={`max-w-[646px] transition-opacity duration-700 ease-in-out transform ${
        isVisible5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } h-[350px] pl-[52px] group flex justify-between items-center pr-5 pt-12 pb-10 bg-[#F9F9F9] rounded-2xl`}>
            <div className='w-[200px] h-[220px] flex flex-col justify-between'>
                <div className='h-[116px] flex flex-col justify-between'>
                <p className='bg-[#21B9D3] rounded-full text-white text-[12px] font-semibold px-2 py-[1px] w-11 h-5'>NEW</p>
                <p className='font-bold text-[24px]'>realme 13+ 5G</p>
                <p className='text-[16px] text-gray-500'>Speed to Victory</p>
                </div>
                <p className='font-bold text-[16px]'>Rs.89,999</p>
            </div>
            <div className='flex justify-center items-center rounded-xl'><img className='rounded-xl group-hover:scale-105 transition-tarnsform duration-500 ease-in-out h-[220px] w-[220px]' src="https://image01.realme.net/general/20240221/170850139998146c2183ef4824e00ab6ed688ebc55037.png.webp" alt="" /></div>
        </div>
        {/* Component ---- 010 */}
        <div id="fade-in5" className={`max-w-[646px] transition-opacity duration-700 ease-in-out transform ${
        isVisible5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } h-[350px] pl-[52px] group flex justify-between items-center pr-5 pt-12 pb-10 bg-[#F9F9F9] rounded-2xl`}>
            <div className='w-[200px] h-[220px] flex flex-col justify-between'>
                <div className='h-[116px] flex flex-col justify-between'>
                <p className='bg-[#21B9D3] rounded-full text-white text-[12px] font-semibold px-2 py-[1px] w-11 h-5'>NEW</p>
                <p className='font-bold text-[24px]'>realme 13+ 5G</p>
                <p className='text-[16px] text-gray-500'>Speed to Victory</p>
                </div>
                <p className='font-bold text-[16px]'>Rs.89,999</p>
            </div>
            <div className='flex justify-center items-center rounded-xl'><img className='rounded-xl group-hover:scale-105 transition-tarnsform duration-500 ease-in-out h-[220px] w-[220px]' src="https://image01.realme.net/general/20240105/1704419834105be51d94716d4469084d9ba9b1a904eb6.png.webp" alt="" /></div>
        </div>
        {/* Component ---- 011 */}
        <div id="fade-in6" className={`max-w-[646px] transition-opacity duration-700 ease-in-out transform ${
        isVisible6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } h-[350px] pl-[52px] group flex justify-between items-center pr-5 pt-12 pb-10 bg-[#F9F9F9] rounded-2xl`}>
            <div className='w-[200px] h-[220px] flex flex-col justify-between'>
                <div className='h-[116px] flex flex-col justify-between'>
                <p className='bg-[#21B9D3] rounded-full text-white text-[12px] font-semibold px-2 py-[1px] w-11 h-5'>NEW</p>
                <p className='font-bold text-[24px]'>realme 13+ 5G</p>
                <p className='text-[16px] text-gray-500'>Speed to Victory</p>
                </div>
                <p className='font-bold text-[16px]'>Rs.89,999</p>
            </div>
            <div className='flex justify-center items-center rounded-xl'><img className='rounded-xl group-hover:scale-105 transition-tarnsform duration-500 ease-in-out h-[220px] w-[220px]' src="https://image01.realme.net/general/20231129/17012403962026a15564d103748a6931a17233c223eb7.png.webp" alt="" /></div>
        </div>
        {/* Component ---- 12 */}
        <div id="fade-in6" className={`max-w-[646px] transition-opacity duration-700 ease-in-out transform ${
        isVisible6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } h-[350px] pl-[52px] group flex justify-between items-center pr-5 pt-12 pb-10 bg-[#F9F9F9] rounded-2xl`}>
            <div className='w-[200px] h-[220px] flex flex-col justify-between'>
                <div className='h-[116px] flex flex-col justify-between'>
                <p className='bg-[#21B9D3] rounded-full text-white text-[12px] font-semibold px-2 py-[1px] w-11 h-5'>NEW</p>
                <p className='font-bold text-[24px]'>realme 13+ 5G</p>
                <p className='text-[16px] text-gray-500'>Speed to Victory</p>
                </div>
                <p className='font-bold text-[16px]'>Rs.89,999</p>
            </div>
            <div className='flex justify-center items-center rounded-xl'><img className='rounded-xl group-hover:scale-105 transition-tarnsform duration-500 ease-in-out h-[220px] w-[220px]' src="https://image01.realme.net/general/20231110/16995974439236a4ab0fa674b4000a428b37e7e5eb87e.png.webp" alt="" /></div>
        </div>
      </div>

      {/* Smaptphons list component New Launches */}
      <div className={`w-full h-fit transition-transform duration-300 absolute top-0 right-0 grid md:grid-cols-2 gap-y-7 gap-x-7 ${isActive==='newlaunches'?'-translate-x-0':' translate-x-full'} `}>
        {/* Component ---- 02 */}
        <div id="fade-in7" className={`max-w-[646px] transition-opacity duration-700 ease-in-out transform ${
        isVisible7 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } h-[350px] pl-[52px] group flex justify-between items-center pr-5 pt-12 pb-10 bg-[#F9F9F9] rounded-2xl`}>
            <div className='w-[200px] h-[220px] flex flex-col justify-between'>
                <div className='h-[116px] flex flex-col justify-between'>
                <p className='bg-[#21B9D3] rounded-full text-white text-[12px] font-semibold px-2 py-[1px] w-11 h-5'>NEW</p>
                <p className='font-bold text-[24px]'>realme 13+ 5G</p>
                <p className='text-[16px] text-gray-500'>Speed to Victory</p>
                </div>
                <p className='font-bold text-[16px]'>Rs.89,999</p>
            </div>
            <div className='flex justify-center items-center rounded-xl'><img className='rounded-xl group-hover:scale-105 transition-tarnsform duration-500 ease-in-out h-[220px] w-[220px]' src="https://image01.realme.net/general/20240930/1727689953962fe5890a00bc349ef8b4deafa584911a9.png.webp" alt="" /></div>
        </div>
        {/* Component ---- 01 */}
        <div id="fade-in7" className={`max-w-[646px] transition-opacity duration-700 ease-in-out transform ${
        isVisible7 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } h-[350px] pl-[52px] group flex justify-between items-center pr-5 pt-12 pb-10 bg-[#F9F9F9] rounded-2xl`}>
            <div className='w-[200px] h-[220px] flex flex-col justify-between'>
                <div className='h-[116px] flex flex-col justify-between'>
                <p className='bg-[#21B9D3] rounded-full text-white text-[12px] font-semibold px-2 py-[1px] w-11 h-5'>NEW</p>
                <p className='font-bold text-[24px]'>realme 13+ 5G</p>
                <p className='text-[16px] text-gray-500'>Speed to Victory</p>
                </div>
                <p className='font-bold text-[16px]'>Rs.89,999</p>
            </div>
            <div className='flex justify-center items-center rounded-xl'><img className='rounded-xl group-hover:scale-105 transition-tarnsform duration-500 ease-in-out h-[220px] w-[220px]' src="https://image01.realme.net/general/20240105/17044198886423e2b745fa57b4d0a8942b6b6927904e0.png.webp" alt="" /></div>
        </div>
        {/* Component ---- 03 */}
        <div id="fade-in8" className={`max-w-[646px] transition-opacity duration-700 ease-in-out transform ${
        isVisible8 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } h-[350px] pl-[52px] group flex justify-between items-center pr-5 pt-12 pb-10 bg-[#F9F9F9] rounded-2xl`}>
            <div className='w-[200px] h-[220px] flex flex-col justify-between'>
                <div className='h-[116px] flex flex-col justify-between'>
                <p className='bg-[#21B9D3] rounded-full text-white text-[12px] font-semibold px-2 py-[1px] w-11 h-5'>NEW</p>
                <p className='font-bold text-[24px]'>realme 13+ 5G</p>
                <p className='text-[16px] text-gray-500'>Speed to Victory</p>
                </div>
                <p className='font-bold text-[16px]'>Rs.89,999</p>
            </div>
            <div className='flex justify-center items-center rounded-xl'><img className='rounded-xl group-hover:scale-105 transition-tarnsform duration-500 ease-in-out h-[220px] w-[220px]' src="https://image01.realme.net/general/20231129/17012404475245a2bf9a5f3c14a5689f7def110970a81.png.webp" alt="" /></div>
        </div>
        {/* Component ---- 04 */}
        <div id="fade-in8" className={`max-w-[646px] transition-opacity duration-700 ease-in-out transform ${
        isVisible8 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } h-[350px] pl-[52px] group flex justify-between items-center pr-5 pt-12 pb-10 bg-[#F9F9F9] rounded-2xl`}>
            <div className='w-[200px] h-[220px] flex flex-col justify-between'>
                <div className='h-[116px] flex flex-col justify-between'>
                <p className='bg-[#21B9D3] rounded-full text-white text-[12px] font-semibold px-2 py-[1px] w-11 h-5'>NEW</p>
                <p className='font-bold text-[24px]'>realme 13+ 5G</p>
                <p className='text-[16px] text-gray-500'>Speed to Victory</p>
                </div>
                <p className='font-bold text-[16px]'>Rs.89,999</p>
            </div>
            <div className='flex justify-center items-center rounded-xl'><img className='rounded-xl group-hover:scale-105 transition-tarnsform duration-500 ease-in-out h-[220px] w-[220px]' src="https://image01.realme.net/general/20231110/16995981123170db0acafee0c45e0bdd6dd22df816f2f.png.webp" alt="" /></div>
        </div>
        {/* Component ---- 05 */}
        <div id="fade-in9" className={`max-w-[646px] transition-opacity duration-700 ease-in-out transform ${
        isVisible9 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } h-[350px] pl-[52px] group flex justify-between items-center pr-5 pt-12 pb-10 bg-[#F9F9F9] rounded-2xl`}>
            <div className='w-[200px] h-[220px] flex flex-col justify-between'>
                <div className='h-[116px] flex flex-col justify-between'>
                <p className='bg-[#21B9D3] rounded-full text-white text-[12px] font-semibold px-2 py-[1px] w-11 h-5'>NEW</p>
                <p className='font-bold text-[24px]'>realme 13+ 5G</p>
                <p className='text-[16px] text-gray-500'>Speed to Victory</p>
                </div>
                <p className='font-bold text-[16px]'>Rs.89,999</p>
            </div>
            <div className='flex justify-center items-center rounded-xl'><img className='rounded-xl group-hover:scale-105 transition-tarnsform duration-500 ease-in-out h-[220px] w-[220px]' src="https://image01.realme.net/general/20220718/1658135433914.png.webp" alt="" /></div>
        </div>
        {/* Component ---- 06 */}
        <div id="fade-in9" className={`max-w-[646px] transition-opacity duration-700 ease-in-out transform ${
        isVisible9 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } h-[350px] pl-[52px] group flex justify-between items-center pr-5 pt-12 pb-10 bg-[#F9F9F9] rounded-2xl`}>
            <div className='w-[200px] h-[220px] flex flex-col justify-between'>
                <div className='h-[116px] flex flex-col justify-between'>
                <p className='bg-[#21B9D3] rounded-full text-white text-[12px] font-semibold px-2 py-[1px] w-11 h-5'>NEW</p>
                <p className='font-bold text-[24px]'>realme 13+ 5G</p>
                <p className='text-[16px] text-gray-500'>Speed to Victory</p>
                </div>
                <p className='font-bold text-[16px]'>Rs.89,999</p>
            </div>
            <div className='flex justify-center items-center rounded-xl'><img className='rounded-xl group-hover:scale-105 transition-tarnsform duration-500 ease-in-out h-[220px] w-[220px]' src="https://image01.realme.net/general/20220517/1652791647269.png.webp" alt="" /></div>
        </div>
        {/* Component ---- 07 */}
        <div id="fade-in10" className={`max-w-[646px] transition-opacity duration-700 ease-in-out transform ${
        isVisible10 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } h-[350px] pl-[52px] group flex justify-between items-center pr-5 pt-12 pb-10 bg-[#F9F9F9] rounded-2xl`}>
            <div className='w-[200px] h-[220px] flex flex-col justify-between'>
                <div className='h-[116px] flex flex-col justify-between'>
                <p className='bg-[#21B9D3] rounded-full text-white text-[12px] font-semibold px-2 py-[1px] w-11 h-5'>NEW</p>
                <p className='font-bold text-[24px]'>realme 13+ 5G</p>
                <p className='text-[16px] text-gray-500'>Speed to Victory</p>
                </div>
                <p className='font-bold text-[16px]'>Rs.89,999</p>
            </div>
            <div className='flex justify-center items-center rounded-xl'><img className='rounded-xl group-hover:scale-105 transition-tarnsform duration-500 ease-in-out h-[220px] w-[220px]' src="https://image01.realme.net/general/20220420/1650433630016.png.webp" alt="" /></div>
        </div>
        {/* Component ---- 08 */}
        <div id="fade-in10" className={`max-w-[646px] transition-opacity duration-700 ease-in-out transform ${
        isVisible10 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } h-[350px] pl-[52px] group flex justify-between items-center pr-5 pt-12 pb-10 bg-[#F9F9F9] rounded-2xl`}>
            <div className='w-[200px] h-[220px] flex flex-col justify-between'>
                <div className='h-[116px] flex flex-col justify-between'>
                <p className='bg-[#21B9D3] rounded-full text-white text-[12px] font-semibold px-2 py-[1px] w-11 h-5'>NEW</p>
                <p className='font-bold text-[24px]'>realme 13+ 5G</p>
                <p className='text-[16px] text-gray-500'>Speed to Victory</p>
                </div>
                <p className='font-bold text-[16px]'>Rs.89,999</p>
            </div>
            <div className='flex justify-center items-center rounded-xl'><img className='rounded-xl group-hover:scale-105 transition-tarnsform duration-500 ease-in-out h-[220px] w-[220px]' src="https://image01.realme.net/general/20220210/1644485666722.png.webp" alt="" /></div>
        </div>
        {/* Component ---- 09 */}
        <div id="fade-in11" className={`max-w-[646px] transition-opacity duration-700 ease-in-out transform ${
        isVisible11 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } h-[350px] pl-[52px] group flex justify-between items-center pr-5 pt-12 pb-10 bg-[#F9F9F9] rounded-2xl`}>
            <div className='w-[200px] h-[220px] flex flex-col justify-between'>
                <div className='h-[116px] flex flex-col justify-between'>
                <p className='bg-[#21B9D3] rounded-full text-white text-[12px] font-semibold px-2 py-[1px] w-11 h-5'>NEW</p>
                <p className='font-bold text-[24px]'>realme 13+ 5G</p>
                <p className='text-[16px] text-gray-500'>Speed to Victory</p>
                </div>
                <p className='font-bold text-[16px]'>Rs.89,999</p>
            </div>
            <div className='flex justify-center items-center rounded-xl'><img className='rounded-xl group-hover:scale-105 transition-tarnsform duration-500 ease-in-out h-[220px] w-[220px]' src="https://image01.realme.net/general/20220210/1644485729646.png.webp" alt="" /></div>
        </div>

      </div>
      </div>
    </section>
  )
}
