import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import BottomBar from './components/Bottombar'
import ContactFAB from './components/ContactFAB'
import { StarsBackground } from "./components/ui/stars-background.jsx";
import { ShootingStars } from "./components/ui/shooting-stars.jsx";
import HomeSection from './components/HomeSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/sections/ProjectsSection'
import AchievementsSection from './components/sections/AchievementsSection'
import ContactSection from './components/ContactSection'
import SpaceshipSection from './components/SpaceshipSection'
import './App.css'

function App() {
  return (
    <>
      {/* Global Stars Background */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        <StarsBackground 
          starDensity={0.0005}
          allStarsTwinkle={true}
          twinkleProbability={0.7}
          minTwinkleSpeed={0.5}
          maxTwinkleSpeed={1}
        />
        <ShootingStars 
          minSpeed={10}
          maxSpeed={30}
          minDelay={1200}
          maxDelay={4200}
          starColor="#9E00FF"
          trailColor="#2EB9DF"
          starWidth={10}
          starHeight={1}
        />
      </div>

      {/* Spaceship - positioned above everything */}
      {/*<SpaceshipSection />*/}

      <div className="App" style={{ position: 'relative', zIndex: 1 }}>
        {/* Global container box for entire content */}
        <div style={{
          position: 'fixed',
          top: '42px',
          left: '42px',
          right: '2px',
          bottom: '2px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '0.27rem',
          background: 'transparent',
          pointerEvents: 'none',
          zIndex: 100,
        }}></div>

        <Navbar />

        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />

        <Sidebar />
        <ContactFAB />
        <BottomBar />
      </div>
    </>
  );
}

export default App;

