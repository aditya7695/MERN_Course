import {  NavLink } from "react-router"




const Navbar = () => {
  return (
    <div>
      <nav style={{
        display : "flex",
        gap : "20px",
        width : "100%",
        justifyContent : "center",
        alignItems : "center"
      }}>

        <NavLink to="/">Home</NavLink>
        <NavLink to="/about" target="_blank"> About</NavLink>
        <NavLink to="/contact">Contact</NavLink>

        </nav>
    </div>
  )
}

export default Navbar
