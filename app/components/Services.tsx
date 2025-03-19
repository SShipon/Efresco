import Image from "next/image";

export default function Services() {
  const services = [
    {
      id: crypto.randomUUID(),
      src: '/service-1.svg',
      title: 'best quality food',
      description: 'Sed ut perspiciatis unde omnis este natus sit voluptatem'
    },
    {
      id: crypto.randomUUID(),
      src: '/service-2.svg',
      title: 'fast food delivery',
      description: 'Sed ut perspiciatis unde omnis este natus sit voluptatem'
    },
    {
      id: crypto.randomUUID(),
      src: '/service-3.svg',
      title: 'money back guarantee',
      description: 'Sed ut perspiciatis unde omnis este natus sit voluptatem'
    },
    {
      id: crypto.randomUUID(),
      src: '/service-4.svg',
      title: '100% natural food',
      description: 'Sed ut perspiciatis unde omnis este natus sit voluptatem'
    }
  ];

  return (
    <section className='relative pt-100 pb-32'>
      <div className="max-w-[1200px] mx-auto">
        {/* <div className='mx-auto relative'> */}
          <Image src='/video-bg.jpg' alt='video-bg' width={1200} height={1200} className='absolute top-30' />
        {/* </div> */}
      </div>
      <div className="min-h-screen text-white px-8 py-12 bg-[#d12525] bg-[url('/bg-shape.png')] bg-cover bg-center">
          <div className='max-w-[1200px] mx-auto min-h-screen py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 justify-center items-end text-white'>
            {/* services */}
            {
              services.map(service =>
                <div key={service.id} className='mx-auto'>
                  <Image src={service.src} alt={service.title} width={65} height={65} className='pb-2' />
                  <h3 className='capitalize text-2xl font-semibold py-4'>
                    {service.title}
                  </h3>
                  <p className='text-sm md:pr-5'>
                    {service.description}
                  </p>
                </div>
              )
            }
          </div>
      </div>
    </section>
  )
}