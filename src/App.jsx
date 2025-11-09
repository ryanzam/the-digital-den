import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Display from './components/Display'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import Showcase from './components/Showcase'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <Display />
      <Showcase />
    </main>
  )
}

export default App