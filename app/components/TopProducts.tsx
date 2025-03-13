import React from 'react'
import { TbTruckDelivery } from 'react-icons/tb'

export default function TopProducts() {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4'>
      {/* 1st Product */}
      <div className="bg-[url('/burger-bg.jpg')] bg-cover bg-center h-[400px] text-white p-12 uppercase">
        <h4 className='text-[#ffb936] text-xl font-semibold pb-5'>start price $25</h4>
        <h2 className='text-[42px] lg:text-[54px] font-extrabold leading-12 lg:leading-16'>
        delicious<br/>hamburger<br/>fries
        </h2>
        <button className='flex gap-x-2 uppercase px-12 py-5 bg-[#d12525] hover:bg-white cursor-pointer hover:text-black mt-8'>
          <TbTruckDelivery size={24} />
          <span>order now</span>
        </button>
      </div>
      {/* 2nd Product */}
      <div className="bg-[url('/fry-bg.jpg')] bg-cover bg-center h-[400px] text-white p-12 uppercase">
        <h4 className='text-[#ffb936] text-xl font-semibold pb-5'>start price $25</h4>
        <h2 className='text-[42px] lg:text-[54px] font-extrabold leading-12 lg:leading-16'>
        super<br/>chicken<br/>fry
        </h2>
        <button className='flex gap-x-2 uppercase px-12 py-5 bg-[#ffb936] hover:bg-white cursor-pointer text-black mt-8'>
          <TbTruckDelivery size={24} />
          <span>order now</span>
        </button>
      </div>
      {/* 3rd Product */}
      <div className="bg-[url('/pizza-bg.jpg')] bg-cover bg-center h-[400px] text-white p-12 uppercase">
        <h4 className='text-[#ffb936] text-xl font-semibold pb-5'>start price $25</h4>
        <h2 className='text-[42px] lg:text-[54px] font-extrabold leading-12 lg:leading-16'>
        awesome<br/>beef<br/>pizza
        </h2>
        <button className='flex gap-x-2 uppercase px-12 py-5 bg-[#d12525] hover:bg-white cursor-pointer hover:text-black mt-8'>
          <TbTruckDelivery size={24} />
          <span>order now</span>
        </button>
      </div>
    </section>
  )
}
