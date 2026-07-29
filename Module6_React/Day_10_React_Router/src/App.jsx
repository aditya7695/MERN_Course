import{ BrowserRouter , Route , Routes } from "react-router"
import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import OrderSummary from "./components/OrderSummary"
import NoMatch from "./components/NoMatch"
import Products from "./components/Products"
import NewProducts from "./components/NewProducts"
import FeaturedProduct from "./components/FeaturedProduct"



import UserDetails from "./components/users/UserDetails"
import Admin from "./components/users/Admin"
import MyUser from "./components/users/MyUser"


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
           <Route path="/" element={<Home />}/>
           <Route path="/about" element={<About />}/>
           <Route path="/contact" element={<Contact />}/>
           <Route path="/ordersummary" element={<OrderSummary/>}/>
           <Route path="/contact/ordersummary" element={<OrderSummary/>}/>
           <Route path="/about/ordersummary" element={<OrderSummary/>}/>

           {/* Nested Routes */}

           <Route path="/products" element={<Products/>}>
                <Route path="new" element={<NewProducts/>}/>
                <Route path="featured" element={<FeaturedProduct/>}/>
           </Route>

           

           {/* <Route path="/users" element={<MyUser/>}/>

            {/* Dynamic Route */}
           {/* <Route path="/users/:id" element={<UserDetails/>}/> */}

           {/* Specific Route : this will have more prefrence than dynamic routes*/}

           {/* <Route path="/users/admin" element={<Admin/>}/> */} 


           {/* Nested Dynamic routes */}

           <Route path="/users" element={<MyUser/>}>
              <Route path=":id" element={<UserDetails/>}/>
              <Route path="admin" element={<Admin/>}/>
           </Route>


           <Route path="*" element={<NoMatch/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
