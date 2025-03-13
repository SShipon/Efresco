export default function Founder() {
  return (
    <div className='flex justify-center items-center gap-x-16 py-20 max-w-[880px] mx-auto'>
      <div>
        <img src='founder.jpg' alt='founder' />
      </div>
      <div className='w-9/10'>
        <h3 className='text-[#d12525] pb-5 uppercase text-xl font-semibold'>Learn Something Foodking</h3>
        <h3 className='uppercase text-xl font-bold leading-7'>Welcome to our culinary haven, where each dish is a symphony of flavors meticulously crafted tantalize your taste buds. Nestled in the heart of [City], our restaurant is an inviting space that combines.</h3>
        <div className='flex items-center gap-x-4 mt-8'>
          <img src="chef.jpg" alt="Michael" />
          <h4 className='uppercase'><span className='font-bold'>Michael V. Christensen</span> / <span className='text-[#5c5c5b]'>CEO & Founder</span></h4>
        </div>
      </div>
    </div>
  )
}