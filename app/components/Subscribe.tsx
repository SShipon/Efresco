import Image from "next/image";
import { FaEnvelope } from "react-icons/fa";

export default function Subscribe() {
  return (
    <section className="relative subscribe-section max-w-[1200px] mx-auto py-16 mb-32 min-h-[60vh] bg-[url('/subscribe-bg.jpg')] bg-cover bg-center bg-fixed flex flex-col justify-center items-center">
      <div className='absolute z-50 top-12 left-10'>
        <Image src='/subscribe-1.png' alt='subscribe-1' width={40} height={40} />
      </div>
      <div className='absolute top-16 left-[55%]'>
        <Image src='/subscribe-2.png' alt='subscribe-1' width={80} height={80} />
      </div>
      <div className='absolute top-16 right-1/12'>
        <Image src='/subscribe-3.png' alt='subscribe-1' width={60} height={60} />
      </div>
      <div className="relative lg:px-24 flex flex-col lg:flex-row lg:gap-x-16">
        <div className='lg:w-1/2'>
          <h3 className='capitalize text-4xl font-extrabold pb-5'>
            subscribe our newsletter<br />to get more offers
          </h3>
          <p className='lg:pt-5 lg:leading-relaxed'>At vero eos et accusamus et iusto odio dignissimos ducimus quie blanditiis praesentium voluptatum deleniti atque</p>
        </div>
        <div className='lg:w-1/2'>
          <form action="">
            <div className='bg-white p-5 flex items-center max-w-4/5'>
            <FaEnvelope />
              <input placeholder="Enter email address" type="email" />
            </div>
          </form>
          {/* <div ><i class="fas fa-envelope"></i></div> */}
          <button className='uppercase px-12 py-5 my-5 bg-[#d12525] hover:bg-white cursor-pointer text-white hover:text-black' type="submit">
            <span>subscribe now</span>
          </button>
          <label className='flex gap-x-2 items-center'>
            <input type="checkbox" name="" id="" />
            <span>I Agree to the Privacy Policy.</span>
          </label>
        </div>
      </div>
    </section>
  )
}