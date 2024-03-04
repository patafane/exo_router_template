import Navbar from "../Navbar/Navbar"
import "./_Technology.sass"
import Data from "./../../data/data.json"
import { useState,useEffect } from "react"
let Technology = ()=>{
    const [elementActive,setElementActive] = useState(0)
    const [technoPage,setTechnoPage] = useState(false)
    useEffect(()=>{
        setTechnoPage(true)
    },[])
    return(
        <div className="technology">
            <Navbar technology={technoPage}/>
            <h1 className="titre"><span>03</span> SPACE LAUNCH 101</h1>
            <div className="content">
                <div className="numbers">
                    {Data.technology.map((element,index)=>(
                        <div className={elementActive===index ? "numero active" : "numero"} key={index} onClick={()=>setElementActive(index)}>
                            {index+1}
                        </div>
                    ))}
                </div>
                <div className="infos">
                    <h3>THE TERMINOLOGY...</h3>
                    <h1>{Data.technology[elementActive].name}</h1>
                    <p>{Data.technology[elementActive].description}</p>
                </div>
                <div className="imgContainer">
                    <img src={Data.technology[elementActive].images.portrait} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Technology