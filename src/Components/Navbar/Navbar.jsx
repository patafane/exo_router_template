import { Link } from "react-router-dom"
import logo from "./../../assets/shared/logo.svg"
import "./_Navbar.sass"
import buger from "./../../assets/shared/icon-hamburger.svg"
let Navbar =(props)=>{
    return(
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="bar">
            </div>
            <div className="blurNav">
                <Link to="/" className={props.home === true ? "active" : ""}>00 HOME</Link>
                <Link to="/destination/0" className={props.destination === true ? "active" : ""}>01 DESTINATION</Link>
                <Link to="/crew" className={props.crew === true ? "active" : ""}>02 CREW</Link>
                <Link to="/technology" className={props.technology === true ? "active" : ""}>03 TECHNOLOGY</Link>
            </div>
            <div className="burgerMenu">
                <img src={buger} alt="" />
            </div>
        </nav>
    )
}
export default Navbar