import './App.css'
import { Home, Contact, Services, Navbar } from './components'

function App() {

  return (
    <>
      <div className="row gx-0">
        <Navbar />
        <Home />
        <Contact />
        <Services />
      </div>
    </>
  )
}

export default App
