import{ BrowserRouter , Route , Routes } from "react-router"
import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Navbar from "./components/Navbar"



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
           <Route path="/" element={<Home />}/>
           <Route path="/about" element={<About />}/>
           <Route path="/contact" element={<Contact />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
