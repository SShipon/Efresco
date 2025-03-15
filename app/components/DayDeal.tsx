import { TbTruckDelivery } from "react-icons/tb";
import Slider from "./Slider";

export default function DayDeal() {
  return (
    <section className='flex flex-col lg:flex-row justify-center'>
      {/* Slider div */}
      <Slider />
      {/* Deal div */}
      <div className="text-white px-8 py-12 bg-[#d12525] bg-[url('/shape-bg.png')] bg-cover bg-center">
        <h4 className='text-xl font-semibold'>
          Deal Of The Day
        </h4>
        <h2 className='text-[42px] lg:text-[54px] font-extrabold uppercase'>
          today's the hamburger' day
        </h2>
        <div className='flex gap-x-2 py-3 items-end'>
          <h4 className='text-xl font-semibold capitalize'>
            special price
          </h4>
          <h2 className='text-[42px] lg:text-[54px] font-extrabold -mb-2'>
            $55
          </h2>
        </div>
        <p className='py-5'>
          Savor the perfect symphony of flavors It's the perfect dining experience where Experience quick and efficient with our signature hamburger, a culinary
        </p>
        <button className='flex gap-x-2 uppercase border border-white px-5 py-3 rounded'>
          <TbTruckDelivery size={24} />
          <p>order now</p>
        </button>
      </div>
    </section>
  )
}