import LandingStartSection from './components/LandingStartSection'
import LandingDetailsSections from './components/LandingDetailsSections'
import LandingHero from './components/LandingHero'
import LandingFeatures from './components/LandingFeatures'

const LandingHome = () => {
  return (
    <div className="relative min-h-screen  ">


      <LandingStartSection />

      <LandingDetailsSections />

      <LandingHero />

      <LandingFeatures />



    </div>
  )
}

export default LandingHome