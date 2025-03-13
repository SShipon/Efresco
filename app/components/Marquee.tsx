export default function Marquee() {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className='marquee flex justify-center items-center uppercase text-[130px]'>
        <div>popular dishes</div>
        <img src='star.svg' alt='star' />
        <div>delicious food</div>
        <img src='star.svg' alt='star' />
        <div>burger king</div>
        <img src='star.svg' alt='star' />
        <div>popular</div>
      </div>
    </div>
  )
}