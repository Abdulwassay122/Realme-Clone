"use client"
import { type CarouselApi } from "@/components/ui/carousel"
import React,{useState} from 'react'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

export function Section() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <section className='w-[100%] flex justify-center items-center flex-col'>
            <Carousel  setApi={setApi} className='w-[100%]'>
            <CarouselPrevious className='md:block hidden absolute left-[10px] overflow-hidden bg-[#575757] hover:bg-[#5c5454] opacity-10 hover:opacity-30 border-none  z-10'/>
            <CarouselContent>
                <CarouselItem className='h-[650px] bg-no-repeat bg-cover bg-center md:bg-[url(https://image01.realme.net/general/20241125/1732502822846997d10f6e07b4df484c81b3f21b49b0e.jpg.webp)] bg-[url(https://image01.realme.net/general/20241125/17325028201524f844c1b6a504bbfbedf43ebee758ffb.jpg.webp)]' ></CarouselItem>
                <CarouselItem className='h-[650px] bg-no-repeat bg-cover bg-center md:bg-[url(https://image01.realme.net/general/20241016/1729049579915e7f3d499d6754dd89a30480e54ed937d.jpg.webp)] bg-[url(https://image01.realme.net/general/20241016/17290495753324620a4670c994987a9891253e97230bc.jpg.webp)]' ></CarouselItem>
                <CarouselItem className='h-[650px] bg-no-repeat bg-cover bg-center md:bg-[url(https://image01.realme.net/general/20241012/1728700235469216bd1dea87245869ce9ad5fa2566b8e.jpg.webp)] bg-[url(https://image01.realme.net/general/20241012/1728700221868b93714b501354e08803ff13d77b71bd6.jpg.webp)]' ></CarouselItem>
                <CarouselItem className='h-[650px] bg-no-repeat bg-cover bg-center md:bg-[url(https://image01.realme.net/general/20240912/1726123363522d887e0a8288b41908530724b2d78680a.jpg.webp)] bg-[url(https://image01.realme.net/general/20240912/1726123360777679d8d76930949ac8eef98f5818785d0.jpg.webp)]' ></CarouselItem>
                <CarouselItem className='h-[650px] bg-no-repeat bg-cover bg-center md:bg-[url(https://image01.realme.net/general/20240805/1722841182262152ae3a8dee74a46acd9bdefc3f86a2a.jpg.webp)] bg-[url(https://image01.realme.net/general/20240805/1722841179883e8b4248e3dc045f3a80d21103fcbc461.jpg.webp)]' ></CarouselItem>
                <CarouselItem className='h-[650px] bg-no-repeat bg-cover bg-center md:bg-[url(https://image01.realme.net/general/20240701/17198153001163272cf964b684643bfbb6f5798bcee09.jpg.webp)] bg-[url(https://image01.realme.net/general/20240701/17198152967450a69cf97dc2348f2a524190ac844455b.jpg.webp)]' ></CarouselItem>
                <CarouselItem className='h-[650px] bg-no-repeat bg-cover bg-center md:bg-[url(https://image01.realme.net/general/20240701/1719815344367018bb372b6124bcbb8e00021d90f5723.jpg.webp)] bg-[url(https://image01.realme.net/general/20240701/17198153188520c20b4f2898f4106ab6d5e92de31aa8d.jpg.webp)]' ></CarouselItem>
                <CarouselItem className='h-[650px] bg-no-repeat bg-cover bg-center md:bg-[url(https://image01.realme.net/general/20240711/172067843618785eb893ced42472db337a3295f2c16f2.jpg.webp)] bg-[url(https://image01.realme.net/general/20240711/1720678433609b8df2fda31d44455a84e7c0efc5484eb.jpg.webp)]' ></CarouselItem>
                <CarouselItem className='h-[650px] bg-no-repeat bg-cover bg-center md:bg-[url(https://image01.realme.net/general/20240613/1718265926110da336294cae34031850e160f52adab67.jpg.webp)] bg-[url(https://image01.realme.net/general/20240613/1718265809282c8d499beaeeb423aa728e977f0b9a938.jpg.webp)]' ></CarouselItem>
                <CarouselItem className='h-[650px] bg-no-repeat bg-cover bg-center md:bg-[url(https://image01.realme.net/general/20240407/1712455488312b35e8f07015747adb5b08cbf7f7b6288.jpg.webp)] bg-[url(https://image01.realme.net/general/20240407/171245548604033a7fc405c6243c48f82238a75f040b1.jpg.webp)]' ></CarouselItem>
                <CarouselItem className='h-[650px] bg-no-repeat bg-cover bg-center md:bg-[url(https://image01.realme.net/general/20240403/17121292696342271d036b0cc47488f9556a1073a2946.jpg.webp)] bg-[url(https://image01.realme.net/general/20240403/17121292650103f2dab042b674d9e8134e186ac3d491a.jpg.webp)]' ></CarouselItem>
                <CarouselItem className='h-[650px] bg-no-repeat bg-cover bg-center md:bg-[url(https://image01.realme.net/general/20240419/1713511039600629af96a1e584e2a8e8ef3fef8dbfe20.jpg.webp)] bg-[url(https://image01.realme.net/general/20240419/17135110262973d1eb9ab6403497aa50303ac2bcc8605.jpg.webp)]' ></CarouselItem>
                <CarouselItem className='h-[650px] bg-no-repeat bg-cover bg-center md:bg-[url(https://image01.realme.net/general/20240126/1706272821840f47610938405416982cc8d6b30cbbf63.jpg.webp)] bg-[url(https://image01.realme.net/general/20240126/1706272817409f2a4d01838c24432b062957b65b280cb.jpg.webp)]' ></CarouselItem>
            </CarouselContent>
            <CarouselNext className='md:block hidden absolute right-[10px] overflow-hidden bg-[#575757] hover:bg-[#5c5454] opacity-10 hover:opacity-30 border-none z-10'/>
            <div className="absolute bottom-5 lg:left-[39%] md:left-[29%] left-[20%]  flex justify-center mt-4 sm:space-x-5 space-x-3">
        {Array.from({ length: count }, (_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${
              current === i + 1 ? "bg-[#1b1a1a]" : "bg-[#595454] opacity-50"
            }`}
          />
        ))}
      </div>
            </Carousel>
    </section>
  )
}
