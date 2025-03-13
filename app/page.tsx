import Hero from './components/Hero'
import Founder from './components/Founder'
import Marquee from './components/Marquee'
import TopProducts from './components/TopProducts'
import Dishes from './components/Dishes/Dishes'
import DayDeal from './components/DayDeal'

export default function Home() {
  return (
    <div className='p-2'>
      <Hero />
      <Founder />
      <Marquee />
      <TopProducts />
      <Dishes />
      <Marquee />
      <DayDeal />
    </div>
  )
}