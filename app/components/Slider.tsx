import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

interface SwiperProps {
  children?: React.ReactNode;
}

export default function Slider({ children }: SwiperProps): React.JSX.Element {
  return (
    <>
      <Swiper>
        <SwiperSlide>
          <img src='best-sale-1.jpg' alt='burger' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='best-sale-2.jpg' alt='fry' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='best-sale-3.jpg' alt='toaster' />
        </SwiperSlide>
      </Swiper>
    </>
  )
}