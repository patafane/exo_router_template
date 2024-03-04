import Navbar from "../Navbar/Navbar"
import "./_Crew.sass"
import { useState,useEffect } from "react"
import Data from "./../../data/data.json"
let Crew = ()=>{
    const [elementActive,setElementActive] = useState(0)
    const [crewPage,setCrewPage] = useState(false)
    useEffect(()=>{
        setCrewPage(true)
    },[])
    return(
        <div className="crew">
            <Navbar crew={crewPage}/>
            <h1 className="titre"><span>02</span> MEET YOUR CREW</h1>
            <div className="content">
                <div className="leftPart">
                    <div className="carrousel" style={{transform:"translateX("+-(elementActive*100)+"%)"}}>
                        {Data.crew.map((element,index)=>(
                            <div key={index} className="carrouElement">
                                <div className="infos">
                                    <h2 className="role">{element.role}</h2>
                                    <h1 className="name">{element.name}</h1>
                                    <p>{element.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="selectors">
                        {Data.crew.map((element,index)=>(
                                <div className={elementActive === index ? "rond active" : "rond"} key={index} onClick={()=>setElementActive(index)}>
                                </div>   
                        ))}
                    </div>
                </div>
                <div className="rightPart">
                    <img src={Data.crew[elementActive].images.png} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Crew