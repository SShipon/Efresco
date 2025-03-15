import Image from "next/image";

export default function Marquee() {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className='marquee flex justify-center items-center uppercase text-[130px]'>
        <div>popular dishes</div>
        <Image width={150} // Set your desired width
 height={50} src='star.svg' alt='star' />
        <div>delicious food</div>
        <Image width={150} // Set your desired width
 height={50} src='star.svg' alt='star' />
        <div>burger king</div>
        <Image width={150} // Set your desired width
 height={50} src='star.svg' alt='star' />
        <div>popular</div>
      </div>
    </div>
  )
}