import './App.css'
import { Home, Contact, Services, Navbar } from './components'

function App() {

  return (
    <>
      <div className="row gx-0">
        <Navbar />
        <div className="scroll-snap-align">
          <Home />
        </div>
        <div className="scroll-snap-align">
          <Services />
        </div>
        <div className="scroll-snap-align">
          <Contact />
        </div>
      </div>
    </>
  )
}

export default App
