import React from 'react'
import { TbTruckDelivery } from 'react-icons/tb'

export default function TopProducts() {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4'>
      {/* 1st Product */}
      <div className="relative bg-[url('/burger-bg.jpg')] bg-cover bg-center text-white p-12 uppercase">
        <h4 className='text-[#ffb936] text-lg font-semibold pb-5'>start price $25</h4>
        <h2 className='text-[42px] lg:text-12 font-extrabold leading-8 lg:leading-14'>
        delicious<br/>hamburger<br/>fries
        </h2>
        <button className='flex gap-x-2 uppercase px-12 py-5 bg-[#d12525] hover:bg-white cursor-pointer hover:text-black mt-8'>
          <TbTruckDelivery size={24} />
          <span>order now</span>
        </button>
        <img className='absolute right-5 top-5' src='vector-yellow.png' alt='vector' />
        <h4 className='absolute right-10 top-12 text-black text-[40px] font-bold'>
          $38
        </h4>
      </div>
      {/* 2nd Product */}
      <div className="relative bg-[url('/fry-bg.jpg')] bg-cover bg-center text-white px-12 py-16 uppercase">
        <h4 className='text-[#ffb936] text-lg font-semibold pb-5'>start price $25</h4>
        <h2 className='text-[42px] lg:text-12 font-extrabold leading-8 lg:leading-14'>
        super<br/>chicken<br/>fry
        </h2>
        <button className='flex gap-x-2 uppercase px-12 py-5 bg-[#ffb936] hover:bg-white cursor-pointer text-black mt-8'>
          <TbTruckDelivery size={24} />
          <span>order now</span>
        </button>
        <img className='absolute right-5 top-5' src='vector-red.png' alt='vector' />
        <h4 className='absolute right-10 top-12 text-[40px] font-bold'>
          $43
        </h4>
      </div>
      {/* 3rd Product */}
      <div className="relative bg-[url('/pizza-bg.jpg')] bg-cover bg-center text-white p-12 uppercase">
        <h4 className='text-[#ffb936] text-lg font-semibold pb-5'>start price $25</h4>
        <h2 className='text-[42px] lg:text-12 font-extrabold leading-8 lg:leading-14'>
        awesome<br/>beef<br/>pizza
        </h2>
        <button className='flex gap-x-2 uppercase px-12 py-5 bg-[#d12525] hover:bg-white cursor-pointer hover:text-black mt-8'>
          <TbTruckDelivery size={24} />
          <span>order now</span>
        </button>
        <img className='absolute right-5 top-5' src='vector-yellow.png' alt='vector' />
        <h4 className='absolute right-10 top-12 text-black text-[40px] font-bold'>
          $38
        </h4>
      </div>
    </section>
  )
}
