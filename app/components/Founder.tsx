export default function Founder() {
  return (
    <div className='flex flex-col lg:flex-row justify-center items-center gap-x-8 gap-y-12 py-20 max-w-[880px] mx-auto'>
      <div className='w-2/3'>
        <img className='w-3/4 justify-self-center' src='founder.jpg' alt='founder' />
      </div>
      <div className='max-w-[576px] lg:max-w-auto w-9/10 text-center lg:text-start'>
        <h3 className='text-[#d12525] pb-5 uppercase text-xl font-semibold'>Learn Something Foodking</h3>
        <h3 className='uppercase text-xl font-bold leading-7'>Welcome to our culinary haven, where each dish is a symphony of flavors meticulously crafted tantalize your taste buds. Nestled in the heart of [City], our restaurant is an inviting space that combines.</h3>
        <div className='flex justify-center lg:justify-start items-center gap-x-4 mt-8'>
          <img src="chef.jpg" alt="Michael" />
          <h4 className='uppercase'><span className='font-bold'>Michael V. Christensen</span> / <span className='text-[#5c5c5b]'>CEO & Founder</span></h4>
        </div>
      </div>
    </div>
  )
}