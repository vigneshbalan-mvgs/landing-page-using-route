
import { Route ,BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './Componants/Navbar.jsx'
import Home from './Componants/Home.jsx'
import Services  from './Componants/Service.jsx'
import Contact from './Componants/Contact.jsx'
import About from './Componants/About.jsx'
import './App.css'

function App() {


  return (
    <div className='div'>

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Service" element={<Services />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/about" element={<About />} />
      </Routes>
    
      
      
    </BrowserRouter>
    </div>
  )
}

export default App
