import React from "react"
import "./rightbar.css"
import { userdata } from "../../dummmydata/users"
import Online from "../online/online"
import Profile from "../../pages/home/profile/profile"
export  function Rightbar({profile}) {

const HomeRightbar =()=>{

return(
  <><div className="birthdaycontainer">
  <img className="imggift" src="src/assets/gift3.png" alt="" />
  <span className="birthdaytext">
     <b>Sarim khan</b> and <b> three other friend</b> <br /> have a birthday
  </span>
    </div>
    <img className="adspost" src="src/assets/person10.jpeg" alt="" />
    <h4 className="rightbartittle">
      Online friends
    </h4>
    {userdata.map(u=>
    <Online key={u.id} user={u}/>
      )}</>
)

}

const ProfileRightbar=()=>{

  return(
    <div className="usertittle">
      <h3>User info</h3>
      <br />
      <div className="userinfo">
        <div className="userinfoitems">
          <span className="rightbarforkey">city:</span>
          <span className="rightbarforvalue">karachi</span>
        </div>
        
        <div className="userinfoitems">
          <span className="rightbarforkey">from:</span>
          <span className="rightbarforvalue">korangi</span>
        </div>
        
        <div className="userinfoitems">
          <span className="rightbarforkey">relationship:</span>
          <span className="rightbarforvalue">single</span>
        </div>
        
        <div className="userinfoitems">
          <span className="rightbarforkey">fav sports:</span>
          <span className="rightbarforvalue">cricket</span>
        </div>
      </div>
      <br />
      <h3>User friends</h3>
      <br />
      <div className="userfollowings">
        <div className="userfollowing">
          <img className="userfolwingimg" src="src/assets/person10.jpeg" alt="" />
          <span className="usernamefolowing">
            sarim
          </span>
        </div>
        <div className="userfollowing">
          <img className="userfolwingimg" src="src/assets/person10.jpeg" alt="" />
          <span className="usernamefolowing">
            sarim
          </span>
        </div>
        <div className="userfollowing">
          <img className="userfolwingimg" src="src/assets/person6.jpeg" alt="" />
          <span className="usernamefolowing">
            sarim
          </span>
        </div>
        <div className="userfollowing">
          <img className="userfolwingimg" src="src/assets/person1.jpeg" alt="" />
          <span className="usernamefolowing">
            sarim
          </span>
        </div>
        <div className="userfollowing">
          <img className="userfolwingimg" src="src/assets/person7.jpeg" alt="" />
          <span className="usernamefolowing">
            sarim
          </span>
        </div>
        <div className="userfollowing">
          <img className="userfolwingimg" src="src/assets/person9.jpeg" alt="" />
          <span className="usernamefolowing">
            sarim
          </span>
        </div>
        <div className="userfollowing">
          <img className="userfolwingimg" src="src/assets/person9.jpeg" alt="" />
          <span className="usernamefolowing">
            hymha
          </span>
        </div>
        <div className="userfollowing">
          <img className="userfolwingimg" src="src/assets/person9.jpeg" alt="" />
          <span className="usernamefolowing">
            sarim
          </span>
        </div>
      </div>
    </div>
  )
}


    return (
    <div className="rightbar">
<div className="rightbarwrapper">
{profile ? <ProfileRightbar/> : <HomeRightbar/>}</div>
  </div> 
  
  )
  

}


 