import React from 'react'

export default function Footer() {
  return (
    <section className='h-full md:px-[126px] sm:px-[80px] px-[40px] pt-[50px] lg:pb-[75px] pb-[50px] bg-[#222222]'>
        <div className='flex gap-10 lg:flex-row flex-col'>
        <div className='lg:hidden flex flex-col gap-3 items-start'>
              <p className='text-white font-bold text-[24px] '>04238048018</p>
              <span>
              <p className='text-[#ffffff99] text-xs '>09:30 - 18:00， MON - SAT</p>
              <p className='text-[#ffffff99] text-xs '>Exclude Holidays</p>
              </span>
              <div className='flex'>
              <img className='h-12' src="https://img.icons8.com/?size=100&id=118490&format=png&color=000000 " alt="" />           
              <img className='h-12' src="https://img.icons8.com/?size=100&id=ud9VVQzOPag8&format=png&color=000000 " alt="" />           
              <img className='h-12' src="https://img.icons8.com/?size=100&id=84909&format=png&color=000000 " alt="" />           
              <img className='h-12' src="https://img.icons8.com/?size=100&id=84884&format=png&color=000000 " alt="" />           
              </div>
            </div>
          <div className='flex gap w-full justify-between sm:flex-row flex-col sm:gap-0 gap-5'>
            <div className='flex flex-col gap-5'>
            <p className='text-white font-bold text-[14px] '>Recommended</p>
            <div className='sm:flex hidden flex-col gap-3 '>
            <p className='text-[#ffffff99] text-xs hover:text-white'>realme 13+ 5G</p>
            <p className='text-[#ffffff99] text-xs hover:text-white'>realme Note 60</p>
            <p className='text-[#ffffff99] text-xs hover:text-white'>realme C61</p>
            <p className='text-[#ffffff99] text-xs hover:text-white'>realme C65</p>
            <p className='text-[#ffffff99] text-xs hover:text-white'>realme 12</p>
            <p className='text-[#ffffff99] text-xs hover:text-white'>realme 12+ 5G</p>
            <p className='text-[#ffffff99] text-xs hover:text-white'>realme C63</p>
            <p className='text-[#ffffff99] text-xs hover:text-white'>realme Note 50</p>
            <p className='text-[#ffffff99] text-xs hover:text-white'>realme C67</p>
            </div>
            </div>
            <div className='flex flex-col gap-5'>
            <p className='text-white font-bold text-[14px] '>Support</p>
            <div className='sm:flex hidden flex-col gap-3'>
            <p className='text-[#ffffff99] text-xs hover:text-white '>FAQ</p>
            <p className='text-[#ffffff99] text-xs hover:text-white '>Troubleshooting</p>
            </div>
            </div>
            <div className='flex flex-col gap-5'>
            <p className='text-white font-bold text-[14px]'>About realme</p>
            <div className='sm:flex hidden flex-col gap-3'>
            <p className='text-[#ffffff99] text-xs hover:text-white '>Our brand</p>
            <p className='text-[#ffffff99] text-xs hover:text-white '>News Room</p>
            </div>
            </div>
            <div className='flex flex-col gap-5'>
            <p className='text-white font-bold text-[14px]'>Contact realme</p>
            <div className='sm:flex hidden flex-col gap-3'>
            <p className='text-[#ffffff99] text-xs hover:text-white '>Whatsapp</p>
            <p className='text-[#ffffff99] text-xs hover:text-white '>service.pkrealme.com</p>
            </div>
            </div>
            </div>
            <div className='hidden lg:flex flex-col gap-3 items-start'>
              <p className='text-white font-bold text-[24px] '>04238048018</p>
              <span>
              <p className='text-[#ffffff99] text-xs '>09:30 - 18:00， MON - SAT</p>
              <p className='text-[#ffffff99] text-xs '>Exclude Holidays</p>
              </span>
              <div className='flex'>
              <img className='h-12' src="https://img.icons8.com/?size=100&id=118490&format=png&color=000000 " alt="" />           
              <img className='h-12' src="https://img.icons8.com/?size=100&id=ud9VVQzOPag8&format=png&color=000000 " alt="" />           
              <img className='h-12' src="https://img.icons8.com/?size=100&id=84909&format=png&color=000000 " alt="" />           
              <img className='h-12' src="https://img.icons8.com/?size=100&id=84884&format=png&color=000000 " alt="" />           
              </div>
            </div>
        </div>
        <div className='flex sm:flex-row flex-col sm:gap-0 gap-2 justify-between border-t-[1px] border-solid border-[rgba(255,255,255,.1)] py-5 my-10'>
          <span className='flex gap-6'>
          <p className='text-xs text-[#ffffffCC] hover:text-white'>Pakistan ( English / PKR )</p>
          <p className='text-xs text-[#6A6A6A] font-extralight'>© 2019-2024 realme. All Rights Reserved.</p>
          </span>
          <p className='text-xs text-[#6A6A6A] font-extralight'>User Agreement | Privacy Policy | Terms of Sales | Warranty Terms</p>
        </div>
    </section>
  )
}
