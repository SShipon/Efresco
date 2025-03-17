import Image from "next/image";
import TestimonySlider from "./TestimonySlider";

export default function Testimonials() {
  return (
    <section className='flex flex-col lg:flex-row lg:gap-x-24 items-stretch pt-16 max-w-[1200px] mx-auto'>
      <TestimonySlider />
      {/* Chef div */}
      <Image src='/lady-chef.jpg' alt='lady-chef' width={600} height={300} />
    </section>
  )
}