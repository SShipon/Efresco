import { FaStar } from "react-icons/fa";
import Image from 'next/image'; 

const dishes = [
  { id: 1, name: 'Single Fresh Burger', price: 25.59, image: '/burger.png', rating: 5, reviews: 5000 },
  { id: 2, name: 'Single Fresh Burger', price: 25.59, image: '/burger.png', rating: 5, reviews: 5000 },
  { id: 3, name: 'Single Fresh Burger', price: 25.59, image: '/burger.png', rating: 5, reviews: 5000 },
  { id: 4, name: 'Single Fresh Burger', price: 25.59, image: '/burger.png', rating: 5, reviews: 5000 },
  { id: 5, name: 'Single Fresh Burger', price: 25.59, image: '/burger.png', rating: 5, reviews: 5000 },
  { id: 6, name: 'Single Fresh Burger', price: 25.59, image: '/burger.png', rating: 5, reviews: 5000 },
  { id: 7, name: 'Single Fresh Burger', price: 25.59, image: '/burger.png', rating: 5, reviews: 5000 },
  { id: 8, name: 'Single Fresh Burger', price: 25.59, image: '/burger.png', rating: 5, reviews: 5000 },
];

export default function Dishes() {
  return (
    <section className='py-16 bg-[#f4f1ea]'>
      <h4 className='uppercase text-[#d12525] text-lg font-bold pb-2 text-center'>
        best selling dishes
      </h4>
      <h2 className='uppercase text-[42px] lg:text-[54px] font-extrabold text-center'>
        explore our products
      </h2>


      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1140px] mx-auto mt-8'>
        {dishes.map((dish) => (
          <div key={dish.id} className='bg-white px-5 py-10 flex flex-col items-center'>
            <h4 className='capitalize text-[#212121] text-xl font-semibold text-center'>
              {dish.name}
            </h4>
            <div className='flex gap-x-px py-2'>
              {[...Array(dish.rating)].map((_, index) => (
                <FaStar key={index} color='#ffb936' />
              ))}
              <span>({dish.reviews}k)</span>
            </div>
            <h4 className='text-[#d12525] text-xl font-semibold pb-8'>
              price ${dish.price.toFixed(2)}
            </h4>
        
            <Image
              src={dish.image}
              alt={dish.name}
              width={300}  
              height={200} 
              className="object-cover" 
            />
          </div>
        ))}
      </div>
    </section>
  );
}
