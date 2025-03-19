import Hero from './components/Hero'
import Founder from './components/Founder'
import Marquee from './components/Marquee'
import TopProducts from './components/TopProducts'
import Dishes from './components/Dishes/Dishes'
import DayDeal from './components/DayDeal'
import ClassicProducts from './components/ClassicProducts'
import MarqueeTestimony from './components/Marquee-Testimony'
import Testimonials from './components/Testimonials'
import Services from './components/Services'
import Subscribe from './components/Subscribe'

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
      <MarqueeTestimony />
      <Testimonials />
      <Services />
      <Subscribe />
    </div>
  )
}