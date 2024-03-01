import Navbar from "../Navbar/Navbar"
import Data from "./../../data/data.json"
import "./_Destination.sass"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
let Destination = (props)=>{
    let indexParams = useParams()
    return(
        <div className="destination">
            <Navbar/>
            <h1 className="titre"><span>01</span> PICK YOUR DESTINATION</h1>
            <div className="content">
                <div className="leftPart">
                    <div className="planet container">
                        <img src={Data.destinations[indexParams.id].images.png} alt="" />
                    </div>
                </div>
                <div className="rightPart">
                    <div className="planetNav">
                        {Data.destinations.map((element,index)=>(
                            <Link key={index} to={"/destination/"+index}>{element.name}</Link>
                        ))}
                    </div>
                    <div className="name">
                        <h1>{Data.destinations[indexParams.id].name}</h1>
                    </div>
                    <div className="description">
                        <p>{Data.destinations[indexParams.id].description}</p>
                    </div>
                    <hr />
                    <div className="estimation">
                        <div className="travelTime">
                            <h3>EST. TRAVEL TIME</h3>
                            <h2>{Data.destinations[indexParams.id].travel}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Destination