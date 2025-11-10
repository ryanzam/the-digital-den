import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Display from './components/Display'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import Showcase from './components/Showcase'
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <Display />
      <Showcase />
      <Footer />
    </main>
  )
}

export default App