
import Navbar from './components/layout/Navbar'
import Hero from './components/layout/Hero'
import {  MovieCard } from "@/components/layout/Card";
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <div>
    <Navbar />
      <Hero />
      <MovieCard/>
      <Footer/>
    </div>
  )
}

export default App
