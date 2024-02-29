import Navbar from "../Navbar/Navbar"
import "./_Home.sass"

let Home = ()=>{
    return(
        <div className="home">
            <Navbar/>
            <div className="content">
                <div className="leftPart">
                    <h1>
                        SO YOU WANT TRAVEL TO <br/>
                        <span>SPACE</span>
                    </h1>
                    <p>
                        Let's face it; if you want to go to space, you might as well
                        genuinely go to outer space and not hover kind of on the 
                        edge of it. Well sit back, and relax because we'll give you a 
                        truly out of this world experience!
                    </p>
                </div>
                <div className="rightPart">
                    <div className="explore">
                        <h2>
                            EXPLORE
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home