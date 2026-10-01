import { Link } from "react-router-dom"
import { useState } from "react";
import '../styles/random.css'

const Random = () => {
    const [num, setRandom] = useState(null)
    const handleRandom = () => {
        setRandom(Math.floor(Math.random() * 100) + 1)
    }
    return (
        <div className="random">
            <div className="container-random">
            <div className="random-card">
                 <Link to="/" className="home-link"><i class="fa-solid fa-house"></i></Link>
                <h1>Random Number</h1>
                <h1>{num}</h1>
                {
                    num===null?<p style={{marginTop:"10px",color:"red"}}>No Number generated yet</p>:<p></p>
                }
                <button className="button" onClick={handleRandom}>Generate Random Number</button>
            </div>
        </div>
        </div>
    )
}
export default Random 