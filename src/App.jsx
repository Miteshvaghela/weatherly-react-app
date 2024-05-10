import FeaturedSection from './components/FeaturedSection';
import Hero1 from './components/Hero1';
import Hero from './components/Hero';
import Newletter from './components/Newsletter';
import Faq from './components/Faq';
import './App.css'

function App() { 
  return (
    <>
      <Hero1 title="React Weather App"/>
      <FeaturedSection />
      <Hero />
      <Newletter />
      <Faq />      
    </>
  )
}

export default App