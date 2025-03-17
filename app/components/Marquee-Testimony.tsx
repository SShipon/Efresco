import Image from "next/image";

export default function MarqueeTestimony() {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className='marquee flex justify-center items-center uppercase text-[130px]'>
        <div>Clients Testimonials</div>
        <Image
          width={150} // Set your desired width
          height={50}
          src='star.svg'
          alt='star'
        />
        <div>Food Reviews</div>
        <Image
          width={150} // Set your desired width
          height={50}
          src='star.svg'
          alt='star'
        />
        <div>Our</div>
      </div>
    </div>
  )
}