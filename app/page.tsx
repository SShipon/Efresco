import Hero from './components/Hero'
import Founder from './components/Founder'
import Marquee from './components/Marquee'
import TopProducts from './components/TopProducts'
import Dishes from './components/Dishes/Dishes'
import DayDeal from './components/DayDeal'
import ClassicProducts from './components/ClassicProducts'

export default function Home() {
  return (
    <div>
      <Hero />
      <Founder />
      <Marquee />
      <TopProducts />
      <Dishes />
      <Marquee />
      <DayDeal />
      <ClassicProducts />
      <Marquee />
    </div>
  )
}