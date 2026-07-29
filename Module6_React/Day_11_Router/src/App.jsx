import {BrowserRouter , Route , Routes} from "react-router"
// import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Users from "./components/Users"
import { lazy, Suspense } from "react"

const About = lazy(()=>import("./components/About"))


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Suspense fallback={<h1>Loading....</h1>}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/users" element={<Users/>}/>
        </Routes>
      </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App
