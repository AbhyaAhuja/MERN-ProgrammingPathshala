import Navbar from "../common/Navbar/navbar.js"
import "./homepage.css"
const HomePage = (props)=>{
    const {userPoints, setUserPoints} = props;
    return(
        <div> <Navbar page = "home" userPoints={userPoints} setUserPoints={setUserPoints}/>
        <div className="homepage-main-container">Welcome to Abhya's Image Generator!
            
        </div>
        
        </div>
    )
}

export default HomePage;