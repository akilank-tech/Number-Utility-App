import { Link } from "react-router-dom"
import '../styles/home.css'
const Home=()=>{
    return(
        <div className="home">
            <div className="container-home">
            <div className="home-card">
            <Link to="/" className="home-link"><i class="fa-solid fa-house"></i></Link>
            <h1>Number Utility App</h1>
            <p>Choose your App</p>
            <Link to="/random" className="link1">Random Number</Link><br/>
            <Link to="/counter" className="link2">Number Counter</Link>
            </div>
            </div>
        </div>
    )
}
export default Home