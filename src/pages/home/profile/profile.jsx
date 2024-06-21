import { Feeds } from "../../../components/feeds/feeds"
import { Rightbar } from "../../../components/rightbar/rightbar"
import { Slidebar } from "../../../components/slidebar/slidebar"
import Topbar from "../../../components/topbar"
import "./profile.css"
function Profile(){

    return(
        <>
        <Topbar/>
        <div  className="Profile" >
          <Slidebar/>
          <div className="profileright">
           <div className="profilerighttop">
            <div className="profilecover">
                <img className="coverpicture" src="src/assets/person10.jpeg" alt="" />
                <img  className="profilepitcure" src="https://th.bing.com/th/id/OIP.U6W8lqHMDd2wdDedKocmIwAAAA?rs=1&pid=ImgDetMain" alt="" />
            </div>
          
           </div>
           <div className="profileinfo">
                <h4 style={{fontSize:"24px"}} >Sami ahmed</h4>
                <span style={{fontWeight:"300"}}>hey im sami ahmed </span>
            </div>
           
            <div className="profilerighbottom">
            <Feeds/>
          <Rightbar profile={Profile} />
            </div>
          </div>
        
        
        </div>
          </> 
    )
}
export default Profile