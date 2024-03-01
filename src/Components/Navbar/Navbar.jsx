import { Link } from "react-router-dom"
import logo from "./../../assets/shared/logo.svg"
import "./_Navbar.sass"
let Navbar =()=>{
    return(
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="bar">
            </div>
            <div className="blurNav">
                <Link to="/">00 HOME</Link>
                <Link to="/destination/0">01 DESTINATION</Link>
                <Link to="/crew">02 CREW</Link>
                <Link to="/technology">03 TECHNOLOGY</Link>
            </div>
        </nav>
    )
}
export default Navbar