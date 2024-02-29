import Navbar from "../Navbar/Navbar"
import Data from "./../../data/data.json"
import "./_Destination.sass"
let Destination = ()=>{
    return(
        <div className="destination">
            <Navbar/>
            {Data.destinations.map((element,index)=>(
                <div className="planet">
                    {element.name}
                </div>
            ))}
        </div>
    )
}
export default Destination