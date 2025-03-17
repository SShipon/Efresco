import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function ClassicProducts() {
  const products = [
    {
      image: '/delicious-pizza.png',
      title: 'delicious classic italian pizza',
      tag: 'hot'
    },
    {
      image: '/vagetable-burger.png',
      title: 'tasty vegetable hamburger',
      tag: 'new'
    },
    {
      image: '/roasted-chicken.png',
      title: 'roasted chicken drumsticks',
      tag: '-13%'
    },
    {
      image: '/roll-samosa.png',
      title: 'roll shaped cigar samosa',
      tag: 'hot'
    },
    {
      image: '/rumberos.png',
      title: 'rumberos hotdog sandwich',
      tag: 'new'
    }
  ];

  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-x-4 max-w-[1200px] mx-auto border-b border-b-[#d12525]'>
      {
        products.map((product, index) => (
          <div key={index} className='relative flex flex-col items-center border-r border-r-[#d12525] py-16'>
            <Image src={product.image} alt='pizza' width={240} height={240} />
            <h3 className='uppercase text-2xl text-center font-bold py-7 hover:text-[#d12525] cursor-pointer'>{product.title}</h3>
            <button className='uppercase cursor-pointer text-md font-semibold shadow-lg flex items-center gap-x-2 hover:text-[#d12525] hover:underline'>
              order now <FaArrowRight size={20} />
            </button>
            <img className='absolute left-2 top-5.5' src='vector-red.png' alt='vector' />
            <h4 className='absolute left-9 top-15 text-white text-3xl font-semibold uppercase'>
              {product.tag}
            </h4>
          </div>
        ))
      }
    </section>
  )
}