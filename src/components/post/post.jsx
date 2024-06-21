import React, { useState } from "react"
import "./post.css"
import { MoreVert } from "@mui/icons-material"
import { userdata } from "../../dummmydata/users";
export  function Posts({data}) {

 const [like , setlike] = useState(data.like)
 const [isliked , setisliked] = useState(false)
 const likehandler=()=>{
setlike(isliked ? like-1 : like +1)
setisliked(!isliked)
console.log(like);
 }
    return (
    <div className="Posts">
<div className="postswraaper">
  <div className="postTop">
    <div className="posttopleft">
      <img className="postproileimg"  src={userdata.filter(u=>u.id === data.userId )[0].profile} alt="" />
      <span className="postusername">{userdata.filter(u=>u.id === data.userId )[0].userName}</span>
      <span className="postdate">{data.date}</span>
    </div>
    <div className="posttopright">
      <MoreVert/>
    </div>
  </div>
  <div className="postCenter">
    <span className="posttext">{data.desc}</span>
    <img className="postimg" src={data?.photo}  />
  </div>
  <div className="postbottom">
    <div className="bottomleft">
      <img className="likebuttons" onClick={likehandler}  src="src/assets/like.jpeg" alt="" />
      <img className="likebuttons" src="src/assets/heart2.png" alt="" />
<span className="likecounter">{like} people like it
</span>
    </div>
    <div className="bottomright">
    <span className="postcomenttext">{data.comments} comments</span>

    </div>
  </div>
</div>
 </div> 
  
  )
  

}


 