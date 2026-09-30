import { Link } from "react-router-dom"
import '../styles/home.css'
const Home=()=>{
    return(
        <div className="home">
            <div className="container">
            <div className="home-card">
            <h1>Number Utility App</h1>
            <p>Choose your App</p>
            <Link to="/random" className="link1">Random Number</Link><br/>
            <Link to="/counter" className="link2">Number Count</Link>
            </div>
            </div>
        </div>
    )
}
export default Home