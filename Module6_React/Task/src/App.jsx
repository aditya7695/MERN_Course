import Home from "./components/Home"
import Posts from "./components/Posts"
import {BrowserRouter , Route ,Routes} from "react-router"

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/posts" element={<Posts/>}/>
    </Routes>
    </BrowserRouter> 
    </div>
  )
}

export default App
