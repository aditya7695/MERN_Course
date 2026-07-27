import { Link } from "react-router"




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

        <Link to="/">Home</Link>
        <Link to="/about" target="_blank"> About</Link>
        <Link to="/contact">Contact</Link>

        </nav>
    </div>
  )
}

export default Navbar
