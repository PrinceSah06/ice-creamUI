import Navbar from './components/Navbar'
import Hero from './components/Hero'
import InfoStrip from './components/InfoStrip/InfoStrip'
import Menu from './components/Menu/Menu'
import BottomBar from './components/BottomBar'

const App = () => {
  return (
    <main className="font-nunito bg-cream overflow-x-hidden">
      <Navbar />
      <Hero />
      <InfoStrip />
      <Menu />
      <BottomBar />
    </main>
  )
}

export default App