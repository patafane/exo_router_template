import Navbar from "../Navbar/Navbar"
import Data from "./../../data/data.json"
import "./_Destination.sass"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
let Destination = ()=>{
    let indexParams = useParams()
    return(
        <div className="destination">
            <Navbar/>
            <div className="content">
                <div className="leftPart">
                    <h1><span>01</span> PICK YOUR DESTINATION</h1>
                    <div className="planet container">
                        <img src={Data.destinations[0].images.png} alt="" />
                    </div>
                </div>
                <div className="rightPart">

                </div>
            </div>
            {Data.destinations.map((element,index)=>(
                <Link key={index} to={"/destination/"+index}>{element.name}</Link>
            ))}
        </div>
    )
}
export default Destination