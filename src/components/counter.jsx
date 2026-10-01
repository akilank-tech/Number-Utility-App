import { Link } from "react-router-dom"
import { useState } from "react";
import '../styles/counter.css'
const Counter = () => {
    const [num, setNumber] = useState(0)
    const [action,setAction]=useState("")
    const handleIncre = () => {
        setNumber(num + 1)
        setAction("increment")
    }
    const handleDecre = () => {
        if (num > 0) {
            setNumber(num - 1)
            setAction("decrement")
        }
    }
    const handleReset = () => {
        setNumber(0)
        setAction("reset")
    }
    return (
        <div className="counter">
            <div className="container">
                <div className="container-card">
                     <Link to="/"><i class="fa-solid fa-house"></i></Link>
                    <h1>Counter Application</h1>
                    <h2 className={num === 0 ? "number zero" : `number ${action}`}>{num}</h2>
                    {
                    num==0 ?<p style={{color: "red"}}>Minimum Limit Reach</p> :<p style={{color: "green"}}>Number Updated</p>
                    }
                    
                    <div className="btn">
                        <button className="incre-btn" onClick={handleIncre}>Increment +</button>
                        <button className="decre-btn" onClick={handleDecre}>Decrement -</button>
                        <button className="reset-btn" onClick={handleReset}>Reset</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Counter