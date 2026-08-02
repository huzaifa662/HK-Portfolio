import Navbar from './components/Navbar'
import MouseGlow from './components/MouseGlow'
import Hero from './components/Hero'
import Work from './components/Work'
import Reviews from './components/Reviews'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen">
      <MouseGlow />
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Reviews />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
