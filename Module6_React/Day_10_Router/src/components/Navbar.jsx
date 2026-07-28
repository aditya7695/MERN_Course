import { Link } from "react-router"



const Navbar = () => {
  return (
    <div>
      <nav style={{
        display : "flex",
        gap : "20px",
        width : "100%",
        justifyContent : "center",
        alignItems : "center",
        border : "5px"
      }}>
        <Link to='/'>Home</Link>
        <Link to="/about">About</Link>
        </nav>
    </div>
  )
}

export default Navbar
